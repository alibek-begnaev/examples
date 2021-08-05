function Book(title, author, date) {
  this.title = title;
  this.author = author;
  this.date = date;
}
Book.prototype.getInfo = function () {
  return `${this.title} is written by ${this.author} in ${this.date}`;
};
//Inheritence
function Magazine(title, author, date, month) {
  Book.call(this, title, author, date);
  this.month = month;
}
//prototype inheritance
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine("Mag one", "Abu", "2020", "june");
console.log(mag1);
console.log(mag1.getInfo());
