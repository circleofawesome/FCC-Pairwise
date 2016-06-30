// returns array with all the numbers that sum to the target numbers

function sumFinder(arr,target){
	var retArr=[];
	for(var i=0;i<arr.length;i++){
		for(var m=i+1;m<arr.length;m++){
			if(arr[i]+arr[m]===target){
				retArr.push(arr[i],arr[m]);
			}
		}
	}
	return retArr;
}

sumFinder([1,4,2,3,0,5],7);
