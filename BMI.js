let form=document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
	let height=parseInt(document.querySelector("#height").value);
	let weight=parseInt(document.querySelector("#weight").value);
	let result=document.querySelector("#result");
	if((height==='') || (height<0) || (isNaN(height))){
		result.innerHTML="ender the correct height";
		result.style.color="red"
	}
	else if((weight==='') || (weight<0) || (isNaN(weight))){
		result.innerHTML="ender the correct weight";
		result.style.color="red"
	}
	else{
		let bmi=Math.round((weight)/((height**2)/10000));
		if(1<=bmi && 18>=bmi){
			result.innerHTML=`<p>your BMI is:${bmi},you are the under weight</p>`;
			result.style.color="yellow"
		}
		if(18<bmi && 24>=bmi){
			result.innerHTML=`<p>your BMI is:${bmi},you are the normal weight</p>`;
			result.style.color="green"
		}
		if(25<=bmi && bmi==bmi){
			result.innerHTML=`<p>your BMI is:${bmi},you are the over weight</p>`;
			result.style.color="red"
		}
	}
});