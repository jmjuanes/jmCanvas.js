Release notes 0.1
#jmCanvas.js (BETA)

**jmCanvas.js** is a very simple JavaScript script for draw in a HTML5 Canvas element. It includes all functions for draw rectangles, circles, lines, text, etc...


##Installation
First, you must add jmCanvas to your HTML document:
```html
<script type="text/javascript" src="https://jmjuanes.github.io/jmCanvas.js/jmCanvas.js"></script>
```
Where **https://jmjuanes.github.io/jmCanvas.js/** is the url to this repo. You can change this if you have a local copy of **jmCanvas.js**. 

Remember that you need a Canvas element in the *body* of your document:
```html
<canvas id='name'></canvas>
```
Next, for start your canvas you must add these JavaScript code:
```javascript
var c = new jmCanvas('name', width, height);
c.Start();
```
Where **name** is the name of your canvas element and **width** and **height** are the desired width and heigth of your canvas.

Thats all! Now you can draw text, lines, rectangles, etc.. in your canvas.


##License
Copyright 2014 Jose Miguel Juanes. **jmCanvas.js** is under the [MIT License](LICENSE).

[www.jmjuanes.es](http://www.jmjuanes.es/).

:)
