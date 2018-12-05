var savings={accountNumber:112225132562,    //create saving account
             accountHolderName:"Deepika", 
             accountBalance:100000 ,
             isSalary:true, 
             withdraw:function(amount){  if(savings.accountBalance>amount)
                                         {
                                             remainingBalance=savings.accountBalance-amount;
                                             console.log("Remaining Balance in saving account is"+remainingBalance)
                                         }
                                      }
            };
var current={accountNumber:112224574562,     //create curent account
            accountHolderName:"Ankita",
            accountBalance:1001200, 
            odLimit:100000,
            withdraw:function(amount){ if(current.accountBalance>amount)
                                        {
                                            remainingBalance=current.accountBalance-amount;
                                            console.log("Remaining balance in current account is"+remainingBalance)
                                        }else{
                                                console.log("your account transaction has been exceeded the limit");
                                             }
                                     }
            };
    savings.withdraw(1000);
    current.withdraw(1200);