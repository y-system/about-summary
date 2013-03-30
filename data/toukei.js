var total= document.body.textContent.length;
var all=document.body.textContent;
var touten=0;
var kuten=0;
for ( var i = 0 ; i < total ; i++ ){
var test=all.substr(i,1)
  if(test=='。'){touten++;}
  if(test=='、'){kuten++;}

}

var alt=function(){
if(touten>0&&kuten>0){
alert('このページの情報\n総文字数：'+total+'\n「。」の数：'+touten+'\n「、」の数：'+kuten+'\nです。');
}
}