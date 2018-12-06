/* create object using class and constructor and using inheritance for savings and current bank account and return the remaining balance in an account */ 

class BankAccount{                                      // create one parent class as BankAccount 
    constructor(accountBalance,accountHolderName,accountNumber)  //Objects of the same type are created by calling the constructor function with the new keyword
         {
            this.accountBalance=accountBalance;
            this.accountHolderName=accountHolderName;
            this.accountNumber=accountNumber;
         }
    print()                                                       // used to print 
        {
            console.log(this.accountBalance, this.accountHolderName, this.accountNumber);
        }
}

class Savings extends BankAccount{                              // first child class(savings) of parent class(BankAccount) uses inheritance to access the common things.
    constructor(accountBalance, accountHolderName, accountNumber, isSalary)
         {
            super(accountBalance, accountHolderName, accountNumber);
            this.isSalary=isSalary;
         }
    print(){
            super.print();
            console.log(this.isSalary);
        }
    withdraw(amount){                                              // function withdraw(amount) and logic to return the remaining balance of an account.
         if(savings.accountBalance>amount)
        {
             savings.accountBalance=savings.accountBalance-amount;
             console.log("withdraw amount successfully");
        }
        else
        {
            console.log("Your transaction has been cancelled beacuse of insufficient Balance");
        } 
        }
    getCurrentBalance()                                        //getCurrentBalance() function to return the current balance in saving account.
        {
            console.log("Remaining Balance in saving account is"+savings.accountBalance);
        }
}
var savings=new Savings(1000, "Deepika", 112342342353, true);        //create the object of savings class.
savings.print();

class Current extends BankAccount{                                     //second child class(current) of parent class(BankAccount) by using inheritance.
    constructor(accountBalance, accountHolderName, accountNumber,odLimit)
    {
         super(accountBalance, accountHolderName, accountNumber);
         this.odLimit=odLimit;
    }
    print(){
        super.print();
        console.log(this.odLimit);
    }
    withdraw(amount)                                               //function to withdraw amount from the current bank account.
    {
        current.withdraw= current.accountBalance-amount;
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
    }
    getCurrentBalance(){                                             //getCurrentBalance() function is used to return the remaining balance in current account. 
        console.log("Remaining balance in current account is"+current.withdraw);
    }
}

var current=new Current(140, "Ankita", 112341324453, 30);           // create object of curent class.
current.print();


savings.withdraw(102);
savings.getCurrentBalance();
current.withdraw(170);
current.getCurrentBalance();