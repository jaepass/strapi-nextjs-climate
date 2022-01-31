<p align="center">
  <strong>A climate initiatives listing application built in <a href="https://nextjs.org" target="_blank">Next.js</a></strong> ⚡<br />
  <strong>Headless CMS powered by <a href="https://strapi.io" target="_blank">Strapi</a></strong> 🟪<br />
  <strong>API backend deployed to <a href="https://heroku.com/" target="_blank">Heroku</a></strong> 🔳<br />
  <strong>Front-end deployed to <a href="https://vercel.com/" target="_blank">Vercel</a></strong> ▲<br />
</p>

<p align="center">
    <a href="#-features">Features</a> •
    <a href="#-spin-up">Spin up</a> •
    <a href="#-deployment">Deployment</a>
</p>

<p align="center">
  <img src="https://i.ibb.co/Z2fCg2h/357e3536-2afc-437c-b025-4ae3db80725e.png" align="center" />
</p>

<br />

## What is Next.js?

Next.js is an open-source development framework built on top of React enabling React based web applications functionalities such as server-side rendering and generating static websites.


## What is Strapi?

Strapi is an open-source headless CMS used for building fast and easily manageable APIs written in JavaScript. It enables developers to make flexible API structures easily using a beautiful user interface.

# ✨ Features

- Static site generation and Incremental Static Regeneration with Next.js
- Next.js serverless function for form submission
- [Strapi CMS backend](https://github.com/jaepass/strapi-climate-api)
- Strapi Component feature with these components included:
  - Hero
  - Navigation
  - Content
  - Footer
- Strapi form submission using the create collection type endpoint
- Utility-first CSS with [Tailwind CSS](https://tailwindcss.com)
- Modular page content for all pages, including hero and content blocks
- Page-level SEO settings

<br />

# ⚡ Spin Up

### Strapi (Back End)
`yarn develop` in the at the root of this [Strapi backend project](https://github.com/jaepass/strapi-climate-api) folder to start the admin dashboard locally
   - Your Strapi admin dashboard should be running on [http://localhost:1337](http://localhost:1337)

Once you have added data in the collection types and single types, you would need to:
- Save and publish the content
- Go under Settings > Roles > Public to select all the necessary **find** and **findOne** actions in the single and collection types. You will also need to select the **create** action for the **listing** collection type for the form submission to work.

### Next (Front End)
`yarn dev` in the [Next.js front-end project](https://github.com/jaepass/strapi-nextjs-climate) root to start the front end locally
   - Your front end should be running on [http://localhost:3000](http://localhost:3000)

You should be able to see all the pages populated if you've created all the necessary collection and single types content.

<br />

# 🚀 Deployment

### Strapi
You will need the [Strapi backend project](https://github.com/jaepass/strapi-climate-api) to deploy the backend API to production. Follow the [steps here](https://strapi.io/documentation/v3.x/admin-panel/deploy.html#deployment). The production backend was deployed to Heroku using PostgreSQL for the database. [More details here](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html#heroku) on how to deploy to production using Heroku.

### Vercel
The [Next.js front-end](https://github.com/jaepass/strapi-nextjs-climate) is easily set up to be deploye to Vercel. Simply follow the [deployment documentation](https://nextjs.org/docs/deployment) to setup your new project to deploy. Be sure to **add the same `.env.example` variables to your Vercel Project**.

## 📚 Learn more

- [Strapi resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Next.js documentation](https://nextjs.org/docs) - Official Strapi documentation.
