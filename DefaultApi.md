# .DefaultApi

All URIs are relative to *https://api.openalex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuthor**](DefaultApi.md#getAuthor) | **GET** /authors/{id} | Get Author
[**getAuthors**](DefaultApi.md#getAuthors) | **GET** /authors | List Authors
[**getAutocomplete**](DefaultApi.md#getAutocomplete) | **GET** /autocomplete | /autocomplete
[**getAutocompleteAuthors**](DefaultApi.md#getAutocompleteAuthors) | **GET** /autocomplete/authors | /autocomplete/authors
[**getAutocompleteConcepts**](DefaultApi.md#getAutocompleteConcepts) | **GET** /autocomplete/concepts | /autocomplete/concepts
[**getAutocompleteFunders**](DefaultApi.md#getAutocompleteFunders) | **GET** /autocomplete/funders | /autocomplete/funders
[**getAutocompleteInstitutions**](DefaultApi.md#getAutocompleteInstitutions) | **GET** /autocomplete/institutions | /autocomplete/institutions
[**getAutocompletePublishers**](DefaultApi.md#getAutocompletePublishers) | **GET** /autocomplete/publishers | /autocomplete/publishers
[**getAutocompleteSources**](DefaultApi.md#getAutocompleteSources) | **GET** /autocomplete/sources | /autocomplete/sources
[**getAutocompleteWorks**](DefaultApi.md#getAutocompleteWorks) | **GET** /autocomplete/works | /autocomplete/works
[**getConceptById**](DefaultApi.md#getConceptById) | **GET** /concepts/{id} | /concepts/{id}
[**getConcepts**](DefaultApi.md#getConcepts) | **GET** /concepts | /concepts
[**getDomainById**](DefaultApi.md#getDomainById) | **GET** /domains/{id} | /domains/{id}
[**getFieldById**](DefaultApi.md#getFieldById) | **GET** /field/{id} | /fields/{id}
[**getFunder**](DefaultApi.md#getFunder) | **GET** /funders/{id} | /funders/{id}
[**getFunders**](DefaultApi.md#getFunders) | **GET** /funders | /funders
[**getInstitution**](DefaultApi.md#getInstitution) | **GET** /institutions/{id} | /institutions/{id}
[**getInstitutions**](DefaultApi.md#getInstitutions) | **GET** /institutions | /institutions
[**getPerson**](DefaultApi.md#getPerson) | **GET** /people/{id} | /people/{id}
[**getPublisher**](DefaultApi.md#getPublisher) | **GET** /publishers/{id} | /publishers/{id}
[**getPublishers**](DefaultApi.md#getPublishers) | **GET** /publishers | /publishers
[**getRandomAuthor**](DefaultApi.md#getRandomAuthor) | **GET** /authors/random | Get Random Author
[**getRandomConcept**](DefaultApi.md#getRandomConcept) | **GET** /concepts/random | /concepts/random
[**getRandomFunder**](DefaultApi.md#getRandomFunder) | **GET** /funders/random | /funders/random
[**getRandomInstitution**](DefaultApi.md#getRandomInstitution) | **GET** /institutions/random | /institutions/random
[**getRandomPublisher**](DefaultApi.md#getRandomPublisher) | **GET** /publishers/random | /publishers/random
[**getRandomSource**](DefaultApi.md#getRandomSource) | **GET** /sources/random | /sources/random
[**getRandomWork**](DefaultApi.md#getRandomWork) | **GET** /works/random | /works/random
[**getRoot**](DefaultApi.md#getRoot) | **GET** / | Root
[**getSource**](DefaultApi.md#getSource) | **GET** /sources/{id} | /sources/{id}
[**getSources**](DefaultApi.md#getSources) | **GET** /sources | /sources
[**getSubfieldById**](DefaultApi.md#getSubfieldById) | **GET** /subfields/{id} | /subfields/{id}
[**getTopicById**](DefaultApi.md#getTopicById) | **GET** /topics/{id} | /topics/{id}
[**getTopics**](DefaultApi.md#getTopics) | **GET** /topics | /topics
[**getWork**](DefaultApi.md#getWork) | **GET** /works/{id} | /works/{id}
[**getWorkNgrams**](DefaultApi.md#getWorkNgrams) | **GET** /works/{id}/ngrams | /works/{id}/ngrams
[**getWorks**](DefaultApi.md#getWorks) | **GET** /works | /works


# **getAuthor**
> Author getAuthor()

Get a single author by id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAuthorRequest = {
  // string
  id: "A4",
  // string (optional)
  select: "select_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getAuthor(body).then((data:any) => {
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

# **getAuthors**
> Authors getAuthors()

Get lists of authors

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAuthorsRequest = {
  // string (optional)
  apiKey: "api_key_example",
  // string (optional)
  cursor: "cursor_example",
  // string (optional)
  filter: "filter_example",
  // string (optional)
  groupBy: "group_by_example",
  // number (optional)
  page: 1,
  // number (optional)
  perPage: 3,
  // number (optional)
  sample: 1,
  // string (optional)
  search: "search_example",
  // any (optional)
  seed: null,
  // string (optional)
  select: "select_example",
  // string (optional)
  sort: "sort_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getAuthors(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | (optional) defaults to undefined
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **groupBy** | [**string**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **perPage** | [**number**] |  | (optional) defaults to undefined
 **sample** | [**number**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined
 **seed** | **any** |  | (optional) defaults to undefined
 **select** | [**string**] |  | (optional) defaults to undefined
 **sort** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**Authors**

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

# **getAutocomplete**
> AutoCompleteResultSchema getAutocomplete()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAutocompleteRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAutocompleteAuthorsRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAutocompleteConceptsRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAutocompleteFundersRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAutocompleteInstitutionsRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAutocompletePublishersRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAutocompleteSourcesRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAutocompleteWorksRequest = {
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

# **getConceptById**
> Concept getConceptById()

Get a single concept

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetConceptByIdRequest = {
  // string
  id: "C4",
  // string (optional)
  select: "select_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getConceptById(body).then((data:any) => {
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

# **getConcepts**
> Concepts getConcepts()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetConceptsRequest = {
  // string (optional)
  apiKey: "api_key_example",
  // string (optional)
  cursor: "cursor_example",
  // string (optional)
  filter: "filter_example",
  // string (optional)
  groupBy: "group_by_example",
  // number (optional)
  page: 1,
  // number (optional)
  perPage: 3,
  // number (optional)
  sample: 1,
  // string (optional)
  search: "search_example",
  // any (optional)
  seed: null,
  // string (optional)
  select: "select_example",
  // string (optional)
  sort: "sort_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getConcepts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | (optional) defaults to undefined
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **groupBy** | [**string**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **perPage** | [**number**] |  | (optional) defaults to undefined
 **sample** | [**number**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined
 **seed** | **any** |  | (optional) defaults to undefined
 **select** | [**string**] |  | (optional) defaults to undefined
 **sort** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**Concepts**

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

# **getDomainById**
> Domain getDomainById()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetDomainByIdRequest = {
  // string
  id: "id_example",
  // number (optional)
  perPage: 3,
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getDomainById(body).then((data:any) => {
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

**Domain**

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

# **getFieldById**
> Field getFieldById()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetFieldByIdRequest = {
  // string
  id: "id_example",
  // number (optional)
  perPage: 3,
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getFieldById(body).then((data:any) => {
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

**Field**

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

# **getFunder**
> Funder getFunder()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetFunderRequest = {
  // string
  id: "id_example",
  // string (optional)
  select: "select_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getFunder(body).then((data:any) => {
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

# **getFunders**
> FundersArray getFunders()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetFundersRequest = {
  // string (optional)
  apiKey: "api_key_example",
  // string (optional)
  cursor: "cursor_example",
  // string (optional)
  filter: "filter_example",
  // string (optional)
  groupBy: "group_by_example",
  // number (optional)
  page: 1,
  // number (optional)
  perPage: 3,
  // number (optional)
  sample: 1,
  // string (optional)
  search: "search_example",
  // any (optional)
  seed: null,
  // string (optional)
  select: "select_example",
  // string (optional)
  sort: "sort_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getFunders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | (optional) defaults to undefined
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **groupBy** | [**string**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **perPage** | [**number**] |  | (optional) defaults to undefined
 **sample** | [**number**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined
 **seed** | **any** |  | (optional) defaults to undefined
 **select** | [**string**] |  | (optional) defaults to undefined
 **sort** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**FundersArray**

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

# **getInstitution**
> Institution getInstitution()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetInstitutionRequest = {
  // string
  id: "id_example",
  // string (optional)
  select: "select_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getInstitution(body).then((data:any) => {
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

# **getInstitutions**
> Institutions getInstitutions()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetInstitutionsRequest = {
  // string (optional)
  apiKey: "api_key_example",
  // string (optional)
  cursor: "cursor_example",
  // string (optional)
  filter: "filter_example",
  // string (optional)
  groupBy: "group_by_example",
  // number (optional)
  page: 1,
  // number (optional)
  perPage: 3,
  // number (optional)
  sample: 1,
  // string (optional)
  search: "search_example",
  // any (optional)
  seed: null,
  // string (optional)
  select: "select_example",
  // string (optional)
  sort: "sort_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getInstitutions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | (optional) defaults to undefined
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **groupBy** | [**string**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **perPage** | [**number**] |  | (optional) defaults to undefined
 **sample** | [**number**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined
 **seed** | **any** |  | (optional) defaults to undefined
 **select** | [**string**] |  | (optional) defaults to undefined
 **sort** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**Institutions**

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

# **getPerson**
> Person getPerson()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetPersonRequest = {
  // string
  id: "id_example",
  // string (optional)
  select: "select_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getPerson(body).then((data:any) => {
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

**Person**

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

# **getPublisher**
> Publisher getPublisher()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetPublisherRequest = {
  // string
  id: "id_example",
  // string (optional)
  select: "select_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getPublisher(body).then((data:any) => {
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

# **getPublishers**
> Publishers getPublishers()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetPublishersRequest = {
  // string (optional)
  apiKey: "api_key_example",
  // string (optional)
  cursor: "cursor_example",
  // string (optional)
  filter: "filter_example",
  // string (optional)
  groupBy: "group_by_example",
  // number (optional)
  page: 1,
  // number (optional)
  perPage: 3,
  // number (optional)
  sample: 1,
  // string (optional)
  search: "search_example",
  // any (optional)
  seed: null,
  // string (optional)
  select: "select_example",
  // string (optional)
  sort: "sort_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getPublishers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | (optional) defaults to undefined
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **groupBy** | [**string**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **perPage** | [**number**] |  | (optional) defaults to undefined
 **sample** | [**number**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined
 **seed** | **any** |  | (optional) defaults to undefined
 **select** | [**string**] |  | (optional) defaults to undefined
 **sort** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**Publishers**

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

# **getRandomAuthor**
> Author getRandomAuthor()

Get a random author

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetRandomAuthorRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetRandomConceptRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetRandomFunderRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetRandomInstitutionRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetRandomPublisherRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetRandomSourceRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetRandomWorkRequest = {
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

# **getRoot**
> RootResponseSchema getRoot()

Root endpoint

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetRootRequest = {
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getRoot(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**RootResponseSchema**

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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetSourceRequest = {
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
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetSourcesRequest = {
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

# **getSubfieldById**
> Subfield getSubfieldById()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetSubfieldByIdRequest = {
  // string
  id: "id_example",
  // number (optional)
  perPage: 3,
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getSubfieldById(body).then((data:any) => {
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

**Subfield**

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

# **getTopicById**
> Topic getTopicById()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetTopicByIdRequest = {
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

# **getTopics**
> Topics getTopics()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetTopicsRequest = {
  // string (optional)
  sort: "sort_example",
  // number (optional)
  perPage: 3,
  // string (optional)
  page: "page_example",
  // string (optional)
  sample: "sample_example",
  // string (optional)
  select: "select_example",
  // string (optional)
  filter: "filter_example",
  // string (optional)
  search: "search_example",
  // string (optional)
  groupBy: "group_by_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getTopics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] |  | (optional) defaults to undefined
 **page** | [**string**] |  | (optional) defaults to undefined
 **sample** | [**string**] |  | (optional) defaults to undefined
 **select** | [**string**] |  | (optional) defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined
 **groupBy** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**Topics**

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

# **getWork**
> Work getWork()

Get a single work by its id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWorkRequest = {
  // string | The id of the work to retrieve
  id: "https://doi.org/10.1016/j.jinf.2020.05.071",
  // Array<WorkAttributes & BaseSelectionAttributes> (optional)
  select: [
    "select_example",
  ],
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getWork(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the work to retrieve | defaults to undefined
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

# **getWorkNgrams**
> Ngrams getWorkNgrams()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWorkNgramsRequest = {
  // string
  id: "id_example",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getWorkNgrams(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**Ngrams**

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

# **getWorks**
> WorksResponse getWorks()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWorksRequest = {
  // string (optional)
  apiKey: "api_key_example",
  // string (optional)
  cursor: "cursor_example",
  // string (optional)
  groupBy: "group_by_example",
  // number (optional)
  page: 1,
  // number (optional)
  perPage: 3,
  // number (optional)
  sample: 1,
  // string (optional)
  search: "search_example",
  // any (optional)
  seed: null,
  // string (optional)
  select: "select_example",
  // string (optional)
  sort: "sort_example",
  // string | Filter works by a specific field. See the [filter works](https://docs.openalex.org/api-entities/works/filter-works) documentation for more information. Valid filters are:   - `abstract.search` - `apc_list.currency` - `apc_list.provenance` - `apc_list.value` - `apc_list.value_usd` - `apc_paid.currency` - `apc_paid.provenance` - `apc_paid.value` - `apc_paid.value_usd` - `author.id` - `author.orcid` - `authors_count` - `authorships.author.id` - `authorships.author.orcid` - `authorships.countries` - `authorships.institutions.continent` - `authorships.institutions.country_code` - `authorships.institutions.id` - `authorships.institutions.is_global_south` - `authorships.institutions.lineage` - `authorships.institutions.ror` - `authorships.institutions.type` - `authorships.is_corresponding` - `best_oa_location.is_accepted` - `best_oa_location.is_oa` - `best_oa_location.is_published` - `best_oa_location.landing_page_url` - `best_oa_location.license` - `best_oa_location.source.host_organization` - `best_oa_location.source.host_organization_lineage` - `best_oa_location.source.id` - `best_oa_location.source.is_in_doaj` - `best_oa_location.source.is_oa` - `best_oa_location.source.issn` - `best_oa_location.source.type` - `best_oa_location.version` - `best_open_version` - `cited_by` - `cited_by_count` - `cited_by_percentile_year.max` - `cited_by_percentile_year.min` - `cites` - `concept.id` - `concepts.id` - `concepts.wikidata` - `concepts_count` - `corresponding_author_ids` - `corresponding_institution_ids` - `countries_distinct_count` - `default.search` - `display_name` - `display_name.search` - `doi` - `doi_starts_with` - `from_created_date` - `from_publication_date` - `fulltext.search` - `fulltext_origin` - `grants.award_id` - `grants.funder` - `has_abstract` - `has_doi` - `has_fulltext` - `has_ngrams` - `has_oa_accepted_or_published_version` - `has_oa_submitted_version` - `has_old_authors` - `has_orcid` - `has_pdf_url` - `has_pmcid` - `has_pmid` - `has_raw_affiliation_string` - `has_references` - `host_venue.id` - `ids.mag` - `ids.openalex` - `ids.pmcid` - `ids.pmid` - `institution.id` - `institutions.continent` - `institutions.country_code` - `institutions.id` - `institutions.is_global_south` - `institutions.ror` - `institutions.type` - `institutions_distinct_count` - `is_corresponding` - `is_oa` - `is_paratext` - `is_retracted` - `journal` - `keyword.search` - `keywords.keyword` - `language` - `locations.is_accepted` - `locations.is_oa` - `locations.is_published` - `locations.landing_page_url` - `locations.license` - `locations.source.has_issn` - `locations.source.host_institution_lineage` - `locations.source.host_organization` - `locations.source.host_organization_lineage` - `locations.source.id` - `locations.source.is_in_doaj` - `locations.source.is_oa` - `locations.source.issn` - `locations.source.publisher_lineage` - `locations.source.type` - `locations.version` - `locations_count` - `mag` - `oa_status` - `open_access.any_repository_has_fulltext` - `open_access.is_oa` - `open_access.oa_status` - `openalex` - `openalex_id` - `pmcid` - `pmid` - `primary_location.is_accepted` - `primary_location.is_oa` - `primary_location.is_published` - `primary_location.landing_page_url` - `primary_location.license` - `primary_location.source.has_issn` - `primary_location.source.host_institution_lineage` - `primary_location.source.host_organization` - `primary_location.source.host_organization_lineage` - `primary_location.source.id` - `primary_location.source.is_in_doaj` - `primary_location.source.is_oa` - `primary_location.source.issn` - `primary_location.source.publisher_lineage` - `primary_location.source.type` - `primary_location.version` - `publication_date` - `publication_year` - `raw_affiliation_string.search` - `referenced_works` - `referenced_works_count` - `related_to` - `repository` - `sustainable_development_goals.id` - `sustainable_development_goals.score` - `title.search` - `title_and_abstract.search` - `to_publication_date` - `to_updated_date` - `type` - `type_crossref` - `version` (optional)
  filter: "abstract.search:",
  // string | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) (optional)
  userAgent: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
  // string | The API is the primary way to get OpenAlex data. It\'s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). (optional)
  mailto: "jUR,rZ#UM/?R,Fp^l6$ARjmailto:wwwwwwwwwwwwwwwww@JZiO H'qT\{<?'es#)#iK.YM{Rag2/!KB!k",
};

apiInstance.getWorks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | (optional) defaults to undefined
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **groupBy** | [**string**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **perPage** | [**number**] |  | (optional) defaults to undefined
 **sample** | [**number**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined
 **seed** | **any** |  | (optional) defaults to undefined
 **select** | [**string**] |  | (optional) defaults to undefined
 **sort** | [**string**] |  | (optional) defaults to undefined
 **filter** | [**string**] | Filter works by a specific field. See the [filter works](https://docs.openalex.org/api-entities/works/filter-works) documentation for more information. Valid filters are:   - &#x60;abstract.search&#x60; - &#x60;apc_list.currency&#x60; - &#x60;apc_list.provenance&#x60; - &#x60;apc_list.value&#x60; - &#x60;apc_list.value_usd&#x60; - &#x60;apc_paid.currency&#x60; - &#x60;apc_paid.provenance&#x60; - &#x60;apc_paid.value&#x60; - &#x60;apc_paid.value_usd&#x60; - &#x60;author.id&#x60; - &#x60;author.orcid&#x60; - &#x60;authors_count&#x60; - &#x60;authorships.author.id&#x60; - &#x60;authorships.author.orcid&#x60; - &#x60;authorships.countries&#x60; - &#x60;authorships.institutions.continent&#x60; - &#x60;authorships.institutions.country_code&#x60; - &#x60;authorships.institutions.id&#x60; - &#x60;authorships.institutions.is_global_south&#x60; - &#x60;authorships.institutions.lineage&#x60; - &#x60;authorships.institutions.ror&#x60; - &#x60;authorships.institutions.type&#x60; - &#x60;authorships.is_corresponding&#x60; - &#x60;best_oa_location.is_accepted&#x60; - &#x60;best_oa_location.is_oa&#x60; - &#x60;best_oa_location.is_published&#x60; - &#x60;best_oa_location.landing_page_url&#x60; - &#x60;best_oa_location.license&#x60; - &#x60;best_oa_location.source.host_organization&#x60; - &#x60;best_oa_location.source.host_organization_lineage&#x60; - &#x60;best_oa_location.source.id&#x60; - &#x60;best_oa_location.source.is_in_doaj&#x60; - &#x60;best_oa_location.source.is_oa&#x60; - &#x60;best_oa_location.source.issn&#x60; - &#x60;best_oa_location.source.type&#x60; - &#x60;best_oa_location.version&#x60; - &#x60;best_open_version&#x60; - &#x60;cited_by&#x60; - &#x60;cited_by_count&#x60; - &#x60;cited_by_percentile_year.max&#x60; - &#x60;cited_by_percentile_year.min&#x60; - &#x60;cites&#x60; - &#x60;concept.id&#x60; - &#x60;concepts.id&#x60; - &#x60;concepts.wikidata&#x60; - &#x60;concepts_count&#x60; - &#x60;corresponding_author_ids&#x60; - &#x60;corresponding_institution_ids&#x60; - &#x60;countries_distinct_count&#x60; - &#x60;default.search&#x60; - &#x60;display_name&#x60; - &#x60;display_name.search&#x60; - &#x60;doi&#x60; - &#x60;doi_starts_with&#x60; - &#x60;from_created_date&#x60; - &#x60;from_publication_date&#x60; - &#x60;fulltext.search&#x60; - &#x60;fulltext_origin&#x60; - &#x60;grants.award_id&#x60; - &#x60;grants.funder&#x60; - &#x60;has_abstract&#x60; - &#x60;has_doi&#x60; - &#x60;has_fulltext&#x60; - &#x60;has_ngrams&#x60; - &#x60;has_oa_accepted_or_published_version&#x60; - &#x60;has_oa_submitted_version&#x60; - &#x60;has_old_authors&#x60; - &#x60;has_orcid&#x60; - &#x60;has_pdf_url&#x60; - &#x60;has_pmcid&#x60; - &#x60;has_pmid&#x60; - &#x60;has_raw_affiliation_string&#x60; - &#x60;has_references&#x60; - &#x60;host_venue.id&#x60; - &#x60;ids.mag&#x60; - &#x60;ids.openalex&#x60; - &#x60;ids.pmcid&#x60; - &#x60;ids.pmid&#x60; - &#x60;institution.id&#x60; - &#x60;institutions.continent&#x60; - &#x60;institutions.country_code&#x60; - &#x60;institutions.id&#x60; - &#x60;institutions.is_global_south&#x60; - &#x60;institutions.ror&#x60; - &#x60;institutions.type&#x60; - &#x60;institutions_distinct_count&#x60; - &#x60;is_corresponding&#x60; - &#x60;is_oa&#x60; - &#x60;is_paratext&#x60; - &#x60;is_retracted&#x60; - &#x60;journal&#x60; - &#x60;keyword.search&#x60; - &#x60;keywords.keyword&#x60; - &#x60;language&#x60; - &#x60;locations.is_accepted&#x60; - &#x60;locations.is_oa&#x60; - &#x60;locations.is_published&#x60; - &#x60;locations.landing_page_url&#x60; - &#x60;locations.license&#x60; - &#x60;locations.source.has_issn&#x60; - &#x60;locations.source.host_institution_lineage&#x60; - &#x60;locations.source.host_organization&#x60; - &#x60;locations.source.host_organization_lineage&#x60; - &#x60;locations.source.id&#x60; - &#x60;locations.source.is_in_doaj&#x60; - &#x60;locations.source.is_oa&#x60; - &#x60;locations.source.issn&#x60; - &#x60;locations.source.publisher_lineage&#x60; - &#x60;locations.source.type&#x60; - &#x60;locations.version&#x60; - &#x60;locations_count&#x60; - &#x60;mag&#x60; - &#x60;oa_status&#x60; - &#x60;open_access.any_repository_has_fulltext&#x60; - &#x60;open_access.is_oa&#x60; - &#x60;open_access.oa_status&#x60; - &#x60;openalex&#x60; - &#x60;openalex_id&#x60; - &#x60;pmcid&#x60; - &#x60;pmid&#x60; - &#x60;primary_location.is_accepted&#x60; - &#x60;primary_location.is_oa&#x60; - &#x60;primary_location.is_published&#x60; - &#x60;primary_location.landing_page_url&#x60; - &#x60;primary_location.license&#x60; - &#x60;primary_location.source.has_issn&#x60; - &#x60;primary_location.source.host_institution_lineage&#x60; - &#x60;primary_location.source.host_organization&#x60; - &#x60;primary_location.source.host_organization_lineage&#x60; - &#x60;primary_location.source.id&#x60; - &#x60;primary_location.source.is_in_doaj&#x60; - &#x60;primary_location.source.is_oa&#x60; - &#x60;primary_location.source.issn&#x60; - &#x60;primary_location.source.publisher_lineage&#x60; - &#x60;primary_location.source.type&#x60; - &#x60;primary_location.version&#x60; - &#x60;publication_date&#x60; - &#x60;publication_year&#x60; - &#x60;raw_affiliation_string.search&#x60; - &#x60;referenced_works&#x60; - &#x60;referenced_works_count&#x60; - &#x60;related_to&#x60; - &#x60;repository&#x60; - &#x60;sustainable_development_goals.id&#x60; - &#x60;sustainable_development_goals.score&#x60; - &#x60;title.search&#x60; - &#x60;title_and_abstract.search&#x60; - &#x60;to_publication_date&#x60; - &#x60;to_updated_date&#x60; - &#x60;type&#x60; - &#x60;type_crossref&#x60; - &#x60;version&#x60; | (optional) defaults to undefined
 **userAgent** | [**string**] | [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool) | (optional) defaults to undefined
 **mailto** | [**string**] | The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool). | (optional) defaults to undefined


### Return type

**WorksResponse**

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


