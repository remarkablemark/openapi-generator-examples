import {
  AllowedHostsValidator,
  AuthenticationProvider,
} from '@microsoft/kiota-abstractions';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';

import { createApiClient } from './sdk';

class StaticAuthProvider implements AuthenticationProvider {
  private readonly allowedHosts = new AllowedHostsValidator(
    new Set(['api.example.com']),
  );

  async authenticateRequest(requestInfo, additionalAuthenticationContext) {
    const url =
      requestInfo?.uri instanceof URL
        ? requestInfo.uri
        : new URL(requestInfo?.uri ?? requestInfo?.url ?? '');

    if (!this.allowedHosts.isUrlHostValid(url)) return;

    requestInfo.headers ??= new Map<string, string>();
    requestInfo.headers.set('Authorization', `Bearer YOUR_ACCESS_TOKEN`);
  }
}

const adapter = new FetchRequestAdapter(new StaticAuthProvider());
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
