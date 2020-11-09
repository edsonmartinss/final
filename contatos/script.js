var contatos = localStorage.getItem("contatos")
contatos = JSON.parse(contatos)
if(contatos == null){
    contatos = []
}
var contato = {}
function preencherTabela(){
    for(var i in contatos) {
        var contato = JSON.parse(contatos[i])
        addContatoATabela(contato)
    }
}
function addContatoALista(){
    let nome = document.getElementById("nome").value
    let tel = document.getElementById("tel").value
    let email = document.getElementById("email").value
    contato = {
        nome: nome,
        tel: tel,
        email: email
    }
    contatos.push(JSON.stringify(contato))
    localStorage.setItem("contatos", JSON.stringify(contatos))
    addContatoATabela(contato)
}
function addContatoATabela(contato){
    let tr = document.createElement("tr")
    let tdNome = document.createElement("td")
    let tdTel = document.createElement("td")
    let tdEmail = document.createElement("td")
    tdNome.append(contato.nome)
    tdTel.append(contato.tel)
    tdEmail.append(contato.email)
    tr.appendChild(tdNome)
    tr.appendChild(tdTel)
    tr.appendChild(tdEmail)
    document.getElementById("contatos").append(tr)
}
