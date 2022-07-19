function totalProduction(){
    var shedATotal = document.getElementsByName("shedATotal")[0].ariaValueMax;
    var shedBTotal = document.getElementsByName("shedBTotal")[0].ariaValueMax;
    var shedCTotal = document.getElementsByName("shedCTotal")[0].ariaValueMax;
    var shedDTotal = document.getElementsByName("shedDTotal")[0].ariaValueMax;
    let total =Number(shedATotal)+ Number(shedBTotal) +Number(shedCTotal) + Number(shedDTotal);

    
    var shedATotal='your production for shed A is'+''+shedATotal+''+ 'per day';
    var shedBTotal='your production for shed A is'+''+shedBTotal+''+ 'per day';
    var shedCTotal='your production for shed A is'+''+shedCTotal+''+ 'per day';
    var shedDTotal='your production for shed A is'+''+shedDTotal+''+ 'per day';

    document.getElementByName("shedA-production")[0].innerHTML=shedATotal;
    document.getElementByName("shedB-production")[0].innerHTML=shedBTotal;
    document.getElementByName("shedC-production")[0].innerHTML=shedCTotal;
    document.getElementByName("shedD-production")[0].innerHTML=shedDTotal;
    document.getElementByName("sum")[0].value=total;
    total

    
}