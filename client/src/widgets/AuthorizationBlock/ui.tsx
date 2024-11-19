import { FC, useState } from 'react';
import { Container, Link, Typography } from '@mui/material';
import { SignIn } from '../../features/SignIn';
import { SignUp } from '../../features/SignUp';

export const AuthorizationBlock: FC = () => {
  const [mode, setMode] = useState('sign-in');

  return (
    <Container>
      <Typography variant="h1">
        {mode === 'sign-in' ? 'Авторизация' : 'Регистрация'}
      </Typography>
      {mode === 'sign-in' ? <SignIn /> : <SignUp />}
      <Link
        component="button"
        variant="body2"
        underline="hover"
        onClick={() => {
          switch (mode) {
            case 'sign-in':
              setMode('sign-up');
              break;
            case 'sign-up':
              setMode('sign-in');
              break;
          }
        }}
      >
        {mode === 'sign-in' ? 'Регистрация' : 'Авторизация'}
      </Link>
    </Container>
  );
};
