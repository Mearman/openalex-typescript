# .RandomApi

All URIs are relative to *https://api.openalex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRandomAuthor**](RandomApi.md#getRandomAuthor) | **GET** /authors/random | Get Random Author
[**getRandomConcept**](RandomApi.md#getRandomConcept) | **GET** /concepts/random | /concepts/random
[**getRandomFunder**](RandomApi.md#getRandomFunder) | **GET** /funders/random | /funders/random
[**getRandomInstitution**](RandomApi.md#getRandomInstitution) | **GET** /institutions/random | /institutions/random
[**getRandomPublisher**](RandomApi.md#getRandomPublisher) | **GET** /publishers/random | /publishers/random
[**getRandomSource**](RandomApi.md#getRandomSource) | **GET** /sources/random | /sources/random
[**getRandomWork**](RandomApi.md#getRandomWork) | **GET** /works/random | /works/random


# **getRandomAuthor**
> Author getRandomAuthor()

Get a random author

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RandomApi(configuration);

let body:.RandomApiGetRandomAuthorRequest = {
  // string (optional)
  select: "select_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getRandomAuthor(body).then((data:any) => {
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

**Author**

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

# **getRandomConcept**
> Concept getRandomConcept()

Get a random concept

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RandomApi(configuration);

let body:.RandomApiGetRandomConceptRequest = {
  // string (optional)
  select: "select_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getRandomConcept(body).then((data:any) => {
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

**Concept**

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

# **getRandomFunder**
> Funder getRandomFunder()

Get a random funder

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RandomApi(configuration);

let body:.RandomApiGetRandomFunderRequest = {
  // string (optional)
  select: "select_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getRandomFunder(body).then((data:any) => {
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

**Funder**

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

# **getRandomInstitution**
> Institution getRandomInstitution()

Get a random institution

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RandomApi(configuration);

let body:.RandomApiGetRandomInstitutionRequest = {
  // string (optional)
  select: "select_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getRandomInstitution(body).then((data:any) => {
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

**Institution**

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

# **getRandomPublisher**
> Publisher getRandomPublisher()

Get a random publisher

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RandomApi(configuration);

let body:.RandomApiGetRandomPublisherRequest = {
  // string (optional)
  select: "select_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getRandomPublisher(body).then((data:any) => {
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

**Publisher**

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

# **getRandomSource**
> Source getRandomSource()

Get a random source

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RandomApi(configuration);

let body:.RandomApiGetRandomSourceRequest = {
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

# **getRandomWork**
> Work getRandomWork()

Get a random work

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RandomApi(configuration);

let body:.RandomApiGetRandomWorkRequest = {
  // Array<WorkAttributes & BaseSelectionAttributes> (optional)
  select: [
    "select_example",
  ],
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getRandomWork(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **select** | **Array&lt;WorkAttributes &amp; BaseSelectionAttributes&gt;** |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**Work**

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


