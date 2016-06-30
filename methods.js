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
	//return retArr;
	return indexes;
}

//sumFinder([1,4,2,3,0,5],7);
//sumFinder([0, 0, 0, 0, 1, 1], 1); //0,4,1,5,
//sumFinder([1, 1, 1], 2);