# Create the project
npm create vite@latest my-portfolio -- --template react

# Move into the folder
cd my-portfolio

# Install 3D and Animation dependencies
npm install three @types/three @react-three/fiber @react-three/drei framer-motion lucide-react

# Install Tailwind CSS
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

# Create Tailwind config
npx tailwindcss init -p

# Deployment
npm install gh-pages --save-dev
git init
git add .
git commit -m "initial commit"
git branch -M master
git push origin master --force
git remote add origin https://github.com/smshivam44atgit/my-portfolio.git
git config user.name "Anurag Mishra"
git config user.email "smshivam44@gmail.com"
git remote set-url origin https://smshivam44atgit@github.com/smshivam44atgit/my-portfolio.git
create a PAT token(classic) in github and enter when prompted
npm run deploy
