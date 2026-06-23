const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');

const openSourceMarker = '{/* Section: Open Source Contributions */}';
const projectsMarker = '{/* Section 3: Featured Projects (6 Items) */}';
const footerMarker = '{/* Section 4: Sleek Animated Footer */}';

// Find indices
const openSourceIdx = content.indexOf(openSourceMarker);
const projectsIdx = content.indexOf(projectsMarker);
const footerIdx = content.indexOf(footerMarker);

if (openSourceIdx !== -1 && projectsIdx !== -1 && footerIdx !== -1) {
  // Extract sections
  // Note: we assume the structure is open source -> projects -> footer
  // Let's grab everything before Open Source
  const beforeOpenSource = content.substring(0, openSourceIdx);
  
  // Grab Open Source section (from its marker to the projects marker)
  const openSourceSection = content.substring(openSourceIdx, projectsIdx);
  
  // Grab Projects section (from its marker to the footer marker)
  const projectsSection = content.substring(projectsIdx, footerIdx);
  
  // Grab the rest
  const rest = content.substring(footerIdx);
  
  // Swap!
  const newContent = beforeOpenSource + projectsSection + openSourceSection + rest;
  
  fs.writeFileSync('app/page.tsx', newContent);
  console.log('Successfully swapped Projects and Open Source sections!');
} else {
  console.log('Could not find markers to swap sections.');
}
