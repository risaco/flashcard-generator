// *** Constructor for Basic Flashcard ***
function Basic(front, back) {

	// Scope-safe constructor code
	if (!(this instanceof Basic)) { 
    	return new Basic(front, back);
  	}

	this.front = front;
	this.back = back;
}

module.exports = Basic;