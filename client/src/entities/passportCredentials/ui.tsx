import { FC, useState } from 'react';
import { Stack, TextField } from '@mui/material';

export const PassportCredentials: FC = () => {
  const [passportCredentials, setPassportCredentials] = useState({
    series: { name: 'Серия', value: '' },
    number: { name: 'Номер', value: '' },
    country: { name: 'Страна', value: '' },
    province: { name: 'Регион', value: '' },
    city: { name: 'Город', value: '' },
    street: { name: 'Улица', value: '' },
    house: { name: 'Дом', value: '' },
    flat: { name: 'Квартира', value: '' },
  });

  const handleChange = (
    key: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassportCredentials({
      ...passportCredentials,
      [key]: {
        ...passportCredentials[key],
        value: event.target.value,
      },
    });
  };

  return (
    <Stack spacing={2}>
      {Object.keys(passportCredentials).map((key) => {
        const property = passportCredentials[key];

        return (
          <TextField
            key={key}
            variant="outlined"
            value={property.value}
            label={property.name}
            onChange={(event) => handleChange(key, event)}
          />
        );
      })}
    </Stack>
  );
};
