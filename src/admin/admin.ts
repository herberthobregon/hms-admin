export namespace NSadmin {
	export interface AppOptions {
		/**
		 * The URL of the Realtime Database from which to read and write data.
		 */
		databaseURL?: string;
	
		/**
		 * The ID of the service account to be used for signing custom tokens. This
		 * can be found in the `client_email` field of a service account JSON file.
		 */
		serviceAccountId?: string;
	
		/**
		 * The name of the AppGallery Storage bucket used for storing application data.
		 * Use only the bucket name without any prefixes or additions.
		 */
		storageBucket?: string;
	
		/**
		 * The ID of the AppGallery project associated with the App.
		 */
		projectId?: string;
	  }
}