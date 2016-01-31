
function make(){
	var mx = document.createElement('div');
	mx.setAttribute('id','menu');
	mx.setAttribute("style","position: fixed;background-color: rgb(255, 255, 255);width: 75px; height: 100px; opacity: 0.8; font-size: large;");
	var ar = document.createElement('a');
	ar.setAttribute('href', "#d1");
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
	document.body.appendChild(player);

	var media = document.createElement('div');
	media.setAttribute('id','media');
	media.setAttribute('style',"width: 1000px; height:130px;overflow: scroll;white-space: nowrap; overflow-y:hidden;");
	var m1=document.createElement('div');
	m1.setAttribute('id','m1');
	media.appendChild(m1);
	var sp1=document.createElement('div');
	sp1.setAttribute('style','height:50%;');
	//media.appendChild(sp1);
	main.appendChild(media);
	main.appendChild(sp1);

	var d1 = document.createElement('div');
	d1.setAttribute('id','d1');
	d1.setAttribute('style',"width: 1000px; height:130px;overflow: scroll;white-space: nowrap; overflow-y:hidden;");
	var content=document.createElement('div');
	content.setAttribute('id','content');
	content.setAttribute('style','width: 1000px; height:500px;overflow: scroll;white-space: nowrap;');

	var p1=document.createElement('div');
	p1.setAttribute('id','p1');
	content.appendChild(p1);
	
	main.appendChild(d1);
	main.appendChild(content);

	var sp2=document.createElement('div');
	sp2.setAttribute('style','height:50%;');
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

			innerDiv.setAttribute("style"," display: inline-block;/*float: left;*//*height: 100px;*/ max-height: 100px;width: 100px;max-width:110px;margin: 3;overflow: hidden; /* background-image: url(images.jpg); */word-wrap: break-word;border: 1px solid #AAEAAA;background-color: #C5F482;/* for sentence overflow */  white-space: pre-wrap;");


			innerDiv.id='pic'+xi.toString();
			xi++;
			var xidiv=document.getElementById('p1'.toString());
			var ht = "<img src='"+res[i]+"'></img><br>";
			innerDiv.innerHTML=ht;
			innerDiv.setAttribute("onclick","window.location.href='"+res[i]+"';");
			innerDiv.setAttribute("onclick","javascript:expand("+(xi-1).toString()+");");
			xidiv.appendChild(innerDiv);
		}
		if(res[i].match(/mp3|mp4|avi$/) != null){
			var innerDiv = document.createElement('div');
			innerDiv.setAttribute("style"," display: inline-table;/*float: left;*//*height: 100px;*/ max-height: 100px;width: 100px;max-width:110px;margin: 3;overflow: hidden; /* background-image: url(images.jpg); */word-wrap: break-word;border: 1px solid #AAEAAA;background-color: #C5F482;/* for sentence overflow */  white-space: pre-wrap;");

			innerDiv.id='s'+mi.toString();
			mi++;
			var xmdiv=document.getElementById('m1'.toString());
			innerDiv.innerHTML+="<br>"+res[i];
			innerDiv.setAttribute("onclick","javascript:play('"+res[i]+"','"+innerDiv.id+"');");
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
	w1.style.opacity = '0.1';
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
	m=document.body.innerHTML.match(/href=\"(.+?)\"/g);
	x=[];
	for(i=0;i<m.length;i++)x[i]=(/href=\"(.+?)\"/g.exec(m[i])[1]);
	document.body.innerHTML="";
	res=x.sort();
	make();
	dox();
	hide();
	expand(1);