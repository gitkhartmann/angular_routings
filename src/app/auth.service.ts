import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class AuthService {
	private isAuth = false;
	constructor() { }

	login() {
		this.isAuth = true;
	}

	logout() {
		this.isAuth = false;
	}

	isAutenticated(): Promise<boolean> {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(this.isAuth)
				console.log(resolve);
			}, 1000);
		})
	}
}