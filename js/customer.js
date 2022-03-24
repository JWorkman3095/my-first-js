// console to check before we start to test it is connected
const customers = [
    { id: 1, name: "MAX", active: true, sales: 10000 },
    { id: 2, name: "P&G", active: true, sales: 1000000 },
    { id: 3, name: "Kroger", active: true, sales: 500000 },
    { id: 3, name: "Sam Ash", active: false, sales: 90000 }
]
const loaded = () => {
    display(customers);
}

const display = (customers) => {
    //pass in a collect of customer and pass to the web
    //assigning what's on the right to storing that in tbodyCtrl
    const tbodyCtrl = document.getElementById("custs");

    //foreach to cycle thru
    for(let cust of customers) {
        //use string cant to form
        let tr = "<tr>";
        tr +=`<td>${cust.id}</td>`;
        tr +=`<td>${cust.name}</td>`;
        //chaning to yes and no instead of active
        tr +=`<td>${(cust.active ? "Yes" : "No")}</td>`;
        tr +=`<td>${cust.sales}</td>`;
        // closing tag
        tr += "</tr>";
        //now we inject it into. we want to add to the (tr)rows
        tbodyCtrl.innerHTML += tr;
    }
}
