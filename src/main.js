/* ---------- INFORMACOES DA ESQUERDA ---------- */
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

/* ---------- INFORMACOES DO MEIO ---------- */
const hp = document.getElementById("hp")
const agl = document.getElementById("agl")
const res = document.getElementById("res")
const force = document.getElementById("force")
const efc = document.getElementById("efc")

if (localStorage.getItem('hp')) hp.innerText = localStorage.getItem('hp');
if (localStorage.getItem('agl')) agl.innerText = localStorage.getItem('agl');
if (localStorage.getItem('res')) res.innerText = localStorage.getItem('res');
if (localStorage.getItem('force')) force.innerText = localStorage.getItem('force');
if (localStorage.getItem('efc')) efc.innerText = localStorage.getItem('efc');


let modificadores = {};

window.addEventListener("DOMContentLoaded", async () => {
    modificadores = await load_modifiers();
    inicializarModificadores();
});

function inicializarModificadores() {
  const atributos = ["hp", "agl", "res", "force", "efc"];
  atributos.forEach((id) => {
    const valor = parseInt(document.getElementById(id).textContent);
    atualizarModificador(id, valor);
  });
}

function getMod(valor) {
    for (let faixa in modificadores) {
        const [min, max] = faixa.split("-").map(Number);
        if (valor >= min && valor <= max) {
            return modificadores[faixa];
        }
    }
    return 0;
}

function increment(event) {
    const span = event.target.previousElementSibling;
    let valor = parseInt(span.textContent);
    valor++;
    span.textContent = valor;
    localStorage.setItem(span.id, valor);
    
    atualizarModificador(span.id, valor);
}

function decrement(event) {
    const span = event.target.nextElementSibling;
    let valor = parseInt(span.textContent);
    valor = Math.max(0, valor - 1);
    span.textContent = valor;
    localStorage.setItem(span.id, valor);
    
    atualizarModificador(span.id, valor);
}

function atualizarModificador(id, valor) {
    const modSpan = document.getElementById(`mod-${id}`);
    const mod = getMod(valor);
    modSpan.textContent = mod >= 0 ? `+${mod}` : `${mod}`;
}


// let hpMod = 10
// let vida_max = 100 + (hpMod * 10);
// let vida_texto = document.getElementById("pontos-vida");

// let vida_atual = vida_max;
// function life_handler(){
//     pass
// }

// vida_texto.innerText = vida_atual + " / " + vida_max;
async function load_modifiers() {
    const resposta = await fetch("/docs/modificadores.json");
    const dados = await resposta.json();
    return dados.atributos;
}

async function fillTable() {
    const atributos = await load_modifiers();
    const tabela = document.getElementById("modTableBody");

    tabela.innerHTML = "";

    for (const valor in atributos) {
        const mod = atributos[valor];

        const linha = document.createElement("tr");

        const col1 = document.createElement("td");
        col1.textContent = valor;

        const col2 = document.createElement("td");
        col2.textContent = mod;

        linha.appendChild(col1);
        linha.appendChild(col2);
        tabela.appendChild(linha);
    }
}

fillTable();

function toggleModifiers() {
    const popup = document.getElementById("modPopup");
    const info = document.getElementById("tAtributos")
    if (info.style.display === 'none') {
        popup.classList.add('hidden');
        info.style.display = 'flex';
    } else {
        popup.classList.remove('hidden');
        info.style.display = 'none';
    }
}


/* ---------- INFORMACOES DA DIREITA ---------- */
const item = document.getElementById("item");
const items_list = document.getElementById("items-list");
const add_btn = document.getElementById("add-btn");

add_btn.addEventListener('click', () => {

})

function deleteItem(event) {
    const itemToBeDeleted = event.target.parentElement.id
}
