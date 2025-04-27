<script lang="ts">
   import Colors from "$lib/components/Colors.svelte"

   let showColors = $state(false)
   let dialogElement = $state<HTMLDialogElement>()
</script>

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


<!-- {#if showColors} -->
   <dialog bind:this={dialogElement}>
      <Colors><button onclick={() => dialogElement?.close()}>Close</button></Colors>
   </dialog>
<!-- {/if} -->
