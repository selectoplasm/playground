## utility.css

The absolute fastest way to get started with Selectoplasm is to create a **utility.css** file and put your utility classes into it. This file uses a very simple css parser that only recognises simple rulesets like this:

```css
.p1 {
   padding: 1px;
}

.px1 {
   padding-left: 1px;
   padding-right: 1px;
}
```

Doing this will allow you to unpack the p1 and px1 rulesets in the Selectoplasm Component Builder.

utility.css is designed to be a quickstart option for people who want to try out selectoplasm. It is deliberately limited in its scope; for instance you cannot provide design tokens in :root.

If you want to do more interesting things, such as design tokens or making a dynamic plugin with realtime feedback, we'll need to learn about config.html and worker.js. Don't worry if you've never made a web worker before, the Selectoplasm Playground handles the boilerplate so you can concentrate on your plugin's javascript.
