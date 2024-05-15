let botao, quebralinha, jogada = 1

let tabuleiro = new Array(3)
for(let i = 0; i < tabuleiro.length; i++){
tabuleiro[i] = new Array(3)
}

for(let i = 0; i < tabuleiro.length; i++){
    quebralinha = document.createElement('br')
    document.body.append(quebralinha);
for(let j = 0; j < tabuleiro.length; j++){
    botao = document.createElement('button')
    botao.setAttribute('type', 'button')
    botao.setAttribute('id', 'bt' + i + "" + j)
    botao.setAttribute('class', 'btJogo', +i)
    botao.setAttribute('onclick', 'marca' + i + "" + j + "()")
    botao.append(document.createTextNode(""));
    document.body.append(botao)

    }

}

function marca00(){
    marcarCasa("bt00")
}
function marca01(){
    marcarCasa("bt01")
}
function marca02(){
    marcarCasa("bt02")
}
function marca10(){
    marcarCasa("bt10")
}
function marca11(){
    marcarCasa("bt11")
}
function marca12(){
    marcarCasa("bt12")
}
function marca20(){
    marcarCasa("bt20")
}
function marca21(){
    marcarCasa("bt21")
}
function marca22(){
    marcarCasa("bt22")
}


function marcarCasa(nomeBotao){
    if(jogada % 2 == 0){
    
    document.getElementById(nomeBotao).innerText = "O"
    }else{
        document.getElementById(nomeBotao).innerText = "X"

    }
    document.getElementById(nomeBotao).disabled = true
    jogada++
}
