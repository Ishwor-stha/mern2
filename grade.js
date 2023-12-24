function checkGrade(math,script,english,java,Account){

	let grade=((math+script+english+java+Account)/500)*100
	
	switch(true){
		case(grade>90 && grade<=100):
			return "You got A+"	
		case(grade>80 && grade<=90):
			return "You got A "	
		case(grade>70 && grade<=80):
			return "You got B+"	
		case(grade>50 && grade<=70):
			return "You got B"
		default:
			return "You failed"
	}	

}
console.log(checkGrade(80,70,96,55,36))
