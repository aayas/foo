first = function() {
    xarr = [0];
    yarr = [];
    tarr = [];

    //var txt = document.getElementById("txt");
    //var lbl = document.getElementById("lbl");
    //txt.value = "";


    for (var i = 1; i < rows.length; i++)
    //for (var i = 0; i < 100; i++) 
    {

        var xt, yt;

        if (rows[i].match(/\d\d:\d\d:\d\d/g)) {
            xt = rows[i].match(/\d\d:\d\d:\d\d/g)[1];
            //console.log(xt);
        }

        if (rows[i].match(/\d\d:\d\d:\d\d/g)) {
            yt = rows[i].match(/\d\d:\d\d:\d\d/g)[0];
            //console.log(yt);
        }


            // txt.value += xt + '->' + yt + '\n';
            var st = "";
            st = rows[i].substr(13,rows[i].length-29);

            xarr.push(xt);
            yarr.push(yt);
            tarr.push(st);


    }
};

if(typeof rows === 'undefined') {
    person = prompt("copy paste content of ur subtitle file", "");
    rows = person.split(" --> ");
    first();
    //document.getElementById('masthead-positioner').style.display='none';
//document.getElementById('page-container').style.zIndex='0';
//document.getElementById('page-container').style.position = 'relative';
if(document.getElementById('banner')===null)
document.body.insertAdjacentHTML("afterBegin","<div id='banner' style='position:absolute;top:7%;width:100%;text-align:center;z-index:1;font-size:15px;  color: #9DD189;'></div>");
 
}


//binary search
function bin_search(currtime, beg, end) {
    cnt = 0;
    while (beg <= end) {
        //console.log(beg.toString()+"-"+end.toString());
        if (cnt++ > 13) {
            break;
        }
        mid = parseInt((beg + end) / 2);

        //console.log(xarr[mid].toString()+"-"+yarr[mid].toString());
        sx = getsec(xarr[mid-1]);
        sy = getsec(yarr[mid]);
        secs = currtime;
        if (sx <= secs && sy >= secs) return mid;
        if (sx < secs && sy < secs) beg = mid;
        if (sx > secs && sy > secs) end = mid;
        if (beg == end) {
            console.log('last');
            break;
        }
    }
    return -1;
}

function getsec(st) {
    //console.log(st);
    w = st.split(':');
    if(w[0] < 0) // time remaining indicator case
    {
        MOVIETIME= 1 * 3600 + 49 * 60 + 5; // 1:49:05
        return MOVIETIME + parseInt(w[0]) * 3600 + parseInt(w[1]) * 60 + parseInt(w[2]);
    }

    if (w.length > 2) return parseInt(w[0]) * 3600 + parseInt(w[1]) * 60 + parseInt(w[2]);
    else return parseInt(w[0]) * 60 + parseInt(w[1]);
}
var vid = document.getElementById("my-video"); // html5 player -- iframe source copied and made as html file.
disp=document.getElementById('banner');
funx = function() {
    //current timer display div in player
    //curr = document.querySelector('.vjs-remaining-time-display').innerHTML.match(/-\d:\d\d:\d\d/g);
    
    curr=parseInt(vid.currentTime);
    res = bin_search(curr, 1, xarr.length);
    if (res > 0){
     //console.log(tarr[res]);
    disp.innerHTML=tarr[res-1];
   }
   else disp.innerHTML="";
};



if(typeof refreshIntervalId !== 'undefined') clearInterval(refreshIntervalId);      
refreshIntervalId = setInterval(funx, 3000);



/*
clearInterval(refreshIntervalId);                           
refreshIntervalId = setInterval(function(){
    curr=$('.ytp-time-current').innerHTML;
    res=bin_search(curr,1,xarr.length);
    res > 0 ? console.log(tarr[res]) : console.log('no sub');
}, 1000);
*/