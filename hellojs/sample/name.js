var name = 'liujuanjuan1';  //申明一个变量，变量名叫name，把'liujuanjuan'这个字符串赋值给它

var liujuanjuan = {     //申明一个对象类型的变量，这个对象名名liujuanjuan

    name:'liujuanjuan2'  //这个对象有一个属性，这个属性叫name，这个属性的值是'liujuanjuan'

};

console.log(name);    //打印变量name的值

console.log(liujuanjuan.name);   //打印对象liujuanjuan的name属性的值

function liujuanjuanF(name){  //定义一个函数，函数名叫liujuanjuan，有一个参数为name

    console.log(name)//打印这个参数的值
    
}

liujuanjuanF(name);  //调用函数liujuanjuan，参数为第一行变量name的值

liujuanjuanF(liujuanjuan.name); //调用函数liujuanjuan，参数对象liujuanjuan的name属性的值

// 这个案例的教训是，对象的名字和函数的名字不要重名。