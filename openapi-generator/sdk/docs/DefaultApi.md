# DefaultApi

All URIs are relative to *https://api.example.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUser**](DefaultApi.md#getuser) | **GET** /v1/users/{id} | Get a user by ID |



## getUser

> User getUser(id)

Get a user by ID

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@your-org/sdk';
import type { GetUserRequest } from '@your-org/sdk';

async function example() {
  console.log("🚀 Testing @your-org/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetUserRequest;

  try {
    const data = await api.getUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A user |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

