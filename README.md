# Babysitter

A web server that lets you set start time, bedtime and stop time, and uses that to calculate wage earned.
written using nodejs / react / redux / enzyme. i didn't get the final bit of testing for the components in the main app fully finished. I normally do more testing, however i was juggling a 4 year old the whole time I got to work on this as my wife is sick and kids need to play.

## Some notes and questions
* So no pay for partial hours, however does that mean everything only starts and ends on an hour? no partial hours? i used time input items, so it doesn't work quite as easily (i probably did make this harder for myself)
* bedtime wasn't defined as a time, so i just added another widget to do that as well as this seemed correct but wasn't called out.

* if you dont want to download everything, you can run with the command `yarn start:server` or `npm run start:server`
* browse the coverage folder to see coverage without running it
* built version as well as running server added, so no need to build if you dont want.

## Available Scripts

In the project directory, you can run:

### `yarn` / `npm install`

Installs required libraries, required first step

### `yarn start` / `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### `yarn test` / `npm test`

Launches the test runner in the interactive watch mode.<br />

### `yarn test:coverage` / `npm run test:coverage`

Launches the test runner with coverage.<br />
This is needed as jest coverage fails when calling interactive mode.

### `yarn build` / `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.



