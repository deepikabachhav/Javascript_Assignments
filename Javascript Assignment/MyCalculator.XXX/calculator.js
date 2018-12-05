function options()
{
    opt= window.prompt("select options \n 1.Add \n 2.Subtract \n 3.Multiply \n 4.Divide \n 5.Exponent \n 6.Mean \n 7.Quit");
    if(opt <=0 || opt>7)
    {
        window.alert(" Error Select Again");
    }
   
     if(opt==1)
     {
         add();
     }
     if(opt==2)
     {
         subtract();
     }
     if(opt==3)
     {
         multiply();
     }
     if(opt==4)
     {
         divide();
     }
     if(opt==5)
     {
         exponent();
     }
     if(opt==6)
     {
         mean();
     }
     if(opt==7)
     {
         window.stop();
     }
}
add= function()
{
    a=window.prompt("Enter the first number");
    b=window.prompt("Enter the second number");
    sum=parseInt(a,10)+parseInt(b,10);
    document.getElementById("result").value=sum;
}
subtract= function()
{
    a=window.prompt("Enter the first number");
    b=window.prompt("Enter the second number");
    sub=parseInt(a,10)-parseInt(b,10);
    document.getElementById("result").value=sub;
}
multiply= function()
{
    a=window.prompt("Enter the first number");
    b=window.prompt("Enter the second number");
    multiply=parseInt(a,10)*parseInt(b,10);
    document.getElementById("result").value=multiply;
}
divide= function()
{
    a=window.prompt("Enter the first number");
    b=window.prompt("Enter the second number");
    divide=parseInt(a,10)/parseInt(b,10);
    document.getElementById("result").value=divide;
}
exponent= function()
{
    a=window.prompt("Enter the base number");
    b=window.prompt("Enter the exponent number");
    exponent=Math.pow(a,b);
    document.getElementById("result").value=exponent ;
}
mean= function()
{    var total=0;
    var count=0;
    var arr=window.prompt("enter the Numbers");
    while(!arr.includes("***"))
    {
        total=total+parseInt(arr,10);
        count=count+1;
        var arr=window.prompt("enter the Numbers");
    }
    mean=total/count;
    document.getElementById("result").value=mean ;
}