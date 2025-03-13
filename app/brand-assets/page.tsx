import { Metadata } from 'next';
import { getBrandAssetsConfig, generateSquareLogo, generateHorizontalLogo, generateBusinessCardFront, generateBusinessCardBack, generateEmailSignature } from '../@lib/utils/brandAssets';
import { Button } from '../@components/ui/Button';
import { Card, CardBody, CardHeader, CardTitle } from '../@components/ui/cards/Card';
import { PageHeading } from '../@components/ui/PageHeading';
import { siteConfig } from '../@lib/constants/siteConfig';

export const metadata: Metadata = {
  title: 'Brand Assets | ' + siteConfig.name,
  description: 'Download brand assets for ' + siteConfig.name + ' including logos, business cards, and email signatures.',
};

function AssetPreviewCard({ title, svgString, width, height, filename }: { 
  title: string;
  svgString: string;
  width: number;
  height: number;
  filename: string;
}) {
  // Function to download SVG
  const downloadSVG = () => {
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename + '.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to download PNG
  const downloadPNG = () => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);
    
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const pngUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = filename + '.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(pngUrl);
      }, 'image/png');
    };
    
    img.src = url;
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody className="bg-gray-50 p-4 flex justify-center">
        <div
          className="w-full"
          dangerouslySetInnerHTML={{ __html: svgString }}
        />
      </CardBody>
      <CardBody className="flex flex-row gap-4 justify-end">
        <Button onClick={downloadSVG} variant="outline">Download SVG</Button>
        <Button onClick={downloadPNG} variant="primary">Download PNG</Button>
      </CardBody>
    </Card>
  );
}

export default function BrandAssetsPage() {
  // Get brand configuration
  const brandAssets = getBrandAssetsConfig();
  
  // Generate SVG strings for assets
  const squareLogoSvg = generateSquareLogo(500);
  const horizontalLogoSvg = generateHorizontalLogo(800, 200);
  const businessCardFrontSvg = generateBusinessCardFront(1050, 600);
  const businessCardBackSvg = generateBusinessCardBack(1050, 600);
  const emailSignatureSvg = generateEmailSignature(600, 200);
  
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <PageHeading title="Brand Assets" subtitle="Download brand assets for your business" />
        
        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            These brand assets are automatically generated based on your website's configuration.
            If you update your business name, colors, or other details in the site configuration,
            these assets will automatically update to match.
          </p>
          
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-md text-blue-800">
            <h3 className="font-semibold mb-2">Business Details Used</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Business Name: {brandAssets.logoConfiguration.text}</li>
              <li>Tagline: {brandAssets.logoConfiguration.tagline}</li>
              <li>Primary Color: {brandAssets.colors.primary}</li>
              <li>Font: {brandAssets.typography.fontFamily}</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AssetPreviewCard
            title="Square Logo"
            svgString={squareLogoSvg}
            width={500}
            height={500}
            filename={`${siteConfig.name.toLowerCase().replace(/\s+/g, '-')}-square-logo`}
          />
          
          <AssetPreviewCard
            title="Horizontal Logo"
            svgString={horizontalLogoSvg}
            width={800}
            height={200}
            filename={`${siteConfig.name.toLowerCase().replace(/\s+/g, '-')}-horizontal-logo`}
          />
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Business Card</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AssetPreviewCard
            title="Business Card - Front"
            svgString={businessCardFrontSvg}
            width={1050}
            height={600}
            filename={`${siteConfig.name.toLowerCase().replace(/\s+/g, '-')}-business-card-front`}
          />
          
          <AssetPreviewCard
            title="Business Card - Back"
            svgString={businessCardBackSvg}
            width={1050}
            height={600}
            filename={`${siteConfig.name.toLowerCase().replace(/\s+/g, '-')}-business-card-back`}
          />
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Email Signature</h2>
        <div className="mb-12">
          <AssetPreviewCard
            title="Email Signature"
            svgString={emailSignatureSvg}
            width={600}
            height={200}
            filename={`${siteConfig.name.toLowerCase().replace(/\s+/g, '-')}-email-signature`}
          />
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Asset Usage Guidelines</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Always maintain proper spacing around logos</li>
            <li>Do not distort or alter the proportions of the logo</li>
            <li>Do not change the colors unless you update the site configuration</li>
            <li>When using on dark backgrounds, use the light version of the logo</li>
            <li>For business cards, standard size is 3.5 x 2 inches (89 x 51 mm)</li>
          </ul>
        </div>
      </div>
    </main>
  );
} 