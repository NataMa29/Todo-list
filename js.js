let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("div");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("div");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// const NAME_UP = 'Name ˄';
// const NAME_DOWN = 'Name ˅';

let header = document.querySelector(".sort");
// let nameHeader = document.querySelector('thead tr th:first-child');
let elementClicked = '';
let upSorted = false;
header.addEventListener("click", sortByHeaderName);

function sortByHeaderName(e) {
  elementClicked = e.target.innerText;
  let rows = [...document.querySelectorAll("ul li")];
  let tbody = document.querySelector("li");
  let sortedArr = rows.sort(compare);
  tbody.innerHTML = '';
  sortedArr.forEach(el => tbody.append(el));
  upSorted = !upSorted;
}

let item1 = "";
let item2 = "";

function compare(a, b) {
  item1 = a.querySelector("li").innerText;
  item2 = b.querySelector("li").innerText;

if (upSorted) {
  return item1 < item2 ? 1 : item1 > item2 ? -1 : 0;
}
return item1 < item2 ? -1 : item1 > item2 ? 1 : 0;
}