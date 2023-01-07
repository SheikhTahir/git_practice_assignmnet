let number=5;
let factor=0;

for (let i=0;i<=5;i++)
  {
    if (5%i==0)
    {
      factor++;
    }
  }

(factor==2) ? console.log("prime"):console.log("not a prime")