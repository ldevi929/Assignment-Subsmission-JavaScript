//console.log(document.getElementsByTagName('p')[0]);
//this gives array
//var ele= document.getElementsByClassName('para');
//console.log(ele);
//the below gives single element
function doSomething(){
var ele=document.getElementById('p1');
console.log(ele.innerText);
ele.innerText="Lohitha";
ele.innerHTML="<h1>Hello</h1>";
}

function takeName() {
    var inp=document.getElementById('inp');
    var data =inp.value;
    document.getElementById('name').innerText=data;
}

