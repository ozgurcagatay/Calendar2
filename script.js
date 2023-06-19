const nameTag= document.getElementById("name");
const surnameTag= document.getElementById("surname");
const tcNoTag= document.getElementById("tcNo");
const usernameTag=document.getElementById("username");
const phoneTag= document.getElementById("phone");
const emailTag= document.getElementById("email");
const adressTag= document.getElementById("adress");
const passwordTag= document.getElementById("password");
const repasswordTag= document.getElementById("repassword");
const inputElements= document.querySelectorAll("input");

let user = []
if(localStorage.getItem("user") !== null){
  user= JSON.parse(localStorage.getItem("user"));
}
//console.log(`ilk user: ${user}`);

//yeni kullanıcı ekleme
function newUser(){
  user.push({name: nameTag.value, surname: surnameTag.value, tcNo: tcNoTag.value, username: usernameTag.value, gsm: phoneTag.value, email: emailTag.value, adress: adressTag.value, password: passwordTag.value})

  localStorage.setItem("user", JSON.stringify(user));
}
//getFromLocalStorage();

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
          error(input,`${input.id} boş bırakılamaz!!!`);          
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
function checkName(username){
  if(username.value.length == 0){
    error(username,"İsim alanı boş bırakılamaz!!!");
  }
}
function checkUserType(){
  let admin= document.getElementById("admin");
  let user= document.getElementById("user");
  if(admin.checked != true && user.checked != true ){
    error(admin,"Kullanıcı tipi boş bırakılamaz!!!")
    error(user,"Kullanıcı tipi boş bırakılamaz!!!")
  }
}
function submitAccept(){
  for(let i=0 ; i<inputElements.length;i++){
    let classList=inputElements[i].classList;
    if(classList[i] != "is-invalid"){
      window.location.href='logIn.html';
    }
  }
}


document.getElementById("register").addEventListener("click",function(e){
    e.preventDefault();
    checkRequired([usernameTag,emailTag,passwordTag,repasswordTag,phoneTag,adressTag,nameTag,surnameTag]);
    checkEmail(emailTag); 
    checkLength(passwordTag,7,12);
    checkPassword(passwordTag,repasswordTag);
    checkPhone(phoneTag);
    checkTc(tcNoTag);
    checkUserType();
    submitAccept();
    newUser();
    console.log(user);
})
console.log(user);
/////////////////////////////////////////////////////////////////////////////////////////