function increment(event){
    if (event.target.parentElement.id === "vida") {
        hp.innerText = parseInt(hp.innerText) + 1;
    } else if (event.target.parentElement.id === "agilidade") {
        agl.innerText = parseInt(agl.innerText) + 1;
    } else if (event.target.parentElement.id === "resistencia") {
        res.innerText = parseInt(res.innerText) + 1;
    } else if (event.target.parentElement.id === "forca") {
        force.innerText = parseInt(force.innerText) + 1;
    } else {
        efc.innerText = parseInt(efc.innerText) + 1;
    }
}

function decrement(event){
    if (event.target.parentElement.id === "vida") {
        hp.innerText = parseInt(hp.innerText) - 1;
    } else if (event.target.parentElement.id === "agilidade") {
        agl.innerText = parseInt(agl.innerText) - 1;
    } else if (event.target.parentElement.id === "resistencia") {
        res.innerText = parseInt(res.innerText) - 1;
    } else if (event.target.parentElement.id === "forca") {
        force.innerText = parseInt(force.innerText) - 1;
    } else {
        efc.innerText = parseInt(efc.innerText) - 1;
    }
}