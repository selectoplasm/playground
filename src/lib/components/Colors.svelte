<script lang="ts">
   import { worker, utility, config } from "$lib/content/colors"

   let { children } = $props()

   import CssViewer from './CssViewer.svelte'
   import HtmlViewer from './HtmlViewer.svelte'
   import JsViewer from './JsViewer.svelte'
</script>

<svelte:head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark-dimmed.css" />
</svelte:head>

<article id="colors">
   <header><h2>Colors Plugin</h2>{@render children?.()}</header>
   <dl>
      <dt>config.html</dt>
      <dd><HtmlViewer html={config} /></dd>
      <dt>utility.css</dt>
      <dd><CssViewer css={utility} /></dd>
      <dt>worker.js</dt>
      <dd><JsViewer js={worker} /></dd>
   </dl>
   <footer><p>That's how simple it is to create your own dynamic workflow with Selectoplasm!</p></footer>
</article>
