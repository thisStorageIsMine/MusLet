document.querySelector('.Signup').addEventListener('click', (e)=>{
    let bool;


    let username = document.querySelector('.Username').value;
    if (username.length != 0) {
        bool = true
    }else{bool = false}
    let password = document.querySelector('.password').value
    if (password.length != 0) {
        bool = true
    }else{bool = false}
    let repeat = document.querySelector('.repeatpassword').value
    if (repeat.length != 0) {
        bool = true
    }else{bool = false}
    console.log(bool);
    if (bool) {
        e.preventDefault();
        if (repeat === password) {
            e.preventDefault();
            window.location.href = '../index.html'
        }
    }
})









// const form = document.getElementById('register-form');
// form.onsubmit = () => {
//     event.preventDefault();
    //Получаем значения из формы
//     const username = form.elements.username.value;
//     const password = form.elements.password.value;

//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);

    // if (form.username.value && form.password.value && form.repeatpassword && form.password.value == form.repeatpassword.value){
       
    // }
// }
