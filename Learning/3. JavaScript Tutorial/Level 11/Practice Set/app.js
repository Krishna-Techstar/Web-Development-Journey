let Data = " Secret Infromation that is hidden in data"

class user{
    constructor(name, email){
        this.name = name ;
        this.email = email;
    }
    viewdata(){
        console.log("Data is=", Data);
    }
}

class admin extends user {
    constructor(name, email){
        super(name, email);
    }
    editData(){
        Data = " some thing crazy";
        console.log("edit data");
    }
}

let student1 = new user("Krishnakant", "xyz@krishna.com");
let student2 = new user("Krishna", "pqrs@krishna.com");
let student3 = new user("Yash", "blue@krishna.com");

let teacher1 = new user("Dean", "dean@college.com");

let admin1 = new admin ("adminboss", "admin@email.com");