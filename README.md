# Svelte 4 + Vite Flourish template

An update of the [example-template-svelte-circle](https://github.com/kiln/example-template-svelte-circle), which is based on Svelte 3 and Rollup.

There is also a [non-working version for Svelte 5](https://github.com/maartenzam/flourish-template-svelte-5).

## Developing

You need to have the [Flourish SDK installed](https://developers.flourish.studio/sdk/getting-started/installation/).

This repository is a template repository, so you can easily copy it to create a new repository to develop your Flourish visualization template. To create a new repository from this template, click the "Use this template" button in the top right on this repo's main page on GitHub, and follow the instructions.

The 3 main files to edit are:

- [src/template.svelte.js](src/template.svelte.js) is the Flourish template. The main variable to edit is `state`. This file is compiled into the [template.js](template.js) in the root folder.
- [src/Viz.svelte](src/Viz.svelte) is the svelte component that renders the visualization. It receives its props from `state`.
- [template.yml](template.yml) contains the Flourish settings. Under `settings` you define the UI for the visualization, which should be in sync with `state`.

