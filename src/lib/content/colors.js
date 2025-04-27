export const worker = `self.onmessage = (event) => {
   const result = run(event.data);
   self.postMessage(result);
}

function run(config) {
   const { hue, saturation, lightness } = config
   const root = {
      selector: ":root",
      declarations: [
         ["--color", \`hsl(\${hue}, \${saturation}%, \${lightness}%);\`]
      ]
   }

   return {
      rulesets: [ root ]
   }
}
`

export const config = `<input name="hue" type="range" min="0" max="359" value="120" />
<input name="saturation" type="range" min="0" max="100" value="60" />
<input name="lightness" type="range" min="0" max="100" value="60" />
`

export const utility = `.primary {
   color: var(--color);
}`
