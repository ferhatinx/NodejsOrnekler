let arguments = process.argv.slice(2);

function circleArea(r)
{
    const pi = Math.PI
    const alan = pi * r**2;
    console.log(alan)
}

circleArea(arguments[0]*1);