import {
    getLista,
    adicionaItem,
    removeItem,
    limpaLista
} from './lista.js';

const entrada = document.querySelector('#entrada');
const botaoAdiciona = document.querySelector('#adiciona');
const botaoLimpa = document.querySelector('#limpa');
const item = document.querySelector('#item');

botaoAdiciona.addEventListener('click', adicionaItem);
botaoLimpa.addEventListener('click', limpaLista);

function limpaLista(){
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

function adicionaItem(){
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