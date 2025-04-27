export const worker = `self.onmessage = (event) => {
   const result = run(event.data);
   self.postMessage(result);
}

const ruleset = (selector, declarations) => ({ selector, declarations })

function run(config) {
   console.log("Colors Worker", config)
   const hue = config["color-hue"]
   const root = ruleset(":root", [[ "--color", \`hsl(\${hue}, 50%, 50%);\`]])
   return {
      rulesets: [ root ]
   }
}
`

export const config = `<input name="color-hue" type="range" min="0" max="359" value="120" />`

export const utility = `.primary {
   color: var(--color);
}
`
