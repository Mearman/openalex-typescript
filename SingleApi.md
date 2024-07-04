# .SingleApi

All URIs are relative to *https://api.openalex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTopicById**](SingleApi.md#getTopicById) | **GET** /topics/{id} | /topics/{id}


# **getTopicById**
> Topic getTopicById()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SingleApi(configuration);

let body:.SingleApiGetTopicByIdRequest = {
  // string
  id: "id_example",
  // number (optional)
  perPage: 3,
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getTopicById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **perPage** | [**number**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**Topic**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**403** |  |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


