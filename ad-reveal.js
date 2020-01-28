// https://asciidoctor.org/docs/asciidoctor-revealjs/

// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('@asciidoctor/core')();
var asciidoctorRevealjs = require('@asciidoctor/reveal.js');
asciidoctorRevealjs.register()

// Convert the document 'presentation.adoc' using the reveal.js converter
var options = {safe: 'safe', backend: 'revealjs'};

process.argv.forEach(function (val, index, array) {
    if (index >= 2) {
        asciidoctor.convertFile(val, options);
    }
});
