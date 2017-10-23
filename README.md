# flashcard-generator
Advanced JavaScript Application using Cloze Constructors

This a backend application which uses Node.js to generate flashcard questions and answers. This application highlights the use of cloze-deletions, external constructor functions, and the node package "inquirer".

The backend essentially constitutes an API that allows users to create two types of flashcards:

### Basic
Flashcards which have a front ("Who was the first president of the United States?"), and a back ("George Washington").

### Cloze-Deleted
Flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

### About Cloze Deletions

A cloze deletion is simply a sentence that has had some of its text removed. For example, given the sentence:

  "George Washington was the first president of the United States."

  ...We can create a "cloze deletion" by removing the words "George Washington":

  "... was the first president of the United States."

This is useful for building flash card applications that forces users to remember the important part of a sentence, and is a common device in educational applications.

A flash card built this way has three parts:

-The full text. This is the entire sentence users need to remember:  "George Washington was the first president of the United States."
-The cloze deletion. This is the text we've chosen to remove: "George Washington".
-The partial text. This is what we get if we remove the cloze deletion from the full text: "... was the first president of the United States.

### Technologies
JavaScript
Node.js

### Dependencies
"inquirer"
