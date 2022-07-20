let buyingPrice = 45
let dailyTotal = 0

function totalProduction(){
    var shedATotal = document.getElementsByName("shedATotal")[0].value;
    var shedBTotal = document.getElementsByName("shedBTotal")[0].value;
    var shedCTotal = document.getElementsByName("shedCTotal")[0].value;
    var shedDTotal = document.getElementsByName("shedDTotal")[0].value;
    let total =Number(shedATotal)+ Number(shedBTotal) +Number(shedCTotal) + Number(shedDTotal);

    document.getElementsByName("sum")[0].value=total;

    var shedAProduction='your production for shed A is'+""+shedATotal+""+ 'per day';
    var shedBProduction='your production for shed B is'+''+shedBTotal+''+ 'per day';
    var shedCProduction='your production for shed C is'+''+shedCTotal+''+ 'per day';
    var shedDProduction='your production for shed D is'+''+shedDTotal+''+ 'per day';

    document.getElementsByClassName("shedA-production")[0].innerHTML=shedAProduction;
    document.getElementsByClassName("shedB-production")[0].innerHTML=shedBProduction;
    document.getElementsByClassName("shedC-production")[0].innerHTML=shedCProduction;
    document.getElementsByClassName("shedD-production")[0].innerHTML=shedDProduction;
    
    totalShedProduction='you production of all the shed is'+''+total+''+ 'per day';

    document.getElementsByClassName("total-production")[0].innerHTML=totalShedProduction;

    console.log('your production for shed A is'+" "+shedATotal*7+" "+ 'per week')
    var weeklyShedAProduction='your production for shed A is'+" "+shedATotal *7+" "+ 'per week';
    var weeklyShedBProduction='your production for shed B is'+' '+shedBTotal *7+' '+ 'per week';
    var weeklyShedCProduction='your production for shed C is'+' '+shedCTotal *7+' '+ 'per week';
    var weeklyShedDProduction='your production for shed D is'+' '+shedDTotal *7+' '+ 'per week';
    var weeklyTotalShedProduction='you production of all the shed is'+' '+total *7+' '+ 'per day'

    document.getElementsByClassName("weekly-shedA-production")[0].innerHTML=weeklyShedAProduction;
    document.getElementsByClassName("weekly-shedB-production")[0].innerHTML=weeklyShedBProduction;
    document.getElementsByClassName("weekly-shedC-production")[0].innerHTML=weeklyShedCProduction;
    document.getElementsByClassName("weekly-shedD-production")[0].innerHTML=weeklyShedDProduction;
    document.getElementsByClassName("weekly-total-production")[0].innerHTML=weeklyTotalShedProduction;
    dailyTotal = total

    incomeOverTime(buyingPrice)
    leapYear(buyingPrice)
}
totalProduction();
function incomeOverTime(buyingPrice){

    let weeklyIncome = dailyTotal * 7 * buyingPrice
    let yearlyIncome = dailyTotal * 366 * buyingPrice

    document.querySelector(".weekly").textContent = weeklyIncome 
    document.querySelector(".yearly").textContent = yearlyIncome
}
incomeOverTime(buyingPrice)

function leapYear(buyingPrice){
    let dailyIncome = dailyTotal * buyingPrice
    document.querySelector(".jan").textContent = dailyIncome *31
    document.querySelector(".feb").textContent = dailyIncome *29
    document.querySelector(".mar").textContent = dailyIncome *31
    document.querySelector(".apr").textContent = dailyIncome *30
    document.querySelector(".may").textContent = dailyIncome *31
    document.querySelector(".jun").textContent = dailyIncome *30
    document.querySelector(".jul").textContent = dailyIncome *31
    document.querySelector(".aug").textContent = dailyIncome *31
    document.querySelector(".sept").textContent = dailyIncome *30
    document.querySelector(".oct").textContent = dailyIncome *31
    document.querySelector(".nov").textContent = dailyIncome *30
    document.querySelector(".dec").textContent = dailyIncome *31

}