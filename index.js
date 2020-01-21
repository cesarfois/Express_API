const express = require('express') // importa o modulo express
const app = express() // com a funcao express instancio minha aplicaçao chamada app



app.get('/opa',(req, res) =>{
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