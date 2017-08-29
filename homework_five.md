# JS编程入门Lesson5课堂笔记

## 作业：

分析这段代码，说明每个地方的name都是什么含义。

'''

    function output(name){//定义一个函数，函数名叫output，它需要一个参数，我们以name标记这个参数，用来说明在这个函数里我们如何使唤这个参数

        console.log(name);//在这个函数中，我们需要对这个参数name做console.log的处理

    }

    var name = 'hello,js';//申明一个变量，变量名叫name，并把'hello,js'这个字符串赋值给这个变量name

    output(name);//调用函数output，并把上一行变量name的值作为参数传给这个函数，让这个函数去工作

'''

老师这个例子还不够绝的，我拓展下：**步子迈大了，收不回腿了**

'''
    var name = 'liujuanjuan';  //申明一个变量，变量名叫name，把'liujuanjuan'这个字符串赋值给它

    var liujuanjuan = {     //申明一个对象类型的变量，这个对象名名liujuanjuan

        name:'liujuanjuan'  //这个对象有一个属性，这个属性叫name，这个属性的值是'liujuanjuan'

    };

    console.log(name);    //打印变量name的值

    console.log(liujuanjuan.name);   //打印对象liujuanjuan的name属性的值

    function liujuanjuan(name){  //定义一个函数，函数名叫liujuanjuan，有一个参数为name

        console.log(name)//打印这个参数的值

    }

    liujuanjuan(name);  //调用函数liujuanjuan，参数为第一行变量name的值

    liujuanjuan(liujuanjuan.name); //调用函数liujuanjuan，参数对象liujuanjuan的name属性的值

'''

打印出来的结果一定很令人摸不着头脑。改进一下，做个标记：

'''
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

'''

_实际上打印不出来。_

## 我的疑问：(暂时没有)



## 课堂笔记：(待添加更多...)

_正文是老师的观点，而斜体字是我的心声。这个笔记有些凌乱，因为没时间去仔细梳理；但又不能不写，因为我觉着先这样随手记，后面回过头来是有价值的。_

_我看到老师在使用新生大学网页版？如何使用？答：浏览器直接进xinshengdaxue.com即可。_

“为什么没有人回应，是不是没有人来上课了？”老师如此说。_额…我是那个没来看直播的，抱歉！_

今天用到chrome浏览器，且要装flash插件。

给何伟的惊喜。新生大学的手环。_我也想要！_

这几年工程师跨界（？）发现特别特别快。尤其是github。互相帮助是非常有意义的事情。老师鼓励大家在群里一起持续互帮互助。_所以，老师说我们学会了git和github已经值到199的报名费了，剩下的都是在赚钱，哈哈哈。_

老师这几天在咳嗽。_带病上课的老师……我们更应努力学习，认真作业才是。_

**今天进入到js最核心的一块，而且这个核心内容在今天就结束了。**_结束的这么快！所以认真听课并记笔记就更重要了！_

老师教我们的是方法论。我们从老师的课程这里**get自学能力**，有了**编程思想与架构**。就够了。课程不是成天学习怎么敲代码。

_老师所谓的自学能力是啥？我理解的是，他把编程世界的视角与思维展示给我们，把基础的概念通过类比通俗易懂，把业务流程的逻辑关系刻入脑海，这些东西很基础，很适用。比如银行开户流程的演变图，婴儿名字，报数做饭这些类比和案例，我现在依然很清晰。_

#### 作业讲解：顺序图/时序图

好像懂了。想起来刚工作的时候，曾经听说过时序图这个东西。那是10年前了。


#### js在前端中的地位

前端结构图：html css js。_此处也有一个需要记忆的图_人与网页交互是html的事，网页与服务器交互由js来做。

