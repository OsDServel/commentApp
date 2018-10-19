function enterComment(){

	var user= document.getElementById("userInput").value
	var comment= document.getElementById("commentInput").value

	var name= document.createTextNode(user)
	var text= document.createTextNode(comment)

	var viewBox= document.createElement("li")

	viewBox.appendChild(name)
	viewBox.appendChild(text)


	//write something else to go along with the comment
	//maybe a second input for a username:
	//or the time of which the comment is placed, a little practice

	document.getElementById("commentList").appendChild(viewBox)
	
	text.innerHTML= comment; //works

//BOTTOM doesnt work... why?
	// text.innerHTML= "Username: " user+ "says, " comment;

}
