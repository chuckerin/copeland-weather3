# Copeland Weather Exercise
## Instructions
### Software Recruiting – Take Home
Copeland wants to learn more about your work-related skills and abilities. We encourage you to
frame this assignment not as a pass/fail but rather a show-and-tell of your hard skills. We've
chosen a task that should take a couple hours and hopefully be a little fun. Feel free to write it in
any style you like. We are looking specifically for code that is human-friendly. While not
required, if you take steps that you normally would when writing production code we'll take that
into consideration too - for example creation of a makefile or equivalent, tests, tooling,
automation, documentation, committing under source control, etc.
The assignment will be completed remotely at your convenience, and we expect the assignment
to take 3-8 hours to complete.
Please complete and return this assessment within 3 days of receipt or let us know if you need
more time to complete. We must have the assignment completed and returned at least 1 full
business day prior to your interview. Don't hesitate to reach out if you have questions!

### Take Home Assignment:
Build an application using whatever tools, components, or third-party libraries that you'd like.
The app should allow a user to search for current weather conditions by city name, zip code, or
coordinates (GPS, reverse geolocation) using the https://openweathermap.org/api API. The
application should be organized in a way where new features can be easily added and/or tested
and that you would be happy to maintain.
Once the application is ready, script or otherwise automate a virtual network using tools of your
choice to deploy and run your application in a private network that can only be accessed via
VPN. Include a VPN setup file for use in connecting to the VPN. Also include instructions for
accessing the application that works when connected to the VPN but will fail (likely with
NXDOMAIN or similar error) when not connected to the VPN.
Be sure to submit documentation on how to run the application, including some examples of
how to connect and use it.
You can generate your own API key for openweathermap for free but it can take several days to
become active.

Here is an API Token you can use in the meantime: cf002751564a4c78f5f7ed479f1b9ba3

## Deployed site
[Copeland Weather](https://chuckerin.github.io/copeland-weather3/)

## Project tools
* [Typscript](https://www.typescriptlang.org/) - Primary language
* [React](https://react.dev/) - UI Library
* [PrimeReact](https://primereact.org/) - UI Components
* [Vite](https://vite.dev/) - Build tool
* [Vitest](https://vitest.dev/) - Testing framework

## VSCode Extensions
* [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) -
* <a href="http://example.com/" target="_blank">Azure Static Web Apps</a>

[](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps)

## Node packages
* [gh-pages](https://www.npmjs.com/package/gh-pages) - Used for deploying to GitHub Pages  
This should be installed when doing a the initial `npm install`

## Cloning, Testing, Running, & Deploying
1. Open a terminal, navigate to the location you want to clone the project.
2. Clone the project `git clone https://github.com/chuckerin/copeland-weather3.git`
3. Navigate to the root of the project `cd copeland-weather3`
4. Add the project to your GitHub account
    1. `git init`
    2. `git add .`
    3. `git commit -m "Initial commit of project"`
    4. `git remote add origin <remote_repository_URL>`
    5. `git push -u origin main`
5. Install the package dependencies `npm i`
6. Test the app with `npm run test` or using the Vitest extension.
7. Run the app `npm run dev`
    1. The project should be served on `http://localhost:5173/copeland-weather3` which you can open with the browser of your choosing.
8. Deploy the project to GitHub pages with `npm run deploy`
    1. You may be asked to provide the <remote_repository_URL> and your github credentials
    2. You can watch the progress of the deployment on the `Actions` tab of the repository


