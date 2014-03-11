/**
 * 
 * jmCanvas.js 
 * @copyright (C) 2014 Jose Miguel Juanes http://www.jmjuanes.com.es
 * @version 0.1
 * @license jmCanvas.js is under Apache 2.0 License.
 *
 **/

function jmCanvas(n, w, h)
{
	// n:  Canvas name (string)
	// w:  Canvas width (int)
	// h:  Canvas height (int)
	
	this.id = null;    //Canvas ID
	this.ctx = null;   //Canvas CTX
	this.name = n;     //Canvas name
	this.width = w;    //Canvas width
	this.height = h;   //Canvas height
	
	//Starting function
	this.Start = function()
	{		
		if(document.getElementById(this.name))
		{
			this.id = document.getElementById(this.name);
			if (this.id.getContext)
			{
				this.ctx = canvas.getContext('2d');
				if(this.ctx == null)
				{
					alert('Error starting the canvas.');
				}
				else
				{
					this.id.width  = this.width;
					this.id.height = this.height;
				}
			}
		}
		else
		{
			//If canvas not found
			alert("Canvas '" + n + "' not found.");
		}
	};
	
	//Clear a rectangle in the canvas
	this.Delete = function(px, py, w, h)
	{
		// px: position x
		// py: position y
		// w : width
		// h : height
		this.ctx.clearRect(px, py, w, h);
	};
	
	//Clear all the canvas
	this.DeleteAll = function()
	{
		this.ctx.clearRect(0, 0, this.width, this.height);
	};
	
	//Put an image in the canvas
	this.Image = function(img, px, py, af)
	{
		// img : image
		// px  : position x
		// py  : position y
		// af  : alpha
		
		//Change the alpha
		this.ctx.globalAlpha = af;
		
		//Start
		this.ctx.beginPath();
		
		//Put the image
		this.ctx.drawImage(img,px,py);
		
		//Close
		this.ctx.closePath();
		this.ctx.fill();
		
		//Restore the alpha
		this.ctx.globalAlpha = 1;
	};
	
	//Rotate and put an image
	this.ImageRotate = function(img, px, py, ang, af)
	{
		// img : image
		// px  : position x
		// py  : position y
		// ang : angle (in degrees)
		// af  : alpha
		
		//Radian
		var rad = Math.PI/180;
		
		//Save the actual state
		this.ctx.save();
		
		//Change the alpha
		this.ctx.globalAlpha = af;
		
		//Start
		this.ctx.beginPath();
		
		//Translate
		this.ctx.translate(px +(img.width/2) ,py +(img.height/2));
		//Rotate the image
		this.ctx.rotate(rad*ang);
		//Put the image
		this.ctx.drawImage(img, -(img.width/2), -(img.height/2));
		
		//Close
		this.ctx.closePath();
		this.ctx.fill();
		
		//Restore
		this.ctx.restore();
		
		//Restore the alpha
		this.ctx.globalAlpha = 1;
	};
	
	//Put text in the canvas
	this.Text = function(txt, font, color, size, align, px, py)
	{
		// txt    : text
		// color  : color
		// font   : font
		// size   : text size (int)
		// align  : text align (center|end|left|right|start)
		// px     : text x position
		// py     : text y position
		
		//Baseline
		this.ctx.textBaseline = 'top';
		
		//Color set
		this.ctx.fillStyle = color;
		
		//Font
		this.ctx.font = size + 'px ' + font;
		
		//Text align
		this.ctx.textAlign = align; 
		
		//Put the text
		this.ctx.fillText(txt, px, py);
	};
	
	//Draw a rectangle
	this.Rectangle = function(color, px, py, w, h, af)
	{
		// color   : color
		// px , py : rectangle position x and y
		// w , h   : rectangle width and height
		// af      : rectangle alpha
		
		//Change the alpha
		this.ctx.globalAlpha = af;
		
		//Color set
		this.ctx.fillStyle = color;
		
		//Start
		this.ctx.beginPath();
		
		//Creates the rectangle
		this.ctx.rect(px, py, w, h);
		
		//Close
		this.ctx.closePath();
		this.ctx.fill();
		
		//Restore the alpha
		this.ctx.globalAlpha = 1;
	};
	
	//Draw a line
	this.Line = function(color, size, ox, oy, fx, fy, af)
	{
		// color   : color
		// size    : line size
		// ox , oy : starting point of the line
		// fx , fy : end point of the line
		// af      : alpha
		
		//Change the alpha
		this.ctx.globalAlpha = af;
		
		//Start
		this.ctx.beginPath();
		
		//Set the size
		this.ctx.lineWidth = size;
		
		//Starting point
		this.ctx.moveTo(ox,oy);
		
		//Draw the line
		this.ctx.lineTo(fx,fy);
		
		//Set the color
		this.ctx.strokeStyle = color;
		
		//Close
		this.ctx.stroke();
		this.ctx.closePath();
		
		//Restore the alpha
		this.ctx.globalAlpha = 1;
	};

};
