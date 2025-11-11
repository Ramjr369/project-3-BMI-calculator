function calculateBMI()
{
    const heighti=document.getElementById("height").value;
    const weighti=document.getElementById("weight").value;
    const result=document.getElementById("result");

     const height=parseFloat(heighti);
     const weight=parseFloat(weighti);
    
     if(!height || !weight|| height<=0 || weight<=0)
     {
        result.textContent="Please enter valid height and weight.";
        result.style.color="red";
        return; 
     }

     const bmi=(weight/((height/100)**2)).toFixed(1);

     let category="";
     if(bmi<18.5)
     {
        category="Underweight (🦴 ஒல்லிக்குச்சி)";
        result.style.color="#ffa726";
     }

     else if(bmi<24.9)
     {
        category="Normal weight (💃 சிற்பம்)";
        result.style.color="#66bb6a";
     }
     else if(bmi<29.9)
     {
        category="Overweight (🐷 பன்றி)";
        result.style.color="#ffca28";
     }
     else{
        category="Obese (🐘 நீர்யானை)";
        result.style.color="#ef5350";
     }

     result.textContent=`BMI is ${bmi} ${category}`;


}