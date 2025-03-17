# Canvas template

Canvas Portfolio is a fully customizable i18n portfolio template built with Nuxt and Nuxt UI, designed to help you showcase your work, testimonials, and key information with ease. The template integrates with Nuxt Studio for a smooth editing experience, while leveraging Nuxt Content for content management. Built with performance, flexibility, and responsiveness in mind, Canvas Portfolio provides a robust foundation for developers and creatives alike.

## Demo

You can see a live demo at [canvas.hrcd.fr](https://canvas.hrcd.fr/).

## Features

- **Modern Components & Layouts** – Includes built-in components.
- **Nuxt UI v3** – Utilize pre-built, customizable UI components.
- **NuxtHub ready** - Deploy on NuxtHub in seconds.
- **Tailwind CSS** – A beautiful, responsive design system.
- **Working Contact Form** – Integrated with Resend for easy email handling.
- **Multi-language Support** – Powered by Nuxt i18n.
- **SEO-Ready** – Open Graph Image (Nuxt OG Image) & Nuxt Robots for automatic robots.txt generation.
- **Good practices** – Auto-generated sitemap, optimized images (Nuxt Image), and ESLint (Nuxt config with Flat config).
- **Fully Responsive** – Adapts to all modern browsers and devices.
- **Minimal & Professional Design** – Clean, elegant, and easy to customize.

## Deployments

Canvas Portfolio is designed to simplify the deployment process on various platforms, whether serverless or not. Below are several detailed methods to deploy your portfolio.

### Deployment via Docker

Canvas Portfolio is also available as a Docker image, making it easy to deploy in containerized environments. An official Docker image is automatically created using a GitHub workflow whenever a new release is made, or it can be triggered manually.

This workflow not only builds the official Canvas image but also provides a standard way for anyone who forks the project to create their own Docker image with a proper version tag (e.g., v2.0, v1.0.0, etc.).

**To pull the latest Docker image:**

```bash
docker pull ghcr.io/hugorcd/canvas:latest
```

You can also use Docker Compose for a quick deployment. A community-provided [docker-compose.community.yml](docker-compose.community.yml) file is available and can be used with platforms like Coolify for one-click deployments.

## How to Modify the Portfolio Content

This portfolio uses [Nuxt Content](https://content.nuxt.com/) to manage the content. Here's how you can modify it:

First check the `app.config.ts` file to change the global configuration of the portfolio, there is a lot of stuff you can change here.

### Writing

1. Navigate to the `content/2.articles` directory.
2. Here, you'll find Markdown files for each article. To modify an article, simply open its Markdown file and make your changes.
3. To add a new article, create a new Markdown file in this directory. The name of the file will be used as the URL slug for the article.

### Works

1. Navigate to the `content/1.works/` directory.
2. Here, you'll find Markdown files for each article. To modify an article, simply open its Markdown file and make your changes.
3. To add a new project, add a new JSON file in this directory.

#### Featured Works

To change the featured works on the homepage, simply add the `"featured": true` key the JSON file.

### Other Content

Simply go to the `content/` directory and edit any of the Markdown or JSON files to modify the content.

## Setup the Contact Form

This portfolio uses [Resend](https://resend.com/) to handle the contact form, but it's not mandatory. The server handle will not be used if you don't set the `NUXT_PRIVATE_RESEND_API_KEY` environment variable.

To set it up, follow these steps:
- Get your api key from [Resend](https://resend.com/) here [your api key](https://resend.com/api-keys)
- Add your api key in the `.env` file
- change the `from` key in the `sendEmail` route in the `server/api/` folder, you can customize everything you want in this route
- That's it, you're good to go!

<!-- automd:fetch url="gh:hugorcd/markdown/main/src/contributions.md" -->
