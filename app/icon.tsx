import { ImageResponse } from 'next/og';
import { promises as fs } from 'fs';
import path from 'path';

// Route segment config
export const runtime = 'nodejs';

// Image metadata
export const size = {
  width: 256,
  height: 256,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon() {
  const imagePath = path.join(process.cwd(), 'public/image/logo.jpg');
  const imageBuffer = await fs.readFile(imagePath);
  const imageBase64 = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: 'transparent',
        }}
      >
        <img src={imageBase64} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
