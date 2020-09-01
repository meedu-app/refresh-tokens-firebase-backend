import * as admin from 'firebase-admin';
import { User } from '../models/user';

const serviceAccount = require('../../service-account.json');
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://refresh-tokens-con-firebase.firebaseio.com',
});
const auth = app.auth();

export const createToken = async (user: User): Promise<string> => {
  const userId = user._id.toString();
  const token: string = await auth.createCustomToken(userId, {
    id: userId,
    username: user.username,
    email: user.email,
  });
  return token;
};

export const verifyToken = async (idToken: string): Promise<any> => {
  const decoded = await auth.verifyIdToken(idToken);
  return decoded;
};
