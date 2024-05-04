import { createStore, createEffect } from 'effector';
import axiosInstance from '../../../shared/api/axiosInstance';

interface IUserData {
  email: string;
  password: string;
}

const $userData = createStore<IUserData>({ email: '', password: '' });

export const loginFx = createEffect(
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    });
    return response.data;
  }
);

loginFx.done.watch(({ result }) => {
  localStorage.setItem('token', result.token);
});

loginFx.fail.watch(({ error }) => {
  console.log(error);
});

export default $userData;
