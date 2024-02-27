function showResume(){

    window.open('https://drive.google.com/file/d/1PYfnWU30bYIC9JlxfsusMN9lO-b0GuU9/view?usp=drive_link');
}

function github(){
    
    window.open('https://github.com/ChezhianM');
}

function linkedin(){
    
    window.open('https://www.linkedin.com/in/elanchezhian02');
}
function twitter(){
    
    window.open('https://twitter.com/IAMCHEZHIAN1?t=6X4mNduM8ckH8KyIaOntog&s=09');
}

function phone(){
    document.getElementById('show-social').innerText = "+91 6374488232"
}

function contactTwitter(){
    window.open('https://twitter.com/IAMCHEZHIAN1?t=6X4mNduM8ckH8KyIaOntog&s=09')
}

function contactLinkedIn(){
    window.open('https://www.linkedin.com/in/elanchezhian02')
}

function githubDunzo(){
    window.open('https://github.com/ChezhianM/Tmetric-clone')
}

function githubDerm(){
    window.open('https://github.com/ChezhianM/weather')
}
//
function githubmart(){
    window.open('https://github.com/ChezhianM/BookMyShow-Front_End')
}
function githubfunmall(){
    window.open('https://github.com/mugilmalathi/funmall')
}
function githubmi(){
    window.open('https://github.com/mugilmalathi/Mi_Clone')
}
function liveDerm(){
    window.open('https://climatechecking.netlify.app/')
}

function liveDunzo(){
    window.open('https://chezhianm.github.io/Tmetric-clone/')
}

function livemart(){
    window.open('https://chezhianm.github.io/BookMyShow-Front_End/')
}
function livefunmall(){
    window.open('https://funmall-soloproject.vercel.app/')
}
function livemi(){
    window.open('https://peppy-pudding-e16363.netlify.app/')
}

function contact(){
    document.getElementById('social-show').innerText="+91 9361369821"
}

function socialLocation(){
    document.getElementById('social-show').innerText="Dharmapuri, Tamilnadu"
}

// function gmail(){
//     document.getElementById('show-social').innerText = "mugilarasan.malathi@gmail.com"
//     document.getElementById('social-show').innerText = "mugilarasan.malathi@gmail.com"
// }





var popup1 = document.getElementById('popup-wrapper1');
var btn1 = document.getElementById("popup-gmail");
var btn5 = document.getElementById("popup-gmail-below");
var span1 = document.getElementById("close1");
btn1.onclick = function() {
    popup1.classList.add('show1');
}
btn5.onclick = function() {
    popup1.classList.add('show1');
}
span1.onclick = function() {
    popup1.classList.remove('show1');
}

window.onclick = function(event) {
    if (event.target == popup1) {
        popup1.classList.remove('show1');
    }
}
function gmail(){
    alert(`Gmail: elanchezhianm243@gmail.com`);
}
function phnumber(){
    window.alert(`For any quiries call me @ +91 9361369821`)
}



var popup2 = document.getElementById('popup-wrapper2');
var btn2 = document.getElementById("popup-location");
var span2 = document.getElementById("close2");
btn2.onclick = function() {
    popup2.classList.add('show2');
}
span2.onclick = function() {
    popup2.classList.remove('show2');
}

window.onclick = function(event) {
    if (event.target == popup2) {
        popup2.classList.remove('show2');
    }
}



// var popup3 = document.getElementById('popup-wrapper3');
// var btn3 = document.getElementById("popup-phone");
// var btn4 = document.getElementById("popup-phone-below");
// var span3 = document.getElementById("close3");
// btn3.onclick = function() {
//     popup3.classList.add('show3');
// }
// btn4.onclick = function() {
//     popup3.classList.add('show3');
// }
// span3.onclick = function() {
//     popup3.classList.remove('show3');
// }

// window.onclick = function(event) {
//     if (event.target == popup3) {
//         popup3.classList.remove('show3');
//     }
// }