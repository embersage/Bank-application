import { FC, useState } from 'react';
import { Stack, TextField } from '@mui/material';

export const SignUp: FC = () => {
  const [userData, setUserData] = useState({
    credentials: {
      surname: { name: 'Фамилия', value: '' },
      name: { name: 'Имя', value: '' },
      patronymic: { name: 'Отчество', value: '' },
      email: { name: 'Email', value: '' },
      phoneNumber: { name: 'Номер телефона', value: '' },
      password: { name: 'Пароль', value: '' },
    },
    passport: {
      series: { name: 'Серия', value: '' },
      number: { name: 'Номер', value: '' },
      country: { name: 'Страна', value: '' },
      province: { name: 'Регион', value: '' },
      city: { name: 'Город', value: '' },
      street: { name: 'Улица', value: '' },
      house: { name: 'Дом', value: '' },
      flat: { name: 'Квартира', value: '' },
    },
  });

  return (
    <Stack spacing={2}>
      {Object.keys(userData.credentials).map((item, index) => {
        const value = Object.values(userData.credentials)[index];

        return (
          <TextField
            key={index}
            variant="outlined"
            value={value.value}
            label={value.name}
            onChange={(event) => {
              setUserData({
                ...userData,
                credentials: {
                  ...userData.credentials,
                  [item]: {
                    ...userData.credentials[item],
                    value: event.target.value,
                  },
                },
              });
            }}
          />
        );
      })}
    </Stack>
  );
};
