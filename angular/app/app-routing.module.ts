import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AppComponent }   from './app.component';
import { LobbyComponent }   from './lobby/lobby.component';
// import { LoginComponent }   from './usersLogin/login.component';
// import { RegisterComponent }   from './usersRegister/register.component';
// import { GameComponent }   from './game/game.component';

// Array JSON de objectos 
const appRoutes: Routes = [
	{ path: '', component: LobbyComponent },	
	
	
	// { path: "app", component: AppComponent },
	// { path: "lobby", component: LobbyComponent }
		// add children p/ chat
		  // children: { path: 'chatPublic', component: ChatComponent }  
	// { path: "login", component: LoginComponent }
	// { path: "register", component: RegisterComponent }
	// { path: "game", component: GameComponent }	 // add GUARD  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)		// forRoot - uso só 1x; Depois poderei ter Children
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}		// We'll also export the AppRoutingModule so we can add it to our AppModule imports