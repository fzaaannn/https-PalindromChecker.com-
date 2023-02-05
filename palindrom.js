document.getElementById("btn").addEventListener("click",function(){
    var getdata=document.getElementById("text_input").value;
    checkPalimdrome(getdata);
});
document.addEventListener("keypress" ,function(event){
   
    checkPalimdrome(event.key);
   });
 function checkPalimdrome(getdata){
  var newdata=getdata.replace(/[^a-zA-Z0-9]/g,'');
 newdata=newdata.toUpperCase();
 var length=newdata.length;
 var mid=Math.floor(length/2);
  var result=document.getElementById("result");
  for( var i=0;i<mid;i++){
    if(newdata[i]!==newdata[length-1-i]){
 result.textContent=" Nope! Not a Palindrome";
 return;
    }
    
        result.textContent="Yes! it's a Palindrome 🎉" ;
        return;
    
  }
}
