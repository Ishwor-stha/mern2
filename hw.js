const reverseDisp=(arr)=>{
	//arr.sort((a,b)=> b-a)
	arr.reverse()
	arr.map((num)=> console.log(num))

}
let arr=[5,6,2,3,1,4,11,32]
reverseDisp(arr)
