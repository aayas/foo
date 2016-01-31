javascript: function make() {
    document.body.setAttribute('style', 'font-family:sans serif;font-size:12px;');
    document.head.innerHTML = "<style></style>";
    st = document.head.getElementsByTagName('style')[0].innerHTML += ".item{display:flex;}";
    var e = document.createElement("div");
    e.setAttribute("id", "menu"), e.setAttribute("style", "position: fixed;background-color: rgb(190, 255, 7);width: 100px; height:20px; opacity: 0.8; font-size: large;");
    var t = document.createElement("a");
    t.setAttribute("href", "#content"), t.setAttribute("style", "margin-right:15px;"), t.appendChild(document.createTextNode("pics")), e.appendChild(t);
    var n = document.createElement("a");
    n.setAttribute("href", "#player"), n.appendChild(document.createTextNode("music")), e.appendChild(n), document.body.appendChild(e);
    var i = document.createElement("div");
    i.setAttribute("align", "center");
    var d = document.createElement("div");
    d.setAttribute("id", "player"), d.setAttribute("style", "opacity:0.4;position:fixed;width:100%;height:3%;"), i.appendChild(d);
    var o = document.createElement("div");
    o.setAttribute("id", "media"), o.setAttribute("style", "padding-top:3%; white-space: nowrap; overflow:hidden;");
    var r = document.createElement("div");
    r.setAttribute("id", "m1"), o.appendChild(r);
    var l = document.createElement("div");
    l.setAttribute("style", "height:700px;"), l.setAttribute("id", "sp1"), i.appendChild(o), i.appendChild(l);
    var a = document.createElement("div");
    a.setAttribute("id", "d1"), a.setAttribute("style", "max-width: 1000px; max-height:1000px;overflow: scroll;white-space: nowrap; overflow-y:hidden;");
    var c = document.createElement("div");
    c.setAttribute("id", "content"), c.setAttribute("style", "width: 1200px; height:100px;white-space: nowrap;overflow: scroll;padding-bottom: 20px;");
    var p = document.createElement("div");
    p.setAttribute("id", "p1"), c.appendChild(p), i.appendChild(c), i.appendChild(a);
    var m = document.createElement("div");
    m.setAttribute("id", "sp2"), m.setAttribute("style", "height:700px;"), i.appendChild(m), document.body.appendChild(i)
}

function next() {
    num = document.getElementById("p1").childNodes.length, CURR = (CURR + 1) % num, expand(CURR)
}

function whx(e, t) {
    x = document.getElementById(t), document.body.style.overflow = "hidden", e.preventDefault(), x.doScroll ? x.doScroll(e.wheelDelta > 0 ? "left" : "right") : (e.wheelDelta || e.detail) > 0 ? x.scrollLeft -= 400 : x.scrollLeft += 400, document.body.style.overflow = "scroll"
}

function last() {
    document.getElementById("d1").setAttribute("onclick", "next();"), document.getElementById("media").setAttribute("onmousewheel", "whx(event,'media');"), document.getElementById("content").setAttribute("onmousewheel", "whx(event,'content');")
}

function hide() {}

function dox() {
    for (var e = 0, t = 0, nn = 0; nn < res.length; nn++) {
        qq = res[nn];
        if (null != qq.match(/png|jpg|jpeg|gif$/)) {
            var i = document.createElement("div");
            i.setAttribute("style", " display:inline-block; margin:3px;float:left;/*height:100px;*/ max-height: 100px;width: 100px;max-width:110px;overflow: hidden; /* background-image: url(images.jpg); */word-wrap: break-word;border: 1px solid #AAEAAA;background-color: #C5F482;/* for sentence overflow */  white-space: pre-wrap;"), i.id = "pic" + e.toString(), e++;
            var d = document.getElementById("p1".toString()),
                o = "<img id='xx' src='" + window.location + "/" + qq + "' style='height:100%;width:100%;display:inline-block'></img><br>";
            i.innerHTML = o, i.setAttribute("onclick", "window.location.href='" + qq + "';"), i.setAttribute("onclick", "javascript:expand(" + (e - 1).toString() + ");"), d.appendChild(i)
        }
        if (null != qq.match(/mp3|mp4|mkv$/)) {
            var i = document.createElement("div");
            i.setAttribute("style", " float: left;/*height: 100px;*/ max-height: 100px;width: 100px;max-width:110px;margin: 3px;overflow: hidden; /* background-image: url(images.jpg); */word-wrap: break-word;border: 1px solid #AAEAAA;background-color: #C5F482;/* for sentence overflow */  white-space: pre-wrap;"), i.setAttribute("class", "item"), i.id = "s" + t.toString(), t++;
            var r = document.getElementById("m1".toString());
            i.innerHTML += "<br>" + qq, i.setAttribute("onclick", "javascript:play('" + window.location + "/" + qq + "','" + i.id + "');"), r.appendChild(i)
        }
    }
}

function play(e, t) {
    var n = document.getElementById("player");
    n.innerHTML = "<video style='width: 80%; height: 80%;' controls='' autoplay=''><source src='" + e + "' type='video/mp4'></video>"
}

function expand(e) {
    if (CURR = e, document.getElementById("p1").childNodes.length > 0) {
        var t = document.getElementById("content"),
            n = document.getElementById("d1"),
            i = document.getElementById("pic" + e);
        n.innerHTML = i.innerHTML, n.style.display = "inline-table", t.style.opacity = "0.5", n.style.opacity = "1"
    }
}

function ret() {
    var e = document.getElementById("d1"),
        t = document.getElementById("content");
    t.style.opacity = "1", e.style.display = "none"
}
CURR = 0;
var cdiv = document.getElementById("content"),
    mdiv = document.getElementById("media");
for (rx = /<a.+?>(.+?)<\/a>/g, wx = /><.+?>(.+?)</, m = document.body.innerHTML.match(rx), x = [], i = 0, cnt = 0; i < m.length; i++) {
    rr = wx.exec(m[i]);
    if (rr !== null)
        x[cnt++] = rr[1];
}
document.body.innerHTML = "", res = x.sort();
make();
dox();
hide();
expand(1);
last();
