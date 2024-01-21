import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Apc } from '../models/Apc';
import { AssociatedInstitution } from '../models/AssociatedInstitution';
import { Author } from '../models/Author';
import { AuthorsResponseSchema } from '../models/AuthorsResponseSchema';
import { AutoCompleteResultItem } from '../models/AutoCompleteResultItem';
import { AutoCompleteResultSchema } from '../models/AutoCompleteResultSchema';
import { BaseSelectionAttributes } from '../models/BaseSelectionAttributes';
import { Concept } from '../models/Concept';
import { ConceptIds } from '../models/ConceptIds';
import { ConceptSchema } from '../models/ConceptSchema';
import { ConceptsResponseSchema } from '../models/ConceptsResponseSchema';
import { DehydratedConcept } from '../models/DehydratedConcept';
import { DehydratedInstitution } from '../models/DehydratedInstitution';
import { ErrorMessage } from '../models/ErrorMessage';
import { FunderSchema } from '../models/FunderSchema';
import { FundersArray } from '../models/FundersArray';
import { Geo } from '../models/Geo';
import { Ids } from '../models/Ids';
import { InstitutionSchema } from '../models/InstitutionSchema';
import { InstitutionsResponseSchema } from '../models/InstitutionsResponseSchema';
import { InternationalDescription } from '../models/InternationalDescription';
import { InternationalDisplayName } from '../models/InternationalDisplayName';
import { InternationalDisplayNameAndDescription } from '../models/InternationalDisplayNameAndDescription';
import { Internationalisation } from '../models/Internationalisation';
import { Location } from '../models/Location';
import { LocationSource } from '../models/LocationSource';
import { Meta } from '../models/Meta';
import { NgramMeta } from '../models/NgramMeta';
import { PersonResponseSchema } from '../models/PersonResponseSchema';
import { PublisherSchema } from '../models/PublisherSchema';
import { PublisherSchemaParentPublisher } from '../models/PublisherSchemaParentPublisher';
import { PublishersResponseSchema } from '../models/PublishersResponseSchema';
import { Role } from '../models/Role';
import { RootResponseSchema } from '../models/RootResponseSchema';
import { SourceSchema } from '../models/SourceSchema';
import { SourcesArray } from '../models/SourcesArray';
import { SummaryStats } from '../models/SummaryStats';
import { WorkAttributes } from '../models/WorkAttributes';
import { WorkNgramsSchema } from '../models/WorkNgramsSchema';
import { WorkSchema } from '../models/WorkSchema';
import { WorkSchemaBiblio } from '../models/WorkSchemaBiblio';
import { WorkSchemaCitedByPercentileYear } from '../models/WorkSchemaCitedByPercentileYear';
import { WorkSchemaOpenAccess } from '../models/WorkSchemaOpenAccess';
import { WorksResponseSchema } from '../models/WorksResponseSchema';

import { ObservableAuthorsApi } from "./ObservableAPI";
import { AuthorsApiRequestFactory, AuthorsApiResponseProcessor} from "../apis/AuthorsApi";

export interface AuthorsApiGetAuthorRequest {
    /**
     * 
     * @type string
     * @memberof AuthorsApigetAuthor
     */
    id: string
    /**
     * 
     * @type string
     * @memberof AuthorsApigetAuthor
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof AuthorsApigetAuthor
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof AuthorsApigetAuthor
     */
    mailto?: any
}

export interface AuthorsApiGetAuthorsRequest {
    /**
     * 
     * @type string
     * @memberof AuthorsApigetAuthors
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof AuthorsApigetAuthors
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof AuthorsApigetAuthors
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof AuthorsApigetAuthors
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof AuthorsApigetAuthors
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof AuthorsApigetAuthors
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof AuthorsApigetAuthors
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof AuthorsApigetAuthors
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof AuthorsApigetAuthors
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof AuthorsApigetAuthors
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof AuthorsApigetAuthors
     */
    sort?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof AuthorsApigetAuthors
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof AuthorsApigetAuthors
     */
    mailto?: any
}

export interface AuthorsApiGetAutocompleteAuthorsRequest {
    /**
     * 
     * @type string
     * @memberof AuthorsApigetAutocompleteAuthors
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof AuthorsApigetAutocompleteAuthors
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof AuthorsApigetAutocompleteAuthors
     */
    mailto?: any
}

export interface AuthorsApiGetRandomAuthorRequest {
    /**
     * 
     * @type string
     * @memberof AuthorsApigetRandomAuthor
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof AuthorsApigetRandomAuthor
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof AuthorsApigetRandomAuthor
     */
    mailto?: any
}

export class ObjectAuthorsApi {
    private api: ObservableAuthorsApi

