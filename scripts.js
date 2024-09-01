function calculateRent() {

    var initialCost = document.getElementById('initialCost').value;
    var d1 = document.getElementById('daysRented1').value;
    var d2 = document.getElementById('daysRented2').value;
    var d3 = document.getElementById('daysRented3').value;
    var d4 = document.getElementById('daysRented4').value;
    var d5 = document.getElementById('daysRented5').value;
    var d6 = document.getElementById('daysRented6').value;
    var d7 = document.getElementById('daysRented7').value;
    var d8 = document.getElementById('daysRented8').value;

    d1 = Number(d1);
    d2 = Number(d2);
    d3 = Number(d3);
    d4 = Number(d4);
    d5 = Number(d5);
    d6 = Number(d6);
    d7 = Number(d7);
    d8 = Number(d8);

    var totalDays = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8;

    var p1Box = document.getElementById('P1Cost');
    var p2Box = document.getElementById('P2Cost');
    var p3Box = document.getElementById('P3Cost');
    var p4Box = document.getElementById('P4Cost');
    var p5Box = document.getElementById('P5Cost');
    var p6Box = document.getElementById('P6Cost');
    var p7Box = document.getElementById('P7Cost');
    var p8Box = document.getElementById('P8Cost');

    p1Box.innerHTML = "P1 Cost: " + (initialCost * (d1 / totalDays));
    p2Box.innerHTML = "P2 Cost: " + (initialCost * (d2 / totalDays));
    p3Box.innerHTML = "P3 Cost: " + (initialCost * (d3 / totalDays));
    p4Box.innerHTML = "P4 Cost: " + (initialCost * (d4 / totalDays));
    p5Box.innerHTML = "P5 Cost: " + (initialCost * (d5 / totalDays));
    p6Box.innerHTML = "P6 Cost: " + (initialCost * (d6 / totalDays));
    p7Box.innerHTML = "P7 Cost: " + (initialCost * (d7 / totalDays));
    p8Box.innerHTML = "P8 Cost: " + (initialCost * (d8 / totalDays));

    // if ((d1 == NaN) || (d2 == NaN)) {
    //     resultBox.innerHTML = "Invalid Input";
    // } else {
    //     resultBox.innerHTML = "P1 Cost: " + (d1 + d2);
    // }

}