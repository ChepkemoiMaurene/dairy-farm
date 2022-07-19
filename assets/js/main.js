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

    document.getElementsByID("total-production")[0].innerHTML=totalShedProduction;

}
totalProduction();
*45

let milk = (100 + 50) * 45;