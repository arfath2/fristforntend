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

var lists = document.querySelector('.list-group-item:nth-child(2)');
lists.style.backgroundColor = 'green'

var list = document.querySelector('.list-group-item:nth-child(3)');
list.style.display = 'none'

var item = document.querySelectorAll('li:nth-child(2)');
item.style.backgroundColor = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<=odd.length;i++){
odd[i].style.backgroundColor = 'green';
}