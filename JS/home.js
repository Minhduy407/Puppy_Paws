function toggleList() {
    var list = document.getElementById("list");
    list.style.display = (list.style.display === 'none') ? 'block' : 'none';
}
window.addEventListener('scroll', function() {
    var headerNav = document.getElementById('header__div--nav');
    var header = document.getElementById('header');
    var logoHeader = document.getElementById('header__div--main--logo');
    if (window.scrollY > 100) { 
        header.classList.add('scrolled');
        logoHeader.classList.add('header__div--main--logo');
        headerNav.style.display = 'flex';
        headerNav.classList.add('header__div--nav');
    } else {
        header.classList.remove('scrolled');
        headerNav.style.display = 'flex';
        headerNav.classList.remove('header__div--nav');
        logoHeader.classList.remove('header__div--main--logo');
    }
});

function checkTK(){
    var tk = document.getElementById('loginPhone').value;
    var err = document.getElementById('errphone');

    let btn = document.getElementById('btn-login');
    let regextk = /^0[0-9]{9}$/;

    if(!regextk.test(tk)){
        err.innerHTML = "Tài khoản không hợp lệ";
        btn.disabled = true;
    }
    else{
        err.innerHTML = "";
        btn.disabled = false;
    }
}

function checkMK(){
    var mk = document.getElementById('loginPassword').value;
    var err = document.getElementById('errpass');

    let btn = document.getElementById('btn-login');
    let regexmk = /^[a-zA-Z0-9]+$/;

    if(!regexmk.test(mk)){
        err.innerHTML = "Mật khẩu không được chứa kí tự đặc biệt";
        btn.disabled = true;
    }
    else{
        err.innerHTML = "";
        btn.disabled = false;
    }
}

function checkName(){
    var name = document.getElementById('name').value;
    var err = document.getElementById('errname');

    let btn = document.getElementById('btn-sign-in');
    let regexname = /^[a-zA-Z\s]+$/;

    if(!regexname.test(name)){
        err.innerHTML = "Tên không được để trống hoặc chứa kí tự đặc biệt";
        btn.disabled = true;
    }
    else{
        err.innerHTML = "";
        btn.disabled = false;
    }
}

function checkPhone(){
    var tk = document.getElementById('phone').value;
    var err = document.getElementById('errPhone');

    let btn = document.getElementById('btn-sign-in');
    let regextk = /^0[0-9]{9}$/;

    if(!regextk.test(tk)){
        err.innerHTML = "Số điện thoại không hợp lệ";
        btn.disabled = true;
    }
    else{
        err.innerHTML = "";
        btn.disabled = false;
    }
}

function checkPass1(){
    var mk = document.getElementById('password').value;
    var err = document.getElementById('errpass1');

    let btn = document.getElementById('btn-sign-in');
    let regexmk = /^[a-zA-Z0-9]+$/;
    if(!regexmk.test(mk)){
        err.innerHTML = "Mật không không được chứa kí tự đặc biệt";
        btn.disabled = true;
    }
    else{
        err.innerHTML = "";
        btn.disabled = false;
    }
}

function checkPass2(){
    var mk1 = document.getElementById('password').value;
    var mk2 = document.getElementById('confirmPassword').value;
    var err = document.getElementById('errpass2');

    let btn = document.getElementById('btn-sign-in');
    let regexmk = /^[a-zA-Z0-9]+$/;
    if(!regexmk.test(mk2)){
        err.innerHTML = "Mật không không được chứa kí tự đặc biệt";
        btn.disabled = true;
    }
    else if(mk2 !== mk1){
        err.innerHTML = "Mật khẩu không trùng khớp";
        btn.disabled = true;
    }
    else{
        err.innerHTML = "";
        btn.disabled = false;
    }
}

function checkEmail(){
    var email = document.getElementById('email').value;
    var err = document.getElementById('errEmail');

    let btn = document.getElementById('btn-sign-in');
    let regexemail = /^[a-zA-Z0-9]+@gmail\.com$/;

    if(!regexemail.test(email)){
        err.innerHTML = "Email không hợp lệ";
        btn.disabled = true;
    }
    else{
        err.innerHTML = "";
        btn.disabled = false;
    }
}

function checkGender(){
    var gender = document.getElementById('gender').value;
    var err = document.getElementById('errGender');

    let btn = document.getElementById('btn-sign-in');
    var check = document.getElementById('first').value;

    if(gender === check){
        err.innerHTML = "Giới tính không được để trống";
        btn.disabled = true;
    }
    else{
        err.innerHTML = "";
        btn.disabled = false;
    }
}

function checkTextQ(){
    var text = document.getElementById('text_question').value;
    var err = document.getElementById('errTextQ');

    let btn = document.getElementById('btn-question');
    let checkText = /^[A-Za-z0-9?\s]+$/;
    if(!checkText.test(text)){
        err.innerHTML = "Câu hỏi không hợp lệ";
        btn.disabled = true;
    }
    else{
        err.innerHTML = "";
        btn.disabled = false;
    }
}

function checkGenderQ(){
    var gender = document.getElementById('gender-q').value;
    var err = document.getElementById('errGender-q');

    let btn = document.getElementById('btn-question');
    var check = document.getElementById('first-q').value;

    if(gender === check){
        err.innerHTML = "Giới tính không được để trống";
        btn.disabled = true;
    }
    else{
        err.innerHTML = "";
        btn.disabled = false;
    }
}

function checkNameQ(){
    var name = document.getElementById('name-q').value;
    var err = document.getElementById('errname-q');

    let btn = document.getElementById('btn-question');
    let regexname = /^[a-zA-Z\s]+$/;

    if(!regexname.test(name)){
        err.innerHTML = "Tên không được để trống hoặc chứa kí tự đặc biệt";
        btn.disabled = true;
    }
    else{
        err.innerHTML = "";
        btn.disabled = false;
    }
}

function checkPhoneQ(){
    var tk = document.getElementById('phone-q').value;
    var err = document.getElementById('errPhone-q');

    let btn = document.getElementById('btn-question');
    let regextk = /^0[0-9]{9}$/;

    if(!regextk.test(tk)){
        err.innerHTML = "Số điện thoại không hợp lệ";
        btn.disabled = true;
    }
    else{
        err.innerHTML = "";
        btn.disabled = false;
    }
}


