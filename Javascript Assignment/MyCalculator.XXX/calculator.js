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
}
Add= function()
{
    a=window.prompt("Enter the first number");
    b=window.prompt("Enter the second number");
    sum=parseInt(a,10)+parseInt(b,10);
    alert(sum);
}