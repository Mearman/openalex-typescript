# .AutocompleteApi

All URIs are relative to *https://api.openalex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAutocomplete**](AutocompleteApi.md#getAutocomplete) | **GET** /autocomplete | /autocomplete
[**getAutocompleteAuthors**](AutocompleteApi.md#getAutocompleteAuthors) | **GET** /autocomplete/authors | /autocomplete/authors
[**getAutocompleteConcepts**](AutocompleteApi.md#getAutocompleteConcepts) | **GET** /autocomplete/concepts | /autocomplete/concepts
[**getAutocompleteFunders**](AutocompleteApi.md#getAutocompleteFunders) | **GET** /autocomplete/funders | /autocomplete/funders
[**getAutocompleteInstitutions**](AutocompleteApi.md#getAutocompleteInstitutions) | **GET** /autocomplete/institutions | /autocomplete/institutions
[**getAutocompletePublishers**](AutocompleteApi.md#getAutocompletePublishers) | **GET** /autocomplete/publishers | /autocomplete/publishers
[**getAutocompleteSources**](AutocompleteApi.md#getAutocompleteSources) | **GET** /autocomplete/sources | /autocomplete/sources
[**getAutocompleteWorks**](AutocompleteApi.md#getAutocompleteWorks) | **GET** /autocomplete/works | /autocomplete/works


# **getAutocomplete**
> AutoCompleteResultSchema getAutocomplete()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AutocompleteApi(configuration);

let body:.AutocompleteApiGetAutocompleteRequest = {
  // string (optional)
  q: "q_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getAutocomplete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**AutoCompleteResultSchema**

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

# **getAutocompleteAuthors**
> AutoCompleteResultSchema getAutocompleteAuthors()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AutocompleteApi(configuration);

let body:.AutocompleteApiGetAutocompleteAuthorsRequest = {
  // string (optional)
  q: "q_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getAutocompleteAuthors(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**AutoCompleteResultSchema**

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

# **getAutocompleteConcepts**
> AutoCompleteResultSchema getAutocompleteConcepts()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AutocompleteApi(configuration);

let body:.AutocompleteApiGetAutocompleteConceptsRequest = {
  // string (optional)
  q: "q_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getAutocompleteConcepts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**AutoCompleteResultSchema**

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

# **getAutocompleteFunders**
> AutoCompleteResultSchema getAutocompleteFunders()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AutocompleteApi(configuration);

let body:.AutocompleteApiGetAutocompleteFundersRequest = {
  // string (optional)
  q: "q_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getAutocompleteFunders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**AutoCompleteResultSchema**

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

# **getAutocompleteInstitutions**
> AutoCompleteResultSchema getAutocompleteInstitutions()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AutocompleteApi(configuration);

let body:.AutocompleteApiGetAutocompleteInstitutionsRequest = {
  // string (optional)
  q: "q_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getAutocompleteInstitutions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**AutoCompleteResultSchema**

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

# **getAutocompletePublishers**
> AutoCompleteResultSchema getAutocompletePublishers()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AutocompleteApi(configuration);

let body:.AutocompleteApiGetAutocompletePublishersRequest = {
  // string (optional)
  q: "q_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getAutocompletePublishers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**AutoCompleteResultSchema**

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

# **getAutocompleteSources**
> AutoCompleteResultSchema getAutocompleteSources()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AutocompleteApi(configuration);

let body:.AutocompleteApiGetAutocompleteSourcesRequest = {
  // string (optional)
  q: "q_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getAutocompleteSources(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**AutoCompleteResultSchema**

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

# **getAutocompleteWorks**
> AutoCompleteResultSchema getAutocompleteWorks()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AutocompleteApi(configuration);

let body:.AutocompleteApiGetAutocompleteWorksRequest = {
  // string (optional)
  filter: "filter_example",
  // string (optional)
  search: "search_example",
  // string (optional)
  q: "q_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getAutocompleteWorks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined
 **q** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**AutoCompleteResultSchema**

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


