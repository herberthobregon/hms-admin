import * as _admin from './admin/admin';
import * as _app from './app/app';
import * as _auth from './auth/auth';

export namespace admin {
	export let SDK_VERSION = '0.1.0';
	export let apps: admin.app.App[] = [];
	export function initializeApp(options?: admin.AppOptions, name?: string): Promise<admin.app.App> {
		let app = new _app.app().initializeApp();
		return app;
	}

	export function auth(app?: any){
		return new _auth.auth();
	}
}

export declare namespace admin {
	export import AppOptions = _admin.NSadmin.AppOptions;
}

export namespace admin.app {
	export import App = _app.NSapp.App;
}

export namespace admin.auth {
	export import DecodedIdToken = _auth.NSauth.DecodedIdToken;
}

export default admin;
