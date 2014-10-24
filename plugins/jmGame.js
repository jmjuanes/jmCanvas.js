/**
 * 
 * jmGame.js - Plugin for mobile games
 * @copyright (C) 2014 Jose Miguel Juanes http://www.jmjuanes.com.es
 * @version 0.1
 * @license jmGame.js is under MIT License.
 *
 **/

//jmGame Class
var jmGame = new function()
{
	//Canvas ID
	this.canvas = null;
	this.canvas_name = null;
	
	//Starting function
	this.ini_func = null;
	
	//Ini function
	this.Ini = function(name, func)
	{
		// name : canvas name 
		// func : initial function
		
		//Save the canvas name
		this.canvas_name = name;
		
		//Save the initial function
		this.ini_func = func;
		
		//Start function
		
	}
}