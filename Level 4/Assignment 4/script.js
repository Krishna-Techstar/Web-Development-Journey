let sum=0 ;

for(i=0 ; i<=100 ; i++)
{
    if(i%2==0){
        sum=sum+i;
        
    }
   
}
 console.log("Sum of even Number is ", sum);

 // this is q2 we will be creating a game for the number guess 

 let gameNum =30;
 let userNum = prompt("Enter your Guess Number:");

 while(gameNum != userNum){
        userNum = prompt("You Have guess Wrong Number!! Guess Again!!");
 }
 console.log("Conrgradulation you have enter Right Guess!!")
