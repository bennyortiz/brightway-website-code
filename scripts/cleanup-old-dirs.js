/**
 * Cleanup Script for Old Directories
 *
 * This script provides guidance on how to safely clean up old directories
 * after the project structure reorganization.
 *
 * Run with: node scripts/cleanup-old-dirs.js
 */

const fs = require('fs');
const path = require('path');

// Define the directories to inspect
const oldDirectories = [
  { path: 'app/components', migrated: 'app/@components' },
  { path: 'app/lib', migrated: 'app/@lib' },
  { path: 'app/utils', migrated: 'app/@lib/utils' },
  { path: 'app/constants', migrated: 'app/@lib/constants' },
];

// Get the project root directory
const rootDir = path.resolve(__dirname, '..');

console.log('\n📁 Directory Migration Status Report');
console.log('====================================\n');

// Check each directory
for (const dir of oldDirectories) {
  const fullPath = path.join(rootDir, dir.path);

  try {
    // Check if directory exists
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        const files = fs.readdirSync(fullPath);

        if (files.length === 0) {
          console.log(`✅ ${dir.path}:`);
          console.log(`   - Directory is empty and can be safely removed`);
          console.log(`   - Run: rm -rf ${dir.path}\n`);
        } else {
          console.log(`⚠️ ${dir.path}:`);
          console.log(`   - Directory still contains ${files.length} files/directories`);
          console.log(`   - Content should be migrated to ${dir.migrated} before removal`);
          console.log(
            `   - Files found: ${files.slice(0, 3).join(', ')}${files.length > 3 ? ', ...' : ''}\n`
          );
        }
      }
    } else {
      console.log(`✅ ${dir.path}:`);
      console.log(`   - Directory does not exist (already removed)\n`);
    }
  } catch (err) {
    console.error(`❌ Error checking ${dir.path}: ${err.message}\n`);
  }
}

console.log('Reminder: Always commit your changes before deleting directories');
console.log('to ensure you can recover files if needed.\n');

console.log('Suggested commands for empty directories:');
console.log('----------------------------------------');
for (const dir of oldDirectories) {
  const fullPath = path.join(rootDir, dir.path);

  try {
    if (fs.existsSync(fullPath)) {
      const files = fs.readdirSync(fullPath);
      if (files.length === 0) {
        console.log(`rm -rf ${dir.path}`);
      }
    }
  } catch (err) {
    // Skip errors
  }
}
console.log('\n');
