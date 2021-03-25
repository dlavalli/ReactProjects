<h1><u>ReactProjects</u></h1>
<h3>A list of various react based projects to help demonstrates techniques related to its usage.</h3>

<h2><u>Special packages</u></h2>

<h3><u>webpack</u></h3>
<p>a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.</p>

<h3><u>webpack-cli</u></h3>
<p>See the latest <a href="https://webpack.js.org/api/cli/">webpack-cli documentation</a></p>
<p>webpack CLI provides a flexible set of commands for developers to increase speed when setting up a custom webpack project. As of webpack v4, webpack is not expecting a configuration file, but often developers want to create a more custom webpack configuration based on their use-cases and needs. webpack CLI addresses these needs by providing a set of tools to improve the setup of custom webpack configuration.</p>

<h3><u>react react-dom</u></h3>
<p>The former is the generic core package for React and the latter provides an entry point to the browser's DOM and renders React</p>

<h3><u>babel core/preset-env/preset-react</u></h3>
<p>Merely installing the dependencies for React is not sufficient to run it since, by default, not every browser can read the format (such as ES2015+ or React) that your JavaScript code is written in. Therefore, we need to compile the JavaScript code into a readable format for every browser.</p>

<h3><u>babel-loader</u></h3>
<p>Next to the Babel core, we'll also install babel-loader, which is a helper so that Babel can run with webpack and two preset packages. These preset packages help determine which plugins will be used to compile our JavaScript code into a readable format for the browser (@babel/preset-env) and to compile React-specific code (@babel/preset-react).</p>
<p>The @babel/preset-env preset has options defined in it that make sure that the compiler uses the latest version of Node.js, so polyfills for features such as async/await will still be available. Now that we've set up webpack and Babel, we can run JavaScript and React from the command line</p>

<h3><u>html-webpack-plugin</u></h3>
<p>For the rendering our React component is extending webpack so that it adds the minified bundle code to the body tags as scripts when running. Therefore, we should install the html-webpack-plugin package as a devDependency</p>
<p>In the configuration for html-webpack-plugin, we've set the entry point of the application as the index.html. file. That way, webpack knows where to add the bundle to the body tag.</p>
<p>We can also add the configuration of the plugin directly inside the exported configuration for webpack by replacing the htmlPlugin constant in the exported configuration. As our application grows in size, this may make the webpack configuration less readable, depending on our preferences.</p>

<h3><u>webpack-dev-server</u></h3>
<p>See the latest <a href="https://github.com/webpack/webpack-dev-server#table-of-contents">webpack-dev-server documentation</a></p>
<p>While working in development mode, every time we make changes to the files in our application, we need to rerun the npm start command. Since this is a bit tedious, we will install another package called webpack-dev-server. This package adds the option to force webpack to restart every time we make changes to our project files and manages our application files in memory instead of by building the dist directory.</p>
<p>To enable hot reloading, replace the --open flag with the --hot flag. This will only reload files that have been changed instead of the entire project.</p>

<h3><u>booptstrap</u></h3>
<p>Adding styling to the project is done with the Bootstrap package, which adds styling to our components based on class names</p>

<h3><u>css-loader  style-loader</u></h3>
<p>Following the installation of bootstrap, if we try and run the development server again, we will receive an error saying "You may need an appropriate loader to handle this file type.". Because Webpack is unable to compile CSS files, we need to add the appropriate loaders to make this happen.</p>
<p>The order in which loaders are added (as per webpack.config.json) is important since css-loader handles the compilation of the CSS file and style-loader adds the compiled CSS files to the React DOM. Webpack reads these settings from right to left and the CSS needs to be compiled before it's attached to the DOM.</p>

<h3><u>eslint eslint-loader eslint-plugin-react</u></h3>
<p>ESLint is used in the project to make sure our code meets certain standards, for instance, that our code follows the correct JavaScript patterns.</p>
<p>The first package, called eslint, is the core package and helps us identify any potentially problematic patterns in our JavaScript code. eslint-loader is a package that is used by Webpack to run ESLint every time we update our code. Finally, eslint-plugin-react adds specific rules to ESLint for React applications.</p>
<p>In regards to the .eslintrc.js, The env field sets the actual environment our code will run in and will use es6 functions in it, while the parserOptions field adds extra configuration for using jsx and modern JavaScript. Where things get interesting, however, is the plugins field, which is where we specify that our code uses react as a framework. The extends field is where the recommended settings for eslint are used, as well as framework-specific settings for React. We can run the eslint --init command to create custom settings, but using the preceding settings is recommended, so that we ensure the stability of our React code.
<p>we have to add the eslint-loader package to the webpack configuration. In the webpack.config.js file, add eslint-loader next to babel-loader</p>

<h3><u>prop-types</u></h3>
<p>When using React, it's recommended that we validate any props we send to components since JavaScript's dynamic type system may lead to situations where variables are undefined or have an incorrect type. Our code will work without us having to validate the props, but to fix this error we have to install the prop-types package, which used to be a feature of React but was later deprecated.</p>

<br>
<h2><u>MovieList Project</u></h2>	
<p>A movie list application in React that retrieves data from a local JSON file and runs in the browser with webpack and Babel. Styling will be done using Bootstrap. The application that you'll build will return a list of the highest-grossing movies as of 2019, along with some more details and a poster for every movie.</p>
<p>The official documentation for React doesn't state any preferred approach regarding how to structure our React project. Although two common approaches are popular within the community: either structuring your files by feature or route or structuring them by file type. The movie list application will use a hybrid approach, where files are structured by file type first and by feature second. In practice, this means that there will be two types of components: top-level components, which are called containers, and low-level components, which relate to these top-level components.</p>

<br>
<h2><u>React Essentials Project</u></h2>
<p>A project displaying the essential basic functionality from react</p>