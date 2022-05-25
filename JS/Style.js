const nav = document.querySelector('.perso')
window.addEventListener('scroll' , () => {
    if(window.scrollY > 1800) {
        nav.classList.add('perso');
        nav.classList.remove('perso2');
    } else {
        nav.classList.add('perso2');
        nav.classList.remove('perso');
    }
});
const nav2 = document.querySelector('.modif')
window.addEventListener('scroll' , () => {
    if(window.scrollY > 1800) {
        nav2.classList.add('modif');
        nav2.classList.remove('modif2');
    } else {
        nav2.classList.add('modif2');
        nav2.classList.remove('modif');
    }
});
const nav3 = document.querySelector('.quete')
window.addEventListener('scroll' , () => {
    if(window.scrollY > 2751) {
        nav3.classList.add('quete');
        nav3.classList.remove('quete3');
    } else {
        nav3.classList.add('quete3');
        nav3.classList.remove('quete');
    }
});
const nav4 = document.querySelector('.quete2')
window.addEventListener('scroll' , () => {
    if(window.scrollY > 2751) {
        nav4.classList.add('quete2');
        nav4.classList.remove('quete4');
    } else {
        nav4.classList.add('quete4');
        nav4.classList.remove('quete2');
    }
});

const nav5 = document.querySelector('.et')
window.addEventListener('scroll' , () => {
    if(window.scrollY > 3800) {
        nav5.classList.add('et');
        nav5.classList.remove('et3');
    } else {
        nav5.classList.add('et3');
        nav5.classList.remove('et');
    }
});
const nav6 = document.querySelector('.et2')
window.addEventListener('scroll' , () => {
    if(window.scrollY > 3800) {
        nav6.classList.add('et2');
        nav6.classList.remove('et4');
    } else {
        nav6.classList.add('et4');
        nav6.classList.remove('et2');
    }
});
const nav7 = document.querySelector('.start2')
window.addEventListener('scroll' , () => {
    if(window.scrollY > 4500) {
        nav7.classList.add('start2');
        nav7.classList.remove('start3');
    } else {
        nav7.classList.add('start3');
        nav7.classList.remove('start2');
    }
});