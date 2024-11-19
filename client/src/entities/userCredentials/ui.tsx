import { FC, useState } from 'react';
import { Grid, TextField } from '@mui/material';

export const UserCredentials: FC = () => {
  const [userCredentials, setUserCredentials] = useState({
    surname: '',
    name: '',
    patronymic: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  return (
    <Grid
      container
      rowSpacing={1}
      direction="column"
      alignItems="center"
      sx={{ backgroundColor: 'orange', borderRadius: '10px' }}
    >
      <Grid
        item
        container
        xs={12}
        sm={4}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <TextField
          variant="outlined"
          value={userCredentials.surname}
          label="Фамилия"
          onChange={(event) =>
            setUserCredentials({
              ...userCredentials,
              surname: event.target.value,
            })
          }
        />
        <TextField
          variant="outlined"
          value={userCredentials.name}
          label="Имя"
          onChange={(event) =>
            setUserCredentials({
              ...userCredentials,
              name: event.target.value,
            })
          }
        />
        <TextField
          variant="outlined"
          value={userCredentials.patronymic}
          label="Отчество"
          onChange={(event) =>
            setUserCredentials({
              ...userCredentials,
              patronymic: event.target.value,
            })
          }
        />
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={4}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <TextField
          variant="outlined"
          value={userCredentials.phoneNumber}
          label="Номер телефона"
          onChange={(event) =>
            setUserCredentials({
              ...userCredentials,
              phoneNumber: event.target.value,
            })
          }
        />
        <TextField
          variant="outlined"
          value={userCredentials.email}
          label="Email"
          onChange={(event) =>
            setUserCredentials({
              ...userCredentials,
              email: event.target.value,
            })
          }
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <TextField
          variant="outlined"
          value={userCredentials.password}
          label="Пароль"
          onChange={(event) =>
            setUserCredentials({
              ...userCredentials,
              password: event.target.value,
            })
          }
        />
      </Grid>
    </Grid>
  );
};
