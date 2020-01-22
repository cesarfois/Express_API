function salvar(req, res){
    res.send('Usuario > salvar')
}

function obter(req, res) {
    res.send('Usuario > Obter')
}

//module.exports = { salvar: salvar, obter: obter}

module.exports = { salvar, obter} // forma reduzida de escrever este objeto ( igual acima )