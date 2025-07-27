const nome = document.getElementById("name")
const periodo = document.getElementById("periodo")
const cla = document.getElementById("cla")
const escola = document.getElementById("escola")
const arma = document.getElementById("arma")

const story = document.getElementById("story")

nome.addEventListener('blur', () => {
    const newName = nome.innerText;
    localStorage.setItem('nickname', newName);
});

periodo.addEventListener('blur', () => {
    const newPeriodo = periodo.innerText;
    localStorage.setItem('periodo', newPeriodo);
});

cla.addEventListener('blur', () => {
    const newCla = cla.innerText;
    localStorage.setItem('cla', newCla);
});

escola.addEventListener('blur', () => {
    const newEscola = escola.innerText;
    localStorage.setItem('escola', newEscola);
});

arma.addEventListener('blur', () => {
    const newArma = arma.innerText;
    localStorage.setItem('arma', newArma);
});

if (localStorage.getItem('nickname')) nome.innerText = localStorage.getItem('nickname');
if (localStorage.getItem('periodo')) periodo.innerText = localStorage.getItem('periodo');
if (localStorage.getItem('cla')) cla.innerText = localStorage.getItem('cla');
if (localStorage.getItem('escola')) escola.innerText = localStorage.getItem('escola');
if (localStorage.getItem('arma')) arma.innerText = localStorage.getItem('arma');

const historia = document.getElementById("historia");

historia.addEventListener('blur', () => {
    const newHistoria = historia.innerText;
    localStorage.setItem('historia', newHistoria);
});

if (localStorage.getItem('historia')) historia.innerText = localStorage.getItem('historia');

function toggleStory() {
    const popup = document.getElementById("popup");
    const info = document.getElementById("main-info")
    if (info.style.display === 'none') {
        popup.classList.add('hidden');
        info.style.display = 'flex';
    } else {
        popup.classList.remove('hidden');
        info.style.display = 'none';
    }
}

const hp = document.getElementById("hp")
const agl = document.getElementById("agl")
const res = document.getElementById("res")
const force = document.getElementById("force")
const efc = document.getElementById("efc")

if (localStorage.getItem('hp')) hp.innerText = localStorage.getItem('hp');
if (localStorage.getItem('agilidade')) agl.innerText = localStorage.getItem('agilidade');
if (localStorage.getItem('resistencia')) res.innerText = localStorage.getItem('resistencia');
if (localStorage.getItem('force')) force.innerText = localStorage.getItem('force');
if (localStorage.getItem('eficiencia')) efc.innerText = localStorage.getItem('eficiencia');

function increment(event){
    if (event.target.parentElement.id === "vida") {
        hp.innerText = parseInt(hp.innerText) + 1;
        localStorage.setItem('hp', hp.innerText);
    } else if (event.target.parentElement.id === "agilidade") {
        agl.innerText = parseInt(agl.innerText) + 1;
        localStorage.setItem('agilidade', agl.innerText);
    } else if (event.target.parentElement.id === "resistencia") {
        res.innerText = parseInt(res.innerText) + 1;
        localStorage.setItem('resistencia', res.innerText);
    } else if (event.target.parentElement.id === "forca") {
        force.innerText = parseInt(force.innerText) + 1;
        localStorage.setItem('force', force.innerText);
    } else {
        efc.innerText = parseInt(efc.innerText) + 1;
        localStorage.setItem('eficiencia', efc.innerText);
    }
}

function decrement(event){
    if (event.target.parentElement.id === "vida") {
        hp.innerText = parseInt(hp.innerText) - 1;
        localStorage.setItem('hp', hp.innerText);
    } else if (event.target.parentElement.id === "agilidade") {
        agl.innerText = parseInt(agl.innerText) - 1;
        localStorage.setItem('agilidade', agl.innerText);
    } else if (event.target.parentElement.id === "resistencia") {
        res.innerText = parseInt(res.innerText) - 1;
        localStorage.setItem('resistencia', res.innerText);
    } else if (event.target.parentElement.id === "forca") {
        force.innerText = parseInt(force.innerText) - 1;
        localStorage.setItem('force', force.innerText);
    } else {
        efc.innerText = parseInt(efc.innerText) - 1;
        localStorage.setItem('eficiencia', efc.innerText);
    }
}