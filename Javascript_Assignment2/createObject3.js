/* modified by adding three objects */
var amitabh={fname:"amitabh", 
            lname:"Bachchan",
            age:70,
            skills:["Acting","Dancing","singing"],
            dateOfBirth:new Date("1947-03-12"),
            married:true,
            profession:"acting",
            Address:{city:"Miumbai", pincode: 423532}
            }
console.log(amitabh);

var abhishek=Object.create(amitabh);
abhishek.fname="abhishek";
abhishek.age=34;
abhishek.dateOfBirth=new Date("1992-06-05");
console.log(abhishek.fname);
console.log(abhishek.lname);
console.log(abhishek.age);
console.log(abhishek.skills);
console.log(abhishek.dateOfBirth);
console.log(abhishek.married);
console.log(abhishek.profession);
console.log(abhishek.Address);

var aradhya=Object.create(abhishek);
aradhya.fname="aradhya";
aradhya.age=8;
aradhya.skills=["learning", "roaming","reading"];
aradhya.dateOfBirth= new Date("2010-09-19");
aradhya.married="false";
aradhya.profession="nothing";
console.log(aradhya.fname);
console.log(aradhya.lname);
console.log(aradhya.age);
console.log(aradhya.skills);
console.log(aradhya.dateOfBirth);
console.log(aradhya.married);
console.log(aradhya.profession);
console.log(aradhya.Address);