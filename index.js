



let input = document.querySelector('#input');
let btn = document.querySelector('#show');
// regex for ns
const number_regexp = /^-?\d+$/;

let output_table = document.querySelector('#output')
// create table 
let table = document.createElement("table");
table.className = "result_table";
table.innerHTML = `
    <thead>
        <tr>
            <th>Number</th>
            <th>Type</th>
            <th>Prime Status</th>
        </tr>
    </thead>
    <tbody id="table_body">
    </tbody>
     `;

//  calling create table.

output_table.appendChild(table);

// button click event

btn.addEventListener('click', function (e) {
    let value = input.value.trim();
    // getting table body
    let table_body = document.querySelector('#table_body')

    // input validtion
    if (!number_regexp.test(value)) {
        input.style.border = "1px solid red"
        input.style.boxShadow = "1px 1px 5px 7px rgba(226, 114, 114, 0.76)"

        console.log(`"${value}" : is not a valid integer.`);
        return;
    }
    // only n program
    let number = parseInt(value)
    input.style.border = "1px solid green"
    input.style.boxShadow = "1px 1px 5px 7px rgba(74, 153, 37, 0.81)"

    // set table column.

    let type = "";
    let prime_status = "";

    if (number < 0) {
        type = "Negative Number";
        prime_status = "Cannot be Prime";
    } else if (number < 2) {
        type = "Positive Number";
        prime_status = "Not Prime";
    } else {
        type = "Positive Number";
        prime_status = isPrime(number) ? "Prime" : "Not Prime";
    }

    // add table row.
    let row = document.createElement('tr')

    row.innerHTML = `
        <td>${number}</td>
        <td>${type}</td>
        <td>${prime_status}</td>
    `;
    table_body.appendChild(row)
    
    console.log(`Enterd Value : ${number}`);

});

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;  // Covers 2 and 3
    if (n % 2 === 0 || n % 3 === 0) return false;

    // Check from 5 up to sqrt(n)
    // Increment by 6 to check both 6k-1 and 6k+1 forms
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}







