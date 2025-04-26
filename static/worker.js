self.onmessage = (event) => {
   const result = run(event.data);
   self.postMessage(result);
}

const ruleset = (selector, declarations) => ({ selector, declarations })

function run(config) {
   console.log("Colors Worker", config)
   const hue = config["color-hue"]
   const root = ruleset(":root", [[ "--color", `hsl(${hue}, 50%, 50%);`]])
   return {
      rulesets: [ root ]
   }
}
