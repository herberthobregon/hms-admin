import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { admin } from '../app/app';

export class auth {
	app: admin.app.App;
	constructor(app: admin.app.App) {
		this.app = app;
	}

	async verifyIdToken(idToken: string, checkRevoked?: boolean) {
		let client = jwksClient({
			jwksUri: 'https://oauth-login.cloud.huawei.com/oauth2/v3/certs',
			cache: true,
			cacheMaxAge: 30_000,
			timeout: 30_000
		});
		let headers: { alg: string; typ: string; kid: string } = JSON.parse(Buffer.from(idToken.split('.')[0], 'base64').toString());

		let kid = headers.kid;
		let key = await client.getSigningKeyAsync(kid);
		let signingKey = key.getPublicKey();
		var decoded = jwt.verify(idToken, signingKey);
		return decoded;
	}
}

export namespace auth {
	export interface DecodedIdToken {
		aud: string;
		auth_time: number;
		email?: string;
		email_verified?: boolean;
		exp: number;
		iat: number;
		iss: string;
		phone_number?: string;
		picture?: string;
		sub: string;
		uid: string;
		[key: string]: any;
	}
}
