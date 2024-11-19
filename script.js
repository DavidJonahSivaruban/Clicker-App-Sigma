const counter = document.getElementById('counter');
//it targets the ID element in the html file

let count = 0; //using let because it'll vary over time

function increment() {
  count++; //it adds the increment by 1 in the count variable (increment operator)
  counter.textContent = count; // what does this do?
}

function decrement() {
  count--; //decrement operator (--)
  counter.textContent = count;
}

function reset() {
  count = 0;
  counter.textContent = count;
}

function addTen() {
  count += 10;
  counter.textContent = count;
}

function power() {
  count = count * count;
  counter.textContent = count;
}

//textContent --> text i insert into the element
