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
	
	//Funcion inicial
	this.Start = function()
	{		
		//Comprobamos si esta disponible
		if(document.getElementById(this.name))
		{
			//Guardamos el ID
			this.id = document.getElementById(this.name);
			
			//Comprobamos si podemos inicializar el canvas
			if (this.id.getContext)
			{
				//Si lo hemos podido inicializar
				this.ctx = canvas.getContext('2d');
				if(this.ctx == null)
				{
					//Avisamos de que se ha producido un error
					alert('Se ha producido un error al iniciar el canvas.');
				}
				else
				{
					//Establecemos la altura y la anchura del canvas
					this.id.width  = this.width;
					this.id.height = this.height;
				}
			}
		}
		else
		{
			//Si no esta disponible
			alert("Error al iniciar el canvas " + n + ".");
		}
	};
	
	//Funcion que borra un recuadro de la pantalla
	this.Delete = function(px, py, w, h)
	{
		// px: posicion x
		// py: posicion y
		// w : anchura
		// h : altura
		this.ctx.clearRect(px, py, w, h);
	};
	
	//Funcion que borra toda la pantalla
	this.DeleteAll = function()
	{
		this.ctx.clearRect(0, 0, this.width, this.height);
	};
	
	//Funcion para posicionar una imagen en el canvas
	this.Image = function(img, px, py, af)
	{
		// img : imagen a posicionar
		// px  : posicion x de la imagen
		// py  : posicion y  de la imagen
		// af  : alfa a aplicar
		
		//Activamos el alfa
		this.ctx.globalAlpha = af;
		//Iniciamos
		this.ctx.beginPath();
		//Situamos la imagen
		this.ctx.drawImage(img,px,py);
		//Cerramos
		this.ctx.closePath();
		//Aplicamos
		this.ctx.fill();
		//Devolvemos el alfa a su valor inicial
		this.ctx.globalAlpha = 1;
	};
	
	//Función para rotar una imagen y situarla
	this.ImageRotate = function(img, px, py, ang, af)
	{
		// img : imagen a posicionar
		// px  : posicion x de la imagen
		// py  : posicion y de la imagen
		// ang : angulo a rotar (en grados)
		// af  : alfa a aplicar
		
		var rad = Math.PI/180;
		
		//Guardamos el estado actual
		this.ctx.save();
		//Cambiamos el alfa
		this.ctx.globalAlpha = af;
		//Iniciamos
		this.ctx.beginPath();
		//Trasladamos el centro de la rotacion al centro de la imagen
		this.ctx.translate(px +(img.width/2) ,py +(img.height/2));
		//Rotamos
		this.ctx.rotate(rad*ang);
		//Situamos la imagen
		this.ctx.drawImage(img, -(img.width/2), -(img.height/2));
		//Guardamos
		this.ctx.closePath();
		//Aplicamos
		this.ctx.fill();
		//Devolvemos al estado anterior
		this.ctx.restore();
		//Reiniciamos el alfa
		this.ctx.globalAlpha = 1;
	};
	
	//Función para posicionar texto
	this.Text = function(txt, fuente, color, tam, align, px, py)
	{
		// txt    : texto
		// color  : color del texto
		// fuente : fuente
		// tam    : tamano del texto (entero)
		// align  : alineacion del texto(center|end|left|right|start)
		// px     : posicion x del texto
		// py     : posicion y del texto
		
		//Baseline
		this.ctx.textBaseline = 'top';
		//Definimos el color
		this.ctx.fillStyle = color;
		//Definimos el estilo del texto
		this.ctx.font = tam + 'px ' + fuente;
		//Alineacion del texto
		this.ctx.textAlign = align; 
		//Posicionamos
		this.ctx.fillText(txt, px, py);
	};
	
	//Función que dibuja un rectangulo
	this.Rectangle = function(color, px, py, w, h, af)
	{
		// color   : color del rectangulo
		// px y py : posicion x e y del rectangulo
		// w y h   : anchura y altura del rectangulo
		// af      : alfa del rectangulo
		
		//Cambiamos el alfa
		this.ctx.globalAlpha = af;
		//Establecemos el color
		this.ctx.fillStyle = color;
		//Iniciamos
		this.ctx.beginPath();
		//Creamos el rectangulo
		this.ctx.rect(px, py, w, h);
		//Cerramos
		this.ctx.closePath();
		this.ctx.fill();
		//Devolvemos el alfa a 1
		this.ctx.globalAlpha = 1;
	};
	
	//Función que crea una recta
	this.Rect = function(color, tam, ox, oy, fx, fy, af)
	{
		// color   : color de la recta
		// tam     : tamano de la recta
		// ox y oy : posicion x e y original de la recta
		// fx y fy : posicion x e y finales de la recta
		// af      : alfa de la recta
		
		this.ctx.globalAlpha = af;
		this.ctx.beginPath();
		this.ctx.lineWidth = tam;
		this.ctx.moveTo(ox,oy);
		this.ctx.lineTo(fx,fy);
		this.ctx.strokeStyle = color;
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.globalAlpha = 1;
	};

};
