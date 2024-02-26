
function clearBox(){
    weight.value='';
    height.value='';
    age.value='';
    result.value=''
}

 
    
    document.getElementById('form').onsubmit = function() 
    // function calculate() 
    {
        // Get user inputs
        let weight = document.getElementById('weight').value;
        let height =document.getElementById('height').value / 100; // Convert height to meters
    
        
    
        // Calculate BMI
        let bmi = weight / (height * height);
    
        // Display the result
        let resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2)+ '  kg/m²';
    
        // Interpretation of BMI
        let status = '';
        if (bmi < 18.5) {
            status = '<div style="color: yellow; font-weight: 900; background-color: white;" id="result">Underweight  <i class="fa-regular fa-face-surprise fa-beat"></i></div>';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = '<div style="color: green; font-weight: 900; background-color: white;" id="result">Normal weight  <i class="fa-regular fa-face-smile-beam fa-beat"></i></div>';
        } else if (bmi >= 25 && bmi < 29.9) {
            status = '<div style="color: orange; font-weight: 900; background-color: white;" id="result">Overweight  <i class="fa-regular fa-face-surprise fa-beat"></i></div>' ;
        } else if (bmi >= 30 && bmi < 34.9) {
                status = '<div style="color: red; font-weight: 900; background-color: white;" id="result">Obese  <i class="fa-regular fa-face-dizzy fa-beat"></i></div>';
        }    else {
            status = '<div style="color: red; font-weight: 900; background-color: white;" id="result">Extremly Obese  <i class="fa-regular fa-face-dizzy fa-beat"></i></div>';
        }
    
        // Display interpretation
        resultElement.innerHTML += '<br>' + 'BMI status: ' + status;
        return false;
    }
    