const bookProtos = {
  getInfo: function () {
    return `${this.title} was written by ${this.author} in ${this.date}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.date;
    return `${this.title} is ${years} years old`;
  },
};

//Create Object
// const book1 = Object.create(bookProtos, {
//   title: { value: "boooook" },
//   author: { value: "Alik" },
//   date: { value: "2012" },
// });
const book1 = Object.create(bookProtos);
book1.title = "Book One";
book1.author = "Alik";
book1.date = "2013";

console.log(book1.getAge());
