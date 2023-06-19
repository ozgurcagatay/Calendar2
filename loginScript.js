const usernameLoginTag= document.getElementById("username_login");
const passwordLoginTag= document.getElementById("password_login");
let userArr;
if(localStorage.getItem("user") !== null){
    userArr= JSON.parse(localStorage.getItem("user"))
}
else(
    console.log("userarray bos!!")
)

function checkRequired(inputs) {
    inputs.forEach(function(input){
        if(input.value===''){
          error(input,`${input.id} boş bırakılamaz!!!`);          
        }
    });    
}
function error(input,message){
    input.className='form-control is-invalid';
    const div= input.nextElementSibling;
    div.innerText=message;
    div.className='invalid-feedback';       
}
function succes(input) {
    input.className='form-control is-valid'
}


console.log(userArr);
document.getElementById("logIn_btn").addEventListener("click",function(e){
    e.preventDefault();
    checkRequired([usernameLoginTag,passwordLoginTag]);

    for(let userIter of userArr){
        if(userIter.username == usernameLoginTag.value && userIter.password == passwordLoginTag.value){
            console.log("giriş başarılı");
            window.location.href='Calendar/index.html';
        }
        else{
            alert("Kullanıcı adı veya parola uyuşmuyor!");
            console.log("giriş başarısız. kayıtlı kullanıcı adı veya şifre bulunamadı");
        }
    }
})