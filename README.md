# Current Weather

This was a fun take home assignment from a potential employer. I went overboard in the execution, but enjoyed it so much that I'm making it one of my key projects that will go on my Portfolio page.

### Take Home Assignment:

Build an application using whatever tools, components, or third-party libraries that you'd like.
The app should allow a user to search for current weather conditions by city name, zip code, or
coordinates (GPS, reverse geolocation) using the https://openweathermap.org/api API. The
application should be organized in a way where new features can be easily added and/or tested
and that you would be happy to maintain.

## Deployed site

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
