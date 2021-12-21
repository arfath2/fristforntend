var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.style.borderBottom = '3px solid black';
var Title = document.getElementById('add');
Title.innerHTML = '<b>ADD ITEMS</b>'
Title.style.color = 'green';

var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green'

// for(var i=0;i<=items.length;i++){
//   items[i].style.fontWeight='bold'
// }

var lists = document.getElementsByTagName('li');
console.log(lists)
lists[1].style.backgroundColor = 'red'