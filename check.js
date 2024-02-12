const contains=(word,letter)=>{
	word=[...word]
	
	let check=word.reduce((acc,curr)=>{
		if(letter===curr){
			console.log(acc)
			 acc++
			
		}
		return acc
			
	},0)
	return `there are ${check} ${letter}`

}
console.log(contains("hello","l"))
