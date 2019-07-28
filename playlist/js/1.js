var elem=document.getElementById("switch");
elem.onclick=function(){
  var div=document.getElementById("net");
  if(div.style.display=="none"){
    div.style.display="block"
  }else{
    div.style.display="none"
  }
  
}
