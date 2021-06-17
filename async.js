const first = () => console.log("1");
const second = () => console.log("2");
const third = () => console.log("3");

first();

setTimeout(second, 0);

third();
