import { createStore, createEffect } from 'effector';
import { login } from '../api/login';

interface IUserData {
  email: string;
  password: string;
}

const $userData = createStore<IUserData>({ email: '', password: '' });

export const loginFx = createEffect(login);

loginFx.done.watch(({ result }) => {
  localStorage.setItem('token', result.token);
});

loginFx.fail.watch(({ error }) => {
  console.log(error);
});

export default $userData;
