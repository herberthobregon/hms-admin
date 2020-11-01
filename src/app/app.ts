import { NSadmin } from '../admin/admin';

export class app {
	async initializeApp(options?: NSadmin.AppOptions, name?: string): Promise<NSapp.App> {
		return {
			name: name || '[DEFAULT]',
			options: options || {}
		};
	}
}

export namespace NSapp {
	/**
	 * A HMS app holds the initialization information for a collection of
	 * services.
	 *
	 * Do not call this constructor directly. Instead, use
	 * {@link https://developer.huawei.com/pendingLink#initializeApp `admin.initializeApp()`}
	 * to create an app.
	 */
	export interface App {
		/**
		 * The (read-only) name for this app.
		 *
		 * The default app's name is `"[DEFAULT]"`.
		 *
		 * @example
		 * ```javascript
		 * // The default app's name is "[DEFAULT]"
		 * admin.initializeApp(defaultAppConfig);
		 * console.log(admin.app().name);  // "[DEFAULT]"
		 * ```
		 *
		 * @example
		 * ```javascript
		 * // A named app's name is what you provide to initializeApp()
		 * var otherApp = admin.initializeApp(otherAppConfig, "other");
		 * console.log(otherApp.name);  // "other"
		 * ```
		 */
		name: string;

		/**
		 * The (read-only) configuration options for this app. These are the original
		 * parameters given in
		 * {@link
		 *   https://firebase.google.com/docs/reference/admin/node/admin#.initializeApp
		 *   `admin.initializeApp()`}.
		 *
		 * @example
		 * ```javascript
		 * var app = admin.initializeApp(config);
		 * console.log(app.options.credential === config.credential);  // true
		 * console.log(app.options.databaseURL === config.databaseURL);  // true
		 * ```
		 */
		options: NSadmin.AppOptions;
	}
}
