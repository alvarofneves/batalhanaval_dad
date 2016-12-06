// Exemplo
/*[{
  path: 'team/:id',
  component: Team,
  children: [
    {
      path: 'user/:name',
      component: User
    }
  ]
}]*/
"use strict";
var lobby_component_1 = require('./lobby/lobby.component');
/*import { LoginComponent }   from './usersLogin/login.component';
import { RegisterComponent }   from './usersRegister/register.component';
import { GameComponent }   from './gameBoard/board.component';*/
// Array JSON de objectos 
exports.routes = [
    { path: "", component: lobby_component_1.LobbyComponent },
];
//# sourceMappingURL=app.routes.js.map