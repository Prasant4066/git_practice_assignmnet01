function prime(num){
let count=0;
    for(let i=0;i<=num;i++){
	if(num%i){
	  count++;
 	}
      }
  if(count==2){
 return true;
 }
 return false;
}
let ans=prime(13);
if(answer==true){
  console.log("Prime)
 }else{
 console.log("Not Prime")
