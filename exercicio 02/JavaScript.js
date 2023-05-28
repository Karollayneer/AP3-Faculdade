function calculateSalary() {
    var hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    var hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    var resultElement = document.getElementById('result');
    
    var grossSalary = hourlyRate * hoursWorked;
    var ir = grossSalary * 0.11;
    var inss = grossSalary * 0.08;
    var sindicato = grossSalary * 0.05;
    var netSalary = grossSalary - ir - inss - sindicato;
  
    resultElement.innerHTML = `
      Salário Bruto: R$ ${grossSalary.toFixed(2)}<br>
      Descontos:<br>
      - IR (11%): R$ ${ir.toFixed(2)}<br>
      - INSS (8%): R$ ${inss.toFixed(2)}<br>
      - Sindicato (5%): R$ ${sindicato.toFixed(2)}<br>
      Salário Líquido: R$ ${netSalary.toFixed(2)}
    `;
  }
  