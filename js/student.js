const students = [
    { id: 1, name: "Alice", major: "Education", sat: 1350, gpa: 3.5 },
    { id: 2, name: "Bill", major: "Business", sat: 1140, gpa: 2.6 },
    { id: 3, name: "Chris", major: "Management", sat: 1310, gpa: 3.3 },
    { id: 4, name: "David", major: "Marketing", sat: 1260, gpa: 3.1 },
    { id: 5, name: "Ellen", major: "Engineering", sat: 1410, gpa: 3.8 }
];

const loaded = () => {
    display (students);
}

const display = (students) => {

    const tbodyCtrl = document.getElementById("studs");

    for(let stud of students) {
        let tr = "<tr>";
        tr +=`<td>${stud.id}</td>`;
        tr +=`<td>${stud.name}</td>`;
        tr +=`<td>${stud.major}</td>`;
        tr +=`<td>${stud.gpa}</td>`;
        tr +=`<td>${stud.sat}</td>`;
        tr += "</tr>";
        //now we inject it into. we want to add to the (tr)rows
        tbodyCtrl.innerHTML += tr;
    }
}