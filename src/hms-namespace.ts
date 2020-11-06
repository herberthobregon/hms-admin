import * as _admin from './admin/admin';
import * as _app from './app/app';
import * as _auth from './auth/auth';

export namespace admin {
	export let SDK_VERSION = '0.1.2';
	export let apps: admin.app.App[] = [];
	export async function initializeApp(options?: admin.AppOptions, name?: string): Promise<admin.app.App> {
		let app = await new _app.app().initializeApp();
		apps = [...apps.filter((a) => a.name != app.name), app];
		return app;
	}

	export function auth(app?: admin.app.App) {
		if (app == undefined) {
			app = apps.find((a) => a.name == '[DEFAULT]');
		}
		return new _auth.auth(app);
	}
}

export declare namespace admin {
	export import AppOptions = _app.admin.app.AppOptions;
}

export declare namespace admin.app {
	export import App = _app.admin.app.App;
}

export declare namespace admin.auth {
	export import DecodedIdToken = _auth.auth.DecodedIdToken;
}

export default admin;
