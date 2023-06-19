// import { fonksiyon } from "script.js";

// const username= document.getElementById('username_login');
// const password= document.getElementById('password_login');
// let log_user;
// let log_password;


// function accessControl(log_user, log_password){
//     if(log_user != usernameValue || log_password != passwordValue){
//         alert('Kullanıcı Adı veya Parola Yanlış!!!');
//     }
// }

// fonksiyon();

// document.getElementById('logIn_btn').addEventListener("click",function(e){
//     e.preventDefault();

//     log_user=username.value;
//     log_password=password.value;

//     if(userArr.username === log_user && userArr.password === log_password){
//         console.log("giriş başaralı");
//     }
//     else{
//         console.log("giriş başarısız");
//     }

//     accessControl(log_user,log_password);
// })
const usernameLogin= document.getElementById("username_login");
const passwordLogin= document.getElementById("password_login");
let userArr;
if(localStorage.getItem("user") !== null){
    userArr= JSON.parse(localStorage.getItem("user"))
}
else(
    console.log("userarray bos!!")
)

console.log(userArr);
document.getElementById("logIn_btn").addEventListener("click",function(e){
    e.preventDefault;
    for(let userIter of userArr){
        if(userIter.username == usernameLogin.value && userIter.password == passwordLogin.value){
            console.log("giriş başarılı");
            break
        }
        else{
            console.log("giriş başarısız. kayıtlı kullanıcı adı veya şifre bulunamadı");
        }
    }
})