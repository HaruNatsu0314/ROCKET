'use strict' ;{

const rocket = document.getElementById('rocket');
let w = [];
let d = [];
let s = [];
let a = [];

document.addEventListener('keypress',(e)=>{
        let key = e.key;
        if(key==='w'){     
        w.push(e.key); 
        }else if(key==='d'){
        d.push(e.key); 
        }else if(key==='s'){
        s.push(e.key); 
        }else if(key==='a'){
        a.push(e.key); 
        }
        rocket.style.transform = `translate(${16*d.length-16*a.length}px,${16*s.length-16*w.length}px)`;
});
}