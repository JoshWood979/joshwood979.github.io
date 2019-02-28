let myHeading = document.querySelector('h1')

myHeading.textContent = 'Hello World'

let myImage = document.querySelector('img');

let flag = true;

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if ( flag ){
        myImage.setAttribute('src','image/logo.jpg')
    }
    else{
        myImage.setAttribute('src','image/tree.jpg')
    }
    flag = !flag;
}

function setHeading(name){

    let myHeading = document.querySelector('h1')

    myHeading.textContent = 'wow! you did it ,hello , dear ' + name;
}

function setUserName(){
    let myName = prompt('Please input your name')

    localStorage.setItem('name', myName)

    setHeading(myName)
}

let storedName = localStorage.getItem('name')

if(!storedName){
    setUserName();
}
else{
    setHeading(storedName)
}

let myButton = document .querySelector('button')

myButton.onclick = setUserName;