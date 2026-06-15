const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      content = content.replace(/#00D4AA/g, '#00A885');
      content = content.replace(/0,\s*212,\s*170/g, '0, 168, 133');
      // replace 212 with 168, 170 with 133 in ParticleCanvas where g and b are manually updated
      // but let's be careful. Let's just do the specific lines via edit file. 
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInDir('./src');
