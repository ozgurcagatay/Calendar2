// export function fonksiyon(){
//   console.log("merhabalar mq");
// }
const name= document.getElementById("name");
const surname= document.getElementById("surname");
const tcNo= document.getElementById("tcNo");
const username=document.getElementById("username");
const phone= document.getElementById("phone");
const email= document.getElementById("email");
const adress= document.getElementById("adress");
const password= document.getElementById("password");
const repassword= document.getElementById("repassword");


function error(input,message){
    input.className='form-control is-invalid';
    const div= input.nextElementSibling;
    div.innerText=message;
    div.className='invalid-feedback';       
}
function succes(input) {
    input.className='form-control is-valid'
}

function checkEmail(input){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(re.test(input.value)){
    succes(input);
  }else{
    error(input,'lütfen bir email adresi giriniz!!!');
  }
}

function checkRequired(inputs) {
    inputs.forEach(function(input){
        if(input.value===''){
          error(input,`${input.id} is required.`);          
        }
        else{
          succes(input);
        }
    });    
}

function checkLength(input,min,max){
  if(input.value.length<min){
    error(input,`en az ${min} karakter olmalıdır!!!`);
  }else if (input.value.length>max){
    error(input, `en fazla ${max} karakter olmalı!!`);
  }else {
    succes(input);
  }
}

function checkPassword(input1,input2){
  if(input1.value!==input2.value){
    error(input2,'Parolalar eşleşmiyor !!!');
  }
}

function checkPhone(phoneNumber){
  if(phoneNumber.value.length!==10){
    error(phoneNumber,'telefon numarası 10 karakter olmalıdır!!!');
  }
}
function checkTc(tcNo){
  if(tcNo.value.length !== 11){
    error(tcNo,'Tc kimlik Numarası 11 haneli olmalıdır!!!');
  }
}

// function saveToLocalStorage(indexs){
//   localStorage.setItem('selectedSeats',JSON.stringify(indexs));
//   localStorage.setItem('selectedMovieIndex',select.selectedIndex);
// }

// function getFromLocalStorage(){
//   const selectedSeats= JSON.parse(localStorage.getItem('selectedSeats'));

//   if(selectedSeats !=null && selectedSeats.length>-1){
//       seats.forEach(function(seat,index){
//           if (selectedSeats.indexOf(index)>-1){
//               seat.classList.add('selected');
//           }
//       });
//   }

function saveUser(){
  localStorage.setItem('usernameValue', `${usernameValue}`);
  localStorage.setItem('passwordValue', `${passwordValue}`);
}

function User(name,surname, username,userType, password, tcNo, phoneNumber, email, adress, userType ){
  this.name=name;
  this.surname=surname;
  this.username=username;
  this.userType=userType;
  this.password=password;
  this.tcNo=tcNo;
  this.phoneNumber=phoneNumber;
  this.email=email;
  this.adress=adress;
  this.userType=userType;
}


document.getElementById("register").addEventListener("click",function(e){
    e.preventDefault();
    const name_user= name.value;
    const surname_user= surname.value;
    const tcNo_user= tcNo.value;
    const username_user= username.value;
    const phone_user= phone.value;
    const email_user= email.value;
    const adress_user= adress.value;
    const password_user=password.value;
    checkRequired([username,email,password,repassword,phone]);
    checkEmail(email);
    checkLength(username,7,15);
    checkLength(password,7,12);
    checkPassword(password,repassword);
    checkPhone(phone);
    checkTc(tcNo);
    const user= new User(name_user, surname_user, tcNo_user, username_user, phone_user, email_user, adress_user, password_user);   
    console.log(user);
    console.log(checkTc(tcNo));
    window.location.href = "logIn.html";
})
    

/////////////////////////////////////////////////////////////////////////////////////////



