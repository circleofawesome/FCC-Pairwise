// returns array with all the numbers that sum to the target numbers

function sumFinder(arr,target){
	var retArr=[];
	var indexes=[];
	for(var i=0;i<arr.length;i++){
		for(var m=i+1;m<arr.length;m++){
			if((arr[i]+arr[m]===target)&&(indexes.includes(i)===false)&&(indexes.includes(m)===false)){
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

sumFinder([1,4,2,3,0,5],7);
//sumFinder([0, 0, 0, 0, 1, 1], 1); //0,4,1,5,
//sumFinder([1, 1, 1], 2);
//sumFinder([], 100);


//works, just changed the name of the function for the main assignment 