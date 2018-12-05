/* create object and display object details*/

print=function()    //create object using global print method.
{
    console.log(Person);
    console.log(Person1);
}

var Person= {fname:"Deepika",
            lname:"Bachhav",
            age: 22,
            skills:["Acting", 'Singing', "Dancing", "Treking"],
            dateOfBirth:new Date('1996-08-30'),
            married: false, 
            profession:"Analyst",
            address:{
                     city:"Malegaon",
                     pincode:423203,
                    }
            }
        
var Person1= {fname:"Amitabh",
            lname:"Bachchan",
            age:70,
            skills:["Acting", "Singing", "Dancing", "Treking"],
            dateOfBirth:new Date('1948-09-05'),
            married:true, 
            profession:"Actor",
            address:{
                     city:"Mumbai",
                     pincode:400079,
                    }
            }
print();