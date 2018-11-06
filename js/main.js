function enterComment(){

//storing input values in variables
	var user= document.getElementById("userInput").value
	var comment= document.getElementById("commentInput").value

//creating textnode for input values
	var name= document.createTextNode("User: " + user + ",")
	var text= document.createTextNode(comment)
	// var userComment= "Username: " user;


//creating elements to display, and break
	var viewBox= document.createElement("li")
	var br= document.createElement("br")

	viewBox.appendChild(name)
	viewBox.appendChild(br)
	viewBox.appendChild(text)


	//write something else to go along with the comment
	//maybe a second input for a username:
	//or the time of which the comment is placed, a little practice

	document.getElementById("commentList").appendChild(viewBox)
	
	// text.innerHTML= name + text; //works

//BOTTOM doesnt work... why?
	// text.innerHTML= "Username: " name + "says, " comment;

}
