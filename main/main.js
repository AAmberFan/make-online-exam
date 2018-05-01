function main(){
	let score = 0;
	let user = document.getElementById('Name');
	if (user.value=="") {
		alert("请输入姓名");
	}
	let printScore = document.getElementById('score').children;
	score = calculateScore();
	printScore[0].innerHTML = user.value;
	printScore[2].innerHTML = score;
	// let printScore = document.createElement('p');
	// var txt = document.createTextNode(`${user}'s score is ${score}`);
	// printScore.appendChild(txt);
	// document.getElementById("Filling").appendChild(printScore);
}
function calculateScore(){
	let fillQuestion = document.getElementById("Filling");
	let score=calculateFirstPart();
	score+=calculateSecondPart();
	score += calculateThird();
	score += calculateForth();
	score += calculateFifth();
	return score;
}
function calculateFirstPart(){
	let score = 0;
	let answer1 = document.getElementById('first1').value.trim();
	if(/^统一建模语言$/.test(answer1)){
		score+=5;
	}
	let answer2 = [];
	answer2.push(document.getElementById("first21").value.trim());
	answer2.push(document.getElementById("first22").value.trim());
	answer2.push(document.getElementById("first23").value.trim());
	for( let i of answer2){
		if((/^封装性$/.test(i))|(/^继承性$/).test(i)|(/^多态性$/).test(i) ){
			score+=5;
		}
	}
	return score;
}
function calculateSecondPart(){
	let score = 0;
	let question1 = document.getElementById("chioce1option2").checked;
	if(question1==true){
		score+=10;
	}
	let question2 = document.getElementById('singleChoice2');
	//console.log(question2.getElementsByTagName('input')[0].checked);
	if(question2.getElementsByTagName('input')[0].checked == true){
		score+=10;
	}
	return score;
}
function calculateThird(){
	let score = 0;
	let quiz1 = (document.getElementById('multiChoice1')).getElementsByTagName('input');
	if(quiz1[0].checked==true && quiz1[1].checked==true && quiz1[3].checked== true && quiz1[2].checked== false){
		score +=10 ;
	}
	let quiz2 = (document.getElementById('multiChoice2')).getElementsByTagName('input');
	if(quiz2[0].checked==true && quiz2[1].checked==true && quiz2[2].checked== true && quiz2[3].checked== false){
		score +=10;
	}
return score;
}
function calculateForth(){
	let score = 0;
	let quiz1 = (document.getElementById('judge1')).getElementsByTagName('input');
	if(quiz1[1].checked){
		score+=10;
	}
	let quiz2 = (document.getElementById('judge2')).getElementsByTagName('input');
	if(quiz2[0].checked){
		score+=10;
	}
	return score;
}
function calculateFifth(){
	let score = 0;
	let ans = document.getElementById("shortAnswer").value.trim();
	if(/^模型是对现实世界的简化和抽象/.test(ans)){
		score+=20;
	}
	return score;
}
