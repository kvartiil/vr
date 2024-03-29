import { configure, addDecorator } from "@storybook/html";
import { withA11y } from "@storybook/addon-a11y";
import "../node_modules/veera-styles/scss/main-storybook.scss";

import jquery from "jquery";
global.$ = jquery;
global.jQuery = jquery;

require("../node_modules/bootstrap/dist/js/bootstrap.min.js");

addDecorator(withA11y);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
