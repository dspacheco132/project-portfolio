<div align="center">

# 🚀 Diogo Pacheco - Portfolio

**Modern, responsive portfolio showcasing my projects and skills**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Portfolio-blue?style=for-the-badge&logo=vercel)](https://diogopacheco.com)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 👨‍💻 About Me

<div align="center">

<img src="https://r2.diogopacheco.com/public/photo-dspacheco.jpeg" alt="Diogo Pacheco" width="200" style="border-radius: 50%; border: 4px solid #3b82f6;">

*Software Developer & Cloud Architect*

</div>

Welcome to my personal portfolio! I'm a passionate software developer with expertise in cloud technologies, full-stack development, and modern web applications. This portfolio showcases my projects, skills, and professional journey.

### 🏆 Highlights

- **AWS Cloud Architect Certified**
- **CCNA Network Associate**
- **Skills Portugal Award Winner**
- **Multiple Merit Awards in Technology**

---

## 🌟 Features

- ✨ **Modern Design**: Clean, responsive, and mobile-first approach
- 🎨 **Interactive UI**: Smooth animations and transitions
- 📱 **Mobile Optimized**: Perfect experience on all devices
- ⚡ **Fast Performance**: Built with Vite for optimal loading times
- 🎯 **Project Showcase**: Detailed project presentations with live demos
- 📧 **Contact Integration**: Easy-to-use contact form
- 🌙 **Dark/Light Mode**: Toggle between themes

---

## 🎯 Use as Template

This portfolio is designed to be used as a base template for your own portfolio! Feel free to fork this repository and customize it to showcase your own projects, skills, and achievements.

### How to Use

1. **Fork this repository** or clone it to your own GitHub account
2. **Customize the content** in `src/data/projects.ts` with your own projects
3. **Update personal information** in components like `ProfileSection.tsx` and `About.tsx`
4. **Replace images** with your own photos and project screenshots
5. **Modify styling** in `tailwind.config.ts` to match your preferences
6. **Deploy** to Vercel, Netlify, or your preferred hosting platform

### What's Included

- ✅ Fully responsive design (mobile-first)
- ✅ Dark/Light mode support
- ✅ Project showcase with filtering and search
- ✅ About page with skills, certifications, and timeline
- ✅ Contact page with form integration
- ✅ SEO optimized
- ✅ Accessible (WCAG AA compliant)
- ✅ Fast and performant (built with Vite)

### Quick Customization Checklist

- [ ] Update personal information and bio
- [ ] Add your own projects to `src/data/projects.ts`
- [ ] Replace images (logo, profile photo, project screenshots)
- [ ] Update social media links in Footer and Contact components
- [ ] Modify color scheme in `tailwind.config.ts` (optional)
- [ ] Update metadata in `index.html` for SEO
- [ ] Change domain/CDN URLs if using custom image hosting

**Note:** Remember to update the license and attribution if you plan to use this commercially or make significant modifications.

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### UI Components
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-000000?style=for-the-badge&logo=radixui&logoColor=white)

### Development Tools
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

</div>

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/project-portfolio.git

# Navigate to project directory
cd project-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── ...
├── pages/              # Route components
│   ├── Index.tsx       # Home page
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects listing
│   └── ...
├── data/               # Static data
│   └── projects.ts     # Project information
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main app component
```

---

## 🎨 Customization

### Adding New Projects

Edit `src/data/projects.ts` to add or modify projects:

```typescript
export const projects = [
  {
    id: 'project-name',
    title: 'Project Title',
    description: 'Project description',
    image: '/project-image.png',
    technologies: ['React', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://project-demo.com'
  }
]
```

### Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.ts`:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom colors
        }
      }
    }
  }
}
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

<div align="center">

**Diogo Pacheco**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/diogo-pacheco)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/diogopacheco132)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:diogopacheco132@gmail.com)

</div>

---

<div align="center">

**⭐ If you found this project helpful, please give it a star!**

Made with ❤️ by [Diogo Pacheco](https://diogopacheco.com)

</div>