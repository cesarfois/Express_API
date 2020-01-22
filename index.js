const express = require('express') // importa o modulo express
const app = express() // com a funcao express instancio minha aplicaçao chamada app
const bodyparse = require('body-parser')

const saudacao = require('./saudacaoMid') // importaçao da funcao saudaçao 
const usuarioApi = require('./api/usuario') // importando o modulo de usuario.

require('./api/produto') (app, 'com param!') // comunicaçao entre modulos


app.post('/usuario', usuarioApi.salvar) // chama ao metodo do modulo usuarioapi, metodo salvar
app.get('/usuario', usuarioApi.obter)

app.use(bodyparse.text()) // todo texto que vem no corpo da req vai ser interpretado
app.use(bodyparse.json()) // le todo os dados que vem em json
app.use(bodyparse.urlencoded({extended: true})) // padrao de formularios 

app.use(saudacao('Guilherme nome passado para a funcao midd'))

app.use('/opa',(req, res, next)=> {
    console.log('Antes...')
    next()
})



// lendo parametros no corpo da requisição via queru
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatorio: Completo = ${req.query.completo} ano = ${req.query.ano}`)
})

// // lendo os parametros enviados pelo body ( metodo dificil - metodo facil body parse)
// app.post('/corpo', (req, res) => {
//     let corpo = ''
//     req.on('data', function(parte) {  // quando estiver chegando dados no corpo da req, vai concatenando todos esses dados
//         corpo += parte
//     })
    
//     req.on('end', function(){
//         res.send(corpo)
//     })

// })

// faz o mesmo do codigo acima mas utilizando o bodyparse
app.post('/corpo', (req, res) => {
    //res.send(req.body) // envia todo o que foi enviado no bodyparse.
    //res.send(req.body.nome) // trazendo somente o nome, o bodyparse retorna um objeto
    res.send(JSON.stringify(req.body)) // traz todo o resultado

})

// lendo parametros enviados por uma URL
app.get('/clientes/:id', (req, res)=>{  
    res.send(`Client ${req.params.id} selecionado`)  
    
})



app.get('/opa',(req, res, next) =>{
    console.log('Durante...')
    res.json({
        data: [
        {id: 7, name: 'Ana', position: 1},
        {id: 3, name: 'Bia', position: 2},
        {id: 5, name: 'Carlos', position: 3},
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200
    })   
    next()
    
    app.use('/opa',(req, res, next)=> {
        console.log('Depois...')
        next()
    })
    
    
    
    
    // enviando json
    /* res.json({
        name: 'IPAD 32GB',
        price: '1900.00',
        discount: '12%'
    })

 */


    //res.send('Estou <b>bem</b><br><br><h1>codigo html enviado</h1>')
})


app.listen(3000, () => {
    console.log('Backend executando...') // configuro uma funcão callback para informar que esta executando 
})