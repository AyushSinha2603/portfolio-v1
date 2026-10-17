const fs = require('fs');
let c = fs.readFileSync('app/page.tsx', 'utf8');

c = c.replace(/<MorphSection>\s*<section([\s\S]*?)<\/section>\s*<\/MorphSection>/g, '<section$1</section>');
c = c.replace(/import MorphSection from '@\/components\/MorphSection';\n/, '');

fs.writeFileSync('app/page.tsx', c);
