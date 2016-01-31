a=[23,4,55,66,23,12,31,78,34,57,245,732,33,11,15];
x=[];
for(e=1;e<1000;e*=10){
	b=[];x=[];
	for(i=0;i<10;i++)x[i]=0;
	for(i=0;i<a.length;i++){
		r=parseInt(a[i]/e%10);
		x[r]++ ;
	}
	for(i=1;i<10;i++) x[i]+=x[i-1];
	for(i=a.length-1;i>=0;i--){
		r=parseInt(a[i]/e%10);
		b[x[r]-1]=a[i];
		x[r]--;
	}
	st='';
	for(i=0;i<a.length;i++){
		st+=b[i]+' ';a[i]=b[i];
	}
	console.log(st);
    console.log(x);
}