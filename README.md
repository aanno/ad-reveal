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

### FAQs

#### MathJax3

* https://github.com/hakimel/reveal.js/issues/2559
* https://github.com/burgerga/reveal.js-math

But I could not get this to work...

### References

* https://asciidoctor.org/docs/asciidoctor-revealjs/
* https://github.com/asciidoctor/asciidoctor-reveal.js/
* https://docs.asciidoctor.org/reveal.js-converter/latest/
* https://docs.asciidoctor.org/reveal.js-converter/latest/setup/node-js-setup/