    public constructor(configuration: Configuration, requestFactory?: AuthorsApiRequestFactory, responseProcessor?: AuthorsApiResponseProcessor) {
        this.api = new ObservableAuthorsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a single author by id
     * Get Author
     * @param param the request object
     */
    public getAuthorWithHttpInfo(param: AuthorsApiGetAuthorRequest, options?: Configuration): Promise<HttpInfo<Author>> {
        return this.api.getAuthorWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single author by id
     * Get Author
     * @param param the request object
     */
    public getAuthor(param: AuthorsApiGetAuthorRequest, options?: Configuration): Promise<Author> {
        return this.api.getAuthor(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get lists of authors
     * List Authors
     * @param param the request object
     */
    public getAuthorsWithHttpInfo(param: AuthorsApiGetAuthorsRequest = {}, options?: Configuration): Promise<HttpInfo<AuthorsResponseSchema>> {
        return this.api.getAuthorsWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get lists of authors
     * List Authors
     * @param param the request object
     */
    public getAuthors(param: AuthorsApiGetAuthorsRequest = {}, options?: Configuration): Promise<AuthorsResponseSchema> {
        return this.api.getAuthors(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/authors
     * @param param the request object
     */
    public getAutocompleteAuthorsWithHttpInfo(param: AuthorsApiGetAutocompleteAuthorsRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteAuthorsWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/authors
     * @param param the request object
     */
    public getAutocompleteAuthors(param: AuthorsApiGetAutocompleteAuthorsRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteAuthors(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single author by id
     * Get Random Author
     * @param param the request object
     */
    public getRandomAuthorWithHttpInfo(param: AuthorsApiGetRandomAuthorRequest = {}, options?: Configuration): Promise<HttpInfo<Author>> {
        return this.api.getRandomAuthorWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single author by id
     * Get Random Author
     * @param param the request object
     */
    public getRandomAuthor(param: AuthorsApiGetRandomAuthorRequest = {}, options?: Configuration): Promise<Author> {
        return this.api.getRandomAuthor(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableAutocompleteApi } from "./ObservableAPI";
import { AutocompleteApiRequestFactory, AutocompleteApiResponseProcessor} from "../apis/AutocompleteApi";

export interface AutocompleteApiGetAutocompleteRequest {
    /**
     * 
     * @type string
     * @memberof AutocompleteApigetAutocomplete
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof AutocompleteApigetAutocomplete
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof AutocompleteApigetAutocomplete
     */
    mailto?: any
}

export interface AutocompleteApiGetAutocompleteAuthorsRequest {
    /**
     * 
     * @type string
     * @memberof AutocompleteApigetAutocompleteAuthors
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof AutocompleteApigetAutocompleteAuthors
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof AutocompleteApigetAutocompleteAuthors
     */
    mailto?: any
}

export interface AutocompleteApiGetAutocompleteConceptsRequest {
    /**
     * 
     * @type string
     * @memberof AutocompleteApigetAutocompleteConcepts
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof AutocompleteApigetAutocompleteConcepts
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof AutocompleteApigetAutocompleteConcepts
     */
    mailto?: any
}

export interface AutocompleteApiGetAutocompleteFundersRequest {
    /**
     * 
     * @type string
     * @memberof AutocompleteApigetAutocompleteFunders
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof AutocompleteApigetAutocompleteFunders
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof AutocompleteApigetAutocompleteFunders
     */
    mailto?: any
}

export interface AutocompleteApiGetAutocompleteInstitutionsRequest {
    /**
     * 
     * @type string
     * @memberof AutocompleteApigetAutocompleteInstitutions
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof AutocompleteApigetAutocompleteInstitutions
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof AutocompleteApigetAutocompleteInstitutions
     */
    mailto?: any
}

export interface AutocompleteApiGetAutocompletePublishersRequest {
    /**
     * 
     * @type string
     * @memberof AutocompleteApigetAutocompletePublishers
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof AutocompleteApigetAutocompletePublishers
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof AutocompleteApigetAutocompletePublishers
     */
    mailto?: any
}

export interface AutocompleteApiGetAutocompleteSourcesRequest {
    /**
     * 
     * @type string
     * @memberof AutocompleteApigetAutocompleteSources
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof AutocompleteApigetAutocompleteSources
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof AutocompleteApigetAutocompleteSources
     */
    mailto?: any
}

export interface AutocompleteApiGetAutocompleteWorksRequest {
    /**
     * 
     * @type string
     * @memberof AutocompleteApigetAutocompleteWorks
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof AutocompleteApigetAutocompleteWorks
     */
    search?: string
    /**
     * 
     * @type string
     * @memberof AutocompleteApigetAutocompleteWorks
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof AutocompleteApigetAutocompleteWorks
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof AutocompleteApigetAutocompleteWorks
     */
    mailto?: any
}

export class ObjectAutocompleteApi {
    private api: ObservableAutocompleteApi

    public constructor(configuration: Configuration, requestFactory?: AutocompleteApiRequestFactory, responseProcessor?: AutocompleteApiResponseProcessor) {
        this.api = new ObservableAutocompleteApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * /autocomplete
     * @param param the request object
     */
    public getAutocompleteWithHttpInfo(param: AutocompleteApiGetAutocompleteRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete
     * @param param the request object
     */
    public getAutocomplete(param: AutocompleteApiGetAutocompleteRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocomplete(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/authors
     * @param param the request object
     */
    public getAutocompleteAuthorsWithHttpInfo(param: AutocompleteApiGetAutocompleteAuthorsRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteAuthorsWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/authors
     * @param param the request object
     */
    public getAutocompleteAuthors(param: AutocompleteApiGetAutocompleteAuthorsRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteAuthors(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/concepts
     * @param param the request object
     */
    public getAutocompleteConceptsWithHttpInfo(param: AutocompleteApiGetAutocompleteConceptsRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteConceptsWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/concepts
     * @param param the request object
     */
    public getAutocompleteConcepts(param: AutocompleteApiGetAutocompleteConceptsRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteConcepts(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/funders
     * @param param the request object
     */
    public getAutocompleteFundersWithHttpInfo(param: AutocompleteApiGetAutocompleteFundersRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteFundersWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/funders
     * @param param the request object
     */
    public getAutocompleteFunders(param: AutocompleteApiGetAutocompleteFundersRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteFunders(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/institutions
     * @param param the request object
     */
    public getAutocompleteInstitutionsWithHttpInfo(param: AutocompleteApiGetAutocompleteInstitutionsRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteInstitutionsWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/institutions
     * @param param the request object
     */
    public getAutocompleteInstitutions(param: AutocompleteApiGetAutocompleteInstitutionsRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteInstitutions(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/publishers
     * @param param the request object
     */
    public getAutocompletePublishersWithHttpInfo(param: AutocompleteApiGetAutocompletePublishersRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompletePublishersWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/publishers
     * @param param the request object
     */
    public getAutocompletePublishers(param: AutocompleteApiGetAutocompletePublishersRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompletePublishers(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/sources
     * @param param the request object
     */
    public getAutocompleteSourcesWithHttpInfo(param: AutocompleteApiGetAutocompleteSourcesRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteSourcesWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/sources
     * @param param the request object
     */
    public getAutocompleteSources(param: AutocompleteApiGetAutocompleteSourcesRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteSources(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/works
     * @param param the request object
     */
    public getAutocompleteWorksWithHttpInfo(param: AutocompleteApiGetAutocompleteWorksRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteWorksWithHttpInfo(param.filter, param.search, param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/works
     * @param param the request object
     */
    public getAutocompleteWorks(param: AutocompleteApiGetAutocompleteWorksRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteWorks(param.filter, param.search, param.q, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableConceptsApi } from "./ObservableAPI";
import { ConceptsApiRequestFactory, ConceptsApiResponseProcessor} from "../apis/ConceptsApi";

export interface ConceptsApiGetAutocompleteConceptsRequest {
    /**
     * 
     * @type string
     * @memberof ConceptsApigetAutocompleteConcepts
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof ConceptsApigetAutocompleteConcepts
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof ConceptsApigetAutocompleteConcepts
     */
    mailto?: any
}

export interface ConceptsApiGetConceptRequest {
    /**
     * 
     * @type any
     * @memberof ConceptsApigetConcept
     */
    id: any
    /**
     * 
     * @type string
     * @memberof ConceptsApigetConcept
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof ConceptsApigetConcept
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof ConceptsApigetConcept
     */
    mailto?: any
}

export interface ConceptsApiGetConceptsRequest {
    /**
     * 
     * @type string
     * @memberof ConceptsApigetConcepts
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof ConceptsApigetConcepts
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof ConceptsApigetConcepts
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof ConceptsApigetConcepts
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof ConceptsApigetConcepts
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof ConceptsApigetConcepts
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof ConceptsApigetConcepts
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof ConceptsApigetConcepts
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof ConceptsApigetConcepts
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof ConceptsApigetConcepts
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof ConceptsApigetConcepts
     */
    sort?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof ConceptsApigetConcepts
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof ConceptsApigetConcepts
     */
    mailto?: any
}

export class ObjectConceptsApi {
    private api: ObservableConceptsApi

    public constructor(configuration: Configuration, requestFactory?: ConceptsApiRequestFactory, responseProcessor?: ConceptsApiResponseProcessor) {
        this.api = new ObservableConceptsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * /autocomplete/concepts
     * @param param the request object
     */
    public getAutocompleteConceptsWithHttpInfo(param: ConceptsApiGetAutocompleteConceptsRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteConceptsWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/concepts
     * @param param the request object
     */
    public getAutocompleteConcepts(param: ConceptsApiGetAutocompleteConceptsRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteConcepts(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single concept
     * /concepts/{id}
     * @param param the request object
     */
    public getConceptWithHttpInfo(param: ConceptsApiGetConceptRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getConceptWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single concept
     * /concepts/{id}
     * @param param the request object
     */
    public getConcept(param: ConceptsApiGetConceptRequest, options?: Configuration): Promise<Concept> {
        return this.api.getConcept(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /concepts
     * @param param the request object
     */
    public getConceptsWithHttpInfo(param: ConceptsApiGetConceptsRequest = {}, options?: Configuration): Promise<HttpInfo<ConceptsResponseSchema>> {
        return this.api.getConceptsWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /concepts
     * @param param the request object
     */
    public getConcepts(param: ConceptsApiGetConceptsRequest = {}, options?: Configuration): Promise<ConceptsResponseSchema> {
        return this.api.getConcepts(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableFundersApi } from "./ObservableAPI";
import { FundersApiRequestFactory, FundersApiResponseProcessor} from "../apis/FundersApi";

export interface FundersApiGetAutocompleteFundersRequest {
    /**
     * 
     * @type string
     * @memberof FundersApigetAutocompleteFunders
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof FundersApigetAutocompleteFunders
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof FundersApigetAutocompleteFunders
     */
    mailto?: any
}

export interface FundersApiGetFunderRequest {
    /**
     * 
     * @type any
     * @memberof FundersApigetFunder
     */
    id: any
    /**
     * 
     * @type string
     * @memberof FundersApigetFunder
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof FundersApigetFunder
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof FundersApigetFunder
     */
    mailto?: any
}

export interface FundersApiGetFundersRequest {
    /**
     * 
     * @type string
     * @memberof FundersApigetFunders
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof FundersApigetFunders
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof FundersApigetFunders
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof FundersApigetFunders
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof FundersApigetFunders
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof FundersApigetFunders
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof FundersApigetFunders
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof FundersApigetFunders
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof FundersApigetFunders
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof FundersApigetFunders
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof FundersApigetFunders
     */
    sort?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof FundersApigetFunders
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof FundersApigetFunders
     */
    mailto?: any
}

export class ObjectFundersApi {
    private api: ObservableFundersApi

    public constructor(configuration: Configuration, requestFactory?: FundersApiRequestFactory, responseProcessor?: FundersApiResponseProcessor) {
        this.api = new ObservableFundersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * /autocomplete/funders
     * @param param the request object
     */
    public getAutocompleteFundersWithHttpInfo(param: FundersApiGetAutocompleteFundersRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteFundersWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/funders
     * @param param the request object
     */
    public getAutocompleteFunders(param: FundersApiGetAutocompleteFundersRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteFunders(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /funders/{id}
     * @param param the request object
     */
    public getFunderWithHttpInfo(param: FundersApiGetFunderRequest, options?: Configuration): Promise<HttpInfo<FunderSchema>> {
        return this.api.getFunderWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /funders/{id}
     * @param param the request object
     */
    public getFunder(param: FundersApiGetFunderRequest, options?: Configuration): Promise<FunderSchema> {
        return this.api.getFunder(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /funders
     * @param param the request object
     */
    public getFundersWithHttpInfo(param: FundersApiGetFundersRequest = {}, options?: Configuration): Promise<HttpInfo<FundersArray>> {
        return this.api.getFundersWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /funders
     * @param param the request object
     */
    public getFunders(param: FundersApiGetFundersRequest = {}, options?: Configuration): Promise<FundersArray> {
        return this.api.getFunders(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableInfoApi } from "./ObservableAPI";
import { InfoApiRequestFactory, InfoApiResponseProcessor} from "../apis/InfoApi";

export interface InfoApiGetRootRequest {
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof InfoApigetRoot
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof InfoApigetRoot
     */
    mailto?: any
}

export class ObjectInfoApi {
    private api: ObservableInfoApi

    public constructor(configuration: Configuration, requestFactory?: InfoApiRequestFactory, responseProcessor?: InfoApiResponseProcessor) {
        this.api = new ObservableInfoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Root endpoint
     * Root
     * @param param the request object
     */
    public getRootWithHttpInfo(param: InfoApiGetRootRequest = {}, options?: Configuration): Promise<HttpInfo<RootResponseSchema>> {
        return this.api.getRootWithHttpInfo(param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Root endpoint
     * Root
     * @param param the request object
     */
    public getRoot(param: InfoApiGetRootRequest = {}, options?: Configuration): Promise<RootResponseSchema> {
        return this.api.getRoot(param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableInstitutionsApi } from "./ObservableAPI";
import { InstitutionsApiRequestFactory, InstitutionsApiResponseProcessor} from "../apis/InstitutionsApi";

export interface InstitutionsApiGetAutocompleteInstitutionsRequest {
    /**
     * 
     * @type string
     * @memberof InstitutionsApigetAutocompleteInstitutions
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof InstitutionsApigetAutocompleteInstitutions
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof InstitutionsApigetAutocompleteInstitutions
     */
    mailto?: any
}

export interface InstitutionsApiGetInstitutionRequest {
    /**
     * 
     * @type any
     * @memberof InstitutionsApigetInstitution
     */
    id: any
    /**
     * 
     * @type string
     * @memberof InstitutionsApigetInstitution
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof InstitutionsApigetInstitution
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof InstitutionsApigetInstitution
     */
    mailto?: any
}

export interface InstitutionsApiGetInstitutionsRequest {
    /**
     * 
     * @type string
     * @memberof InstitutionsApigetInstitutions
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof InstitutionsApigetInstitutions
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof InstitutionsApigetInstitutions
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof InstitutionsApigetInstitutions
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof InstitutionsApigetInstitutions
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof InstitutionsApigetInstitutions
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof InstitutionsApigetInstitutions
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof InstitutionsApigetInstitutions
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof InstitutionsApigetInstitutions
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof InstitutionsApigetInstitutions
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof InstitutionsApigetInstitutions
     */
    sort?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof InstitutionsApigetInstitutions
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof InstitutionsApigetInstitutions
     */
    mailto?: any
}

export class ObjectInstitutionsApi {
    private api: ObservableInstitutionsApi

    public constructor(configuration: Configuration, requestFactory?: InstitutionsApiRequestFactory, responseProcessor?: InstitutionsApiResponseProcessor) {
        this.api = new ObservableInstitutionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * /autocomplete/institutions
     * @param param the request object
     */
    public getAutocompleteInstitutionsWithHttpInfo(param: InstitutionsApiGetAutocompleteInstitutionsRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteInstitutionsWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/institutions
     * @param param the request object
     */
    public getAutocompleteInstitutions(param: InstitutionsApiGetAutocompleteInstitutionsRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteInstitutions(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /institutions/{id}
     * @param param the request object
     */
    public getInstitutionWithHttpInfo(param: InstitutionsApiGetInstitutionRequest, options?: Configuration): Promise<HttpInfo<InstitutionSchema>> {
        return this.api.getInstitutionWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /institutions/{id}
     * @param param the request object
     */
    public getInstitution(param: InstitutionsApiGetInstitutionRequest, options?: Configuration): Promise<InstitutionSchema> {
        return this.api.getInstitution(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /institutions
     * @param param the request object
     */
    public getInstitutionsWithHttpInfo(param: InstitutionsApiGetInstitutionsRequest = {}, options?: Configuration): Promise<HttpInfo<InstitutionsResponseSchema>> {
        return this.api.getInstitutionsWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /institutions
     * @param param the request object
     */
    public getInstitutions(param: InstitutionsApiGetInstitutionsRequest = {}, options?: Configuration): Promise<InstitutionsResponseSchema> {
        return this.api.getInstitutions(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableListApi } from "./ObservableAPI";
import { ListApiRequestFactory, ListApiResponseProcessor} from "../apis/ListApi";

export interface ListApiGetWorksRequest {
    /**
     * 
     * @type string
     * @memberof ListApigetWorks
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof ListApigetWorks
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof ListApigetWorks
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof ListApigetWorks
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof ListApigetWorks
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof ListApigetWorks
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof ListApigetWorks
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof ListApigetWorks
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof ListApigetWorks
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof ListApigetWorks
     */
    sort?: string
    /**
     * Filter works by a specific field. See the [filter works](https://docs.openalex.org/api-entities/works/filter-works) documentation for more information. Valid filters are:   - &#x60;abstract.search&#x60; - &#x60;apc_list.currency&#x60; - &#x60;apc_list.provenance&#x60; - &#x60;apc_list.value&#x60; - &#x60;apc_list.value_usd&#x60; - &#x60;apc_paid.currency&#x60; - &#x60;apc_paid.provenance&#x60; - &#x60;apc_paid.value&#x60; - &#x60;apc_paid.value_usd&#x60; - &#x60;author.id&#x60; - &#x60;author.orcid&#x60; - &#x60;authors_count&#x60; - &#x60;authorships.author.id&#x60; - &#x60;authorships.author.orcid&#x60; - &#x60;authorships.countries&#x60; - &#x60;authorships.institutions.continent&#x60; - &#x60;authorships.institutions.country_code&#x60; - &#x60;authorships.institutions.id&#x60; - &#x60;authorships.institutions.is_global_south&#x60; - &#x60;authorships.institutions.lineage&#x60; - &#x60;authorships.institutions.ror&#x60; - &#x60;authorships.institutions.type&#x60; - &#x60;authorships.is_corresponding&#x60; - &#x60;best_oa_location.is_accepted&#x60; - &#x60;best_oa_location.is_oa&#x60; - &#x60;best_oa_location.is_published&#x60; - &#x60;best_oa_location.landing_page_url&#x60; - &#x60;best_oa_location.license&#x60; - &#x60;best_oa_location.source.host_organization&#x60; - &#x60;best_oa_location.source.host_organization_lineage&#x60; - &#x60;best_oa_location.source.id&#x60; - &#x60;best_oa_location.source.is_in_doaj&#x60; - &#x60;best_oa_location.source.is_oa&#x60; - &#x60;best_oa_location.source.issn&#x60; - &#x60;best_oa_location.source.type&#x60; - &#x60;best_oa_location.version&#x60; - &#x60;best_open_version&#x60; - &#x60;cited_by&#x60; - &#x60;cited_by_count&#x60; - &#x60;cited_by_percentile_year.max&#x60; - &#x60;cited_by_percentile_year.min&#x60; - &#x60;cites&#x60; - &#x60;concept.id&#x60; - &#x60;concepts.id&#x60; - &#x60;concepts.wikidata&#x60; - &#x60;concepts_count&#x60; - &#x60;corresponding_author_ids&#x60; - &#x60;corresponding_institution_ids&#x60; - &#x60;countries_distinct_count&#x60; - &#x60;default.search&#x60; - &#x60;display_name&#x60; - &#x60;display_name.search&#x60; - &#x60;doi&#x60; - &#x60;doi_starts_with&#x60; - &#x60;from_created_date&#x60; - &#x60;from_publication_date&#x60; - &#x60;fulltext.search&#x60; - &#x60;fulltext_origin&#x60; - &#x60;grants.award_id&#x60; - &#x60;grants.funder&#x60; - &#x60;has_abstract&#x60; - &#x60;has_doi&#x60; - &#x60;has_fulltext&#x60; - &#x60;has_ngrams&#x60; - &#x60;has_oa_accepted_or_published_version&#x60; - &#x60;has_oa_submitted_version&#x60; - &#x60;has_old_authors&#x60; - &#x60;has_orcid&#x60; - &#x60;has_pdf_url&#x60; - &#x60;has_pmcid&#x60; - &#x60;has_pmid&#x60; - &#x60;has_raw_affiliation_string&#x60; - &#x60;has_references&#x60; - &#x60;host_venue.id&#x60; - &#x60;ids.mag&#x60; - &#x60;ids.openalex&#x60; - &#x60;ids.pmcid&#x60; - &#x60;ids.pmid&#x60; - &#x60;institution.id&#x60; - &#x60;institutions.continent&#x60; - &#x60;institutions.country_code&#x60; - &#x60;institutions.id&#x60; - &#x60;institutions.is_global_south&#x60; - &#x60;institutions.ror&#x60; - &#x60;institutions.type&#x60; - &#x60;institutions_distinct_count&#x60; - &#x60;is_corresponding&#x60; - &#x60;is_oa&#x60; - &#x60;is_paratext&#x60; - &#x60;is_retracted&#x60; - &#x60;journal&#x60; - &#x60;keyword.search&#x60; - &#x60;keywords.keyword&#x60; - &#x60;language&#x60; - &#x60;locations.is_accepted&#x60; - &#x60;locations.is_oa&#x60; - &#x60;locations.is_published&#x60; - &#x60;locations.landing_page_url&#x60; - &#x60;locations.license&#x60; - &#x60;locations.source.has_issn&#x60; - &#x60;locations.source.host_institution_lineage&#x60; - &#x60;locations.source.host_organization&#x60; - &#x60;locations.source.host_organization_lineage&#x60; - &#x60;locations.source.id&#x60; - &#x60;locations.source.is_in_doaj&#x60; - &#x60;locations.source.is_oa&#x60; - &#x60;locations.source.issn&#x60; - &#x60;locations.source.publisher_lineage&#x60; - &#x60;locations.source.type&#x60; - &#x60;locations.version&#x60; - &#x60;locations_count&#x60; - &#x60;mag&#x60; - &#x60;oa_status&#x60; - &#x60;open_access.any_repository_has_fulltext&#x60; - &#x60;open_access.is_oa&#x60; - &#x60;open_access.oa_status&#x60; - &#x60;openalex&#x60; - &#x60;openalex_id&#x60; - &#x60;pmcid&#x60; - &#x60;pmid&#x60; - &#x60;primary_location.is_accepted&#x60; - &#x60;primary_location.is_oa&#x60; - &#x60;primary_location.is_published&#x60; - &#x60;primary_location.landing_page_url&#x60; - &#x60;primary_location.license&#x60; - &#x60;primary_location.source.has_issn&#x60; - &#x60;primary_location.source.host_institution_lineage&#x60; - &#x60;primary_location.source.host_organization&#x60; - &#x60;primary_location.source.host_organization_lineage&#x60; - &#x60;primary_location.source.id&#x60; - &#x60;primary_location.source.is_in_doaj&#x60; - &#x60;primary_location.source.is_oa&#x60; - &#x60;primary_location.source.issn&#x60; - &#x60;primary_location.source.publisher_lineage&#x60; - &#x60;primary_location.source.type&#x60; - &#x60;primary_location.version&#x60; - &#x60;publication_date&#x60; - &#x60;publication_year&#x60; - &#x60;raw_affiliation_string.search&#x60; - &#x60;referenced_works&#x60; - &#x60;referenced_works_count&#x60; - &#x60;related_to&#x60; - &#x60;repository&#x60; - &#x60;sustainable_development_goals.id&#x60; - &#x60;sustainable_development_goals.score&#x60; - &#x60;title.search&#x60; - &#x60;title_and_abstract.search&#x60; - &#x60;to_publication_date&#x60; - &#x60;to_updated_date&#x60; - &#x60;type&#x60; - &#x60;type_crossref&#x60; - &#x60;version&#x60;
     * @type any
     * @memberof ListApigetWorks
     */
    filter?: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof ListApigetWorks
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof ListApigetWorks
     */
    mailto?: any
}

export class ObjectListApi {
    private api: ObservableListApi

    public constructor(configuration: Configuration, requestFactory?: ListApiRequestFactory, responseProcessor?: ListApiResponseProcessor) {
        this.api = new ObservableListApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * /works
     * @param param the request object
     */
    public getWorksWithHttpInfo(param: ListApiGetWorksRequest = {}, options?: Configuration): Promise<HttpInfo<WorksResponseSchema>> {
        return this.api.getWorksWithHttpInfo(param.apiKey, param.cursor, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.filter, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works
     * @param param the request object
     */
    public getWorks(param: ListApiGetWorksRequest = {}, options?: Configuration): Promise<WorksResponseSchema> {
        return this.api.getWorks(param.apiKey, param.cursor, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.filter, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableNgramsApi } from "./ObservableAPI";
import { NgramsApiRequestFactory, NgramsApiResponseProcessor} from "../apis/NgramsApi";

export interface NgramsApiGetWorkNgramsRequest {
    /**
     * 
     * @type any
     * @memberof NgramsApigetWorkNgrams
     */
    id: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof NgramsApigetWorkNgrams
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof NgramsApigetWorkNgrams
     */
    mailto?: any
}

export class ObjectNgramsApi {
    private api: ObservableNgramsApi

    public constructor(configuration: Configuration, requestFactory?: NgramsApiRequestFactory, responseProcessor?: NgramsApiResponseProcessor) {
        this.api = new ObservableNgramsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param param the request object
     */
    public getWorkNgramsWithHttpInfo(param: NgramsApiGetWorkNgramsRequest, options?: Configuration): Promise<HttpInfo<WorkNgramsSchema>> {
        return this.api.getWorkNgramsWithHttpInfo(param.id, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param param the request object
     */
    public getWorkNgrams(param: NgramsApiGetWorkNgramsRequest, options?: Configuration): Promise<WorkNgramsSchema> {
        return this.api.getWorkNgrams(param.id, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservablePeopleApi } from "./ObservableAPI";
import { PeopleApiRequestFactory, PeopleApiResponseProcessor} from "../apis/PeopleApi";

export interface PeopleApiGetPersonRequest {
    /**
     * 
     * @type any
     * @memberof PeopleApigetPerson
     */
    id: any
    /**
     * 
     * @type string
     * @memberof PeopleApigetPerson
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof PeopleApigetPerson
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof PeopleApigetPerson
     */
    mailto?: any
}

export class ObjectPeopleApi {
    private api: ObservablePeopleApi

    public constructor(configuration: Configuration, requestFactory?: PeopleApiRequestFactory, responseProcessor?: PeopleApiResponseProcessor) {
        this.api = new ObservablePeopleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * /people/{id}
     * @param param the request object
     */
    public getPersonWithHttpInfo(param: PeopleApiGetPersonRequest, options?: Configuration): Promise<HttpInfo<PersonResponseSchema>> {
        return this.api.getPersonWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /people/{id}
     * @param param the request object
     */
    public getPerson(param: PeopleApiGetPersonRequest, options?: Configuration): Promise<PersonResponseSchema> {
        return this.api.getPerson(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservablePublishersApi } from "./ObservableAPI";
import { PublishersApiRequestFactory, PublishersApiResponseProcessor} from "../apis/PublishersApi";

export interface PublishersApiGetAutocompletePublishersRequest {
    /**
     * 
     * @type string
     * @memberof PublishersApigetAutocompletePublishers
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof PublishersApigetAutocompletePublishers
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof PublishersApigetAutocompletePublishers
     */
    mailto?: any
}

export interface PublishersApiGetPublisherRequest {
    /**
     * 
     * @type any
     * @memberof PublishersApigetPublisher
     */
    id: any
    /**
     * 
     * @type string
     * @memberof PublishersApigetPublisher
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof PublishersApigetPublisher
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof PublishersApigetPublisher
     */
    mailto?: any
}

export interface PublishersApiGetPublishersRequest {
    /**
     * 
     * @type string
     * @memberof PublishersApigetPublishers
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof PublishersApigetPublishers
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof PublishersApigetPublishers
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof PublishersApigetPublishers
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof PublishersApigetPublishers
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof PublishersApigetPublishers
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof PublishersApigetPublishers
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof PublishersApigetPublishers
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof PublishersApigetPublishers
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof PublishersApigetPublishers
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof PublishersApigetPublishers
     */
    sort?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof PublishersApigetPublishers
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof PublishersApigetPublishers
     */
    mailto?: any
}

export class ObjectPublishersApi {
    private api: ObservablePublishersApi

    public constructor(configuration: Configuration, requestFactory?: PublishersApiRequestFactory, responseProcessor?: PublishersApiResponseProcessor) {
        this.api = new ObservablePublishersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * /autocomplete/publishers
     * @param param the request object
     */
    public getAutocompletePublishersWithHttpInfo(param: PublishersApiGetAutocompletePublishersRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompletePublishersWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/publishers
     * @param param the request object
     */
    public getAutocompletePublishers(param: PublishersApiGetAutocompletePublishersRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompletePublishers(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /publishers/{id}
     * @param param the request object
     */
    public getPublisherWithHttpInfo(param: PublishersApiGetPublisherRequest, options?: Configuration): Promise<HttpInfo<PublisherSchema>> {
        return this.api.getPublisherWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /publishers/{id}
     * @param param the request object
     */
    public getPublisher(param: PublishersApiGetPublisherRequest, options?: Configuration): Promise<PublisherSchema> {
        return this.api.getPublisher(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /publishers
     * @param param the request object
     */
    public getPublishersWithHttpInfo(param: PublishersApiGetPublishersRequest = {}, options?: Configuration): Promise<HttpInfo<PublishersResponseSchema>> {
        return this.api.getPublishersWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /publishers
     * @param param the request object
     */
    public getPublishers(param: PublishersApiGetPublishersRequest = {}, options?: Configuration): Promise<PublishersResponseSchema> {
        return this.api.getPublishers(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableSingleApi } from "./ObservableAPI";
import { SingleApiRequestFactory, SingleApiResponseProcessor} from "../apis/SingleApi";

export interface SingleApiGetWorkRequest {
    /**
     * The id of the work to retrieve
     * @type any
     * @memberof SingleApigetWork
     */
    id: any
    /**
     * 
     * @type any
     * @memberof SingleApigetWork
     */
    select?: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetWork
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetWork
     */
    mailto?: any
}

export interface SingleApiGetWorkNgramsRequest {
    /**
     * 
     * @type any
     * @memberof SingleApigetWorkNgrams
     */
    id: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetWorkNgrams
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetWorkNgrams
     */
    mailto?: any
}

export class ObjectSingleApi {
    private api: ObservableSingleApi

    public constructor(configuration: Configuration, requestFactory?: SingleApiRequestFactory, responseProcessor?: SingleApiResponseProcessor) {
        this.api = new ObservableSingleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param param the request object
     */
    public getWorkWithHttpInfo(param: SingleApiGetWorkRequest, options?: Configuration): Promise<HttpInfo<WorkSchema>> {
        return this.api.getWorkWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param param the request object
     */
    public getWork(param: SingleApiGetWorkRequest, options?: Configuration): Promise<WorkSchema> {
        return this.api.getWork(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param param the request object
     */
    public getWorkNgramsWithHttpInfo(param: SingleApiGetWorkNgramsRequest, options?: Configuration): Promise<HttpInfo<WorkNgramsSchema>> {
        return this.api.getWorkNgramsWithHttpInfo(param.id, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param param the request object
     */
    public getWorkNgrams(param: SingleApiGetWorkNgramsRequest, options?: Configuration): Promise<WorkNgramsSchema> {
        return this.api.getWorkNgrams(param.id, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableSourcesApi } from "./ObservableAPI";
import { SourcesApiRequestFactory, SourcesApiResponseProcessor} from "../apis/SourcesApi";

export interface SourcesApiGetAutocompleteSourcesRequest {
    /**
     * 
     * @type string
     * @memberof SourcesApigetAutocompleteSources
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SourcesApigetAutocompleteSources
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SourcesApigetAutocompleteSources
     */
    mailto?: any
}

export interface SourcesApiGetSourceRequest {
    /**
     * 
     * @type any
     * @memberof SourcesApigetSource
     */
    id: any
    /**
     * 
     * @type string
     * @memberof SourcesApigetSource
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SourcesApigetSource
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SourcesApigetSource
     */
    mailto?: any
}

export interface SourcesApiGetSourcesRequest {
    /**
     * 
     * @type string
     * @memberof SourcesApigetSources
     */
    groupBy?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SourcesApigetSources
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SourcesApigetSources
     */
    mailto?: any
}

export class ObjectSourcesApi {
    private api: ObservableSourcesApi

    public constructor(configuration: Configuration, requestFactory?: SourcesApiRequestFactory, responseProcessor?: SourcesApiResponseProcessor) {
        this.api = new ObservableSourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * /autocomplete/sources
     * @param param the request object
     */
    public getAutocompleteSourcesWithHttpInfo(param: SourcesApiGetAutocompleteSourcesRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteSourcesWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/sources
     * @param param the request object
     */
    public getAutocompleteSources(param: SourcesApiGetAutocompleteSourcesRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteSources(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources/{id}
     * @param param the request object
     */
    public getSourceWithHttpInfo(param: SourcesApiGetSourceRequest, options?: Configuration): Promise<HttpInfo<SourceSchema>> {
        return this.api.getSourceWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources/{id}
     * @param param the request object
     */
    public getSource(param: SourcesApiGetSourceRequest, options?: Configuration): Promise<SourceSchema> {
        return this.api.getSource(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources
     * @param param the request object
     */
    public getSourcesWithHttpInfo(param: SourcesApiGetSourcesRequest = {}, options?: Configuration): Promise<HttpInfo<SourcesArray>> {
        return this.api.getSourcesWithHttpInfo(param.groupBy, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources
     * @param param the request object
     */
    public getSources(param: SourcesApiGetSourcesRequest = {}, options?: Configuration): Promise<SourcesArray> {
        return this.api.getSources(param.groupBy, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableWorksApi } from "./ObservableAPI";
import { WorksApiRequestFactory, WorksApiResponseProcessor} from "../apis/WorksApi";

export interface WorksApiGetAutocompleteWorksRequest {
    /**
     * 
     * @type string
     * @memberof WorksApigetAutocompleteWorks
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof WorksApigetAutocompleteWorks
     */
    search?: string
    /**
     * 
     * @type string
     * @memberof WorksApigetAutocompleteWorks
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof WorksApigetAutocompleteWorks
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof WorksApigetAutocompleteWorks
     */
    mailto?: any
}

export interface WorksApiGetWorkRequest {
    /**
     * The id of the work to retrieve
     * @type any
     * @memberof WorksApigetWork
     */
    id: any
    /**
     * 
     * @type any
     * @memberof WorksApigetWork
     */
    select?: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof WorksApigetWork
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof WorksApigetWork
     */
    mailto?: any
}

export interface WorksApiGetWorkNgramsRequest {
    /**
     * 
     * @type any
     * @memberof WorksApigetWorkNgrams
     */
    id: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof WorksApigetWorkNgrams
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof WorksApigetWorkNgrams
     */
    mailto?: any
}

export interface WorksApiGetWorksRequest {
    /**
     * 
     * @type string
     * @memberof WorksApigetWorks
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof WorksApigetWorks
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof WorksApigetWorks
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof WorksApigetWorks
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof WorksApigetWorks
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof WorksApigetWorks
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof WorksApigetWorks
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof WorksApigetWorks
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof WorksApigetWorks
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof WorksApigetWorks
     */
    sort?: string
    /**
     * Filter works by a specific field. See the [filter works](https://docs.openalex.org/api-entities/works/filter-works) documentation for more information. Valid filters are:   - &#x60;abstract.search&#x60; - &#x60;apc_list.currency&#x60; - &#x60;apc_list.provenance&#x60; - &#x60;apc_list.value&#x60; - &#x60;apc_list.value_usd&#x60; - &#x60;apc_paid.currency&#x60; - &#x60;apc_paid.provenance&#x60; - &#x60;apc_paid.value&#x60; - &#x60;apc_paid.value_usd&#x60; - &#x60;author.id&#x60; - &#x60;author.orcid&#x60; - &#x60;authors_count&#x60; - &#x60;authorships.author.id&#x60; - &#x60;authorships.author.orcid&#x60; - &#x60;authorships.countries&#x60; - &#x60;authorships.institutions.continent&#x60; - &#x60;authorships.institutions.country_code&#x60; - &#x60;authorships.institutions.id&#x60; - &#x60;authorships.institutions.is_global_south&#x60; - &#x60;authorships.institutions.lineage&#x60; - &#x60;authorships.institutions.ror&#x60; - &#x60;authorships.institutions.type&#x60; - &#x60;authorships.is_corresponding&#x60; - &#x60;best_oa_location.is_accepted&#x60; - &#x60;best_oa_location.is_oa&#x60; - &#x60;best_oa_location.is_published&#x60; - &#x60;best_oa_location.landing_page_url&#x60; - &#x60;best_oa_location.license&#x60; - &#x60;best_oa_location.source.host_organization&#x60; - &#x60;best_oa_location.source.host_organization_lineage&#x60; - &#x60;best_oa_location.source.id&#x60; - &#x60;best_oa_location.source.is_in_doaj&#x60; - &#x60;best_oa_location.source.is_oa&#x60; - &#x60;best_oa_location.source.issn&#x60; - &#x60;best_oa_location.source.type&#x60; - &#x60;best_oa_location.version&#x60; - &#x60;best_open_version&#x60; - &#x60;cited_by&#x60; - &#x60;cited_by_count&#x60; - &#x60;cited_by_percentile_year.max&#x60; - &#x60;cited_by_percentile_year.min&#x60; - &#x60;cites&#x60; - &#x60;concept.id&#x60; - &#x60;concepts.id&#x60; - &#x60;concepts.wikidata&#x60; - &#x60;concepts_count&#x60; - &#x60;corresponding_author_ids&#x60; - &#x60;corresponding_institution_ids&#x60; - &#x60;countries_distinct_count&#x60; - &#x60;default.search&#x60; - &#x60;display_name&#x60; - &#x60;display_name.search&#x60; - &#x60;doi&#x60; - &#x60;doi_starts_with&#x60; - &#x60;from_created_date&#x60; - &#x60;from_publication_date&#x60; - &#x60;fulltext.search&#x60; - &#x60;fulltext_origin&#x60; - &#x60;grants.award_id&#x60; - &#x60;grants.funder&#x60; - &#x60;has_abstract&#x60; - &#x60;has_doi&#x60; - &#x60;has_fulltext&#x60; - &#x60;has_ngrams&#x60; - &#x60;has_oa_accepted_or_published_version&#x60; - &#x60;has_oa_submitted_version&#x60; - &#x60;has_old_authors&#x60; - &#x60;has_orcid&#x60; - &#x60;has_pdf_url&#x60; - &#x60;has_pmcid&#x60; - &#x60;has_pmid&#x60; - &#x60;has_raw_affiliation_string&#x60; - &#x60;has_references&#x60; - &#x60;host_venue.id&#x60; - &#x60;ids.mag&#x60; - &#x60;ids.openalex&#x60; - &#x60;ids.pmcid&#x60; - &#x60;ids.pmid&#x60; - &#x60;institution.id&#x60; - &#x60;institutions.continent&#x60; - &#x60;institutions.country_code&#x60; - &#x60;institutions.id&#x60; - &#x60;institutions.is_global_south&#x60; - &#x60;institutions.ror&#x60; - &#x60;institutions.type&#x60; - &#x60;institutions_distinct_count&#x60; - &#x60;is_corresponding&#x60; - &#x60;is_oa&#x60; - &#x60;is_paratext&#x60; - &#x60;is_retracted&#x60; - &#x60;journal&#x60; - &#x60;keyword.search&#x60; - &#x60;keywords.keyword&#x60; - &#x60;language&#x60; - &#x60;locations.is_accepted&#x60; - &#x60;locations.is_oa&#x60; - &#x60;locations.is_published&#x60; - &#x60;locations.landing_page_url&#x60; - &#x60;locations.license&#x60; - &#x60;locations.source.has_issn&#x60; - &#x60;locations.source.host_institution_lineage&#x60; - &#x60;locations.source.host_organization&#x60; - &#x60;locations.source.host_organization_lineage&#x60; - &#x60;locations.source.id&#x60; - &#x60;locations.source.is_in_doaj&#x60; - &#x60;locations.source.is_oa&#x60; - &#x60;locations.source.issn&#x60; - &#x60;locations.source.publisher_lineage&#x60; - &#x60;locations.source.type&#x60; - &#x60;locations.version&#x60; - &#x60;locations_count&#x60; - &#x60;mag&#x60; - &#x60;oa_status&#x60; - &#x60;open_access.any_repository_has_fulltext&#x60; - &#x60;open_access.is_oa&#x60; - &#x60;open_access.oa_status&#x60; - &#x60;openalex&#x60; - &#x60;openalex_id&#x60; - &#x60;pmcid&#x60; - &#x60;pmid&#x60; - &#x60;primary_location.is_accepted&#x60; - &#x60;primary_location.is_oa&#x60; - &#x60;primary_location.is_published&#x60; - &#x60;primary_location.landing_page_url&#x60; - &#x60;primary_location.license&#x60; - &#x60;primary_location.source.has_issn&#x60; - &#x60;primary_location.source.host_institution_lineage&#x60; - &#x60;primary_location.source.host_organization&#x60; - &#x60;primary_location.source.host_organization_lineage&#x60; - &#x60;primary_location.source.id&#x60; - &#x60;primary_location.source.is_in_doaj&#x60; - &#x60;primary_location.source.is_oa&#x60; - &#x60;primary_location.source.issn&#x60; - &#x60;primary_location.source.publisher_lineage&#x60; - &#x60;primary_location.source.type&#x60; - &#x60;primary_location.version&#x60; - &#x60;publication_date&#x60; - &#x60;publication_year&#x60; - &#x60;raw_affiliation_string.search&#x60; - &#x60;referenced_works&#x60; - &#x60;referenced_works_count&#x60; - &#x60;related_to&#x60; - &#x60;repository&#x60; - &#x60;sustainable_development_goals.id&#x60; - &#x60;sustainable_development_goals.score&#x60; - &#x60;title.search&#x60; - &#x60;title_and_abstract.search&#x60; - &#x60;to_publication_date&#x60; - &#x60;to_updated_date&#x60; - &#x60;type&#x60; - &#x60;type_crossref&#x60; - &#x60;version&#x60;
     * @type any
     * @memberof WorksApigetWorks
     */
    filter?: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof WorksApigetWorks
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof WorksApigetWorks
     */
    mailto?: any
}

export class ObjectWorksApi {
    private api: ObservableWorksApi

    public constructor(configuration: Configuration, requestFactory?: WorksApiRequestFactory, responseProcessor?: WorksApiResponseProcessor) {
        this.api = new ObservableWorksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * /autocomplete/works
     * @param param the request object
     */
    public getAutocompleteWorksWithHttpInfo(param: WorksApiGetAutocompleteWorksRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteWorksWithHttpInfo(param.filter, param.search, param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/works
     * @param param the request object
     */
    public getAutocompleteWorks(param: WorksApiGetAutocompleteWorksRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteWorks(param.filter, param.search, param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param param the request object
     */
    public getWorkWithHttpInfo(param: WorksApiGetWorkRequest, options?: Configuration): Promise<HttpInfo<WorkSchema>> {
        return this.api.getWorkWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param param the request object
     */
    public getWork(param: WorksApiGetWorkRequest, options?: Configuration): Promise<WorkSchema> {
        return this.api.getWork(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param param the request object
     */
    public getWorkNgramsWithHttpInfo(param: WorksApiGetWorkNgramsRequest, options?: Configuration): Promise<HttpInfo<WorkNgramsSchema>> {
        return this.api.getWorkNgramsWithHttpInfo(param.id, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param param the request object
     */
    public getWorkNgrams(param: WorksApiGetWorkNgramsRequest, options?: Configuration): Promise<WorkNgramsSchema> {
        return this.api.getWorkNgrams(param.id, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works
     * @param param the request object
     */
    public getWorksWithHttpInfo(param: WorksApiGetWorksRequest = {}, options?: Configuration): Promise<HttpInfo<WorksResponseSchema>> {
        return this.api.getWorksWithHttpInfo(param.apiKey, param.cursor, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.filter, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works
     * @param param the request object
     */
    public getWorks(param: WorksApiGetWorksRequest = {}, options?: Configuration): Promise<WorksResponseSchema> {
        return this.api.getWorks(param.apiKey, param.cursor, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.filter, param.userAgent, param.mailto,  options).toPromise();
    }

}
