export class Player {
	_id: string;
	name: string;
	email: string;
	password: string;
	token: string;
	numGamesPlayed: number = 0;
	numGamesWon: number = 0;
	percGamesWon: number = 0;

	constructor(name: string, email: string, password: string) {  
		this.name = name;
		this.email = email;
		this.password = password;
	}

	static fromBody(body: any):Player {
		return new Player(body.name, body.email, body.password);	
	}

  	// TODO? receber dados do srv qd USER faz login


  	// TODO? receber dados qd USER se regista

}