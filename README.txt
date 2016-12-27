branch: CHAT-PUBLIC-NODE-TS
app em: http://localhost:3000/#/lobby
chat + notifs em '/lobby'



======================= ================================ =======================
======================= ================================ =======================
/**
* @date 14/12
* @description Instruções para correr a app; info sobre packages necessários; informações sobre nomes & portos usados
* @author AS
*/

LER ANTES DE CORRER O PROJETO:
======================= [client] =======================
COMO CORRER O ANGULAR:

1) Executar (na linha de comandos 'DAD_projeto_2/angular'):
$npm install

2) Executar (na linha de comandos):
$npm start  						// App será carregada num novo separador do browser


======================= [server] =======================
COMO CORRER O NODE:

1) Arrancar servidor MongoDB. Executar na Windows PowerShell (Docker):
1.1) $docker start <mongo_game>      				// <mongo_game>: nome do container criado para o jogo
1.2) $docker exec -it <mongo_game> mongo     		// entra na CLI do mongo

2) Executar (na linha de comandos 'DAD_projeto_2/node' - outra janela):
$npm install

3) Executar (na linha de comandos):
$tsc -w  					// Typescript será compilado + watch de alterações

4) Executar (na linha de comandos - outra janela):
$node app  					// Execução do script da App. Recarregar manualmente o SRV quando há alterações porque não está as está a carregar


======================= AO SAIR =======================
* ANGULAR - Executar (na linha de comandos 'DAD_projeto_2/angular'):
$CTRL + C 

* NODE - Executar (nas 2 linhas de comandos 'DAD_projeto_2/node'):
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
@types

Nota: instalar cada um globalmente. Se faltar aqui algum, consultar os ficheiros 'package.json'


======================= INFO: NOMES & PORTOS =======================
Container Docker com MongoDB: mongo_game

Base de Dados MongoDB: 
nome: db_battlefield_game
porto: 27017

Servidor NODE:
nome: srv_node
porto: 7777

ANGULAR:
porto: 80 ???
