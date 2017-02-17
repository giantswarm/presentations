# Presentations

Giant Swarm's private presentation repository.

This repository contains presentations as mark down files and tooling
to export them to HTML or PDF (PDF export not yet finished).

If you want to present offline, or send a presentation to someone, take a look at
the exports folder. In it, all presentations are available as a downloadable
zip file, or pdf files. (Also a lie at the moment, but coming soon)

Take a look in `content` to see what presentations there are. Each presentation
is contained entirely in one `markdown` file. Subfolders can be used for
some grouping and organization.

If you want to edit the look and feel of the presentations then take a peak in
the `layout` folder.

## Getting started

Make sure you have `nodejs` installed, then just `npm install`

When you want to build the presentations, run `make`


## Working on slides

If you want to work on slides, you can run `make serve`. It'll start up a webserver at
`localhost:8000`. Navigate to the slides you want to work on. Any changes
you make in the `md`'s will cause the slides to rebuild and the browser to refresh.

## Presenting

You can present either present from the exported files, or from the webserver at `make serve`
The exported files might have issues getting to the assets though without a webserver.
So, exported files are a work in progress.