function toggleList() {
    var list = document.getElementById("list");
    list.style.display = (list.style.display === 'none') ? 'block' : 'none';
}
window.addEventListener('scroll', function() {
    var headerMain = document.getElementById('header__div--main');
    var headerNav = document.getElementById('header__div--nav');
    var headerInfo = document.getElementById('header__div--infomation');
    var header = document.getElementById('header');

    
    if (window.scrollY > 100) { // You can adjust the scroll threshold as needed
        headerMain.style.display = 'none';
        headerInfo.style.display = 'none';
        headerNav.style.display = 'flex';
        headerNav.classList.add('header__div--nav');
        header.classList.add('header__div--nav');
    } else {
        headerMain.style.display = 'flex';
        headerNav.style.display = 'flex';
        headerInfo.style.display = 'flex';
        headerNav.classList.remove('header__div--nav');
        header.classList.remove('header__div--nav');
    }
});



