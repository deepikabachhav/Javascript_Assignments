/* modified the object by using Object.create() method*/

var amitabh={fname:"amitabh",    //create object amitabh by using object litetal.
            lname:"Bachchan",
            age:70,
            skills:["Acting","Dancing","singing"],
            dateOfBirth:new Date("1947-03-12"),
            married:true,
            profession:"acting",
            Address:{city:"Miumbai", pincode: 423532}
            }
var abhishek=Object.create(amitabh);   //create common properties by using Object.create( method.)
abhishek.fname="abhishek";
abhishek.age=34;
abhishek.dateOfBirth=new Date("1992-06-05");
console.log(amitabh);
console.log("fname:"+abhishek.fname);
console.log("lname:"+abhishek.lname);
console.log("age:"+abhishek.age);
console.log("skills:"+abhishek.skills);
console.log("dateOfBirth:"+abhishek.dateOfBirth);
console.log("married:"+abhishek.married);
console.log("profession:"+abhishek.profession);
console.log("Address:"+abhishek.Address);
