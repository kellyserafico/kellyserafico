# Adding New Projects

## 🚀 Quick Start

To add a new project to your portfolio, simply edit `src/data/projects.js` and add a new project object to the `projects` array.

## 📝 Project Structure

Each project should follow this structure:

```javascript
{
  id: "unique-project-id",           // Unique identifier (lowercase, no spaces)
  title: "Project Name",             // Display name
  role: "Timeframe",                 // e.g., "Spring 2024", "Summer 2023"
  tools: ["TECH1", "TECH2"],         // Array of technologies used
  description: "Project description...", // Detailed description (use \n\n for line breaks)
  achievements: [                     // Array of key achievements
    "Achievement 1",
    "Achievement 2"
  ],
  image: "/images/your-image.png",   // Path to project image
  websiteUrl: "https://your-site.com", // Live website URL
  githubUrl: "https://github.com/...",  // GitHub repository URL
  featured: true                     // true = appears first, false = appears after featured
}
```

## 🎨 Customizing Project Colors

To add custom colors for a new project, add CSS rules to `src/components/ProjectCard.css`:

```css
#your-project-id .role {
	color: #your-color;
}

#your-project-id .tool,
#your-project-id .achievement {
	background-color: #your-color;
}
```

## 📸 Adding Project Images

1. Add your project image to `public/images/`
2. Reference it in the `image` field: `"/images/your-image.png"`

## ✨ Features

- **Featured Projects**: Set `featured: true` to show projects first
- **Responsive Design**: All projects automatically adapt to mobile screens
- **Hover Effects**: Built-in animations and interactions
- **External Links**: Click project to visit website, click GitHub icon for repository

## 🔄 Example: Adding a New Project

```javascript
{
  id: "my-new-app",
  title: "My Awesome App",
  role: "Fall 2024",
  tools: ["REACT", "NODE.JS", "MONGODB"],
  description: "A full-stack web application that does amazing things.\n\nBuilt with modern technologies and deployed to production.",
  achievements: [
    "Achieved 1000+ active users",
    "Reduced load time by 50%"
  ],
  image: "/images/my-app.png",
  websiteUrl: "https://myapp.com",
  githubUrl: "https://github.com/username/my-app",
  featured: true
}
```

That's it! Your new project will automatically appear on your portfolio.
