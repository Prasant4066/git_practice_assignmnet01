function reverse(string){
let bag="";
  for(let i=string.length-1;i>=0;i--){
 	 bag+=string[i];
	}
	return bag;
   }
  let rev_str=reverse(string);
if(string==rev_str){
   console.log("palindrome")
  }else{
console.log("Not a palindrome");