first = function() {
    xarr = [];
    yarr = [];
    tarr = [];

    //var txt = document.getElementById("txt");
    //var lbl = document.getElementById("lbl");
    //txt.value = "";

    var flag = false;

    for (var i = 0; i < rows.length; i++)
    //for (var i = 0; i < 100; i++) 
    {

        var xt, yt;

        var rxt = /((.*)( --> ))/;
        if (rows[i].match(rxt)) {
            xt = rows[i].match(rxt)[1];
            xt = xt.substring(0, xt.length - 9);
            //console.log(xt);
            flag = true;
        }

        var ryt = /(( --> )(.*))/;
        if (rows[i].match(ryt)) {
            yt = rows[i].match(ryt)[1];
            yt = yt.substring(5, yt.length - 4);
            //console.log(yt);
        }

        if (flag) {
            // txt.value += xt + '->' + yt + '\n';
            var st = "";
            i++;
            var rnxt = /(\d+)/;
            while (i < rows.length && (rows[i].match(rnxt) == null)) {
                // txt.value += rows[i] + '\n';
                st += rows[i] + '\n';
                i++;
            }

            xarr.push(xt);
            yarr.push(yt);
            tarr.push(st);

        }
    }
};

if(typeof rows === 'undefined') {
    person = prompt("copy paste content of ur subtitle file", "");
    rows = person.split("\n");
    first();
    //document.getElementById('masthead-positioner').style.display='none';
document.getElementById('page-container').style.zIndex='0';
document.getElementById('page-container').style.position = 'relative';
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
        sx = getsec(xarr[mid]);
        sy = getsec(yarr[mid]);
        secs = getsec(currtime);
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
    if (w.length > 2) return parseInt(w[0]) * 3600 + parseInt(w[1]) * 60 + parseInt(w[2]);
    else return parseInt(w[0]) * 60 + parseInt(w[1]);
}

timer = document.querySelector('.ytp-time-current');
disp=document.getElementById('banner');
funx = function() {
    curr = timer.innerHTML;
    res = bin_search(curr, 1, xarr.length);
    if (res > 0){
     //console.log(tarr[res]);
    disp.innerHTML=tarr[res];
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
