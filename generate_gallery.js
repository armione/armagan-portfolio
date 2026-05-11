const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public', 'portfoy_gorsel');

const categoriesMap = {
  'Coffee Brand by armagan': 'Logos & Branding',
  'Environs Kurumsal Kimlik  for San Martin CA': 'Logos & Branding',
  'giftaware works': 'Logos & Branding',
  'Greenn soft-drink': 'Logos & Branding',
  'gürültü-yap website': 'UI/UX & Web',
  'Digital Marketing UI Design for San Martin CA': 'UI/UX & Web',
  'imece works': 'Social Media & PR',
  'vans concept designs': 'Mockups & Concepts'
};

const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else {
      if (extensions.includes(path.extname(fullPath).toLowerCase())) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

const allFiles = getFiles(baseDir);

const projects = allFiles.map((file, i) => {
  // Determine category based on folder
  const relativePath = file.replace(baseDir + path.sep, '');
  const folderName = relativePath.split(path.sep)[0];
  const category = categoriesMap[folderName] || 'Other';
  
  // Format path for web
  const webPath = '/portfoy_gorsel/' + relativePath.split(path.sep).join('/');
  
  return {
    id: i,
    category: category,
    image: webPath,
    title: folderName,
  };
});

fs.writeFileSync(path.join(__dirname, 'gallery_data.js'), 'export const projects = ' + JSON.stringify(projects, null, 2) + ';');
console.log('Successfully wrote 73 projects to gallery_data.js');
