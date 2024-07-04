# .SourcesApi

All URIs are relative to *https://api.openalex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRandomSource**](SourcesApi.md#getRandomSource) | **GET** /sources/random | /sources/random
[**getSource**](SourcesApi.md#getSource) | **GET** /sources/{id} | /sources/{id}
[**getSources**](SourcesApi.md#getSources) | **GET** /sources | /sources


# **getRandomSource**
> Source getRandomSource()

Get a random source

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SourcesApi(configuration);

let body:.SourcesApiGetRandomSourceRequest = {
  // string (optional)
  select: "select_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getRandomSource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **select** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**Source**

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

# **getSource**
> Source getSource()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SourcesApi(configuration);

let body:.SourcesApiGetSourceRequest = {
  // string
  id: "id_example",
  // string (optional)
  select: "select_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getSource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **select** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**Source**

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

# **getSources**
> Sources getSources()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SourcesApi(configuration);

let body:.SourcesApiGetSourcesRequest = {
  // string (optional)
  groupBy: "group_by_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getSources(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupBy** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**Sources**

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


