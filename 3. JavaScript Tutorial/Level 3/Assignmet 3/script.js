// q1 get user input check if number is multiple of 7

let number = prompt(" Enter Your Number");
 if(number%7==0)
    {
    console.log("Yes it is multipe of 7 Number is ", number);
 }
 else{
    console.log("No its Not a Multiple of 7 Number is ", number);
 }

 // Q2 student grade 75-100 A, 60-74 B, 45-59 C, 35-44 D, less then 35 F.

 let grade = prompt ("Enter Your Grade ");

    if (grade>= 75 && grade<=100)
    {
        console.log("Congratution Your have Score A. Your Grade is:", grade);
    }
    else if (grade>= 65 && grade<=74)
    {
        console.log("Congratution Your have Score B. Your Grade is:", grade);
    }
    else if (grade>= 55 && grade<=64)
    {
        console.log("Congratution Your have Score C. Your Grade is:", grade);
    }
    else if (grade>= 45 && grade<=54)
    {
        console.log("Congratution Your have Score D. Your Grade is:", grade);
    }
    else if (grade>= 35 && grade<=44)
    {
        console.log("Congratution Your have Score E. Your Grade is:", grade);
    }
    else if (grade>= 0 && grade<=34)
    {
        console.log("Congratution Your have Score F. Your Grade is:", grade);
    }
    else {
        console.log(" Grade Dont Exist")
    }