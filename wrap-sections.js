const fs = require('fs');
let c = fs.readFileSync('app/page.tsx', 'utf8');

c = c.replace(/<section([\s\S]*?)<\/section>/g, '<MorphSection>\n<section$1</section>\n</MorphSection>');

fs.writeFileSync('app/page.tsx', c);
