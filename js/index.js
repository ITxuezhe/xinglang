/**
 * Created by 杨靖 on 2017/7/23.
 */
    function slideDowms(parent,child) {
        $(parent).hover(function () {
            $(this).find(child).stop().slideToggle();
        })
    }
    function searchTxt(parents,parent,list) {
        $(parents).click(function(){
            $(parent).stop().toggle()
        });
        $(list).click(function(){
            $(parents).html($(this).html());
            $(parent).css("display","none");
        });
}


function fnTab(obj1,obj2,con,cons,even,a){
    var oBox=document.getElementsByClassName(obj1)[0];
    var oBoxs=document.getElementsByClassName(obj2)[0];
    var aInp=oBox.getElementsByTagName(con);
    var aDiv=oBoxs.getElementsByTagName(cons);


    for(var i=0;i<aInp.length;i++){

        aInp[i].index=i;

        aInp[i][even]=function(){
            for(var i=0;i<aInp.length;i++){
                aInp[i].className='';
                aDiv[i].className=(a);
            }

            this.className='active';
            //alert(this.index);
            aDiv[this.index].className='show';

        };
    }
}
function fnTab1(obj1,obj2,con1,con2,a,b,even,class1,class2){
    var oBox=document.getElementsByClassName(obj1)[a];

    var oBoxs=document.getElementsByClassName(obj2)[b];
    var aInp=oBox.getElementsByClassName(con1);

    var aDiv=oBoxs.getElementsByClassName(con2);

    for(var i=0;i<aInp.length;i++){

        aInp[i].index=i;
        aInp[i][even]=function(){

            for(var i=0;i<aInp.length;i++){

                aInp[i].className=(con1);
                aDiv[i].className=(con2);
            }

            this.className=(class1);
            //alert(this.index);
            aDiv[this.index].className=(class2);

        };
    }
}

$(function () {
    $("#qx").click(function () {
        this.checked?$(".quanxuan").prop("checked",true):$(".quanxuan").prop("checked",false)
    });
    $("#fx").click(function () {
        $(".quanxuan").each(function () {
            if(this.checked){
                this.checked=false;
            }else {
                this.checked=true;
            }
        })
    })

    $("#xs").click(function () {
       $(".quanxuan").each(function () {
           if(this.checked){
               $(this).parents("label").remove()
           }
       })
    })
})
