self.onmessage = (event) => {
   const result = run(event.data);
   self.postMessage(result);
}

function run(config) {
   const { hue, saturation, lightness } = config
   const root = { selector: ":root", declarations: [["--color", `hsl(${hue}, ${saturation}%, ${lightness}%);`]] }

   return {
      rulesets: [ root ]
   }
}
