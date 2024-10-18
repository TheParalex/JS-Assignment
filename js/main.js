// User form handling for index.html
function userForm() {
    // Collecting form data
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    const membership = document.querySelector('input[name="membership"]:checked').value;

    // Output the result
    const output = `
        <p>Full Name: ${fname} ${lname}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}, ${city}, ${province}</p>
        <p>Membership: ${membership}</p>
    `;

    document.getElementById("output").innerHTML = output;
}

// Excel functions for excel.html
function myExcelFuns() {
    const numberStr = document.getElementById("numbers").value.trim();
    if (numberStr === "") {
        alert("Please enter numbers separated by spaces.");
        return;
    }

    const numberArr = numberStr.split(' ').map(Number).filter(n => !isNaN(n));
    
    let result;
    if (document.getElementById("sum").checked) {
        result = numberArr.reduce((a, b) => a + b, 0);
    } else if (document.getElementById("avg").checked) {
        result = numberArr.reduce((a, b) => a + b, 0) / numberArr.length;
    } else if (document.getElementById("max").checked) {
        result = Math.max(...numberArr);
    } else {
        result = Math.min(...numberArr);
    }

    document.getElementById("result").innerText = `Result: ${result}`;
}
