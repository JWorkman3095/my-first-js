console.log("The script is being loaded");

const loaded = (msg) => {
    //console.log(`The HTML is loaded. Msg is ${msg}`);
    let inputCtrl = document.getElementById("inp");
    inputCtrl.value = msg;
}

console.log("The script has been loaded");