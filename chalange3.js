let teamDolphin=[96,108,100]
let teamKolas=[110,91,88]
function checkScore(teamDolphin,teamKolas){
	let averageDolphin=(teamDolphin[0]+teamDolphin[1]+teamDolphin[2])/3
	let averageKolas=(teamKolas[0]+teamKolas[1]+teamKolas[2])/3
	let minimumScore=100;
	
	if(averageDolphin>averageKolas && averageDolphin>=minimumScore){
		return `Congratulation Dolphins your score is ${averageDolphin.toFixed(2)} and you won the trophy`
	
	}
	else if(averageDolphin<averageKolas && averageKolas>=minimumScore){
		return `Congratulation Kolas your score is ${averageKolas.toFixed(2)} and you won the trophy`

	}
	else if(averageDolphin===averageKolas && averageDolphin>=minimumScore){
		return `The match is draw and the average score is${averageDolphin.toFixed(2)}`

	}	
	else{
	
		return `To be qualified for trofy or draw you must reach minimum score of ${minimumScore}`

	}	



}
console.log(checkScore(teamDolphin,teamKolas))
