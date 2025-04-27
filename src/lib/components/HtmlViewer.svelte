<script lang="ts">
   import hljs from "highlight.js/lib/core";
   import Xml from "highlight.js/lib/languages/xml";
   import beautify from "js-beautify"

   let { html }: { html: string } = $props();

   hljs.registerLanguage("xml", Xml);

   let xmlNamespaceRemoved = $derived(html.replace(/\s*xmlns="[^"]*"/g, ''))

   let formattedXml = $derived(beautify.html(xmlNamespaceRemoved, { indent_size: 2, wrap_line_length: 80 }));

   let highlightedHtml = $derived(hljs.highlight(formattedXml, { language: "Xml" }).value);
</script>

<pre><code>{@html highlightedHtml}</code></pre>
