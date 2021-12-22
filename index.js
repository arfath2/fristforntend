// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.style.borderBottom = '3px solid black';
// var Title = document.getElementById('add');
// Title.innerHTML = '<b>ADD ITEMS</b>'
// Title.style.color = 'green';

// var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green'

//  for(var i=0;i<=items.length;i++){
//    items[i].style.fontWeight='bold'
//  }

// var lists = document.getElementsByTagName('li');
// console.log(lists)
// lists[1].style.backgroundColor = 'red'

// var lists = document.querySelector('.list-group-item:nth-child(2)');
// lists.style.backgroundColor = 'green'

// var list = document.querySelector('.list-group-item:nth-child(3)');
// list.style.display = 'none'

// var item = document.querySelectorAll('li:nth-child(2)');
// item.style.backgroundColor = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<=odd.length;i++){
// odd[i].style.backgroundColor = 'green';
// }

//parentElement

// var itemList = document.querySelector('#items');
// itemList.parentElement.style.backgroundColor = 'grey'

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello1'

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello4'


// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// //itemList.nextElementSibling.textContent = 'hello4'

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = 'yellow'


// //create div

// var newDiv = document.querySelector('div');
// newDiv.className = 'hello';
// newDiv.id = 'hey';
// newDiv.setAttribute('title','helloworld');
// var newDivText = document.createTextNode('HelloWorld');
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
 
// container.insertBefore(newDiv,h1);

// Add item
var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);
function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  items.appendChild(li);
}

var itemList = document.getElementById('items');
itemList.addEventListener('click', removeItem);
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      items.removeChild(li);
    }
  }
}


var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);
function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}