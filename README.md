Release notes 0.1
#jmCanvas.js (BETA)

**jmCanvas.js** is a very simple JavaScript script for draw in a HTML5 Canvas element. It includes all functions for draw rectangles, circles, lines, text, etc...

##Release notes for this version

###Installation
First, you must add jmCanvas to your HTML document:
```html
<script type="text/javascript" src="jmCanvas-X.Y.js"></script>
```
Where **X.Y** is the current version of **jmCanvas.js**. Remember that you need a Canvas element in the *body* of your document:
```html
<canvas id='name'></canvas>
```
Next, for start your canvas you must add these JavaScript code:
```javascript
var c = new jmCanvas('name', width, height);
c.Start();
```
Where **name** is the name of your canvas element and **width** and **height** are the desired width and heigth of your canvas.

Thats all! Now you can draw text, rects, rectangles, etc.. in your canvas.

###API
Read the [API Documentation](api/readme.md) for more information about the functions included in **jmCanvas.js**. 

###Demostration
I will upload demostrations in [demo/](demo/).

##License
Copyright 2014 Jose Miguel Juanes. **jmCanvas.js** is under the [Apache 2.0 License](LICENSE).

##Contact
For more information, please [contact with me](http://www.jmjuanes.com.es/contacto).

:)
