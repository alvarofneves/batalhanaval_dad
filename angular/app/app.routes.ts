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

import { AppComponent }   from './app.component';
import { LobbyComponent }   from './lobby/lobby.component';
/*import { LoginComponent }   from './usersLogin/login.component';
import { RegisterComponent }   from './usersRegister/register.component';
import { GameComponent }   from './gameBoard/board.component';*/

// Array JSON de objectos 
export let routes = [
	{ path: "", component: LobbyComponent },	
	
	//{ path: "app", component: AppComponent },
	//{ path: "lobby", component: LobbyComponent }
		/* add children p/ chat
		   children: { path: 'chatPublic', component: ChatComponent }  */

	/*{ path: "login", component: LoginComponent }
	{ path: "register", component: RegisterComponent }
	{ path: "game", component: GameComponent }	*/
]