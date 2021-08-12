const calculate = document.querySelector("#compute");
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const table = document.querySelector("#moneyTable");


const calculateBalance = () =>{

    if (calculate.value=="next"){

        cashGiven.style.display = "block";
        calculate.value="Calculate Change";
        calculate.innerHTML="Calculate Change";
    }
    else{
        const amount = {2000:"twoThousand",500:"fiveHundred",100:"hundred",20:"twenty",10:"ten",5:"five",1:"one"}
        const keys = [2000,500,100,20,10,5,1];

        var i =0; var count = 0; var rem=0;

        var balanceAmount = Number (cashGiven.value) - Number(billAmount.value);
        console.log(balanceAmount);
        rem = balanceAmount;
        while (rem>0){
            if (rem < keys[i]){
                console.log(keys[i]);
                i = i+1;
                
            }
            else{
                count = Math.floor( rem / keys[i] );
                rem = rem % keys[i] ;
                document.querySelector("#"+amount[keys[i]]).innerHTML = count;
                count = 0;
                
                i = i+1;
            }
        }

        table.style.display = "block";

    }
    
}

calculate.addEventListener("click", calculateBalance);