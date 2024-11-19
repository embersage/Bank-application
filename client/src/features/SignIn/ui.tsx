import { FC, useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { loginFx } from './model';

export const SignIn: FC = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <TextField
          variant="outlined"
          value={userData.email}
          label="Email"
          onChange={(event) => {
            setUserData({ ...userData, email: event.target.value });
          }}
        />
        <TextField
          variant="outlined"
          value={userData.password}
          label="Пароль"
          onChange={(event) => {
            setUserData({ ...userData, password: event.target.value });
          }}
        />
      </Stack>
      <Button
        variant="contained"
        endIcon={<LoginIcon />}
        onClick={async () => {
          await loginFx({ email: userData.email, password: userData.password });
        }}
      >
        Войти
      </Button>
    </Stack>
  );
};
