let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let first = document.getElementById('first');
let secound = document.getElementById('secound');
let aboutme = document.getElementById('aboutme');
let info1 = document.getElementById('info-img');
let hill6 = document.getElementById('hill6');
let text2 = document.getElementById('text2');

window.addEventListener('scroll' , ()=> {

    let value = window.scrollY;

    
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    if (value < 1000)
    {
        
        text2.style.marginTop = value * 1.5 + 'px';
        hill1.style.top = value * 1.8 + 'px';
        hill6.style.top = value * 0.5 + 'px';
    }
    if (value < 700)
    {
        text.style.marginTop = value * 2.5 + 'px';
    }
    else{
       text.style.marginRight =  (value-700) * -1.5 + 'px';
    }
    if (value>700)
    {
        hill6.style.left = (value-700) * -0.5 + 'px';
    }
    
    first.style.left = value * 1.4 + 'px';
    secound.style.left = value * -1.4 + 'px';
    aboutme.style.marginLeft = value * 0.6 + 'px';
    // info1.style.top = value * 2.5 + 'px';
});