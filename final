
function make(){
	var mx = document.createElement('div');
	mx.setAttribute('id','menu');
	mx.setAttribute("style","position: fixed;background-color: rgb(190, 255, 7);width: 100px; height:20px; opacity: 0.8; font-size: large;");
	var ar = document.createElement('a');
	ar.setAttribute('href', "#content");
	ar.setAttribute('style','margin-right:15px;');
	ar.appendChild(document.createTextNode("pics"));
	mx.appendChild(ar);
	var br = document.createElement('a');
	br.setAttribute('href', "#player");
	br.appendChild(document.createTextNode("music"));
	mx.appendChild(br);
	document.body.appendChild(mx);

	//<div id='player' style="width: 1000px; height:400px;">
	var main=document.createElement('div');
	main.setAttribute("align","center");

	var player = document.createElement('div');
	player.setAttribute('id','player');
	player.setAttribute('style',"width: 1000px; height:400px;");
	main.appendChild(player);

	var media = document.createElement('div');
	media.setAttribute('id','media');
	media.setAttribute('style',"width: 1000px; height:130px;overflow: scroll;white-space: nowrap; overflow-y:hidden;");
	var m1=document.createElement('div');
	m1.setAttribute('id','m1');
	media.appendChild(m1);
	var sp1=document.createElement('div');
	sp1.setAttribute('style','height:700px;');
	sp1.setAttribute('id','sp1');
	//media.appendChild(sp1);
	main.appendChild(media);
	main.appendChild(sp1);

	var d1 = document.createElement('div');
	d1.setAttribute('id','d1');
	d1.setAttribute('style',"max-width: 700px; max-height:700px;overflow: scroll;white-space: nowrap; overflow-y:hidden;");

	var content=document.createElement('div');
	content.setAttribute('id','content');
	content.setAttribute('style','width: 1000px; height:120px;overflow: scroll;white-space: nowrap;overflow-y: hidden;');

	var p1=document.createElement('div');
	p1.setAttribute('id','p1');
	content.appendChild(p1);

	main.appendChild(content);
	main.appendChild(d1);
	

	var sp2=document.createElement('div');
	sp2.setAttribute('id','sp2');
	sp2.setAttribute('style','height:700px;');
	main.appendChild(sp2);

	document.body.appendChild(main);

}
function hide(){
	//$('#list').attr("style","display:none;");
	//document.getElementById('list').setAttribute("style","display:none;");
}
function dox(){
	var xi=0,mi=0;
	for(var i=0;i<res.length;i++){
		if(res[i].match(/png|jpg|jpeg$/) != null){
			var innerDiv = document.createElement('div');

			innerDiv.setAttribute("style"," display:inline-block; margin:3px;/*float:left;*//*height:100px;*/ max-height: 100px;width: 100px;max-width:110px;overflow: hidden; /* background-image: url(images.jpg); */word-wrap: break-word;border: 1px solid #AAEAAA;background-color: #C5F482;/* for sentence overflow */  white-space: pre-wrap;");


			innerDiv.id='pic'+xi.toString();
			xi++;
			var xidiv=document.getElementById('p1'.toString());
			var ht = "<img src='"+escape(res[i])+"' style='height:100%;width:100%;display:inline-block'></img><br>";
			innerDiv.innerHTML=ht;
			innerDiv.setAttribute("onclick","window.location.href='"+res[i]+"';");
			innerDiv.setAttribute("onclick","javascript:expand("+(xi-1).toString()+");");
			xidiv.appendChild(innerDiv);
		}
		if(res[i].match(/mp3|mp4|avi$/) != null){
			var innerDiv = document.createElement('div');
			innerDiv.setAttribute("style"," display: inline-table;/*float: left;*//*height: 100px;*/ max-height: 100px;width: 100px;max-width:110px;margin: 3px;overflow: hidden; /* background-image: url(images.jpg); */word-wrap: break-word;border: 1px solid #AAEAAA;background-color: #C5F482;/* for sentence overflow */  white-space: pre-wrap;");

			innerDiv.id='s'+mi.toString();
			mi++;
			var xmdiv=document.getElementById('m1'.toString());
			innerDiv.innerHTML+="<br>"+res[i];
			innerDiv.setAttribute("onclick","javascript:play('"+escape(res[i])+"','"+innerDiv.id+"');");
			xmdiv.appendChild(innerDiv);
		}
	}
}
function play(src,xid){
	var pl = document.getElementById('player');
	pl.innerHTML="<video width='1000px' height='400px' controls='' autoplay='' name='media'><source src='"+src+"' type='video/mp4'></video>";
}
function expand(idx){
	var w1= document.getElementById('content');
	var d1 = document.getElementById('d1');
	var div1 = document.getElementById('pic'+idx);
	d1.innerHTML=div1.innerHTML;
	d1.style.display='inline-table';
	//d1.style.width='400px';
	//d1.style.height='400px';
	w1.style.opacity = '0.5';
	d1.style.opacity ='1';
}
function ret(){
	var d1 = document.getElementById('d1');
	var w1= document.getElementById('content');
	w1.style.opacity = '1';
	d1.style.display='none';
}

	var cdiv=document.getElementById('content');
	var mdiv=document.getElementById('media');
	rx=/<a.+?>(.+?)<\/a>/g;
	wx=/>(.+?)</;
	m=document.body.innerHTML.match(rx);
	x=[];
	for(i=0;i<m.length;i++)x[i]=wx.exec(m[i])[1];
	document.body.innerHTML="";
	res=x.sort();
	make();
	dox();
	hide();
	expand(1);