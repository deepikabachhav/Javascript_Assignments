/* modified the object by using Object.create() method*/

var amitabh={fname:"amitabh", 
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
console.log(abhishek.fname);
console.log(abhishek.lname);
console.log(abhishek.age);
console.log(abhishek.skills);
console.log(abhishek.dateOfBirth);
console.log(abhishek.married);
console.log(abhishek.profession);
console.log(abhishek.Address);
