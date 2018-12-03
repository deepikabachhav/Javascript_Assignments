prime=function()
{
    var n=7;
    for(i=2; i<n ;i++)
    {
        if(n% i==0)
        {
            break;
        }
    }
    if(i==n)
    {
        console.log("7 is prime number");
    }
    else
    {
        console.log("7 is not prime number");
    }
}
prime();