// Wait for everything to load before you do anything
$(document).ready(function() {

  // Create new array, called weddingColors
  var weddingColors = [
    //Fill array with objects
  	{
  		//In each object, have a property for 'name' and a property for 'color'
  		"name":"Chartreuse", // have a comma between each key/value pair, except the last
  		"color":"#7fff00"
  	}, // have a comma between each object, except the last
  	{
  		"name":"Poppy",
  		"color":"#E42F0C"
  	},
  	{
  		"name":"Seafoam",
  		"color":"#71EEB8"
  	},
  	{
  		"name":"Merrigold",
  		"color":"#72DEB3"
  	}
  ]


  //Create a new variable, called myHtml and make it empty (for now!)
  var myHtml = "";

  //New for loop!! Start at zero, stop at the length of my array, increment one at a time
  for(var i = 0; i < weddingColors.length; i++){
  	//I've chosen to break up my html into chunks so it's more readable. This can all be one line if you like

  	//start creates a string that is an opening div tag, with some inline css. That sets the background to be equal to the 'color' property of the object at whatever position 'i' is
  	var start = '<div class="color" style="background:' + weddingColors[i].color + ';">';
  	//Then inside that div, I'm going to want a span that is my name! So I'll give it a class of label, and in that span, I will put the name of the object at whatever position 'i' is
  	var middle = '<span class="label">' + weddingColors[i].name + '</span>'

  	//Close the .color div!! This is important. 
  	var end = "</div>"

  	//Add it all together, and add to to the end of the myHtml string
  	myHtml += (start + middle + end);

  //close the for loop. Closing stuff is super important!!!!
  }

  //Actually add that loooong string I'm calling myHTML to my .colorswrapper div, magically turning it from a string to html
  $(".colorsWrapper").append(myHtml);












});