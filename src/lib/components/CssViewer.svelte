<script lang="ts">
   import hljs from "highlight.js/lib/core";
   import Css from "highlight.js/lib/languages/css";
   import beautify from "js-beautify";

   hljs.registerLanguage("css", Css);

   let { css }: { css: string } = $props();

   let formattedCss = $derived(beautify.css(css, { indent_size: 2, wrap_line_length: 80 }));

   let highlightedCss = $derived(hljs.highlight(formattedCss, { language: "css" }).value);
</script>

<pre><code class="language-css">{@html highlightedCss}</code></pre>
