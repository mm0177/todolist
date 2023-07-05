let but = document.getElementById("add")
let input = document.getElementById("tex")
let final = document.getElementById("para")


 function additem() {
 

if(input.value===""){
  alert("please enter something")
}  
   else
    var par = document.createElement('li')
    par.innerText = input.value
    

    final.appendChild(par)
   let span=document.createElement('span')
   span.innerHTML="\u00d7"
   par.appendChild(span)
    input.value = ""
    savedata()
    //var b = document.createElement('button')
    //var btext = document.createTextNode("-")

    //b.appendChild(btext)
    //final.appendChild(b)
    //const del =()=>{
    //b.addEventListener('click', function() {
      //savedata()
      //final.removeChild(par)
      //final.removeChild(b)
      //savedata()
    //})
    
    

    //}
  //del();
 
  //par.addEventListener('click',function(){
  //final.removeChild(par);
  //})
  //btn.addEventListener('click',function(){
  //final.removeChild(par);
  //})
}

final.addEventListener('click',function(fxn){
  if(fxn.target.tagName==="SPAN"){
    fxn.target.parentElement.remove()
    savedata()
  }
})


but.addEventListener('click',additem)
 function savedata(){
    localStorage.setItem("data",final.innerHTML);
   
  }
function showdata(){
    final.innerHTML=localStorage.getItem("data");

}
showdata();



