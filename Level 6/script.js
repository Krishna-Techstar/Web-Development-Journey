//                     this is pratice set question 1.

let arr = [85, 97, 44, 37, 76, 60]
let sum=0; let average;
for(i=0;i<arr.length;i++){
    sum=sum+arr[i];
    average = sum/arr.length;
}
console.log(`Sum = ${sum} Avarage = ${average}`);

//                           this is pratice set question 2.

let items = [250, 645, 300, 900, 50]
let j=0;
 
for (let val of items){
    console.log(` Value of items ${j}=${val}`);
    let offer = val/10;
    items[j]=items[j]-offer;
    console.log(`value of item after offer ${items[j]}`);
    j++;
}

//                         method 2 

let stock = [250, 645, 300, 900, 50, 85, 97, 44, 37, 76, 60]
let k=0;
for(let k=0; k<stock.length; k++){
    let discount = stock[k]/20;
    stock[k] -= discount;

}
console.log(stock);

///                     array methods { push pop to string concat unshift shift}


// push ( )

let foodItems = ["Rice", "Dal", "Panner", "Mango" , "Litchi", "Apple", "Potato", "Tamota" ]

foodItems.push("Onion");
console.log(foodItems);

// pop 

foodItems.pop(); 
console.log(foodItems);

///                         Pratice set 2 

let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(company);
company.shift()
console.log(company);
company.splice(1,1,"OLA")
console.log(company);
company.push("Amazon")
console.log(company);