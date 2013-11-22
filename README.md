pipelinecd.github.io
====================


To develop the site:

- you require:
    - nodejs
    - jekyll/github-pages gem
- to initialize the project:
    - run `npm install` from project root

During development, you need two consoles open:

- one running the command `jekyll serve`, this serves the generated `_site` directory from `127.0.0.1:4000`
- and the other, running `grunt watch`. This runs `jekyll build` to regenerate the site in `_site` on every file change
Open a browser that points to `127.0.0.1:4000`, and start changing
