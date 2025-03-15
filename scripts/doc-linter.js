#!/usr/bin/env node

/**
 * Documentation Standards Linter
 *
 * This script scans the codebase for components and utility functions,
 * checking for proper documentation according to our standards.
 *
 * Usage:
 * node scripts/doc-linter.js [--fix] [path]
 *
 * Options:
 *   --fix    Attempt to fix simple documentation issues
 *   path     Specific file or directory to check (default: app/)
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');

// Configuration
const CONFIG = {
  componentExtensions: ['.tsx', '.jsx'],
  utilityExtensions: ['.ts', '.js'],
  excludeDirs: ['node_modules', '.next', 'public', 'dist'],
  componentChecks: {
    requireFileHeader: true,
    requirePropDocs: true,
    requireExamples: true,
  },
  utilityChecks: {
    requireFileHeader: true,
    requireParamDocs: true,
    requireReturnDocs: true,
    requireExamples: true,
  },
};

// Parse command line arguments
const args = process.argv.slice(2);
const shouldFix = args.includes('--fix');
const targetPath = args.find((arg) => !arg.startsWith('--')) || 'app/';

// Stats for reporting
const stats = {
  totalFiles: 0,
  checkedFiles: 0,
  issuesFound: 0,
  issuesFixed: 0,
};

/**
 * Main function to run the linter
 */
async function run() {
  console.log(chalk.blue('\n📝 Documentation Standards Linter'));
  console.log(chalk.blue('================================\n'));

  // Get all files to check
  const files = await getFilesToCheck(targetPath);
  stats.totalFiles = files.length;

  console.log(chalk.cyan(`Found ${files.length} files to check in ${targetPath}`));

  for (const file of files) {
    await checkFile(file);
  }

  // Print summary
  console.log(chalk.blue('\n📊 Summary'));
  console.log(chalk.blue('========='));
  console.log(`Total files: ${stats.totalFiles}`);
  console.log(`Checked files: ${stats.checkedFiles}`);
  console.log(`Issues found: ${stats.issuesFound}`);
  if (shouldFix) {
    console.log(`Issues fixed: ${stats.issuesFixed}`);
  }

  if (stats.issuesFound > 0) {
    console.log(chalk.yellow('\n⚠️  Documentation issues found!'));
    console.log(chalk.yellow(`Run with --fix to attempt automatic fixes for simple issues.`));
    process.exit(1);
  } else {
    console.log(chalk.green('\n✅ Documentation standards check passed!'));
    process.exit(0);
  }
}

/**
 * Get all files to check based on extensions and exclusions
 */
async function getFilesToCheck(targetPath) {
  const validExtensions = [...CONFIG.componentExtensions, ...CONFIG.utilityExtensions];

  const pattern = path.join(targetPath, '**', `*{${validExtensions.join(',')}}`);

  return new Promise((resolve, reject) => {
    glob(
      pattern,
      {
        ignore: CONFIG.excludeDirs.map((dir) => `**/${dir}/**`),
      },
      (err, files) => {
        if (err) return reject(err);
        resolve(files);
      }
    );
  });
}

/**
 * Check a single file for documentation issues
 */
