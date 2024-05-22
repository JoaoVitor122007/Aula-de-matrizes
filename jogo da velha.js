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
        document.getElementById(nomeBotao).style.color = "blue"
    }else{
        document.getElementById(nomeBotao).innerText = "X"
        document.getElementById(nomeBotao).style.color = "black"
    }
    document.getElementById(nomeBotao).disabled = true
    jogada++

    if(jogada >= 5){
        encerraJogo()
    }
}

function encerraJogo() {
    if (document.getElementById("bt00").innerText == document.getElementById("bt01").innerText && document.getElementById("bt01").innerText == document.getElementById("bt02").innerText && document.getElementById("bt00").innerText != "") {
        for(cont in tabuleiro){
            document.getElementById("bt0" + cont).style.color = "red"
        }
            document.getElementById("bt00").style.backgroundColor = "gray"
            document.getElementById("bt01").style.backgroundColor = "gray"
            document.getElementById("bt02").style.backgroundColor = "gray"
                alert("Jogo finalizado" + '\n' + "Vencedor: " + document.getElementById("bt00").innerText)
    }
    if (document.getElementById("bt10").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt12").innerText && document.getElementById("bt10").innerText != "") {
        for(cont in tabuleiro){
            document.getElementById("bt1" + cont).style.color = "red"
        }
            document.getElementById("bt10").style.backgroundColor = "gray"
            document.getElementById("bt11").style.backgroundColor = "gray"
            document.getElementById("bt12").style.backgroundColor = "gray"
                alert("Jogo finalizado" + '\n' + "Vencedor: " + document.getElementById("bt10").innerText)
    }
    if (document.getElementById("bt20").innerText == document.getElementById("bt21").innerText && document.getElementById("bt21").innerText == document.getElementById("bt22").innerText && document.getElementById("bt20").innerText != "") {
        for(cont in tabuleiro){
            document.getElementById("bt2" + cont).style.color = "red"
        }
            document.getElementById("bt20").style.backgroundColor = "gray"
            document.getElementById("bt21").style.backgroundColor = "gray"
            document.getElementById("bt22").style.backgroundColor = "gray"
                alert("Jogo finalizado" + '\n' + "Vencedor: " + document.getElementById("bt20").innerText)
    }
    if (document.getElementById("bt00").innerText == document.getElementById("bt10").innerText && document.getElementById("bt10").innerText == document.getElementById("bt20").innerText && document.getElementById("bt00").innerText != "") {
        document.getElementById("bt00").style.color = "red"
        document.getElementById("bt10").style.color = "red"
        document.getElementById("bt20").style.color = "red"
        document.getElementById("bt00").style.backgroundColor = "gray"
        document.getElementById("bt10").style.backgroundColor = "gray"
        document.getElementById("bt20").style.backgroundColor = "gray"
            alert("Jogo finalizado" + '\n' + "Vencedor: " + document.getElementById("bt00").innerText)
    }
    if (document.getElementById("bt01").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt21").innerText && document.getElementById("bt01").innerText != "") {
        document.getElementById("bt01").style.color = "red"
        document.getElementById("bt11").style.color = "red"
        document.getElementById("bt21").style.color = "red"
        document.getElementById("bt01").style.backgroundColor = "gray"
        document.getElementById("bt11").style.backgroundColor = "gray"
        document.getElementById("bt21").style.backgroundColor = "gray"
            alert("Jogo finalizado" + '\n' + "Vencedor: " + document.getElementById("bt01").innerText)
    }
    if (document.getElementById("bt02").innerText == document.getElementById("bt12").innerText && document.getElementById("bt12").innerText == document.getElementById("bt22").innerText && document.getElementById("bt02").innerText != "") {
        document.getElementById("bt02").style.color = "red"
        document.getElementById("bt12").style.color = "red"
        document.getElementById("bt22").style.color = "red"
        document.getElementById("bt02").style.backgroundColor = "gray"
        document.getElementById("bt12").style.backgroundColor = "gray"
        document.getElementById("bt22").style.backgroundColor = "gray"
            alert("Jogo finalizado" + '\n' + "Vencedor: " + document.getElementById("bt02").innerText)
    }
    if (document.getElementById("bt00").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt22").innerText && document.getElementById("bt00").innerText != "") {
        document.getElementById("bt00").style.color = "red"
        document.getElementById("bt11").style.color = "red"
        document.getElementById("bt22").style.color = "red"
        document.getElementById("bt00").style.backgroundColor = "gray"
        document.getElementById("bt11").style.backgroundColor = "gray"
        document.getElementById("bt22").style.backgroundColor = "gray"
            alert("Jogo finalizado" + '\n' + "Vencedor: " + document.getElementById("bt00").innerText)
    }
    if (document.getElementById("bt20").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt02").innerText && document.getElementById("bt20").innerText != "") {
        document.getElementById("bt20").style.color = "red"
        document.getElementById("bt11").style.color = "red"
        document.getElementById("bt02").style.color = "red"
        document.getElementById("bt20").style.backgroundColor = "gray"
        document.getElementById("bt11").style.backgroundColor = "gray"
        document.getElementById("bt02").style.backgroundColor = "gray"
            alert("Jogo finalizado" + '\n' + "Vencedor: " + document.getElementById("bt20").innerText)
    }
}
