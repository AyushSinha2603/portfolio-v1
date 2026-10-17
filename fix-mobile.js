const fs = require('fs');
let c = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Fix Headings: Make them brighter on mobile but keep them identical on PC
c = c.replace(
  /to-neutral-800 drop-shadow-2xl/g,
  'to-neutral-400 md:to-neutral-800 drop-shadow-2xl'
);

// 2. Fix Section Spacing: Add massive py-24 for mobile, but reset to p-4 on md screens to perfectly preserve PC layout
c = c.replace(
  /p-4 lg:p-12 xl:p-24 relative/g,
  'py-24 px-6 md:p-4 lg:p-12 xl:p-24 relative'
);

fs.writeFileSync('app/page.tsx', c);
