# Contributing to the Piraeus website

The [Piraeus contributing guide](https://github.com/piraeusdatastore/piraeus/blob/master/CONTRIBUTING.md) describes how to report issues, write commits and changelog entries, and open pull requests.
The sections that follow describe what is specific to this repository.

## Target branch

Open pull requests against the `master` branch.

## Content

This repository has the static website that is published at <https://piraeus.io/>.
GitHub Pages serves the files from the `master` branch.
There is no build step.
Edit `index.html` and the files in `css/`, `js/`, and `img/` directly.

The documentation at <https://piraeus.io/docs/> is not part of this repository.
To change the documentation, open a pull request against the `docs/` directory in [Piraeus Operator](https://github.com/piraeusdatastore/piraeus-operator).

## Preview

To preview a change, serve the repository directory with a local web server and open <http://localhost:8000/> in a browser:

```
$ python3 -m http.server 8000
```
