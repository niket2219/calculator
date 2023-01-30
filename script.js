let string ="";
let buttons =document.getElementsByTagName("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click",(e) =>{
    if(e.target.innerHTML== "=") {
      string=eval(string);
       document.getElementById("text").value = string;
    }
      else if(e.target.innerHTML== "C") {
      string="";
       document.getElementById("text").value = string;
    }
      else if(e.target.innerHTML== "DEL") {
    string = string.slice(0,string.length-1)
       document.getElementById("text").value = string
    }
     
    else{
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.getElementById("text").value = string;}
  })
})