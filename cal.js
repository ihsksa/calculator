function calculateTip() {
      let bill = Number(document.getElementById("bill").value);
      let tipPercent = Number(document.getElementById("tip").value);

      let tipAmount = (bill * tipPercent) / 100;
      let totalAmount = bill + tipAmount;

      document.getElementById("result").innerHTML = 
        
        "Total amount need to pay: " + totalAmount.toFixed(2);
    }
