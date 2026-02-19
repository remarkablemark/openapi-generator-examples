import { Configuration, DefaultApi, type GetUserRequest } from './sdk';

const config = new Configuration({
  accessToken: 'YOUR BEARER TOKEN',
});

const api = new DefaultApi(config);

const body: GetUserRequest = {
  id: 'user-123',
};

api.getUser(body).then((user) => {
  console.log(user.email);
  console.log(user.id);
  console.log(user.name);
});
