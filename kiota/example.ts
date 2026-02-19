import { AnonymousAuthenticationProvider } from '@microsoft/kiota-abstractions';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';

import { createApiClient } from './sdk';

const authProvider = new AnonymousAuthenticationProvider();

const adapter = new FetchRequestAdapter(authProvider);

adapter.baseUrl = 'https://api.example.com';

const client = createApiClient(adapter);

client.v1.users
  .byId('user-123')
  .get()
  .then((user) => {
    console.log(user.email);
    console.log(user.id);
    console.log(user.name);
    console.log(user.additionalData);
  });
