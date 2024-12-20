import Viz from './Viz.svelte';

export var data = {};
// If your template includes data tables, use this variable to access the data.
// Each of the 'datasets' in data.json file will be available as properties of the data.

export var state = {
  radius: 10,
	strokeWidth: 1,
	stroke: "#000000"
};

// Add the generated css file to index.html
var font_link = document.createElement("link");
font_link.setAttribute("rel", "stylesheet");
document.body.appendChild(font_link);
font_link.setAttribute("href", window.Flourish.static_prefix + "/style.css");

// WB viz style guide typography css
var typograph_link = document.createElement("link");
typograph_link.setAttribute("rel", "stylesheet");
document.body.appendChild(typograph_link);
typograph_link.setAttribute("href", window.Flourish.static_prefix + "/typography.css");

// WB viz style guide colors css
var colors_link = document.createElement("link");
colors_link.setAttribute("rel", "stylesheet");
document.body.appendChild(colors_link);
colors_link.setAttribute("href", window.Flourish.static_prefix + "/colors.css");

let viz

// The draw function is called when the template first loads
export function draw() {
  state.data = data
  viz = new Viz({
		target: document.body,
		props: state
	});
}

  // The update function is called whenever the user changes a data table or settings
  // in the visualisation editor, or when changing slides in the story editor.
  // Tip: to make your template work nicely in the story editor, ensure that all user
  // interface controls such as buttons and sliders update the state and then call update.
export function update() {
	if (state.radius <= 0) throw new Error("Radius must be positive");
  state.data = data
  viz.$set( state );
}
