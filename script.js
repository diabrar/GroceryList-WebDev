let grocerylist,
  inputVal,
  delItem,
  shiftItem,
  dSpace,
  clearButton,
  list,
  playButton;

function init() {
  grocerylist = document.querySelector("ol");
  inputVal = document.getElementById("listInput");
  delItem = document.getElementById("itemRemoved");
  shiftItem = document.getElementById("itemMove");
  dSpace = document.getElementById("disclaimerSpace");
  clearButton = document.getElementById("clear");
  playButton = document.getElementById("playButton");
  clearButton.addEventListener("click", function () {
    clear();
  });
  list = [];
}
/*
addItem() function:
meant to add new items to the grocery list. 
does this by pushing the item to the list array, and then adding it to the ordered list by creating new li elements. 
*/
function addItem(item) {
  let onList;
  list.indexOf(item) === -1 ? (onList = 0) : (onList = 1);
  if (onList === 0) {
    list.push(item);
    let orderedList = document.createElement("li");
    orderedList.textContent = list[list.length - 1];
    grocerylist.append(orderedList);
  }
}
/*
removeItem() function:
meant to find an item in the grocery list and remove it from the list, while updating the other members of the list. 
because grocerylist is an ordered list, it takes care of the renumbering for me.
all i do here is find the item using .indexOf(), remove it using .splice(), and then update grocerylist by adding the new list to grocerylist.
*/
function removeItem(item) {
  let onList;
  list.indexOf(item) === -1 ? (onList = 0) : (onList = 1);
  if (onList === 1) {
    list.splice(list.indexOf(item), 1);
    resetList();
  }
}
/*
resetList:
arrow function because it is short, meant to be used a lot in other functions. 
just resets the grocerylist to a blank list and then resets it with the new list so it can be displayed properly. 
*/
const resetList = () => {
  let newList = list;
  console.log(newList);
  list = [];
  grocerylist.innerHTML = "";
  for (let i = 0; i < newList.length; i++) {
    addItem(newList[i]);
  }
};

function clear() {
  let clearList = list.splice(0, list.length);
  grocerylist.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    addItem(clearList[i]);
  }
  console.log(`the list is ${list}`); // should print the list is
}
/*
moveUp() and moveDown() functions:
meant to change the order of items in the list. 
*/
function moveUp() {
  let onList;
  list.indexOf(list[shiftItem.value - 1]) === -1 ? (onList = 0) : (onList = 1);
  if (onList === 1) {
    const itemIndex = shiftItem.value - 1;
    const item = list[itemIndex];
    const moveIndex = itemIndex - 1;
    list.splice(itemIndex, 1);
    list.splice(moveIndex, 0, item);
    resetList();
  }
}
function moveDown() {
  let onList;
  list.indexOf(list[shiftItem.value - 1]) === -1 ? (onList = 0) : (onList = 1);
  if (onList === 1) {
    const itemIndex = shiftItem.value - 1;
    const item = list[itemIndex];
    const moveIndex = itemIndex + 1;
    list.splice(itemIndex, 1);
    list.splice(moveIndex, 0, item);
    resetList();
  }
}
