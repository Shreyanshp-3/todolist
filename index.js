// alert("working");

var form = document.getElementById("addform");
var itemlist = document.getElementById("items");
var filterz = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);

//delet the event
itemlist.addEventListener("click", removeItem);

//the event to filter the function
filterz.addEventListener("keyup", filterItems);
//
//
//
//add item
function addItem(e) {
  e.preventDefault();
  //console.log(1); testing if it works;

  //get input value
  var newItem = document.getElementById("item1").value;

  //create a new list to add in the existing list
  var li = document.createElement("li");

  //add class name to the new created list
  li.className = "list-group-item";
  //console.log(li); testing if it works

  //add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //   create the delete butto in the new list that we created
  var deletes = document.createElement("button");

  // add classes to the button similar to that the one we already declared
  deletes.className = "btn btn-danger btn-sm float-end delete";

  //   add this button to the list and like mainly append it with the letter X
  deletes.appendChild(document.createTextNode("X"));

  // attach to the button
  li.appendChild(deletes);

  //append the list by using the variable we created first itemlist cause that gives us the items list
  itemlist.appendChild(li);

  // the event listner to delete the event from the list
}

// the function to remove the item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you done with this tasks?")) {
      var li = e.target.parentElement;
      itemlist.removeChild(li);
    }
  }
}

//function to search the elements
function filterItems(e) {
  // convert to the lowercase cause its type sensitive
  var text = e.target.value.toLowerCase();
  //   console.log(text); like this converts text by text

  //now get the element the lists to compare

  var sentence = itemlist.getElementsByTagName("li");

  //convert to array cause we cant do some operation in the collection so convert to array
  Array.from(sentence).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    // console.log(itemName);  testing working or not
    if(itemName.toLocaleLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }
    else{
        item.style.display = 'none';
    }
  });
}
