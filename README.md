# Current Weather

This was a fun take home assignment from a potential employer. I went overboard in the execution, but enjoyed it so much that I'm making it one of my key projects that will go on my Portfolio page.

### Take Home Assignment:

Build an application using whatever tools, components, or third-party libraries that you'd like.
The app should allow a user to search for current weather conditions by city name, zip code, or
coordinates (GPS, reverse geolocation) using the https://openweathermap.org/api API. The
application should be organized in a way where new features can be easily added and/or tested
and that you would be happy to maintain.

## Deployed GitHub Pages

[Current Weather](https://chuckerin.github.io/copeland-weather3/)

## Project tools

- [Typscript](https://www.typescriptlang.org/) - Primary language
- [React](https://react.dev/) - UI Library
- [PrimeReact](https://primereact.org/) - UI Components
- [Vite](https://vite.dev/) - Build tool
- [Vitest](https://vitest.dev/) - Testing framework

## VSCode Extensions

- [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) - Great test extension that allows testing, coverage, and debugging

## Node packages

- [gh-pages](https://www.npmjs.com/package/gh-pages) - Used for deploying to GitHub Pages  
  This should be installed when doing a the initial `npm install`

## Cloning, Testing, Running, & Deploying

1. Open a terminal, navigate to the location you want to clone the project.
2. Clone the project `git clone https://github.com/chuckerin/copeland-weather3.git`
3. Navigate to the root of the project `cd copeland-weather3`
4. Install the package dependencies `npm i`
5. Test the app with `npm run test` or using the Vitest extension.
6. Run the app `npm run dev`
   1. The project should be served on `http://localhost:5173/copeland-weather3` which you can open with the browser of your choosing.
   2. <span style="color: red;">WARNING:</span> Searching for weather won't work until you do the next section `Connecting to the open weather map services`. You need an API Key to use those web services.
7. Add the project to your GitHub account
   1. Create a new repository at github.com. (this is your repository)
      - Give it the same name as the other repository.
      - Don't initialize it with a README, .gitignore, or license.
   2. Rename the local repository's current 'origin' to 'upstream'.
      - `git remote rename origin upstream`
   3. Give the local repository an 'origin' that points to your repository.
      - `git remote add origin https://github.com/<your-account>/<your-repository>.git>`
   4. Push the local repository to your repository on github.
      - `git push origin main`
8. Deploy the project to GitHub pages with `npm run deploy`
   1. You can watch the progress of the deployment on the `Actions` tab of the repository after it's been built and published

## Connecting to the open weather map services

1. Sign up for the free service at https://openweathermap.org/ to generate an API Key
2. For local deployments you can create a `.env` file at the root of the project and paste in the following line `VITE_WEATHER_API_KEY='<YOUR_API_KEY_GOES_HERE>'`
   1. Notice that this is poor practice to put api keys in the repository for others to view and perhaps even use.
   2. The project defaults to not commit the .env to the repository via the .gitignore file.
3. GitHub pages allows for you to set the environment variables in the repsitory
   1. Click the `Settings` tab
   2. Click the `Environments` left side menu
   3. Click the `github-pages` link
   4. Scroll to the bottom of the page and in the `Environment variables` section click `Add environment varaible`
   5. In the `Add variable` dialog, copy and paste the variable name `VITE_WEATHER_API_KEY` in the `Name` text field. Copy paste your API key into the `Value` text field.

## External Tools

In the project directory `/test/external` are exported collections for both [Insomnia](https://insomnia.rest/) and [Postman](https://www.postman.com/) to test out the external weather map RESTful services.

In the project directory `/text/data` are data files that can be used for [Insomnia](https://insomnia.rest/) and [Postman](https://www.postman.com/) automated runs.

## Configuring GitHub Pages to automatically deploy when code is pushed to the repo

Step-by-Step Guide using GitHub Actions

1. Configure the React Application
   1. Ensure your `package.json` file has a homepage property, which tells GitHub where your site will be hosted.
      1. Open your `package.json` file.
      2. Add the homepage property at the top level, using the format `https://{username}.github.io/{repo-name}`.
   2. Ensure your `vite.config.ts` has a base property
      1. Open your `vite.config.ts` file.
      2. Add the base property at the top level, using the format `base: '/copeland-weather3',`
2. Set up GitHub Pages in Repository Settings
   1. Configure your repository to use the gh-pages branch (which will be created by the action) as the deployment source.
      1. In your GitHub repository, navigate to the `Settings` tab.
      2. In the left sidebar, click on `Pages`.
      3. Under `Build and deployment`, select `Deploy from a branch` for the `Source` option.
      4. In the `Branch` dropdown, select `gh-pages` and the `/(root)` folder, then click `Save`.
   2. While you're in the `Settings` tab, give the action you create below to write to the workflow
      1. In the left sidebar, click on `Actions`, the `General`
      2. Scroll down to `Workflow Permissions` and select the `Read and write permissions`
3. Create the GitHub Actions Workflow  
   This is the core step for automation. You will create a workflow file that defines the steps to build and deploy your app every time you push to the main (or master) branch.
   1. In your repository, navigate to the `Actions` tab.
   2. Select `set up a workflow yourself`
   3. Name the new file (e.g., `deploy.yml`) and paste the following YAML configuration. This script uses the popular JamesIves/github-pages-deploy-action to handle the deployment.

```yaml
name: Deploy React App to GitHub Pages

on:
  push:
    branches:
      - main # or master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20' # Use a compatible Node.js version (e.g., 18 or 20)

      - name: Install dependencies
        run: npm install

      - name: Build application
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist # The folder where your build artifacts are located
```

_Note: For Vite-based React apps, change the folder in the deploy step to dist._

5. Push Your Source Code  
   Commit all your local changes (including the package.json and the new workflow file) and push them to your main branch.  
   Your React app will now automatically build and deploy to GitHub Pages whenever you push changes to the main branch. You can monitor the progress in the Actions tab of your repository. Your site will be live at the homepage URL specified in step 1 after a few minutes.
