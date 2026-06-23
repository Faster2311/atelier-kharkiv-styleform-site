const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'assets', 'images');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jpg'));

(async () => {
  for (const file of files) {
    const input = path.join(dir, file);
    const output = path.join(dir, file.replace('.jpg', '.webp'));
    await sharp(input).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 78 }).toFile(output);
    fs.unlinkSync(input);
    console.log('converted', file);
  }
})();
