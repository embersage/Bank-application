import { FC } from 'react';
import { Button, Stack } from '@mui/material';
import { useMultistepForm } from '../../shared/hooks/useMultistepForm';
import { UserCredentials } from '../../entities/userCredentials';
import { PassportCredentials } from '../../entities/passportCredentials';

export const SignUp: FC = () => {
  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserCredentials />,
    <PassportCredentials />,
  ]);

  return (
    <Stack spacing={2}>
      {step}
      {!isFirstStep && (
        <Button variant="outlined" onClick={back}>
          Назад
        </Button>
      )}
      <Button variant="outlined" onClick={next}>
        {!isLastStep ? 'Далее' : 'Зарегистрироваться'}
      </Button>
    </Stack>
  );
};
