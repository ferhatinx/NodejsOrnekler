
const arguments =process.argv.slice(2);
function asalsayi(ksayi,bsayi)
{
   for (let i = ksayi; i < bsayi; i++) 
   {
    let isPrime=True;
    for (let j = 2; j <=i; j++) 
    {
        if (i % j ===0 && j!==i) 
        {
            isPrime=false;

        }
        
    } 
    if (isPrime) 
    {
     console.log(i);
    }  
   }
}
showasalsayi(arguments[0]*1,arguments[1]*1);