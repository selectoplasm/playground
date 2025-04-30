## config.html

Dynamic plugins work using a combination of config.html and worker.js. Don't worry if you've never made a web worker, the Selectoplasm playground handles the boilerplate.

First though, in order to receive data to your web worker, you need a state object. Your config.html file will determine the shape of this state object, so in a way, when you write your config, you're also creating your own API.

 There are only a few HTML elements that this dynamic form generator will recognise, and each one intuitively maps to a javascript object:

- INPUT: This is how you specify a key/value pair on your state object.
- FIELDSET: This is how you specify a more complex javascript object. Nest INPUTS inside to create properties and values.
- OL: This is how you create an array, because an array is an ordered list.
- LI: Wrap your array element inside  this tag. In some ways, it functions like FIELDSET in that it lets you create a javascript object, but it's also responsible for injecting the element's template onto the array so that you can dynamically add and remove elements.

Now let's look at a config.html that uses all these features.

```html
<input type="text" name="person" value="Enter your name" />
<input type="number" name="age" min="0" max="150" value="21" />
<input type="range" name="rating" min="1" max="5" value="3" />
<input type="checkbox" name="friend" />

<fieldset name="location">
   <input type="text" name="city" value="Melbourne" />
   <input
      type="number"
      name="population"
      min="0"
      max="100000000"
      value="1000000"
   />
</fieldset>

<ol id="favourite-foods" data-presets="3">
   <li> <!-- this single LI contains all the information we need -->
      <input
         type="text"
         name="food"
         data-presets="pizza, burgers, pasta, curry, icecream"
      />
   </li>
</ol>
```

That's literally all of the functionality you can get out of config.html. As you can see, you can use HTML attributes to type your state object and provide initial values as well as limits on numbers.

NOTE: other types of inputs, such as radio buttons or select elements, are not currently supported. These are planned for a future update.

You will be wondering about `data-presets`. This is a special data attribute that Selectoplasm uses when dealing with dynamic arrays.

When it's applied to an OL element, it specifies how many elements the array will start with.

When it's applied to an input inside an LI element, it determines the initial values for each element. So our setup above, once loaded in Selectoplasm, will populate our array with 3 elements, and use the first 3 presets from the input for their initial values.

Using the data-presets attribute on your OL and LI INPUTS, you can set up the initial array conditions while also providing sensible defaults for any extra values that the user might add.

Try making a config.html file and viewing it in Selectoplasm's Plugin Manager. If it looks correct, then you're ready to start making a web worker.
