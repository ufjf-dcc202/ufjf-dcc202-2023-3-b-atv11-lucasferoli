import {
    getLista,
    adicionaItem,
    removeItem,
    limpaLista
} from './lista.js';

const entrada = document.querySelector('#entrada');
const botaoAdicionar = document.querySelector('#adicionar');
const botaoLimpar = document.querySelector('#limpar');
const itens = document.querySelector('#itens');

botaoAdicionar.addEventListener('click', adicionaEntrada);
botaoLimpar.addEventListener('click', limparLista);

function limparLista(){
    limpaLista();
    atualizaLista();
}

function atualizaLista(){
    const lista = getLista();
    itens.innerHTML = '';
    for(let i = 0; i < lista.length; i++){
        adicionaItemNaLista(lista[i]);
    }
}

function adicionaEntrada(){
    const item = entrada.textContent;
    adicionaItem(item);
    entrada.textContent = '';
    atualizaLista();
}

function adicionaItemNaLista(item){
    const li = document.createElement('li');
    li.textContent = item;
    itens.appendChild(li);
}