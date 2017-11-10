//practice for lesson 4  2017-08-27

function prepare(){
    console.log('磨刀，洗碗');
    return true;
}

function buysth(){
    console.log("买买买");
    var foodlist = ["fish",'rice',];
    return foodlist;

}

function cooker(foodlist){
    console.log('cooking');
    console.log(foodlist);
    var fooddone = ['fisher','ricer'];

    console.log(fooddone);
    return fooddone;

}

function started(){
    var result = prepare();
    if (result){
        var foodlist = buysth();
        var fooddone = cooker(foodlist);
        console.log(fooddone);
    }
}

started();
