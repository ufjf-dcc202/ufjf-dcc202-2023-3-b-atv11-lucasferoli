const lista = ["primeiro", "segundo", "terceiro"];

function getLista(){
    return lista;
}

function adicionaItem(item){
    lista.push(item);
}

function removeItem(posicao){
    lista.splice(posicao, 1);
}

function limpaLista(){
    lista.splice(0);
}

export { getLista, adicionaItem, removeItem, limpaLista };