async function checkFile(filePath) {
  const ext = path.extname(filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  stats.checkedFiles++;

  let issues = [];

  // Check if it's a component or utility
  if (CONFIG.componentExtensions.includes(ext)) {
    issues = checkComponentFile(filePath, content);
  } else if (CONFIG.utilityExtensions.includes(ext)) {
    issues = checkUtilityFile(filePath, content);
  }

  if (issues.length > 0) {
    stats.issuesFound += issues.length;
    reportIssues(filePath, issues);

    if (shouldFix) {
      // Here you would implement automated fixes
      // This is a placeholder for future implementation
      console.log(chalk.yellow(`  Fixes not yet implemented for this file type`));
    }
  }
}

/**
 * Check a component file for documentation issues
 */
function checkComponentFile(filePath, content) {
  const issues = [];
  const fileBasename = path.basename(filePath);

  // Check for file header comment
  if (CONFIG.componentChecks.requireFileHeader && !hasFileHeader(content)) {
    issues.push({
      type: 'missing-file-header',
      message: 'Missing file header documentation',
    });
  }

  // Check for component JSDoc
  if (!hasComponentJSDoc(content)) {
    issues.push({
      type: 'missing-component-jsdoc',
      message: 'Component is missing JSDoc documentation',
    });
  }

  // Check for props documentation
  if (CONFIG.componentChecks.requirePropDocs && !hasPropsDocumentation(content)) {
    issues.push({
      type: 'missing-props-docs',
      message: 'Component props are missing documentation',
    });
  }

  // Check for examples
  if (CONFIG.componentChecks.requireExamples && !hasExamples(content)) {
    issues.push({
      type: 'missing-examples',
      message: 'Component is missing @example in documentation',
    });
  }

  return issues;
}

/**
 * Check a utility file for documentation issues
 */
function checkUtilityFile(filePath, content) {
  const issues = [];

  // Check for file header comment
  if (CONFIG.utilityChecks.requireFileHeader && !hasFileHeader(content)) {
    issues.push({
      type: 'missing-file-header',
      message: 'Missing file header documentation',
    });
  }

  // Check utility functions
  const functionMatches = content.match(/export\s+function\s+(\w+)/g) || [];
  for (const functionMatch of functionMatches) {
    const funcName = functionMatch.replace(/export\s+function\s+/, '');

    // Check function has JSDoc
    if (!hasFunctionJSDoc(content, funcName)) {
      issues.push({
        type: 'missing-function-jsdoc',
        message: `Function ${funcName} is missing JSDoc documentation`,
      });
    }

    // Check for param documentation
    if (CONFIG.utilityChecks.requireParamDocs && !hasParamDocumentation(content, funcName)) {
      issues.push({
        type: 'missing-param-docs',
        message: `Function ${funcName} is missing @param documentation`,
      });
    }

    // Check for return documentation
    if (CONFIG.utilityChecks.requireReturnDocs && !hasReturnDocumentation(content, funcName)) {
      issues.push({
        type: 'missing-return-docs',
        message: `Function ${funcName} is missing @returns documentation`,
      });
    }

    // Check for examples
    if (CONFIG.utilityChecks.requireExamples && !hasExamples(content, funcName)) {
      issues.push({
        type: 'missing-examples',
        message: `Function ${funcName} is missing @example in documentation`,
      });
    }
  }

  return issues;
}

/**
 * Report issues for a file
 */
function reportIssues(filePath, issues) {
  console.log(chalk.yellow(`\n📄 ${path.relative(process.cwd(), filePath)}`));

  issues.forEach((issue) => {
    console.log(`  ❌ ${issue.message}`);
  });
}

// Helper functions for checking documentation patterns
function hasFileHeader(content) {
  return /^\/\*\*[\s\S]+?\*\//.test(content);
}

function hasComponentJSDoc(content) {
  return /\/\*\*[\s\S]+?\*\/[\s\n]*((export\s+(default\s+)?function|const\s+\w+\s+=)|(class\s+\w+))/.test(
    content
  );
}

function hasFunctionJSDoc(content, funcName) {
  const regex = new RegExp(`\\/\\*\\*[\\s\\S]+?\\*\\/[\\s\\n]*export\\s+function\\s+${funcName}`);
  return regex.test(content);
}

function hasPropsDocumentation(content) {
  return /interface\s+\w+Props[\s\S]*?{[\s\S]*?\/\*\*[\s\S]*?\*\//.test(content);
}

function hasParamDocumentation(content, funcName) {
  const funcJSDoc = extractFunctionJSDoc(content, funcName);
  return funcJSDoc ? /@param/.test(funcJSDoc) : false;
}

function hasReturnDocumentation(content, funcName) {
  const funcJSDoc = extractFunctionJSDoc(content, funcName);
  return funcJSDoc ? /@returns?/.test(funcJSDoc) : false;
}

function hasExamples(content, funcName) {
  if (funcName) {
    const funcJSDoc = extractFunctionJSDoc(content, funcName);
    return funcJSDoc ? /@example/.test(funcJSDoc) : false;
  }

  return /@example/.test(content);
}

function extractFunctionJSDoc(content, funcName) {
  const regex = new RegExp(`(\\/\\*\\*[\\s\\S]+?\\*\\/)[\\s\\n]*export\\s+function\\s+${funcName}`);
  const match = content.match(regex);
  return match ? match[1] : null;
}

// Run the script
run().catch((err) => {
  console.error(chalk.red('Error running documentation linter:'), err);
  process.exit(1);
});
