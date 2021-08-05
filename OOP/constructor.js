function Book(title, author, date) {
  this.title = title;
  this.author = author;
  this.date = date;
  this.getInfo = function () {
    return `${this.title} was written by ${this.author} in ${this.date}`;
  };
}

const book1 = new Book("Pragmatic Programmer", "Uncle Bob", "2011");

console.log(book1.getInfo());
