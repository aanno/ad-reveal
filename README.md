# ad-reveal
Author: Thomas Pasch

This is a simple template for setting up slides based on the great asciidoctor-reveal project.

Some feature supported by this template/example:

* [mathjax](https://www.mathjax.org/) support (from reveal plugin)
* [highlight.js](https://highlightjs.org/) support (from reveal plugin)
* embedded [markdown](https://github.com/markedjs/marked) support (from reveal plugin)
* [footer support](http://blog.schauderhaft.de/2018/08/31/variables-in-asciidoc/)

## Get started

Initial setup:

```bash
npm install
```

For converting a presentation:

```bash
node ad-reveal.js <presentation.adoc>
```

The resulting `*.html` file only renders in browser _if served by a server_. Therefore:

```bash
./node_modules/.bin/light-server -s . -p 4000
```

and direct your browser to http://localhost:4000

### Examples

* `presentation.adoc` contains basic use-cases
* https://github.com/asciidoctor/asciidoctor-reveal.js/tree/master/examples contains more feature-specific examples
* https://github.com/hakimel/reveal.js/tree/master/examples contains reveal examples (no asciidoc!)

### FAQs

#### Configuration

* https://docs.asciidoctor.org/asciidoctor.js/latest/processor/convert-options/ (asciidoctor.js)
* https://docs.asciidoctor.org/reveal.js-converter/latest/converter/revealjs-options/ (asciidoctor-reveal.js)
* https://revealjs.com/config/ (reveal.js)

#### Plugin/extensions

* https://docs.asciidoctor.org/asciidoctor.js/latest/extend/ (asciidoctor.js)
* https://docs.asciidoctor.org/reveal.js-converter/latest/converter/revealjs-plugins/ (asciidoctor-reveal.js)
* https://revealjs.com/plugins/ (reveal.js)

#### MathJax3

Problems related to reveal:

* https://github.com/hakimel/reveal.js/issues/2559
* https://github.com/burgerga/reveal.js-math

Problems related to asciidoctor:

* https://github.com/asciidoctor/asciidoctor/issues/3449
* https://github.com/tani/asciidoctor-mathjax3

But I could not get this to work...

#### Kroki

* https://github.com/Mogztter/asciidoctor-kroki
* https://github.com/asciidoctor/asciidoctor-reveal.js/issues/366

#### Reveal Version

You can find the reveal version used by opening

https://github.com/asciidoctor/asciidoctor-reveal.js/blob/v4.1.0/package.json

in your browser. For example, for `@asciidoctor/reveal` version 4.1.0, `reveal.js` version 3.9.2 is
used. To use `reveal.js` version 4, you have to wait for `@asciidoctor/reveal` version 5.

#### STEM

If stem is included, there will be the following code included into the Html:

```html
<script type="text/x-mathjax-config">MathJax.Hub.Config({
tex2jax: {
  inlineMath: [["\\(", "\\)"]],
  displayMath: [["\\[", "\\]"]],
  ignoreClass: "nostem|nolatexmath"
},
asciimath2jax: {
  delimiters: [["\\$", "\\$"]],
  ignoreClass: "nostem|noasciimath"
},
TeX: { equationNumbers: { autoNumber: "none" } }
});</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/MathJax.js?config=TeX-MML-AM_HTMLorMML"></script>
```

#### Use a custom version of `asciidoctor.js`

* https://github.com/asciidoctor/asciidoctor.js/blob/master/CONTRIBUTING-CODE.adoc
* https://docs.asciidoctor.org/reveal.js-converter/latest/project/hacking/
* https://medium.com/@AidThompsin/how-to-npm-link-to-a-local-version-of-your-dependency-84e82126667a (npm)
* https://www.viget.com/articles/how-to-use-local-unpublished-node-packages-as-project-dependencies/ (yarn)

### References

* https://asciidoctor.org/docs/asciidoctor-revealjs/
* https://github.com/asciidoctor/asciidoctor-reveal.js/
* https://docs.asciidoctor.org/reveal.js-converter/latest/
* https://docs.asciidoctor.org/reveal.js-converter/latest/setup/node-js-setup/
* https://revealjs.com/math/ reveal.js math support documentation
* https://github.com/rajgoel/reveal.js-plugins collection of plugins for reveal
* https://github.com/Ardemius/asciidoctor-presentation (old) Some tips and tricks using asciidoctor in conjuction with docker, DZSlides or deck.js.
