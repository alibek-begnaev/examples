function Book(title, author, date) {
  this.title = title;
  this.author = author;
  this.date = date;
}
Book.prototype.info = function () {
  return `${this.title} is written by ${this.author} in ${this.date}`;
};
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.date;
  return years;
};
Book.prototype.renew = function (newYear) {
  this.date = newYear;
  this.renewed = true;
};
const book1 = new Book("Pragmatic Programmer", "Uncle Bob", "2011");
console.log(book1);
book1.renew("2030");
console.log(book1);
