//final

javascript:$(".PagedList").css("display","-webkit-box"),$(".checklist_outer_box").css("display","none"),$(".layout_3col_left").css("display","none"),$("body").css("overflow-y","hidden"),$(".ContentWrapper").css("overflow-x","scroll"),$(".ContentWrapper").css("overflow-y","hidden"),$(".ContentWrapper").css("height","90%"),$(".ContentWrapper").css("width","90%"),$(".ContentWrapper").css("background-color","rgb(183, 247, 119)"),$(".PagedList").css("height","700px"),$(".PagedList").css("width","500px"),$(".pagedlist_item").css("padding","50px"),$(".pagedlist_item").css("overflow-y","overlay"),x=$(".ContentWrapper");var ss=function(e){e.wheelDelta>0?x.scrollLeft(x.scrollLeft()-350):x.scrollLeft(x.scrollLeft()+350)};x.attr("onmousewheel","ss(event)");

//-----------------------------------



     $('.PagedList').css('display','-webkit-box');
     $('.checklist_outer_box').css('display','none');
     $('.layout_3col_left').css('display','none');
     $('body').css('overflow-y','hidden');


     $('.ContentWrapper').css('overflow-x','scroll');
     $('.ContentWrapper').css('overflow-y','hidden');
     $('.ContentWrapper').css('height','90%');
     $('.ContentWrapper').css('width','90%');
     $('.ContentWrapper').css('background-color','rgb(183, 247, 119)');

     $('.PagedList').css('height','700px');
     $('.PagedList').css('width','500px');
     $('.pagedlist_item').css('padding','50px');
     $('.pagedlist_item').css('overflow-y','overlay');
     //$('.pagedlist_item').css('background-color','#E4E3DB');


//-----------------------------------------

     x=$('.ContentWrapper');
var ss=function(e){e.wheelDelta > 0 ? x.scrollLeft(x.scrollLeft()-350) : x.scrollLeft(x.scrollLeft()+350);}
x.attr('onmousewheel','ss(event)');


//----------------------------------------------------------------------------------------------------
