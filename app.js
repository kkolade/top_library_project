const myLibrary = [];

function Book(author, title, numPages, isRead) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.isRead = isRead ? 'Already read' : 'Not yet read';
}

function addBookToLibrary() {
  // do stuff here
}
