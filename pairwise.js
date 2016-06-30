function pairwise(arr,arg){
	var retArr=[];
	var indexes=[];
	for(var i=0;i<arr.length;i++){
		for(var m=i+1;m<arr.length;m++){
			if((arr[i]+arr[m]===arg)&&(indexes.includes(i)===false)&&(indexes.includes(m)===false)){
				retArr.push(arr[i],arr[m]);
				indexes.push(i,m);
			}
		}
	}
	if(retArr.length<1){
		return 0;
	}
	//return retArr;
	return indexes.reduce(function(prev,curr){return prev+curr});
}