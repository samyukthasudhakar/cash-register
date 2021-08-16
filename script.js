const calculate = document.querySelector("#compute");
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const alert = document.querySelector("#alert");
const balance = document.querySelector("#balance");
const table = document.querySelector("#moneyTable");

function callCalculateChange(){
    cashGiven.style.display = "block";
    calculate.value="Calculate Change";
    calculate.innerHTML="Calculate Change";
}

function calculateNumberOfNotes(){
    const amount = {2000:"twoThousand",500:"fiveHundred",100:"hundred",20:"twenty",10:"ten",5:"five",1:"one"}
    const keys = [2000,500,100,20,10,5,1];
    
    var i =0; var count = 0; var rem=0;
    
    var balanceAmount = Number (cashGiven.value) - Number(billAmount.value);
    balance.innerText = "Balance Amount : " + balanceAmount;
    rem = balanceAmount;
    while (rem>0){
        if (rem < keys[i]){
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
    balance.style.display = "block";
}

const calculateBalance = () =>{

    if(billAmount.value===""){
        table.style.display="none";
        balance.style.display="none";
        alert.innerText = "Please Enter Bill Amount 👆🏽";
    }
    else{

        alert.innerText="";
        if (calculate.value=="next"){
            callCalculateChange();
        }
        else{

            if(cashGiven.value===""){
                table.style.display="none";
                balance.style.display="none";
                alert.innerText = "Please Enter Cash Given 👆🏽";
            }
            else if(Number(billAmount.value)>Number(cashGiven.value)){
                table.style.display="none";
                balance.style.display="none";
                alert.innerText = "Bill Amount cannot be greater than Cash Given. Pleae re-enter the values 👉🏽👈🏽";
            }
            else{
                calculateNumberOfNotes();
            }
        }
            
    }
    
}

calculate.addEventListener("click", calculateBalance);