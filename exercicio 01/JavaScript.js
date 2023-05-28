function calculateWeight() {
    var height = parseFloat(document.getElementById('height').value);
    var gender = document.getElementById('gender').value;
    var resultElement = document.getElementById('result');
    var weight;
  
    if (gender === 'male') {
      weight = (72.7 * height) - 58;
    } else if (gender === 'female') {
      weight = (62.1 * height) - 44.7;
    }
  
    resultElement.innerHTML = 'Seu peso ideal é: ' + weight.toFixed(2) + ' kg';
  }
  