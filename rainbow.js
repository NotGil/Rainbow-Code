var linkCount=0;
function changeColorOfLinks(color){
  var links=document.getElementsByTagName("a");
  links[linkCount].style.color = color;
  linkCount++;
  if(linkCount>=links.length){
    linkCount=0;
  }
}
function RGB2Color(r,g,b)
 {
   return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
 }
function byte2Hex(n)
{
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}
var frequency = .3;
var i=0;
function colorShift(){

     var red   = Math.sin(frequency*i + 0) * 127 + 128;
     var green = Math.sin(frequency*i + 2) * 127 + 128;
     var blue  = Math.sin(frequency*i + 4) * 127 + 128;
     ++i;
     if(i>=1000000){
       i=0;
     }
     changeColorOfLinks(RGB2Color(red,green,blue));
}

setInterval(function(){colorShift();}, 5);
setInterval(function(){colorShift();}, 200);
