import fs from 'fs';
import path from 'path';

export function getCarouselImages() {
  const publicDir = path.join(process.cwd(), 'public', 'carousel_home');
  try {
    const files = fs.readdirSync(publicDir);
    return files.map(file => `/carousel_home/${file}`);
  } catch (error) {
    console.error('Error reading carousel images:', error);
    return [];
  }
} 