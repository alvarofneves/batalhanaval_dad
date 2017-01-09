/**
* @date 09/01/2017
* @description Instruções para correr a app; info sobre packages necessários; informações sobre nomes & portos usados
* @author Afonso
*/

LER ANTES DE CORRER O PROJETO:
======================= [client] =======================
COMO CORRER O CLIENT (1 janela Git Bash):

1) Executar (na linha de comandos 'DAD_projeto_2/client'):
$npm install

2) Executar (na linha de comandos):
$npm start  						// App será carregada num novo separador do browser

Browser irá mostrar a app com o URL 'http://localhost:3000/#/'. Mudar para porto 7777 e usá-lo sempre. 
Quando alterar o código do 'client', fazer 'F5' à app 


======================= [server + BD em Docker] =======================
COMO CORRER O SERVER (2 janelas Git Bash):

1) Arrancar servidor MongoDB. Executar na Windows PowerShell (Docker):
1.1) $docker start <mongo_game>      				// <mongo_game>: nome do container criado para o jogo
1.2) $docker exec -it <mongo_game> mongo     		// entra na CLI do mongo

2) Executar (na linha de comandos 'DAD_projeto_2/server' - outra janela):
$npm install

3) Executar (na linha de comandos):
$tsc -w  											// Typescript será compilado + watch de alterações

4) Executar (na linha de comandos - outra janela):
$nodemon app.js  									// Nodemon fica à escuta de alterações e recarrega script


======================= AO SAIR =======================
* CLIENT - Executar (na linha de comandos 'DAD_projeto_2/angular'):
$CTRL + C 

* SERVER - Executar (nas 2 linhas de comandos 'DAD_projeto_2/node'):
$CTRL + C 

* DOCKER / BD: 
$docker stop <mongo_game>						// <mongo_game>: nome do container criado para o jogo


======================= PACKAGES NECESSÁRIOS =======================
npm
typescript
restify
passport
mongodb
nodemon
socket.io
socket.io-client
passport-google-oauth20
passport-facebook
@types

Nota: instalar globalmente. Se faltar aqui algum, consultar os ficheiros 'package.json'


======================= INFO: NOMES & PORTOS =======================
Container Docker com MongoDB: mongo_game

Base de Dados MongoDB: 
nome: db_battlefield_game
porto: 27017

NODE / server:
nome: srv_node
porto: 7777

ANGULAR / client:
porto: 3000 (agora usado o 7777)


======================= PLAYERS =======================
nome- aluno
email- aluno@ipleiria.pt
password- aluno123

nome- rita
email- rita@pt.pt
password- rita123