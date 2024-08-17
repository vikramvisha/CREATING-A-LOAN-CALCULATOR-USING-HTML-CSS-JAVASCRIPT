function calculateLoan() {
    // Get input values
    const amount = parseFloat(document.getElementById('amount').value);
    const annualInterestRate = parseFloat(document.getElementById('interest').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    // Calculate monthly interest rate and number of payments
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = years * 12;

    // Calculate the monthly payment using the formula
    const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const monthlyPayment = (amount * monthlyInterestRate * x) / (x - 1);

    // Calculate total payment and total interest
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - amount;

    // Update the result in the HTML
    document.getElementById('payment').innerText = monthlyPayment.toFixed(2);
    document.getElementById('total-payment').innerText = totalPayment.toFixed(2);
    document.getElementById('total-interest').innerText = totalInterest.toFixed(2);
}
