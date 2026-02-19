import { type GetUserData, getUser } from './sdk';
import { client } from './sdk/dist/client.gen';

client.setConfig({
  baseUrl: 'https://api.example.com',
  auth() {
    return 'YOUR_TOKEN';
  },
});

const user: Pick<GetUserData, 'path'> = { path: { id: 'user-123' } };

getUser(user).then((user) => {
  if (user.error) {
    return console.error(user.error);
  }

  console.log(user.data.email);
  console.log(user.data.id);
  console.log(user.data.name);
});
