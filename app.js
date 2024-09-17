const express = require('express');
const app = express()
const port = 3000

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/localhost/index.html");
})

//Primeira rota = Somar o numero digitado na caixa de texto e retorna somando com o numero 2
app.get('/soma', (req,res)=>{
    if(req.query.numero < 0){
        res.end('O valor esta negativo');
    } else if(req.query.numero == 0){
        res.end('O valor esta zerado');
    } else {
        res.end(`O valor digitado foi o ${req.query.numero}.\nO resultado somado por 2 foi: ${parseInt(req.query.numero) + parseInt(2)}`);
    }
})

//Segunda rota = Multiplica o dobro do valor digitado na caixa e retorna o valor dobrado
app.get('/multiplica', (req,res)=>{
    if(req.query.numero < 0){
        res.end('O valor esta negativo');
    } else if(req.query.numero == 0){
        res.end('O valor esta zerado');
    } else {
        res.end(`O valor digitado foi o ${req.query.numero}.\nO resultado muitiplicado por 2 foi: ${parseInt(req.query.numero) * parseInt(2)}`);
    }
})

app.listen(port,()=>{
    console.log('Servidor ligado');
})