function calculateRent() {
    // Evaluate the initial cost expression and update the corresponding <p> element
    var initialCost = evaluateExpression('initialCost', 'initialCostOutput');

    // Calculate the number of days rented for each person and update the corresponding <p> element
    var d1 = calculateDays('daysRented1', 'P1Days');
    var d2 = calculateDays('daysRented2', 'P2Days');
    var d3 = calculateDays('daysRented3', 'P3Days');
    var d4 = calculateDays('daysRented4', 'P4Days');
    var d5 = calculateDays('daysRented5', 'P5Days');
    var d6 = calculateDays('daysRented6', 'P6Days');
    var d7 = calculateDays('daysRented7', 'P7Days');
    var d8 = calculateDays('daysRented8', 'P8Days');

    // Calculate the total number of days rented
    var totalDays = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8;

    // Calculate and display each person's cost
    if (totalDays > 0 && initialCost !== "Invalid input") {
        document.getElementById('P1Cost').innerHTML = "P1 Cost: " + (initialCost * (d1 / totalDays)).toFixed(2);
        document.getElementById('P2Cost').innerHTML = "P2 Cost: " + (initialCost * (d2 / totalDays)).toFixed(2);
        document.getElementById('P3Cost').innerHTML = "P3 Cost: " + (initialCost * (d3 / totalDays)).toFixed(2);
        document.getElementById('P4Cost').innerHTML = "P4 Cost: " + (initialCost * (d4 / totalDays)).toFixed(2);
        document.getElementById('P5Cost').innerHTML = "P5 Cost: " + (initialCost * (d5 / totalDays)).toFixed(2);
        document.getElementById('P6Cost').innerHTML = "P6 Cost: " + (initialCost * (d6 / totalDays)).toFixed(2);
        document.getElementById('P7Cost').innerHTML = "P7 Cost: " + (initialCost * (d7 / totalDays)).toFixed(2);
        document.getElementById('P8Cost').innerHTML = "P8 Cost: " + (initialCost * (d8 / totalDays)).toFixed(2);
    } else {
        document.getElementById('P1Cost').innerHTML = "P1 Cost: Invalid input";
        document.getElementById('P2Cost').innerHTML = "P2 Cost: Invalid input";
        document.getElementById('P3Cost').innerHTML = "P3 Cost: Invalid input";
        document.getElementById('P4Cost').innerHTML = "P4 Cost: Invalid input";
        document.getElementById('P5Cost').innerHTML = "P5 Cost: Invalid input";
        document.getElementById('P6Cost').innerHTML = "P6 Cost: Invalid input";
        document.getElementById('P7Cost').innerHTML = "P7 Cost: Invalid input";
        document.getElementById('P8Cost').innerHTML = "P8 Cost: Invalid input";
    }
}

// Function to evaluate the expression entered in the initialCost field and update the corresponding <p> element
function evaluateExpression(inputId, outputId) {
    try {
        let expression = document.getElementById(inputId).value;
        expression = expression.replace(/\s+/g, ''); // Remove any spaces

        if (/^[0-9+\-*/().]+$/.test(expression)) {
            let result = eval(expression);
            if (isNaN(result) || result === null || result === undefined) {
                document.getElementById(outputId).innerHTML = "Initial Cost: Invalid input";
                return "Invalid input";
            } else {
                document.getElementById(outputId).innerHTML = "Initial Cost: " + result.toFixed(2);
                return result;
            }
        } else {
            document.getElementById(outputId).innerHTML = "Initial Cost: Invalid input";
            return "Invalid input";
        }
    } catch (e) {
        document.getElementById(outputId).innerHTML = "Initial Cost: Invalid input";
        return "Invalid input";
    }
}

// Function to calculate the total number of days from ranges and update the corresponding <p> element
function calculateDays(inputId, outputId) {
    let input = document.getElementById(inputId).value.trim(); // Trim to remove any leading/trailing spaces
    if (!input) {
        document.getElementById(outputId).innerHTML = outputId.replace("Days", "") + ": 0 days";
        return 0;
    }

    let totalDays = 0;
    let ranges = input.split(',');

    try {
        ranges.forEach(range => {
            let days = range.split('-').map(Number);
            if (days.length === 1) {
                if (isNaN(days[0])) throw new Error("Invalid input");
                totalDays += days[0]; // Treat it as a single day or value
            } else if (days.length === 2) {
                if (isNaN(days[0]) || isNaN(days[1])) throw new Error("Invalid input");
                totalDays += (days[1] - days[0] + 1);
            } else {
                throw new Error("Invalid input");
            }
        });

        document.getElementById(outputId).innerHTML = outputId.replace("Days", "") + ": " + totalDays + " days";
        return totalDays;

    } catch (e) {
        document.getElementById(outputId).innerHTML = outputId.replace("Days", "") + ": Invalid input";
        return 0;
    }
}