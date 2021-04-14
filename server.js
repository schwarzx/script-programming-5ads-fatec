/**
 * 
 * Criar objetos básicos 
 * 
 */

const express = require('express');
const consign = require('consign');

app = express();

//Configurando diretorio das views
app.use('views', path.join(__dirname, '../api/views'));
app.use('view engine', 'ejs');

//Configurando porta HTTP
app.set('port', 3000);

app.listen(app.get('port'), function() {
    console.log('Aplicação rodando na porta ' + app.get('port'))
});
