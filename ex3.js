let botom

let tabuleiro = new Array(3)
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3)
}

for(let i = 0; i < tabuleiro.length; i++){
    for(let j = 0; j < tabuleiro[i].length; j++){
        botom = document.createElement('button')
        botom.setAttribute('type', 'button')
        botom.setAttribute('id', 'bt' + i + "" + j)
        botom.setAttribute('class', 'btjogo', i)
        botom.setAttribute('onclick', '')
        botom.append(document.createTextNode(""));
        document.body.append(botom);
    }
}
