// function getacall(){
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var phonenumber = document.getElementById("phonenumber").value;
//     var date = document.getElementById("date").value;
//     var time = document.getElementById("time").value;

//     console.log(name + email+ phonenumber+ date+time)
// }


// class User{
//   constructor(username, email, password){
//       this.username = username;
//       this.email = email;
//       this.password = password;
//   }

//   static registeredUser(){
//       console.log('there are 10 users')
//   }

//   register(){
//       console.log(this.username+' is now registered')
//   }
// }



// class Member extends User{
//     constructor(username, email, password, memberpackage){
//         super(username, email, password);
//         this.package = memberpackage;
//     }

//     getPackage(){
//         console.log(this.username+'is subscribed to'+this.memberpackage);
//     }
// }
// let arfath = new Member('arfath', 'arfath@gmail.com', '"123456', 'standared');
// arfath.getPackage();

// arfath.register();


btn.addEventListener('mouseout', e => {
  e.preventDefault();
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
});

btn.addEventListener('mouseover', e => {
    e.preventDefault();
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
  });


  myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
     alert('Please enter all fields');

  } else {

alert('success')
  }
}