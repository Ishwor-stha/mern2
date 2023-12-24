function checkBmi(name1,name1Height,name1Weight,name2,name2Height,name2Weight){
	let name1Bmi=(name1Weight/(name1Height**2)).toFixed(2)
	let name2Bmi=(name2Weight/(name2Height**2)).toFixed(2)
       return(name1Bmi>name2Bmi)?`${name1} BMI ${name1Bmi} is higher than ${name2} BMI ${name2Bmi}! ` :`${name2} BMI ${name2Bmi} is higher than ${name1} BMI ${name1Bmi}! `

}
console.log(checkBmi('john',1.76,85,'Mark',1.88,95))

