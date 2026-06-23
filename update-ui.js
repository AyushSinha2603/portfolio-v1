const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');

// Remove the copyright text
content = content.replace(/<p className="text-sm text-neutral-500 font-mono mt-2 uppercase tracking-\[0\.2em\]">© \{\s*new Date\(\)\.getFullYear\(\)\s*\} Ayush Sinha\. Built with Next\.js\.<\/p>/g, '');

// Add 3D hover effect to all purple-bordered project/contribution cards
content = content.replace(/hover:border-purple-500\/30 transition-all duration-500 group/g, 'hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(192,132,252,0.6)] hover:rotate-1 z-10 hover:z-50 group');

fs.writeFileSync('app/page.tsx', content);
