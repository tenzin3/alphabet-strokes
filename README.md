# Tibetan Alphabet Stroke Guide

A static handwriting guide for all 30 Tibetan consonant letters. Open `index.html`
in a browser, select a letter, watch its numbered strokes, and trace the faint
outline on the practice canvas. No build step or external runtime dependencies.

All letters include animated centerline paths and written directions. The ca (ཅ)
and nya (ཉ) guides use revised four- and five-stroke sequences, respectively,
with connected curves and space around the full tracing outline. འ is labeled
**'a (a-chung)** and ཨ is labeled **a (a-chen)** to distinguish the two letters.
The syllable-separating tsheg shown in the reference image is not part of a letter.

## GitHub Pages deployment

Site: <https://tenzin3.github.io/alphabet-strokes/>

GitHub Pages publishes the root (`/`) of `main`. Push changes to `main` to
automatically update the site. The empty `.nojekyll` file tells GitHub to serve
the static files directly. No package installation or build command is needed.
Keep local asset links relative so they work under `/alphabet-strokes/`.

The repository setting is managed through GitHub's API, separately from the files.
With an authenticated GitHub CLI account that can manage Pages, enable it once:

```sh
gh api --method POST repos/tenzin3/alphabet-strokes/pages \
  -f build_type=legacy -f 'source[branch]=main' -f 'source[path]=/'
```

If Pages is already enabled, use `--method PUT` with those same fields to update
the publishing source. Normal updates only need a push; to request a rebuild
of the current published branch manually:

```sh
gh api --method POST repos/tenzin3/alphabet-strokes/pages/builds
```

Check configuration and the latest build:

```sh
gh api repos/tenzin3/alphabet-strokes/pages
gh api repos/tenzin3/alphabet-strokes/pages/builds/latest
```

Deployment status is also shown in the repository's **Actions** tab and
**Settings → Pages**. See the [GitHub Pages API documentation](https://docs.github.com/en/rest/pages/pages).

## Stroke reference and attribution

The ca (ཅ), nya (ཉ), and remaining guides (ཏ through ཨ) are simplified centerline adaptations of Christopher
J. Fynn’s Tibetan stroke diagrams, reproduced in
[Unit 1: The alphabet](https://tibetanlanguage.school/learn/standard-tibetan/unit-1/).
The source diagrams and these adapted new path definitions are licensed under
[Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
The adaptations replace calligraphic outlines with rounded tracing paths and
add English directions. They illustrate one teaching sequence; stroke order
varies between traditions. These are handwriting guides, not font outlines.
