<script lang="ts">
   import { onMount, setContext } from 'svelte'
   import Colors from "$lib/components/Colors.svelte"
   import PluginStudio from '@selectoplasm/plugin-studio'
   import { slide } from 'svelte/transition'

   setContext("test-message", "Hello there")

   let showPluginStudio = $state(false)

   let showColors = $state(false)
   let dialogElement = $state<HTMLDialogElement>()

   const workerCode = `self.onmessage = (event) => {
      const result = run(event.data);
      self.postMessage(result);
   }

   function run(config) {
      const { num } = config
      const root = {
         selector: ":root",
         declarations: [
            ["--color", \`hsl(\${num}, 50%, 50%);\`]
         ]
      }

      return {
         rulesets: [ root ]
      }
   }
`

   const blob = new Blob([workerCode], { type: 'application/javascript' });
   const workerUrl = URL.createObjectURL(blob);

   const wrapper = $state({ localPlugins: [
      {
          name: "test",
          config: "<input name='num' type='number' value='5' />",
          utilityCss: ".test { color: red; }",
          workerUrl
      }
   ]})

   let localPlugins = $state.raw([
      {
          name: "test",
          config: "<input name='num' type='number' value='5' />",
          utilityCss: ".test { color: red; }",
          workerUrl
      }
   ])

   // setContext("local-plugins", () => localPlugins)
   window.getLocalPlugins = () => localPlugins
   globalThis.wrapper = wrapper

   let isReady = $state(false)

   const scriptElement = document.createElement('script')
   scriptElement.src = '/selectoplasm.js'

   onMount(() => {
      // @ts-ignore
      globalThis.localPlugins = localPlugins
      isReady = true
      // document.head.appendChild(scriptElement)
   })

   function callback(plugin: any) {
      // document.head.removeChild(scriptElement)
      console.log(plugin)
      wrapper.localPlugins = [ plugin ]
      globalThis.localPlugins = [ plugin ]
      window.dispatchEvent(new CustomEvent("my-event"))
      // document.head.appendChild(scriptElement)
   }
</script>

{#if isReady}
   <script src="/selectoplasm.js"></script>
{/if}


<section id="plugin-studio-wrapper">
   <button onclick={() => showPluginStudio = !showPluginStudio}>{ showPluginStudio ? 'Hide' : 'Show' } Plugin Studio</button>
   {#if showPluginStudio}
      <a target="_blank" href="https://www.selectoplasm.com/docs/plugins/Overview">Plugin Docs</a>
      <div transition:slide>
         <PluginStudio {callback} />
      </div>
   {/if}
</section>

<main>
   <header><img src="/selectoplasm-logo.png" alt="Selectoplasm Logo" title="Selectoplasm Logo" /></header>
   <p id="one">Selectoplasm is a design tool made for developers. You can set it up with your favourite utility classes and css generators, and then design your app in the browser with realtime feedback.</p>
   <p id="two">To begin, try pressing <kbd>e</kbd> to bring up the Elements Menu. Hover over one of these paragraphs, and click. You will get a choice of selector to use, based on the element's classes and ids. Choose a selector. This will open the component builder.</p>
   <p id="three">In the Component Builder, you can type utility classes which are available. You can check which utility classes are available using the Stylesheets view. Do not type the period! (i.e. for ".p1" just type "p1")</p>
   <p id="four">Try playing with the padding, margin, and borders.</p>
   <p id="five">Then, try adding the "primary" class and using the colors plugin configuration to change the color hue.</p>
   <p id="six">Finally, open the Colors Plugin dialog to see just how easy it is to create dynamic plugins in Selectoplasm!</p>
   <p id="seven"><button onclick={() => dialogElement?.showModal()}>Show Colors Plugin Code</button></p>
</main>

<dialog bind:this={dialogElement}>
   <Colors><button onclick={() => dialogElement?.close()}>Close</button></Colors>
</dialog>
