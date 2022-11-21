const clickMe = document.getElementById('color')
const simple = document.querySelector('.simple')
const hex = document.querySelector('.hex')
const rgb = document.querySelector('.rgb')
const colorSpan = document.getElementById('color-span')
const simpleColor = ['white','black','red','green','yellow','blue','grey','orange','pink','violet','purple'];
const hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];



let btn = 'simple';

simple.classList.add('active');
simple.addEventListener('click',()=>{
    btn = 'simple';
    simple.classList.add('active');
    hex.classList.remove('active');
    rgb.classList.remove('active');
})

hex.addEventListener('click',()=>{
    btn = 'hex';
    hex.classList.add('active');
    simple.classList.remove('active');
    rgb.classList.remove('active');
})

rgb.addEventListener('click',()=>{
    btn = 'rgb';
    rgb.classList.add('active');
    simple.classList.remove('active');
    hex.classList.remove('active');
})

clickMe.addEventListener('click',()=>{
    if(btn === 'simple'){
        let randomNum = Math.floor(Math.random() * simpleColor.length)
        document.body.style.backgroundColor=simpleColor[randomNum];
        colorSpan.innerText = simpleColor[randomNum];

    }else if(btn === 'hex'){
        let colorName = '#';
        for (let i = 0; i < 6; i++) {
            let randomNum = Math.floor(Math.random() * hexArr.length);
            colorName += hexArr[randomNum];
        }
        document.body.style.backgroundColor=colorName;
        colorSpan.innerText = colorName;

    }else if(btn === 'rgb'){
        let num1 = Math.floor(Math.random()*255);
        let num2 = Math.floor(Math.random()*255);
        let num3 = Math.floor(Math.random()*255);

        let colorVal = `rgb(${num1}, ${num2}, ${num3})`;
        document.body.style.backgroundColor=colorVal;
        colorSpan.innerText = colorVal;
    }
})



















