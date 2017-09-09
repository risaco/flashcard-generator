// *** Constructor for Cloze-deleted flashcard ***


function Cloze(text, cloze) {

	// make sure all incoming text is lowercase for testing
	var textLower = text.toLowerCase();
	var clozeLower = cloze.toLowerCase();

	// test to make sure "cloze" is actually in the "text" -- if not, throw an error
	if (!textLower.includes(clozeLower)){

		console.log("ERROR: cloze-deletion is not within the full text -- <" + cloze + ">");
		return;
	}

	// Scope-safe constructor code
	else if (!(this instanceof Cloze)) { 
    	return new Cloze(text, cloze);
  	}


	this.fullText = text; // full text
	this.cloze = cloze; // cloze-deleted text only
	this.partial = text.replace(cloze, "...");

}

module.exports = Cloze;