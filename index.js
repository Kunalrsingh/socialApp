const express = require ("express");
const format = require ("date-format");
const app = express();

// swagger docs
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument= YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT|| 4000  ;

app.get("/",(req,res) => {
    res.status(201).send("<h1> Hello World Lco </h1>");
});

app.get("/api/v1/instagram",(req,res) =>{
    const instaSocial = {
        username : " kunal_r_singh",
        followers : 170,
        following : 190,
        date : format.asString("dd MM hh mm",new Date()),

    };

    res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook",(req,res) =>{
    const facebook ={
        username : " kunal_r_singh",
        freinds : 500,
        post : 10,
        date : format.asString("dd MM - hh mm",new Date()),
    };
    res.status(200).json({facebook});
});
app.get("/api/v1/:token",(req,res)=>{
  //  console.log(req.params.token);
    res.status(200).json({param1: req.params.token });
});

app.get("/api/v1/:token/:id",(req,res)=>{
  //  console.log(req.params.token);
    res.status(200).json({param1: req.params.token, param2: req.params.id});
});

app.listen(PORT,()=> {
    console.log(`Server is running at ${PORT}`);
});