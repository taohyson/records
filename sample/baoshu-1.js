//最简单的写法，执行成功。

function personA(){
    console.log('1到')
}

function personB(){
    console.log('2到')
}

function personC(){
    console.log('3到')
}

function personD(){
    console.log('4到')
}

function personE(){
    console.log('5到')
}

function startBaoshu(){
    console.log('开始报数！');
    personA();
    personB();
    personC();
    personD();
    personE()
    console.log('OK，这很好！');
}

startBaoshu();
