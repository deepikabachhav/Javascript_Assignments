/* modified by adding three objects */

var amitabh={fname:"amitabh",                           //create object amitabh by using bject literal.
            lname:"Bachchan",
            age:70,
            skills:["Acting","Dancing","singing"],
            dateOfBirth:new Date("1947-03-12"),
            married:true,
            profession:"acting",
            Address:{city:"Miumbai", pincode: 423532}
            }
console.log(amitabh);

var abhishek=Object.create(amitabh);                //create object abhishek by using object.create() method from object amitabh.
abhishek.fname="abhishek";
abhishek.age=34;
abhishek.dateOfBirth=new Date("1992-06-05");
console.log("fname:"+abhishek.fname);
console.log("lname:"+abhishek.lname);
console.log("age:"+abhishek.age);
console.log("skills:"+abhishek.skills);
console.log("dateOfBirth:"+abhishek.dateOfBirth);
console.log("married:"+abhishek.married);
console.log("profession:"+abhishek.profession);
console.log(abhishek.Address);

var aradhya=Object.create(abhishek);                // //create object aradhya by using object.create() method from object abhishek.
aradhya.fname="aradhya";
aradhya.age=8;
aradhya.skills=["learning", "roaming","reading"];
aradhya.dateOfBirth= new Date("2010-09-19");
aradhya.married="false";
aradhya.profession="nothing";
console.log("fname:"+aradhya.fname);
console.log("lname:" +aradhya.lname);
console.log("age:" +aradhya.age);
console.log("skills:"+aradhya.skills);
console.log("dateOfBirth:" +aradhya.dateOfBirth);
console.log("married:" +aradhya.married);
console.log("profession:" +aradhya.profession);
console.log(aradhya.Address);