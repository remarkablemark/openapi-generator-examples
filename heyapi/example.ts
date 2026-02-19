import { getUser } from './sdk';
import { client } from './sdk/dist/client.gen';

client.setConfig({
  baseUrl: 'https://api.example.com',
  auth() {
    return 'YOUR_TOKEN';
  },
});

getUser({ path: { id: 'user-123' } }).then((user) => {
  console.log(user.data.email);
  console.log(user.data.id);
  console.log(user.data.name);
});
