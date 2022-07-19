function totalProduction(){
    var shedATotal = document.getElementsByName("shedATotal")[0].ariaValueMax;
    var shedBTotal = document.getElementsByName("shedBTotal")[0].ariaValueMax;
    var shedCTotal = document.getElementsByName("shedCTotal")[0].ariaValueMax;
    var shedDTotal = document.getElementsByName("shedDTotal")[0].ariaValueMax;
    let total =Number(shedATotal)+ Number(shedBTotal) +Number(shedCTotal) + Number(shedDTotal);

    document.getElementByName("sum")[0].value=total;
    
}