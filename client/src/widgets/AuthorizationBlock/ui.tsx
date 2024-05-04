import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { loginFx } from './store';
import { useState } from 'react';

export const AuthorizationBlock = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  return (
    <Container>
      <Typography variant="h1">Авторизация</Typography>
      <Stack spacing={2}>
        <Stack spacing={2}>
          <TextField
            variant="outlined"
            value={data.email}
            label="Email"
            onChange={(event) => {
              setData({ ...data, email: event.target.value });
            }}
          />
          <TextField
            variant="outlined"
            value={data.password}
            label="Пароль"
            onChange={(event) => {
              setData({ ...data, password: event.target.value });
            }}
          />
        </Stack>
        <Button
          variant="outlined"
          endIcon={<LoginIcon />}
          onClick={async () => {
            await loginFx({ email: data.email, password: data.password });
          }}
        >
          Войти
        </Button>
      </Stack>
    </Container>
  );
};
