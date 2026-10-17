const fs = require('fs');
let c = fs.readFileSync('app/page.tsx', 'utf8');

c = c.replace(/className="p-12 rounded-\[3rem\]/g, 'className="p-8 lg:p-12 rounded-[3rem]');
c = c.replace(/className="flex flex-col gap-3 relative z-10 w-full mt-auto"/g, 'className="flex flex-col gap-2 relative z-10 w-full mt-auto"');

c = c.replace(
  /className="px-5 py-4 bg-white\/5 rounded-xl text-xs font-bold tracking-\[0.2em\] border border-white\/10 uppercase text-neutral-300 group-hover:border-purple-500\/50 group-hover:text-purple-100 group-hover:bg-purple-500\/5 transition-all flex justify-between items-center"/g,
  'className="group/skill px-4 py-3 bg-white/5 rounded-xl text-xs font-bold tracking-[0.2em] border border-white/10 uppercase text-neutral-400 hover:border-purple-500/50 hover:text-purple-100 hover:bg-purple-500/10 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(192,132,252,0.4)] transition-all flex justify-between items-center cursor-default"'
);
c = c.replace(
  /className="w-1.5 h-1.5 rounded-full bg-purple-500\/30 group-hover:bg-purple-400 group-hover:shadow-\[0_0_10px_rgba\(192,132,252,1\)\] transition-all"/g,
  'className="w-1.5 h-1.5 rounded-full bg-purple-500/30 group-hover/skill:bg-purple-400 group-hover/skill:shadow-[0_0_10px_rgba(192,132,252,1)] transition-all duration-300"'
);

c = c.replace(
  /className="px-5 py-4 bg-white\/5 rounded-xl text-xs font-bold tracking-\[0.2em\] border border-white\/10 uppercase text-neutral-300 group-hover:border-fuchsia-500\/50 group-hover:text-fuchsia-100 group-hover:bg-fuchsia-500\/5 transition-all flex justify-between items-center"/g,
  'className="group/skill px-4 py-3 bg-white/5 rounded-xl text-xs font-bold tracking-[0.2em] border border-white/10 uppercase text-neutral-400 hover:border-fuchsia-500/50 hover:text-fuchsia-100 hover:bg-fuchsia-500/10 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(232,121,249,0.4)] transition-all flex justify-between items-center cursor-default"'
);
c = c.replace(
  /className="w-1.5 h-1.5 rounded-full bg-fuchsia-500\/30 group-hover:bg-fuchsia-400 group-hover:shadow-\[0_0_10px_rgba\(232,121,249,1\)\] transition-all"/g,
  'className="w-1.5 h-1.5 rounded-full bg-fuchsia-500/30 group-hover/skill:bg-fuchsia-400 group-hover/skill:shadow-[0_0_10px_rgba(232,121,249,1)] transition-all duration-300"'
);

c = c.replace(
  /className="px-5 py-4 bg-white\/5 rounded-xl text-xs font-bold tracking-\[0.2em\] border border-white\/10 uppercase text-neutral-300 group-hover:border-violet-500\/50 group-hover:text-violet-100 group-hover:bg-violet-500\/5 transition-all flex justify-between items-center"/g,
  'className="group/skill px-4 py-3 bg-white/5 rounded-xl text-xs font-bold tracking-[0.2em] border border-white/10 uppercase text-neutral-400 hover:border-violet-500/50 hover:text-violet-100 hover:bg-violet-500/10 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(167,139,250,0.4)] transition-all flex justify-between items-center cursor-default"'
);
c = c.replace(
  /className="w-1.5 h-1.5 rounded-full bg-violet-500\/30 group-hover:bg-violet-400 group-hover:shadow-\[0_0_10px_rgba\(167,139,250,1\)\] transition-all"/g,
  'className="w-1.5 h-1.5 rounded-full bg-violet-500/30 group-hover/skill:bg-violet-400 group-hover/skill:shadow-[0_0_10px_rgba(167,139,250,1)] transition-all duration-300"'
);

fs.writeFileSync('app/page.tsx', c);
