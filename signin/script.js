document.querySelector('.Signup').onclick = (e) =>{
    if (document.querySelector('.Username').value.length != 0) {
        bool = true
    }else {bool=false}
    if (document.querySelector('.password').value.length != 0) {
        bool = true
    }else {bool=false}
    if (bool == true) {
        e.preventDefault();
        window.location.href = '../index.html'
    }
}