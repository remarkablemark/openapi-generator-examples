import { type Api, ApiClient } from './sdks/typescript';

const client = new ApiClient({
  token: 'YOUR_TOKEN',
});

const user: Api.GetUserRequest = { id: 'user-123' };

client.getUser(user).then((user) => {
  console.log(user.email);
  console.log(user.id);
  console.log(user.name);
});
