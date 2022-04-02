// EXAMINE THE DOCUMENT OBJECT
// console.dir(document);
// console.log(document.title);
// console.log(document.doctype, document.head);
// console.log(document.all[10]);
// console.log(document.all);
// console.log(document.all[9]);
// document.all[9].textContent = "Changed?";
// console.log(document.forms[0]);
// console.log(document.images)

// SELECTORS
// GET ELEMENT BY ID
// var heading = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(heading);
// heading.textContent = "Hello there";
// heading.innerText = "Goodbye";
// heading.innerHTML = "<h1>Goodbye</h1>";
// heading.style.backgroundColor = "Black";
// heading.style.color = "white";
// header.style.color = "#fff";

// GET ELEMENT OF CLASSNAME
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[1].textContent = "hello 2";
// items[1].style.fontWeight = 'bold';
// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "black";
//   items[i].style.color = "white";
// }

// GET ELEMENTS BY TAG NAME

// var li = document.getElementsByTagName("li");
// // console.log(li);
// li[1].textContent = "hello 2";
// li[1].style.fontWeight = "bold";
// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "black";
//   li[i].style.color = "white";
// }

// QUERY SELECTORS
// var header = document.querySelector("#main-header");
// header.style.color = "red";
// var input = document.querySelector("input");
// input.value = "hello";
// var sub = document.querySelector('input[type = "submit"]');
// sub.value = "Send";
// var item = document.querySelector(".list-group-item");
// item.style.color = "red";
// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";
// var nthitem = document.querySelector(".list-group-item:nth-child(2)");
// nthitem.style.color = "cyan";

// QUERY SELECTOR ALL
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].style.color = "orange";
// titles[1].style.color = "orange";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");
// for (var i = 0; i < odd.length; i++) {
//   even[i].style.backgroundColor = "#f4f4f4";
//   odd[i].style.backgroundColor = "#ccc";
// }

// 22222
// TRAVERSING THE DOM - parent child sibling
// var itemlist = document.querySelector("#items");
//PARENT NODE PROPERTY
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentNode.parentNode.parentNode.parentNode);

// PARENT ELEMENT
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentElement.parentElement.parentElement.parentElement);

// CHILD NODE
// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = "grey";

// First child
// console.log(itemlist.firstChild);
// First element child
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = "HELLO THERE";

// Last child
// console.log(itemlist.lastChild);
// Last element child
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = "hello four";

// Next SIBLING
// console.log(itemlist.nextSibling);
// next element siblings
// console.log(itemlist.nextElementSibling);

// Next SIBLING
// console.log(itemlist.previousSibling);
// next element siblings
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = "green";

// CREATE ELEMENT
// CREATE A DIV
// var newdiv = document.createElement("div");
// // add class
// newdiv.className = "newdiv";
// // add id
// newdiv.id = "new";
// // add attribute
// newdiv.setAttribute("title", "hahaha");
// // create a text note
// var newtext = document.createTextNode("Created");
// // add text to div
// newdiv.appendChild(newtext);
// // to put in the main DOM
// var contain = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// contain.insertBefore(newdiv, h1);

// //style the new div
// newdiv.style.fontSize = "2rem";
// console.log(newdiv);

// 33333
// EVENT LISTENERS
// get that specific button
// var button = document
//   .getElementById("button")
//   .addEventListener("click", function () {
//     console.log("button clicked");
//   .addEventListener("click", buttonclick);

// function buttonclick(e) {
//   console.log("button clicked");
//   document.getElementById("header-title").textContent = "changed";
//   document.querySelector(".card").style.backgroundColor = "#f4f4f4";
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.id);
//   var output = document.getElementById('outputhere')
//   output.innerHTML = '<h3>'+e.target.id+'</h3>';
//   console.log(e.clientX);
//   console.log(e.offsetX);
//   console.log(e.ctrlkey);

// }

// var button = document.getElementById("button");
// var box = document.getElementById("box");
// var select = document.querySelector("select");
// button.addEventListener("click", runevent);
// button.addEventListener("dblclick", runevent);
// button.addEventListener("mousedown", runevent);
// button.addEventListener("mouseup", runevent);
// box.addEventListener("mouseenter",runevent);
// box.addEventListener("mouseleave",runevent);
// box.addEventListener("mouseover",runevent);
// box.addEventListener("mouseout",runevent);
// box.addEventListener("mousemove", runevent);

// var itemkey = document.querySelector('input[type="text"]');
// var form = document.querySelector("form");

// itemkey.addEventListener("keydown", runevent);
// itemkey.addEventListener("keyup", runevent);
// itemkey.addEventListener("focus", runevent);
// itemkey.addEventListener("blur", runevent);
// itemkey.addEventListener("cut", runevent);
// itemkey.addEventListener("paste", runevent);

// select.addEventListener("change", runevent);
// form.addEventListener("submit", runevent);

// function runevent(e) {
// e.preventDefault();
// console.log("EVENT TYPE: " + e.type);
//   document.body.style.display = "none";
//   outputhere.innerHTML = "MouseX :" + e.offsetX + "   MouseY :" + e.offsetY;
//   document.body.style.backgroundColor = "rgb("+ e.offsetX +","+40+","+e.offsetY+")";
//   console.log(e.target.value);
//   document.getElementById("outputhere").innerHTML =
//     "<h3>" + e.target.value + "</h3>";
// }

// ===============================================================================================
// FINAL PROJECT //
// 44444 //

var form = document.getElementById("addform");
var itemlist = document.getElementById("items");
var filters = document.getElementById("filter");
// FORM SUBMIT EVENT
form.addEventListener("submit", additem);
// Delete the event
itemlist.addEventListener("click", removeitem);
// fitler event
filters.addEventListener("keyup", filteritems);
// add item function
function additem(e) {
  e.preventDefault();
  // Get input value
  var newitem = document.getElementById("item1").value;
  // Create a new list LI for the new input
  var li = document.createElement("li");
  // add class
  li.className = "list-group-item";
  // add the input text to our node
  li.appendChild(document.createTextNode(newitem));
  // create the dele button element
  var delet = document.createElement("button");
  // add classes to delet button
  delet.className = "btn btn-danger btn-sm float-end delete";
  // append textnode
  delet.appendChild(document.createTextNode("X"));
  // pin the button to the li
  li.appendChild(delet);
  // Append li to the list
  itemlist.appendChild(li);
}

// remove item function
function removeitem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("You Completed the task?")) {
      var li = e.target.parentElement;
      itemlist.removeChild(li);
    }
  }
}

// the filter search list
function filteritems(e) {
  // converts text to lowercase
  var text = e.target.value.toLowerCase();
  // console.log(text);
  // get lis
  var items = itemlist.getElementsByTagName("li");
  // convert to array form
  Array.from(items).forEach(function (item) {
    var itemname = item.firstChild.textContent;
    if (itemname.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
