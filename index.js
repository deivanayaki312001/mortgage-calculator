var a = document.getElementById("n-amt")
var b = document.getElementById("n-years")
var c = document.getElementById("n-interest")
var d = document.getElementsByName("type")
var monthly = document.getElementById("monthly")
var total = document.getElementById("total")
var second = document.getElementById("second")
var z = document.getElementsByTagName("input")
document.getElementById("second-result").style.display = 'none'
var radioval;


document.getElementById("repay").addEventListener("click", function() {
    document.getElementById("Repayment-container").style.backgroundColor = "rgb(214, 214, 250)"
    document.getElementById("Interest-only-container").style.backgroundColor = "white"

})
document.getElementById("interest").addEventListener("click", function() {
    document.getElementById("Repayment-container").style.backgroundColor = "white"

    document.getElementById("Interest-only-container").style.backgroundColor = "rgb(214, 214, 250)"

})
mortgage = function(interest, years, principal) {
    for (j = 0; j < d.length; j++) {
        if (d[j].checked) {
            radioval = d[j].value
            break;
        }
    }
    if (interest == "" || years == "" || principal == "") {
        alert("Please fill out all the required fields")
    } else {
        if (radioval == 'Repayment') {

            var monthlyRepayment = principal * interest * Math.pow((1 + interest), years) / (Math.pow((1 + interest), years) - 1)
            var total_repayment = years * monthlyRepayment;
            console.log(monthlyRepayment);
            console.log(total_repayment);
            monthly.textContent = "₹ " + Math.floor(monthlyRepayment);
            total.textContent = "₹ " + Math.floor(total_repayment);
        } else if (radioval == 'Interest only') {
            var interest_only_monthly = principal * interest;
            var interest_repayment = interest_only_monthly + principal;
            console.log(interest_only_monthly);
            console.log(interest_repayment);
            monthly.textContent = "₹ " + Math.floor(interest_only_monthly);
            total.textContent = "₹ " + Math.floor(interest_repayment);
        } else {
            alert('select mortgage type')
        }
        return monthlyRepayment;
    }
}



document.getElementById("calculate").addEventListener("click", function() {

    second.style.display = 'none'
    document.getElementById("second-result").style.display = 'flex'
    var a_value = parseFloat(a.value)
    var b_value = parseFloat(b.value * 12);
    var c_value = parseFloat((c.value / 100) / 12);
    mortgage(c_value, b_value, a_value);

});
var clearall = function() {
    for (k = 0; k < inputs.length; k++) {
        if (inputs[k].type == 'radio') {
            inputs[k].checked = false;
        } else inputs[k].value = "";
    }
    document.getElementById("Repayment-container").style.backgroundColor = "white"
    document.getElementById("Interest-only-container").style.backgroundColor = "white"
    document.getElementById("second-result").style.display = 'none'
    document.getElementById("second").style.display = 'flex'
}
var inputs = document.getElementsByTagName("input")
document.getElementById("clear-all").addEventListener("click", clearall);