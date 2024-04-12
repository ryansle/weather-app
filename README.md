## Weather App

Create a Weather app web application using the framework and libraries of your choice (React/Vue/Svelte/Vite/NextJS/etc). The weather application should use the MapBox API (https://docs.mapbox.com/api/search/geocoding/#forward-geocoding) in order to enable the user to search for a city, and then render the current weather information for that city using Weatherbit (https://www.weatherbit.io/api/weather-current). When clicking a search result, it should load a dedicated page for that city and display the city name, an icon representing the weather conditions, the temperature, the feels like, the wind speed, and the wind direction.

https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely


For now, use the following MapBox API key: `pk.eyJ1IjoicG84cmV3cSIsImEiOiJXWnRfSjhFIn0.7VGbERGlK_pwQ4wDNfuq9Q`

Use the following Weatherbit API key:

`e1a0172a33614b81bc859e9d36a069b1`


Backup API Key: `ecee6dba78964f32b85e528ddb68b4c3`

## Running React on CoderPad

This pad is running a React app that is served by Vite.  Changes are automatically captured as you type them, and other people in the Pad can see them.  You can add as many files to the project as you need, as well as any NPM packages.

To get started, edit the `App.tsx` file, and see your changes reload on the right.

### TypeScript

The app is pre-configured to support TypeScript, but you can define .js and .jsx files instead.

### IntelliSense

IntelliSense is running across your entire project, allowing you to see when there are syntax errors or to get quick hints for how to resolve errors or TypeScript issues.

### Shell

A shell is provided to you so you can inspect your container in more detail.  The shell can be used to install NPM packages using `npm install <package>`.  In addition to installing packages, the shell can be used for executing a test suite if you have one defined.

**Note: while it's possible to edit files directly from the shell, we recommend using the editor to make your changes.  That way, other people in the Pad can see your changes as they're being made.**

### Hot Module Reloading

Vite provides Hot Module Reloading by default, meaning that changes you make to the files in your project are automatically applied (after a 2 second debounce); there is no need to refresh the iframe to see the changes.  Vite will display any errors directly in the application output, or if there is a system-wide error, in the Logs.

Note that changes to certain files (index.html, vite.config.ts, and others) will cause the entire application to reload, while changes to other files (App.tsx) will not cause an app reload. The state of the application will be reset whenever the application reloads.

### About Vite

We chose [Vite](https://vitejs.dev) because of its [fast startup times](​​https://vitejs.dev/guide/why.html#slow-server-start) and [quick browser updates](https://vitejs.dev/guide/why.html#slow-updates) using native ES Modules.  You probably won't need to change any of the [Vite configuration options](https://vitejs.dev/config/), but if you do, you can edit the `vite.config.ts` file.

### Container Limits

The container running your application has a few limitations.  Currently, we don't limit your CPU usage, though this may change in future.  In addition to CPU, we monitor the network bandwidth that is consumed, and limit you to 75mb for the duration of the container.  Finally, we limit the amount of memory accessible to each container to 2 GB.

### Assets

Out-of-the-box support for SVG files is included, just add a `whatever.svg` file and then import it wherever you need it.  Other assets will need to be hosted elsewhere and fetched via the shell, or just referenced directly in HTML tags.
