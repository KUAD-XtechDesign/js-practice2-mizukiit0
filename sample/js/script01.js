$(function(){

$(function(){

    let txt1 = "おはようございます！";
    let txt2 = "おげんきですか？";
    let num1 = 20;
    let num2 = 32;
    　　
    function seyhello(){
        $("#content").text("こんにちは！");
    }

    function saysomething(txt){
        $("#content").text(txt);
    }

    function samTwo(t1,t2){
        $("#content").text(t1 + t2);
    }

    $("#button01").on("click",function(){
      seyhello();
    })
    
    $("#button02").on("click",function(){
      saysomething(txt1)
    })
    
    $("#button03").on("click",function(){
      samTwo(txt1,txt2)
    })
    
    $("#button04").on("click",function(){
      samTwo(num1,num2)
    })
    
    $("#button05").on("click",function(){
      samTwo(txt1,txt2)
      samTwo(num1,num2)
    })
    

})