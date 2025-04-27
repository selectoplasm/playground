<script lang="ts">
   import hljs from "highlight.js/lib/core";
   import JavaScript from "highlight.js/lib/languages/javascript";
   import beautify from "js-beautify"

   let { js }: { js: string } = $props();

   hljs.registerLanguage("javascript", JavaScript);

   let formattedJs = $derived(beautify.js(js, { indent_size: 2, wrap_line_length: 80 }));

   let highlightedJs = $derived(hljs.highlight(js, { language: "javascript" }).value);
</script>

<pre><code>{@html highlightedJs}</code></pre>
