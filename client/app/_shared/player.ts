export class Player {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	token: string;
	numGamesPlayed: number = 0;
	numGamesWon: number = 0;
	score: number = 0;
	logged : boolean;
	percGamesWon: number = 0;

	constructor(name: string, email: string, password: string, token: string, logged: boolean) {  
		this.name = name;
		this.email = email;
		this.password = password;
		this.token = 'Benfica Campeão';
		this.logged = false;
	}

	static fromBody(body: any):Player {

		return new Player(body.name, body.email, body.password, body.token, body.logged);	
	}

  	// TODO? receber dados do srv qd USER faz login
	
  	// TODO? receber dados qd USER se regista

}