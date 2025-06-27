const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
     const result = document.querySelector('#results');
     const feedback = document.querySelector('#feedback');
    if(height === ''|| height<0 || isNaN(height)){
 result.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight === ''|| weight<0 || isNaN(weight)){
 result.innerHTML = `please give a valid weight ${weight}`;
    }
    
       const bmi= (weight/((height*height)/10000)).toFixed(2)
       //show the result
       result.innerHTML = `<span>${bmi}</span>`

    if(bmi<18.6){
     feedback.innerHTML = `<span> your are underweight as your Height is ${height} cm and Weight is ${weight} cm and your BMI is${bmi} </span>`
    } 
    else if(bmi<=24.6){
        feedback.innerHTML = `<span>You are in Normal range Your Height is ${height}cm and your Weight is ${weight} cm so your BMI is ${bmi} </span>`
    }
    else{
                feedback.innerHTML = `<span>You are in Overweight  Your Height is ${height}cm and your Weight is ${weight}cm so your BMI is ${bmi} </span>`

    }
});
