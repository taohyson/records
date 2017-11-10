
//试试另外一种做法


function personA(){
    console.log('1到');
    personB()
}



function personB(){
    console.log('2到');
    personC()
}

function personC(){
    console.log('3到');
    personD()
}

function personD(){
    console.log('4到');
    personE()
}

function personE(){
    console.log('5到');
    return true;
}

function startBaoshu(){
    console.log('开始报数！');
    personA();
    console.log('OK，这很好！');
}

startBaoshu();
