/* create a JS program to implement the way of creating objectby using object literals */

var savings={accountNumber:112225132562,    //create saving account object using object literals.
             accountHolderName:"Deepika", 
             accountBalance:100000 ,
             isSalary:true, 
             withdraw:function(amount){   if(savings.accountBalance>amount) {
                                             savings.accountBalance=savings.accountBalance-amount;
                                             console.log("withdraw amount successfully");
                                            }
                                           else
                                              {
                                                console.log("Your transaction has been cancelled beacuse of insufficient Balance");
                                              } 
                                            },
            getCurrentBalance:function(){                                      //getCurrentBalance() function to return the current balance in saving account.
                                        console.log("Remaining Balance in saving account is"+savings.accountBalance);
                                        }
            };
                                    
            
           
var current={accountNumber:112224574562,     //create curent account of customer using object literals.
            accountHolderName:"Ankita",
            accountBalance:100000, 
            odLimit:30000,
            withdraw:function(amount){  current.withdraw= current.accountBalance-amount;
                                            if(current.withdraw<0){
                                                 var withdrawlimit=current.accountBalance+current.odLimit;
                                                     if(withdrawlimit>= amount){
                                                              console.log("transaction successful");
                                                     }
                                                     else{
                                                        console.log("Transaction failed as amount to be wihdrawn is exceeding limit");
                                                      }
                                                      }
                                                         else{
                                                             console.log("Transaction successful");
                                                         }
                                    },
            getCurrentBalance:function(){                                             //getCurrentBalance() function is used to return the remaining balance in current account. 
                console.log("Remaining balance in current account is"+current.withdraw);
            }
        
            };
           
    savings.withdraw(1000);
    current.withdraw(700);
    current.getCurrentBalance();
    savings.getCurrentBalance();
