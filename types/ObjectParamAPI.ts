import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Apc } from '../models/Apc';
import { AssociatedInstitution } from '../models/AssociatedInstitution';
import { Author } from '../models/Author';
import { Authors } from '../models/Authors';
import { AutoCompleteResultItem } from '../models/AutoCompleteResultItem';
import { AutoCompleteResultSchema } from '../models/AutoCompleteResultSchema';
import { BaseSelectionAttributes } from '../models/BaseSelectionAttributes';
import { Concept } from '../models/Concept';
import { ConceptIds } from '../models/ConceptIds';
import { Concepts } from '../models/Concepts';
import { DehydratedConcept } from '../models/DehydratedConcept';
import { DehydratedInstitution } from '../models/DehydratedInstitution';
import { Domain } from '../models/Domain';
import { ErrorMessage } from '../models/ErrorMessage';
import { Field } from '../models/Field';
import { Funder } from '../models/Funder';
import { FunderSchema } from '../models/FunderSchema';
import { FundersArray } from '../models/FundersArray';
import { Geo } from '../models/Geo';
import { Ids } from '../models/Ids';
import { Institution } from '../models/Institution';
import { InstitutionSchema } from '../models/InstitutionSchema';
import { Institutions } from '../models/Institutions';
import { InternationalDescription } from '../models/InternationalDescription';
import { InternationalDisplayName } from '../models/InternationalDisplayName';
import { InternationalDisplayNameAndDescription } from '../models/InternationalDisplayNameAndDescription';
import { Internationalisation } from '../models/Internationalisation';
import { Location } from '../models/Location';
import { LocationSource } from '../models/LocationSource';
import { Meta } from '../models/Meta';
import { NgramMeta } from '../models/NgramMeta';
import { Ngrams } from '../models/Ngrams';
import { Person } from '../models/Person';
import { Publisher } from '../models/Publisher';
import { PublisherParentPublisher } from '../models/PublisherParentPublisher';
import { PublisherSchema } from '../models/PublisherSchema';
import { Publishers } from '../models/Publishers';
import { Role } from '../models/Role';
import { RootResponseSchema } from '../models/RootResponseSchema';
import { Source } from '../models/Source';
import { SourceSchema } from '../models/SourceSchema';
import { Sources } from '../models/Sources';
import { Subfield } from '../models/Subfield';
import { SummaryStats } from '../models/SummaryStats';
import { Topic } from '../models/Topic';
import { TopicLevelArraySchema } from '../models/TopicLevelArraySchema';
import { TopicLevelSchema } from '../models/TopicLevelSchema';
import { TopicLevelSchemaId } from '../models/TopicLevelSchemaId';
import { Topics } from '../models/Topics';
import { TopicsMeta } from '../models/TopicsMeta';
import { Work } from '../models/Work';
import { WorkAttributes } from '../models/WorkAttributes';
import { WorkBiblio } from '../models/WorkBiblio';
import { WorkCitedByPercentileYear } from '../models/WorkCitedByPercentileYear';
import { WorkOpenAccess } from '../models/WorkOpenAccess';
import { WorkSchema } from '../models/WorkSchema';
import { WorksResponse } from '../models/WorksResponse';

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
    public getAuthorsWithHttpInfo(param: AuthorsApiGetAuthorsRequest = {}, options?: Configuration): Promise<HttpInfo<Authors>> {
        return this.api.getAuthorsWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get lists of authors
     * List Authors
     * @param param the request object
     */
    public getAuthors(param: AuthorsApiGetAuthorsRequest = {}, options?: Configuration): Promise<Authors> {
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
     * Get a random author
     * Get Random Author
     * @param param the request object
     */
    public getRandomAuthorWithHttpInfo(param: AuthorsApiGetRandomAuthorRequest = {}, options?: Configuration): Promise<HttpInfo<Author>> {
        return this.api.getRandomAuthorWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random author
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

export interface ConceptsApiGetConceptByIdRequest {
    /**
     * 
     * @type any
     * @memberof ConceptsApigetConceptById
     */
    id: any
    /**
     * 
     * @type string
     * @memberof ConceptsApigetConceptById
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof ConceptsApigetConceptById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof ConceptsApigetConceptById
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

export interface ConceptsApiGetRandomConceptRequest {
    /**
     * 
     * @type string
     * @memberof ConceptsApigetRandomConcept
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof ConceptsApigetRandomConcept
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof ConceptsApigetRandomConcept
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
    public getConceptByIdWithHttpInfo(param: ConceptsApiGetConceptByIdRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getConceptByIdWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single concept
     * /concepts/{id}
     * @param param the request object
     */
    public getConceptById(param: ConceptsApiGetConceptByIdRequest, options?: Configuration): Promise<Concept> {
        return this.api.getConceptById(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /concepts
     * @param param the request object
     */
    public getConceptsWithHttpInfo(param: ConceptsApiGetConceptsRequest = {}, options?: Configuration): Promise<HttpInfo<Concepts>> {
        return this.api.getConceptsWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /concepts
     * @param param the request object
     */
    public getConcepts(param: ConceptsApiGetConceptsRequest = {}, options?: Configuration): Promise<Concepts> {
        return this.api.getConcepts(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random concept
     * /concepts/random
     * @param param the request object
     */
    public getRandomConceptWithHttpInfo(param: ConceptsApiGetRandomConceptRequest = {}, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getRandomConceptWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random concept
     * /concepts/random
     * @param param the request object
     */
    public getRandomConcept(param: ConceptsApiGetRandomConceptRequest = {}, options?: Configuration): Promise<Concept> {
        return this.api.getRandomConcept(param.select, param.userAgent, param.mailto,  options).toPromise();
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

export interface FundersApiGetRandomFunderRequest {
    /**
     * 
     * @type string
     * @memberof FundersApigetRandomFunder
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof FundersApigetRandomFunder
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof FundersApigetRandomFunder
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
    public getFunderWithHttpInfo(param: FundersApiGetFunderRequest, options?: Configuration): Promise<HttpInfo<Funder>> {
        return this.api.getFunderWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /funders/{id}
     * @param param the request object
     */
    public getFunder(param: FundersApiGetFunderRequest, options?: Configuration): Promise<Funder> {
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

    /**
     * Get a random funder
     * /funders/random
     * @param param the request object
     */
    public getRandomFunderWithHttpInfo(param: FundersApiGetRandomFunderRequest = {}, options?: Configuration): Promise<HttpInfo<Funder>> {
        return this.api.getRandomFunderWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random funder
     * /funders/random
     * @param param the request object
     */
    public getRandomFunder(param: FundersApiGetRandomFunderRequest = {}, options?: Configuration): Promise<Funder> {
        return this.api.getRandomFunder(param.select, param.userAgent, param.mailto,  options).toPromise();
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

export interface InstitutionsApiGetRandomInstitutionRequest {
    /**
     * 
     * @type string
     * @memberof InstitutionsApigetRandomInstitution
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof InstitutionsApigetRandomInstitution
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof InstitutionsApigetRandomInstitution
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
    public getInstitutionWithHttpInfo(param: InstitutionsApiGetInstitutionRequest, options?: Configuration): Promise<HttpInfo<Institution>> {
        return this.api.getInstitutionWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /institutions/{id}
     * @param param the request object
     */
    public getInstitution(param: InstitutionsApiGetInstitutionRequest, options?: Configuration): Promise<Institution> {
        return this.api.getInstitution(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /institutions
     * @param param the request object
     */
    public getInstitutionsWithHttpInfo(param: InstitutionsApiGetInstitutionsRequest = {}, options?: Configuration): Promise<HttpInfo<Institutions>> {
        return this.api.getInstitutionsWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /institutions
     * @param param the request object
     */
    public getInstitutions(param: InstitutionsApiGetInstitutionsRequest = {}, options?: Configuration): Promise<Institutions> {
        return this.api.getInstitutions(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random institution
     * /institutions/random
     * @param param the request object
     */
    public getRandomInstitutionWithHttpInfo(param: InstitutionsApiGetRandomInstitutionRequest = {}, options?: Configuration): Promise<HttpInfo<Institution>> {
        return this.api.getRandomInstitutionWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random institution
     * /institutions/random
     * @param param the request object
     */
    public getRandomInstitution(param: InstitutionsApiGetRandomInstitutionRequest = {}, options?: Configuration): Promise<Institution> {
        return this.api.getRandomInstitution(param.select, param.userAgent, param.mailto,  options).toPromise();
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
    public getWorksWithHttpInfo(param: ListApiGetWorksRequest = {}, options?: Configuration): Promise<HttpInfo<WorksResponse>> {
        return this.api.getWorksWithHttpInfo(param.apiKey, param.cursor, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.filter, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works
     * @param param the request object
     */
    public getWorks(param: ListApiGetWorksRequest = {}, options?: Configuration): Promise<WorksResponse> {
        return this.api.getWorks(param.apiKey, param.cursor, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.filter, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableMultipleApi } from "./ObservableAPI";
import { MultipleApiRequestFactory, MultipleApiResponseProcessor} from "../apis/MultipleApi";

export interface MultipleApiGetConceptsRequest {
    /**
     * 
     * @type string
     * @memberof MultipleApigetConcepts
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof MultipleApigetConcepts
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof MultipleApigetConcepts
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof MultipleApigetConcepts
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof MultipleApigetConcepts
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof MultipleApigetConcepts
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof MultipleApigetConcepts
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof MultipleApigetConcepts
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof MultipleApigetConcepts
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof MultipleApigetConcepts
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof MultipleApigetConcepts
     */
    sort?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof MultipleApigetConcepts
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof MultipleApigetConcepts
     */
    mailto?: any
}

export interface MultipleApiGetDomainByIdRequest {
    /**
     * 
     * @type any
     * @memberof MultipleApigetDomainById
     */
    id: any
    /**
     * 
     * @type number
     * @memberof MultipleApigetDomainById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof MultipleApigetDomainById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof MultipleApigetDomainById
     */
    mailto?: any
}

export interface MultipleApiGetFieldByIdRequest {
    /**
     * 
     * @type any
     * @memberof MultipleApigetFieldById
     */
    id: any
    /**
     * 
     * @type number
     * @memberof MultipleApigetFieldById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof MultipleApigetFieldById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof MultipleApigetFieldById
     */
    mailto?: any
}

export interface MultipleApiGetSubfieldByIdRequest {
    /**
     * 
     * @type any
     * @memberof MultipleApigetSubfieldById
     */
    id: any
    /**
     * 
     * @type number
     * @memberof MultipleApigetSubfieldById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof MultipleApigetSubfieldById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof MultipleApigetSubfieldById
     */
    mailto?: any
}

export interface MultipleApiGetTopicsRequest {
    /**
     * 
     * @type string
     * @memberof MultipleApigetTopics
     */
    sort?: string
    /**
     * 
     * @type number
     * @memberof MultipleApigetTopics
     */
    perPage?: number
    /**
     * 
     * @type any
     * @memberof MultipleApigetTopics
     */
    page?: any
    /**
     * 
     * @type any
     * @memberof MultipleApigetTopics
     */
    sample?: any
    /**
     * 
     * @type string
     * @memberof MultipleApigetTopics
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof MultipleApigetTopics
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof MultipleApigetTopics
     */
    search?: string
    /**
     * 
     * @type string
     * @memberof MultipleApigetTopics
     */
    groupBy?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof MultipleApigetTopics
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof MultipleApigetTopics
     */
    mailto?: any
}

export class ObjectMultipleApi {
    private api: ObservableMultipleApi

    public constructor(configuration: Configuration, requestFactory?: MultipleApiRequestFactory, responseProcessor?: MultipleApiResponseProcessor) {
        this.api = new ObservableMultipleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * /concepts
     * @param param the request object
     */
    public getConceptsWithHttpInfo(param: MultipleApiGetConceptsRequest = {}, options?: Configuration): Promise<HttpInfo<Concepts>> {
        return this.api.getConceptsWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /concepts
     * @param param the request object
     */
    public getConcepts(param: MultipleApiGetConceptsRequest = {}, options?: Configuration): Promise<Concepts> {
        return this.api.getConcepts(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /domains/{id}
     * @param param the request object
     */
    public getDomainByIdWithHttpInfo(param: MultipleApiGetDomainByIdRequest, options?: Configuration): Promise<HttpInfo<Domain>> {
        return this.api.getDomainByIdWithHttpInfo(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /domains/{id}
     * @param param the request object
     */
    public getDomainById(param: MultipleApiGetDomainByIdRequest, options?: Configuration): Promise<Domain> {
        return this.api.getDomainById(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /fields/{id}
     * @param param the request object
     */
    public getFieldByIdWithHttpInfo(param: MultipleApiGetFieldByIdRequest, options?: Configuration): Promise<HttpInfo<Field>> {
        return this.api.getFieldByIdWithHttpInfo(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /fields/{id}
     * @param param the request object
     */
    public getFieldById(param: MultipleApiGetFieldByIdRequest, options?: Configuration): Promise<Field> {
        return this.api.getFieldById(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /subfields/{id}
     * @param param the request object
     */
    public getSubfieldByIdWithHttpInfo(param: MultipleApiGetSubfieldByIdRequest, options?: Configuration): Promise<HttpInfo<Subfield>> {
        return this.api.getSubfieldByIdWithHttpInfo(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /subfields/{id}
     * @param param the request object
     */
    public getSubfieldById(param: MultipleApiGetSubfieldByIdRequest, options?: Configuration): Promise<Subfield> {
        return this.api.getSubfieldById(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /topics
     * @param param the request object
     */
    public getTopicsWithHttpInfo(param: MultipleApiGetTopicsRequest = {}, options?: Configuration): Promise<HttpInfo<Topics>> {
        return this.api.getTopicsWithHttpInfo(param.sort, param.perPage, param.page, param.sample, param.select, param.filter, param.search, param.groupBy, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /topics
     * @param param the request object
     */
    public getTopics(param: MultipleApiGetTopicsRequest = {}, options?: Configuration): Promise<Topics> {
        return this.api.getTopics(param.sort, param.perPage, param.page, param.sample, param.select, param.filter, param.search, param.groupBy, param.userAgent, param.mailto,  options).toPromise();
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
    public getWorkNgramsWithHttpInfo(param: NgramsApiGetWorkNgramsRequest, options?: Configuration): Promise<HttpInfo<Ngrams>> {
        return this.api.getWorkNgramsWithHttpInfo(param.id, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param param the request object
     */
    public getWorkNgrams(param: NgramsApiGetWorkNgramsRequest, options?: Configuration): Promise<Ngrams> {
        return this.api.getWorkNgrams(param.id, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableOpenAlexApi } from "./ObservableAPI";
import { OpenAlexApiRequestFactory, OpenAlexApiResponseProcessor} from "../apis/OpenAlexApi";

export interface OpenAlexApiGetAuthorRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAuthor
     */
    id: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAuthor
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetAuthor
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetAuthor
     */
    mailto?: any
}

export interface OpenAlexApiGetAuthorsRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAuthors
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAuthors
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAuthors
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAuthors
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetAuthors
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetAuthors
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetAuthors
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAuthors
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetAuthors
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAuthors
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAuthors
     */
    sort?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetAuthors
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetAuthors
     */
    mailto?: any
}

export interface OpenAlexApiGetAutocompleteRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAutocomplete
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetAutocomplete
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetAutocomplete
     */
    mailto?: any
}

export interface OpenAlexApiGetAutocompleteAuthorsRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAutocompleteAuthors
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetAutocompleteAuthors
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetAutocompleteAuthors
     */
    mailto?: any
}

export interface OpenAlexApiGetAutocompleteConceptsRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAutocompleteConcepts
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetAutocompleteConcepts
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetAutocompleteConcepts
     */
    mailto?: any
}

export interface OpenAlexApiGetAutocompleteFundersRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAutocompleteFunders
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetAutocompleteFunders
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetAutocompleteFunders
     */
    mailto?: any
}

export interface OpenAlexApiGetAutocompleteInstitutionsRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAutocompleteInstitutions
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetAutocompleteInstitutions
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetAutocompleteInstitutions
     */
    mailto?: any
}

export interface OpenAlexApiGetAutocompletePublishersRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAutocompletePublishers
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetAutocompletePublishers
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetAutocompletePublishers
     */
    mailto?: any
}

export interface OpenAlexApiGetAutocompleteSourcesRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAutocompleteSources
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetAutocompleteSources
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetAutocompleteSources
     */
    mailto?: any
}

export interface OpenAlexApiGetAutocompleteWorksRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAutocompleteWorks
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAutocompleteWorks
     */
    search?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetAutocompleteWorks
     */
    q?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetAutocompleteWorks
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetAutocompleteWorks
     */
    mailto?: any
}

export interface OpenAlexApiGetConceptByIdRequest {
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetConceptById
     */
    id: any
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetConceptById
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetConceptById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetConceptById
     */
    mailto?: any
}

export interface OpenAlexApiGetConceptsRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetConcepts
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetConcepts
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetConcepts
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetConcepts
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetConcepts
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetConcepts
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetConcepts
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetConcepts
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetConcepts
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetConcepts
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetConcepts
     */
    sort?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetConcepts
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetConcepts
     */
    mailto?: any
}

export interface OpenAlexApiGetDomainByIdRequest {
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetDomainById
     */
    id: any
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetDomainById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetDomainById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetDomainById
     */
    mailto?: any
}

export interface OpenAlexApiGetFieldByIdRequest {
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetFieldById
     */
    id: any
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetFieldById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetFieldById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetFieldById
     */
    mailto?: any
}

export interface OpenAlexApiGetFunderRequest {
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetFunder
     */
    id: any
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetFunder
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetFunder
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetFunder
     */
    mailto?: any
}

export interface OpenAlexApiGetFundersRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetFunders
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetFunders
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetFunders
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetFunders
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetFunders
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetFunders
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetFunders
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetFunders
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetFunders
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetFunders
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetFunders
     */
    sort?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetFunders
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetFunders
     */
    mailto?: any
}

export interface OpenAlexApiGetInstitutionRequest {
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetInstitution
     */
    id: any
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetInstitution
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetInstitution
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetInstitution
     */
    mailto?: any
}

export interface OpenAlexApiGetInstitutionsRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetInstitutions
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetInstitutions
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetInstitutions
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetInstitutions
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetInstitutions
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetInstitutions
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetInstitutions
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetInstitutions
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetInstitutions
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetInstitutions
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetInstitutions
     */
    sort?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetInstitutions
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetInstitutions
     */
    mailto?: any
}

export interface OpenAlexApiGetPersonRequest {
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetPerson
     */
    id: any
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetPerson
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetPerson
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetPerson
     */
    mailto?: any
}

export interface OpenAlexApiGetPublisherRequest {
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetPublisher
     */
    id: any
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetPublisher
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetPublisher
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetPublisher
     */
    mailto?: any
}

export interface OpenAlexApiGetPublishersRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetPublishers
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetPublishers
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetPublishers
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetPublishers
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetPublishers
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetPublishers
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetPublishers
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetPublishers
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetPublishers
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetPublishers
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetPublishers
     */
    sort?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetPublishers
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetPublishers
     */
    mailto?: any
}

export interface OpenAlexApiGetRandomAuthorRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetRandomAuthor
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetRandomAuthor
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetRandomAuthor
     */
    mailto?: any
}

export interface OpenAlexApiGetRandomConceptRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetRandomConcept
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetRandomConcept
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetRandomConcept
     */
    mailto?: any
}

export interface OpenAlexApiGetRandomFunderRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetRandomFunder
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetRandomFunder
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetRandomFunder
     */
    mailto?: any
}

export interface OpenAlexApiGetRandomInstitutionRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetRandomInstitution
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetRandomInstitution
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetRandomInstitution
     */
    mailto?: any
}

export interface OpenAlexApiGetRandomPublisherRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetRandomPublisher
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetRandomPublisher
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetRandomPublisher
     */
    mailto?: any
}

export interface OpenAlexApiGetRandomSourceRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetRandomSource
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetRandomSource
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetRandomSource
     */
    mailto?: any
}

export interface OpenAlexApiGetRandomWorkRequest {
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetRandomWork
     */
    select?: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetRandomWork
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetRandomWork
     */
    mailto?: any
}

export interface OpenAlexApiGetRootRequest {
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetRoot
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetRoot
     */
    mailto?: any
}

export interface OpenAlexApiGetSourceRequest {
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetSource
     */
    id: any
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetSource
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetSource
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetSource
     */
    mailto?: any
}

export interface OpenAlexApiGetSourcesRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetSources
     */
    groupBy?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetSources
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetSources
     */
    mailto?: any
}

export interface OpenAlexApiGetSubfieldByIdRequest {
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetSubfieldById
     */
    id: any
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetSubfieldById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetSubfieldById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetSubfieldById
     */
    mailto?: any
}

export interface OpenAlexApiGetTopicByIdRequest {
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetTopicById
     */
    id: any
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetTopicById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetTopicById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetTopicById
     */
    mailto?: any
}

export interface OpenAlexApiGetTopicsRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetTopics
     */
    sort?: string
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetTopics
     */
    perPage?: number
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetTopics
     */
    page?: any
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetTopics
     */
    sample?: any
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetTopics
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetTopics
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetTopics
     */
    search?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetTopics
     */
    groupBy?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetTopics
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetTopics
     */
    mailto?: any
}

export interface OpenAlexApiGetWorkRequest {
    /**
     * The id of the work to retrieve
     * @type any
     * @memberof OpenAlexApigetWork
     */
    id: any
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetWork
     */
    select?: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetWork
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetWork
     */
    mailto?: any
}

export interface OpenAlexApiGetWorkNgramsRequest {
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetWorkNgrams
     */
    id: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetWorkNgrams
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetWorkNgrams
     */
    mailto?: any
}

export interface OpenAlexApiGetWorksRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetWorks
     */
    apiKey?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetWorks
     */
    cursor?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetWorks
     */
    groupBy?: string
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetWorks
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetWorks
     */
    perPage?: number
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetWorks
     */
    sample?: number
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetWorks
     */
    search?: string
    /**
     * 
     * @type any
     * @memberof OpenAlexApigetWorks
     */
    seed?: any
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetWorks
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetWorks
     */
    sort?: string
    /**
     * Filter works by a specific field. See the [filter works](https://docs.openalex.org/api-entities/works/filter-works) documentation for more information. Valid filters are:   - &#x60;abstract.search&#x60; - &#x60;apc_list.currency&#x60; - &#x60;apc_list.provenance&#x60; - &#x60;apc_list.value&#x60; - &#x60;apc_list.value_usd&#x60; - &#x60;apc_paid.currency&#x60; - &#x60;apc_paid.provenance&#x60; - &#x60;apc_paid.value&#x60; - &#x60;apc_paid.value_usd&#x60; - &#x60;author.id&#x60; - &#x60;author.orcid&#x60; - &#x60;authors_count&#x60; - &#x60;authorships.author.id&#x60; - &#x60;authorships.author.orcid&#x60; - &#x60;authorships.countries&#x60; - &#x60;authorships.institutions.continent&#x60; - &#x60;authorships.institutions.country_code&#x60; - &#x60;authorships.institutions.id&#x60; - &#x60;authorships.institutions.is_global_south&#x60; - &#x60;authorships.institutions.lineage&#x60; - &#x60;authorships.institutions.ror&#x60; - &#x60;authorships.institutions.type&#x60; - &#x60;authorships.is_corresponding&#x60; - &#x60;best_oa_location.is_accepted&#x60; - &#x60;best_oa_location.is_oa&#x60; - &#x60;best_oa_location.is_published&#x60; - &#x60;best_oa_location.landing_page_url&#x60; - &#x60;best_oa_location.license&#x60; - &#x60;best_oa_location.source.host_organization&#x60; - &#x60;best_oa_location.source.host_organization_lineage&#x60; - &#x60;best_oa_location.source.id&#x60; - &#x60;best_oa_location.source.is_in_doaj&#x60; - &#x60;best_oa_location.source.is_oa&#x60; - &#x60;best_oa_location.source.issn&#x60; - &#x60;best_oa_location.source.type&#x60; - &#x60;best_oa_location.version&#x60; - &#x60;best_open_version&#x60; - &#x60;cited_by&#x60; - &#x60;cited_by_count&#x60; - &#x60;cited_by_percentile_year.max&#x60; - &#x60;cited_by_percentile_year.min&#x60; - &#x60;cites&#x60; - &#x60;concept.id&#x60; - &#x60;concepts.id&#x60; - &#x60;concepts.wikidata&#x60; - &#x60;concepts_count&#x60; - &#x60;corresponding_author_ids&#x60; - &#x60;corresponding_institution_ids&#x60; - &#x60;countries_distinct_count&#x60; - &#x60;default.search&#x60; - &#x60;display_name&#x60; - &#x60;display_name.search&#x60; - &#x60;doi&#x60; - &#x60;doi_starts_with&#x60; - &#x60;from_created_date&#x60; - &#x60;from_publication_date&#x60; - &#x60;fulltext.search&#x60; - &#x60;fulltext_origin&#x60; - &#x60;grants.award_id&#x60; - &#x60;grants.funder&#x60; - &#x60;has_abstract&#x60; - &#x60;has_doi&#x60; - &#x60;has_fulltext&#x60; - &#x60;has_ngrams&#x60; - &#x60;has_oa_accepted_or_published_version&#x60; - &#x60;has_oa_submitted_version&#x60; - &#x60;has_old_authors&#x60; - &#x60;has_orcid&#x60; - &#x60;has_pdf_url&#x60; - &#x60;has_pmcid&#x60; - &#x60;has_pmid&#x60; - &#x60;has_raw_affiliation_string&#x60; - &#x60;has_references&#x60; - &#x60;host_venue.id&#x60; - &#x60;ids.mag&#x60; - &#x60;ids.openalex&#x60; - &#x60;ids.pmcid&#x60; - &#x60;ids.pmid&#x60; - &#x60;institution.id&#x60; - &#x60;institutions.continent&#x60; - &#x60;institutions.country_code&#x60; - &#x60;institutions.id&#x60; - &#x60;institutions.is_global_south&#x60; - &#x60;institutions.ror&#x60; - &#x60;institutions.type&#x60; - &#x60;institutions_distinct_count&#x60; - &#x60;is_corresponding&#x60; - &#x60;is_oa&#x60; - &#x60;is_paratext&#x60; - &#x60;is_retracted&#x60; - &#x60;journal&#x60; - &#x60;keyword.search&#x60; - &#x60;keywords.keyword&#x60; - &#x60;language&#x60; - &#x60;locations.is_accepted&#x60; - &#x60;locations.is_oa&#x60; - &#x60;locations.is_published&#x60; - &#x60;locations.landing_page_url&#x60; - &#x60;locations.license&#x60; - &#x60;locations.source.has_issn&#x60; - &#x60;locations.source.host_institution_lineage&#x60; - &#x60;locations.source.host_organization&#x60; - &#x60;locations.source.host_organization_lineage&#x60; - &#x60;locations.source.id&#x60; - &#x60;locations.source.is_in_doaj&#x60; - &#x60;locations.source.is_oa&#x60; - &#x60;locations.source.issn&#x60; - &#x60;locations.source.publisher_lineage&#x60; - &#x60;locations.source.type&#x60; - &#x60;locations.version&#x60; - &#x60;locations_count&#x60; - &#x60;mag&#x60; - &#x60;oa_status&#x60; - &#x60;open_access.any_repository_has_fulltext&#x60; - &#x60;open_access.is_oa&#x60; - &#x60;open_access.oa_status&#x60; - &#x60;openalex&#x60; - &#x60;openalex_id&#x60; - &#x60;pmcid&#x60; - &#x60;pmid&#x60; - &#x60;primary_location.is_accepted&#x60; - &#x60;primary_location.is_oa&#x60; - &#x60;primary_location.is_published&#x60; - &#x60;primary_location.landing_page_url&#x60; - &#x60;primary_location.license&#x60; - &#x60;primary_location.source.has_issn&#x60; - &#x60;primary_location.source.host_institution_lineage&#x60; - &#x60;primary_location.source.host_organization&#x60; - &#x60;primary_location.source.host_organization_lineage&#x60; - &#x60;primary_location.source.id&#x60; - &#x60;primary_location.source.is_in_doaj&#x60; - &#x60;primary_location.source.is_oa&#x60; - &#x60;primary_location.source.issn&#x60; - &#x60;primary_location.source.publisher_lineage&#x60; - &#x60;primary_location.source.type&#x60; - &#x60;primary_location.version&#x60; - &#x60;publication_date&#x60; - &#x60;publication_year&#x60; - &#x60;raw_affiliation_string.search&#x60; - &#x60;referenced_works&#x60; - &#x60;referenced_works_count&#x60; - &#x60;related_to&#x60; - &#x60;repository&#x60; - &#x60;sustainable_development_goals.id&#x60; - &#x60;sustainable_development_goals.score&#x60; - &#x60;title.search&#x60; - &#x60;title_and_abstract.search&#x60; - &#x60;to_publication_date&#x60; - &#x60;to_updated_date&#x60; - &#x60;type&#x60; - &#x60;type_crossref&#x60; - &#x60;version&#x60;
     * @type any
     * @memberof OpenAlexApigetWorks
     */
    filter?: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof OpenAlexApigetWorks
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof OpenAlexApigetWorks
     */
    mailto?: any
}

export class ObjectOpenAlexApi {
    private api: ObservableOpenAlexApi

    public constructor(configuration: Configuration, requestFactory?: OpenAlexApiRequestFactory, responseProcessor?: OpenAlexApiResponseProcessor) {
        this.api = new ObservableOpenAlexApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a single author by id
     * Get Author
     * @param param the request object
     */
    public getAuthorWithHttpInfo(param: OpenAlexApiGetAuthorRequest, options?: Configuration): Promise<HttpInfo<Author>> {
        return this.api.getAuthorWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single author by id
     * Get Author
     * @param param the request object
     */
    public getAuthor(param: OpenAlexApiGetAuthorRequest, options?: Configuration): Promise<Author> {
        return this.api.getAuthor(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get lists of authors
     * List Authors
     * @param param the request object
     */
    public getAuthorsWithHttpInfo(param: OpenAlexApiGetAuthorsRequest = {}, options?: Configuration): Promise<HttpInfo<Authors>> {
        return this.api.getAuthorsWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get lists of authors
     * List Authors
     * @param param the request object
     */
    public getAuthors(param: OpenAlexApiGetAuthorsRequest = {}, options?: Configuration): Promise<Authors> {
        return this.api.getAuthors(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete
     * @param param the request object
     */
    public getAutocompleteWithHttpInfo(param: OpenAlexApiGetAutocompleteRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete
     * @param param the request object
     */
    public getAutocomplete(param: OpenAlexApiGetAutocompleteRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocomplete(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/authors
     * @param param the request object
     */
    public getAutocompleteAuthorsWithHttpInfo(param: OpenAlexApiGetAutocompleteAuthorsRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteAuthorsWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/authors
     * @param param the request object
     */
    public getAutocompleteAuthors(param: OpenAlexApiGetAutocompleteAuthorsRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteAuthors(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/concepts
     * @param param the request object
     */
    public getAutocompleteConceptsWithHttpInfo(param: OpenAlexApiGetAutocompleteConceptsRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteConceptsWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/concepts
     * @param param the request object
     */
    public getAutocompleteConcepts(param: OpenAlexApiGetAutocompleteConceptsRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteConcepts(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/funders
     * @param param the request object
     */
    public getAutocompleteFundersWithHttpInfo(param: OpenAlexApiGetAutocompleteFundersRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteFundersWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/funders
     * @param param the request object
     */
    public getAutocompleteFunders(param: OpenAlexApiGetAutocompleteFundersRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteFunders(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/institutions
     * @param param the request object
     */
    public getAutocompleteInstitutionsWithHttpInfo(param: OpenAlexApiGetAutocompleteInstitutionsRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteInstitutionsWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/institutions
     * @param param the request object
     */
    public getAutocompleteInstitutions(param: OpenAlexApiGetAutocompleteInstitutionsRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteInstitutions(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/publishers
     * @param param the request object
     */
    public getAutocompletePublishersWithHttpInfo(param: OpenAlexApiGetAutocompletePublishersRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompletePublishersWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/publishers
     * @param param the request object
     */
    public getAutocompletePublishers(param: OpenAlexApiGetAutocompletePublishersRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompletePublishers(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/sources
     * @param param the request object
     */
    public getAutocompleteSourcesWithHttpInfo(param: OpenAlexApiGetAutocompleteSourcesRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteSourcesWithHttpInfo(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/sources
     * @param param the request object
     */
    public getAutocompleteSources(param: OpenAlexApiGetAutocompleteSourcesRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteSources(param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/works
     * @param param the request object
     */
    public getAutocompleteWorksWithHttpInfo(param: OpenAlexApiGetAutocompleteWorksRequest = {}, options?: Configuration): Promise<HttpInfo<AutoCompleteResultSchema>> {
        return this.api.getAutocompleteWorksWithHttpInfo(param.filter, param.search, param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /autocomplete/works
     * @param param the request object
     */
    public getAutocompleteWorks(param: OpenAlexApiGetAutocompleteWorksRequest = {}, options?: Configuration): Promise<AutoCompleteResultSchema> {
        return this.api.getAutocompleteWorks(param.filter, param.search, param.q, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single concept
     * /concepts/{id}
     * @param param the request object
     */
    public getConceptByIdWithHttpInfo(param: OpenAlexApiGetConceptByIdRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getConceptByIdWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single concept
     * /concepts/{id}
     * @param param the request object
     */
    public getConceptById(param: OpenAlexApiGetConceptByIdRequest, options?: Configuration): Promise<Concept> {
        return this.api.getConceptById(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /concepts
     * @param param the request object
     */
    public getConceptsWithHttpInfo(param: OpenAlexApiGetConceptsRequest = {}, options?: Configuration): Promise<HttpInfo<Concepts>> {
        return this.api.getConceptsWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /concepts
     * @param param the request object
     */
    public getConcepts(param: OpenAlexApiGetConceptsRequest = {}, options?: Configuration): Promise<Concepts> {
        return this.api.getConcepts(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /domains/{id}
     * @param param the request object
     */
    public getDomainByIdWithHttpInfo(param: OpenAlexApiGetDomainByIdRequest, options?: Configuration): Promise<HttpInfo<Domain>> {
        return this.api.getDomainByIdWithHttpInfo(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /domains/{id}
     * @param param the request object
     */
    public getDomainById(param: OpenAlexApiGetDomainByIdRequest, options?: Configuration): Promise<Domain> {
        return this.api.getDomainById(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /fields/{id}
     * @param param the request object
     */
    public getFieldByIdWithHttpInfo(param: OpenAlexApiGetFieldByIdRequest, options?: Configuration): Promise<HttpInfo<Field>> {
        return this.api.getFieldByIdWithHttpInfo(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /fields/{id}
     * @param param the request object
     */
    public getFieldById(param: OpenAlexApiGetFieldByIdRequest, options?: Configuration): Promise<Field> {
        return this.api.getFieldById(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /funders/{id}
     * @param param the request object
     */
    public getFunderWithHttpInfo(param: OpenAlexApiGetFunderRequest, options?: Configuration): Promise<HttpInfo<Funder>> {
        return this.api.getFunderWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /funders/{id}
     * @param param the request object
     */
    public getFunder(param: OpenAlexApiGetFunderRequest, options?: Configuration): Promise<Funder> {
        return this.api.getFunder(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /funders
     * @param param the request object
     */
    public getFundersWithHttpInfo(param: OpenAlexApiGetFundersRequest = {}, options?: Configuration): Promise<HttpInfo<FundersArray>> {
        return this.api.getFundersWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /funders
     * @param param the request object
     */
    public getFunders(param: OpenAlexApiGetFundersRequest = {}, options?: Configuration): Promise<FundersArray> {
        return this.api.getFunders(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /institutions/{id}
     * @param param the request object
     */
    public getInstitutionWithHttpInfo(param: OpenAlexApiGetInstitutionRequest, options?: Configuration): Promise<HttpInfo<Institution>> {
        return this.api.getInstitutionWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /institutions/{id}
     * @param param the request object
     */
    public getInstitution(param: OpenAlexApiGetInstitutionRequest, options?: Configuration): Promise<Institution> {
        return this.api.getInstitution(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /institutions
     * @param param the request object
     */
    public getInstitutionsWithHttpInfo(param: OpenAlexApiGetInstitutionsRequest = {}, options?: Configuration): Promise<HttpInfo<Institutions>> {
        return this.api.getInstitutionsWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /institutions
     * @param param the request object
     */
    public getInstitutions(param: OpenAlexApiGetInstitutionsRequest = {}, options?: Configuration): Promise<Institutions> {
        return this.api.getInstitutions(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /people/{id}
     * @param param the request object
     */
    public getPersonWithHttpInfo(param: OpenAlexApiGetPersonRequest, options?: Configuration): Promise<HttpInfo<Person>> {
        return this.api.getPersonWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /people/{id}
     * @param param the request object
     */
    public getPerson(param: OpenAlexApiGetPersonRequest, options?: Configuration): Promise<Person> {
        return this.api.getPerson(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /publishers/{id}
     * @param param the request object
     */
    public getPublisherWithHttpInfo(param: OpenAlexApiGetPublisherRequest, options?: Configuration): Promise<HttpInfo<Publisher>> {
        return this.api.getPublisherWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /publishers/{id}
     * @param param the request object
     */
    public getPublisher(param: OpenAlexApiGetPublisherRequest, options?: Configuration): Promise<Publisher> {
        return this.api.getPublisher(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /publishers
     * @param param the request object
     */
    public getPublishersWithHttpInfo(param: OpenAlexApiGetPublishersRequest = {}, options?: Configuration): Promise<HttpInfo<Publishers>> {
        return this.api.getPublishersWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /publishers
     * @param param the request object
     */
    public getPublishers(param: OpenAlexApiGetPublishersRequest = {}, options?: Configuration): Promise<Publishers> {
        return this.api.getPublishers(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random author
     * Get Random Author
     * @param param the request object
     */
    public getRandomAuthorWithHttpInfo(param: OpenAlexApiGetRandomAuthorRequest = {}, options?: Configuration): Promise<HttpInfo<Author>> {
        return this.api.getRandomAuthorWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random author
     * Get Random Author
     * @param param the request object
     */
    public getRandomAuthor(param: OpenAlexApiGetRandomAuthorRequest = {}, options?: Configuration): Promise<Author> {
        return this.api.getRandomAuthor(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random concept
     * /concepts/random
     * @param param the request object
     */
    public getRandomConceptWithHttpInfo(param: OpenAlexApiGetRandomConceptRequest = {}, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getRandomConceptWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random concept
     * /concepts/random
     * @param param the request object
     */
    public getRandomConcept(param: OpenAlexApiGetRandomConceptRequest = {}, options?: Configuration): Promise<Concept> {
        return this.api.getRandomConcept(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random funder
     * /funders/random
     * @param param the request object
     */
    public getRandomFunderWithHttpInfo(param: OpenAlexApiGetRandomFunderRequest = {}, options?: Configuration): Promise<HttpInfo<Funder>> {
        return this.api.getRandomFunderWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random funder
     * /funders/random
     * @param param the request object
     */
    public getRandomFunder(param: OpenAlexApiGetRandomFunderRequest = {}, options?: Configuration): Promise<Funder> {
        return this.api.getRandomFunder(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random institution
     * /institutions/random
     * @param param the request object
     */
    public getRandomInstitutionWithHttpInfo(param: OpenAlexApiGetRandomInstitutionRequest = {}, options?: Configuration): Promise<HttpInfo<Institution>> {
        return this.api.getRandomInstitutionWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random institution
     * /institutions/random
     * @param param the request object
     */
    public getRandomInstitution(param: OpenAlexApiGetRandomInstitutionRequest = {}, options?: Configuration): Promise<Institution> {
        return this.api.getRandomInstitution(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random publisher
     * /publishers/random
     * @param param the request object
     */
    public getRandomPublisherWithHttpInfo(param: OpenAlexApiGetRandomPublisherRequest = {}, options?: Configuration): Promise<HttpInfo<Publisher>> {
        return this.api.getRandomPublisherWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random publisher
     * /publishers/random
     * @param param the request object
     */
    public getRandomPublisher(param: OpenAlexApiGetRandomPublisherRequest = {}, options?: Configuration): Promise<Publisher> {
        return this.api.getRandomPublisher(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random source
     * /sources/random
     * @param param the request object
     */
    public getRandomSourceWithHttpInfo(param: OpenAlexApiGetRandomSourceRequest = {}, options?: Configuration): Promise<HttpInfo<Source>> {
        return this.api.getRandomSourceWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random source
     * /sources/random
     * @param param the request object
     */
    public getRandomSource(param: OpenAlexApiGetRandomSourceRequest = {}, options?: Configuration): Promise<Source> {
        return this.api.getRandomSource(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random work
     * /works/random
     * @param param the request object
     */
    public getRandomWorkWithHttpInfo(param: OpenAlexApiGetRandomWorkRequest = {}, options?: Configuration): Promise<HttpInfo<Work>> {
        return this.api.getRandomWorkWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random work
     * /works/random
     * @param param the request object
     */
    public getRandomWork(param: OpenAlexApiGetRandomWorkRequest = {}, options?: Configuration): Promise<Work> {
        return this.api.getRandomWork(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Root endpoint
     * Root
     * @param param the request object
     */
    public getRootWithHttpInfo(param: OpenAlexApiGetRootRequest = {}, options?: Configuration): Promise<HttpInfo<RootResponseSchema>> {
        return this.api.getRootWithHttpInfo(param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Root endpoint
     * Root
     * @param param the request object
     */
    public getRoot(param: OpenAlexApiGetRootRequest = {}, options?: Configuration): Promise<RootResponseSchema> {
        return this.api.getRoot(param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources/{id}
     * @param param the request object
     */
    public getSourceWithHttpInfo(param: OpenAlexApiGetSourceRequest, options?: Configuration): Promise<HttpInfo<Source>> {
        return this.api.getSourceWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources/{id}
     * @param param the request object
     */
    public getSource(param: OpenAlexApiGetSourceRequest, options?: Configuration): Promise<Source> {
        return this.api.getSource(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources
     * @param param the request object
     */
    public getSourcesWithHttpInfo(param: OpenAlexApiGetSourcesRequest = {}, options?: Configuration): Promise<HttpInfo<Sources>> {
        return this.api.getSourcesWithHttpInfo(param.groupBy, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources
     * @param param the request object
     */
    public getSources(param: OpenAlexApiGetSourcesRequest = {}, options?: Configuration): Promise<Sources> {
        return this.api.getSources(param.groupBy, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /subfields/{id}
     * @param param the request object
     */
    public getSubfieldByIdWithHttpInfo(param: OpenAlexApiGetSubfieldByIdRequest, options?: Configuration): Promise<HttpInfo<Subfield>> {
        return this.api.getSubfieldByIdWithHttpInfo(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /subfields/{id}
     * @param param the request object
     */
    public getSubfieldById(param: OpenAlexApiGetSubfieldByIdRequest, options?: Configuration): Promise<Subfield> {
        return this.api.getSubfieldById(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /topics/{id}
     * @param param the request object
     */
    public getTopicByIdWithHttpInfo(param: OpenAlexApiGetTopicByIdRequest, options?: Configuration): Promise<HttpInfo<Topic>> {
        return this.api.getTopicByIdWithHttpInfo(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /topics/{id}
     * @param param the request object
     */
    public getTopicById(param: OpenAlexApiGetTopicByIdRequest, options?: Configuration): Promise<Topic> {
        return this.api.getTopicById(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /topics
     * @param param the request object
     */
    public getTopicsWithHttpInfo(param: OpenAlexApiGetTopicsRequest = {}, options?: Configuration): Promise<HttpInfo<Topics>> {
        return this.api.getTopicsWithHttpInfo(param.sort, param.perPage, param.page, param.sample, param.select, param.filter, param.search, param.groupBy, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /topics
     * @param param the request object
     */
    public getTopics(param: OpenAlexApiGetTopicsRequest = {}, options?: Configuration): Promise<Topics> {
        return this.api.getTopics(param.sort, param.perPage, param.page, param.sample, param.select, param.filter, param.search, param.groupBy, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param param the request object
     */
    public getWorkWithHttpInfo(param: OpenAlexApiGetWorkRequest, options?: Configuration): Promise<HttpInfo<Work>> {
        return this.api.getWorkWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param param the request object
     */
    public getWork(param: OpenAlexApiGetWorkRequest, options?: Configuration): Promise<Work> {
        return this.api.getWork(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param param the request object
     */
    public getWorkNgramsWithHttpInfo(param: OpenAlexApiGetWorkNgramsRequest, options?: Configuration): Promise<HttpInfo<Ngrams>> {
        return this.api.getWorkNgramsWithHttpInfo(param.id, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param param the request object
     */
    public getWorkNgrams(param: OpenAlexApiGetWorkNgramsRequest, options?: Configuration): Promise<Ngrams> {
        return this.api.getWorkNgrams(param.id, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works
     * @param param the request object
     */
    public getWorksWithHttpInfo(param: OpenAlexApiGetWorksRequest = {}, options?: Configuration): Promise<HttpInfo<WorksResponse>> {
        return this.api.getWorksWithHttpInfo(param.apiKey, param.cursor, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.filter, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works
     * @param param the request object
     */
    public getWorks(param: OpenAlexApiGetWorksRequest = {}, options?: Configuration): Promise<WorksResponse> {
        return this.api.getWorks(param.apiKey, param.cursor, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.filter, param.userAgent, param.mailto,  options).toPromise();
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
    public getPersonWithHttpInfo(param: PeopleApiGetPersonRequest, options?: Configuration): Promise<HttpInfo<Person>> {
        return this.api.getPersonWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /people/{id}
     * @param param the request object
     */
    public getPerson(param: PeopleApiGetPersonRequest, options?: Configuration): Promise<Person> {
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

export interface PublishersApiGetRandomPublisherRequest {
    /**
     * 
     * @type string
     * @memberof PublishersApigetRandomPublisher
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof PublishersApigetRandomPublisher
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof PublishersApigetRandomPublisher
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
    public getPublisherWithHttpInfo(param: PublishersApiGetPublisherRequest, options?: Configuration): Promise<HttpInfo<Publisher>> {
        return this.api.getPublisherWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /publishers/{id}
     * @param param the request object
     */
    public getPublisher(param: PublishersApiGetPublisherRequest, options?: Configuration): Promise<Publisher> {
        return this.api.getPublisher(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /publishers
     * @param param the request object
     */
    public getPublishersWithHttpInfo(param: PublishersApiGetPublishersRequest = {}, options?: Configuration): Promise<HttpInfo<Publishers>> {
        return this.api.getPublishersWithHttpInfo(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /publishers
     * @param param the request object
     */
    public getPublishers(param: PublishersApiGetPublishersRequest = {}, options?: Configuration): Promise<Publishers> {
        return this.api.getPublishers(param.apiKey, param.cursor, param.filter, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random publisher
     * /publishers/random
     * @param param the request object
     */
    public getRandomPublisherWithHttpInfo(param: PublishersApiGetRandomPublisherRequest = {}, options?: Configuration): Promise<HttpInfo<Publisher>> {
        return this.api.getRandomPublisherWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random publisher
     * /publishers/random
     * @param param the request object
     */
    public getRandomPublisher(param: PublishersApiGetRandomPublisherRequest = {}, options?: Configuration): Promise<Publisher> {
        return this.api.getRandomPublisher(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableRandomApi } from "./ObservableAPI";
import { RandomApiRequestFactory, RandomApiResponseProcessor} from "../apis/RandomApi";

export interface RandomApiGetRandomAuthorRequest {
    /**
     * 
     * @type string
     * @memberof RandomApigetRandomAuthor
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof RandomApigetRandomAuthor
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof RandomApigetRandomAuthor
     */
    mailto?: any
}

export interface RandomApiGetRandomConceptRequest {
    /**
     * 
     * @type string
     * @memberof RandomApigetRandomConcept
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof RandomApigetRandomConcept
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof RandomApigetRandomConcept
     */
    mailto?: any
}

export interface RandomApiGetRandomFunderRequest {
    /**
     * 
     * @type string
     * @memberof RandomApigetRandomFunder
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof RandomApigetRandomFunder
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof RandomApigetRandomFunder
     */
    mailto?: any
}

export interface RandomApiGetRandomInstitutionRequest {
    /**
     * 
     * @type string
     * @memberof RandomApigetRandomInstitution
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof RandomApigetRandomInstitution
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof RandomApigetRandomInstitution
     */
    mailto?: any
}

export interface RandomApiGetRandomPublisherRequest {
    /**
     * 
     * @type string
     * @memberof RandomApigetRandomPublisher
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof RandomApigetRandomPublisher
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof RandomApigetRandomPublisher
     */
    mailto?: any
}

export interface RandomApiGetRandomSourceRequest {
    /**
     * 
     * @type string
     * @memberof RandomApigetRandomSource
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof RandomApigetRandomSource
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof RandomApigetRandomSource
     */
    mailto?: any
}

export interface RandomApiGetRandomWorkRequest {
    /**
     * 
     * @type any
     * @memberof RandomApigetRandomWork
     */
    select?: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof RandomApigetRandomWork
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof RandomApigetRandomWork
     */
    mailto?: any
}

export class ObjectRandomApi {
    private api: ObservableRandomApi

    public constructor(configuration: Configuration, requestFactory?: RandomApiRequestFactory, responseProcessor?: RandomApiResponseProcessor) {
        this.api = new ObservableRandomApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a random author
     * Get Random Author
     * @param param the request object
     */
    public getRandomAuthorWithHttpInfo(param: RandomApiGetRandomAuthorRequest = {}, options?: Configuration): Promise<HttpInfo<Author>> {
        return this.api.getRandomAuthorWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random author
     * Get Random Author
     * @param param the request object
     */
    public getRandomAuthor(param: RandomApiGetRandomAuthorRequest = {}, options?: Configuration): Promise<Author> {
        return this.api.getRandomAuthor(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random concept
     * /concepts/random
     * @param param the request object
     */
    public getRandomConceptWithHttpInfo(param: RandomApiGetRandomConceptRequest = {}, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getRandomConceptWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random concept
     * /concepts/random
     * @param param the request object
     */
    public getRandomConcept(param: RandomApiGetRandomConceptRequest = {}, options?: Configuration): Promise<Concept> {
        return this.api.getRandomConcept(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random funder
     * /funders/random
     * @param param the request object
     */
    public getRandomFunderWithHttpInfo(param: RandomApiGetRandomFunderRequest = {}, options?: Configuration): Promise<HttpInfo<Funder>> {
        return this.api.getRandomFunderWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random funder
     * /funders/random
     * @param param the request object
     */
    public getRandomFunder(param: RandomApiGetRandomFunderRequest = {}, options?: Configuration): Promise<Funder> {
        return this.api.getRandomFunder(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random institution
     * /institutions/random
     * @param param the request object
     */
    public getRandomInstitutionWithHttpInfo(param: RandomApiGetRandomInstitutionRequest = {}, options?: Configuration): Promise<HttpInfo<Institution>> {
        return this.api.getRandomInstitutionWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random institution
     * /institutions/random
     * @param param the request object
     */
    public getRandomInstitution(param: RandomApiGetRandomInstitutionRequest = {}, options?: Configuration): Promise<Institution> {
        return this.api.getRandomInstitution(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random publisher
     * /publishers/random
     * @param param the request object
     */
    public getRandomPublisherWithHttpInfo(param: RandomApiGetRandomPublisherRequest = {}, options?: Configuration): Promise<HttpInfo<Publisher>> {
        return this.api.getRandomPublisherWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random publisher
     * /publishers/random
     * @param param the request object
     */
    public getRandomPublisher(param: RandomApiGetRandomPublisherRequest = {}, options?: Configuration): Promise<Publisher> {
        return this.api.getRandomPublisher(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random source
     * /sources/random
     * @param param the request object
     */
    public getRandomSourceWithHttpInfo(param: RandomApiGetRandomSourceRequest = {}, options?: Configuration): Promise<HttpInfo<Source>> {
        return this.api.getRandomSourceWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random source
     * /sources/random
     * @param param the request object
     */
    public getRandomSource(param: RandomApiGetRandomSourceRequest = {}, options?: Configuration): Promise<Source> {
        return this.api.getRandomSource(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random work
     * /works/random
     * @param param the request object
     */
    public getRandomWorkWithHttpInfo(param: RandomApiGetRandomWorkRequest = {}, options?: Configuration): Promise<HttpInfo<Work>> {
        return this.api.getRandomWorkWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random work
     * /works/random
     * @param param the request object
     */
    public getRandomWork(param: RandomApiGetRandomWorkRequest = {}, options?: Configuration): Promise<Work> {
        return this.api.getRandomWork(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableSingleApi } from "./ObservableAPI";
import { SingleApiRequestFactory, SingleApiResponseProcessor} from "../apis/SingleApi";

export interface SingleApiGetAuthorRequest {
    /**
     * 
     * @type string
     * @memberof SingleApigetAuthor
     */
    id: string
    /**
     * 
     * @type string
     * @memberof SingleApigetAuthor
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetAuthor
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetAuthor
     */
    mailto?: any
}

export interface SingleApiGetConceptByIdRequest {
    /**
     * 
     * @type any
     * @memberof SingleApigetConceptById
     */
    id: any
    /**
     * 
     * @type string
     * @memberof SingleApigetConceptById
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetConceptById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetConceptById
     */
    mailto?: any
}

export interface SingleApiGetFunderRequest {
    /**
     * 
     * @type any
     * @memberof SingleApigetFunder
     */
    id: any
    /**
     * 
     * @type string
     * @memberof SingleApigetFunder
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetFunder
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetFunder
     */
    mailto?: any
}

export interface SingleApiGetInstitutionRequest {
    /**
     * 
     * @type any
     * @memberof SingleApigetInstitution
     */
    id: any
    /**
     * 
     * @type string
     * @memberof SingleApigetInstitution
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetInstitution
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetInstitution
     */
    mailto?: any
}

export interface SingleApiGetPublisherRequest {
    /**
     * 
     * @type any
     * @memberof SingleApigetPublisher
     */
    id: any
    /**
     * 
     * @type string
     * @memberof SingleApigetPublisher
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetPublisher
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetPublisher
     */
    mailto?: any
}

export interface SingleApiGetRandomAuthorRequest {
    /**
     * 
     * @type string
     * @memberof SingleApigetRandomAuthor
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetRandomAuthor
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetRandomAuthor
     */
    mailto?: any
}

export interface SingleApiGetRandomConceptRequest {
    /**
     * 
     * @type string
     * @memberof SingleApigetRandomConcept
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetRandomConcept
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetRandomConcept
     */
    mailto?: any
}

export interface SingleApiGetRandomFunderRequest {
    /**
     * 
     * @type string
     * @memberof SingleApigetRandomFunder
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetRandomFunder
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetRandomFunder
     */
    mailto?: any
}

export interface SingleApiGetRandomInstitutionRequest {
    /**
     * 
     * @type string
     * @memberof SingleApigetRandomInstitution
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetRandomInstitution
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetRandomInstitution
     */
    mailto?: any
}

export interface SingleApiGetRandomPublisherRequest {
    /**
     * 
     * @type string
     * @memberof SingleApigetRandomPublisher
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetRandomPublisher
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetRandomPublisher
     */
    mailto?: any
}

export interface SingleApiGetRandomSourceRequest {
    /**
     * 
     * @type string
     * @memberof SingleApigetRandomSource
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetRandomSource
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetRandomSource
     */
    mailto?: any
}

export interface SingleApiGetRandomWorkRequest {
    /**
     * 
     * @type any
     * @memberof SingleApigetRandomWork
     */
    select?: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetRandomWork
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetRandomWork
     */
    mailto?: any
}

export interface SingleApiGetSourceRequest {
    /**
     * 
     * @type any
     * @memberof SingleApigetSource
     */
    id: any
    /**
     * 
     * @type string
     * @memberof SingleApigetSource
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetSource
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetSource
     */
    mailto?: any
}

export interface SingleApiGetTopicByIdRequest {
    /**
     * 
     * @type any
     * @memberof SingleApigetTopicById
     */
    id: any
    /**
     * 
     * @type number
     * @memberof SingleApigetTopicById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SingleApigetTopicById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SingleApigetTopicById
     */
    mailto?: any
}

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
     * Get a single author by id
     * Get Author
     * @param param the request object
     */
    public getAuthorWithHttpInfo(param: SingleApiGetAuthorRequest, options?: Configuration): Promise<HttpInfo<Author>> {
        return this.api.getAuthorWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single author by id
     * Get Author
     * @param param the request object
     */
    public getAuthor(param: SingleApiGetAuthorRequest, options?: Configuration): Promise<Author> {
        return this.api.getAuthor(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single concept
     * /concepts/{id}
     * @param param the request object
     */
    public getConceptByIdWithHttpInfo(param: SingleApiGetConceptByIdRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getConceptByIdWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single concept
     * /concepts/{id}
     * @param param the request object
     */
    public getConceptById(param: SingleApiGetConceptByIdRequest, options?: Configuration): Promise<Concept> {
        return this.api.getConceptById(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /funders/{id}
     * @param param the request object
     */
    public getFunderWithHttpInfo(param: SingleApiGetFunderRequest, options?: Configuration): Promise<HttpInfo<Funder>> {
        return this.api.getFunderWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /funders/{id}
     * @param param the request object
     */
    public getFunder(param: SingleApiGetFunderRequest, options?: Configuration): Promise<Funder> {
        return this.api.getFunder(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /institutions/{id}
     * @param param the request object
     */
    public getInstitutionWithHttpInfo(param: SingleApiGetInstitutionRequest, options?: Configuration): Promise<HttpInfo<Institution>> {
        return this.api.getInstitutionWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /institutions/{id}
     * @param param the request object
     */
    public getInstitution(param: SingleApiGetInstitutionRequest, options?: Configuration): Promise<Institution> {
        return this.api.getInstitution(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /publishers/{id}
     * @param param the request object
     */
    public getPublisherWithHttpInfo(param: SingleApiGetPublisherRequest, options?: Configuration): Promise<HttpInfo<Publisher>> {
        return this.api.getPublisherWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /publishers/{id}
     * @param param the request object
     */
    public getPublisher(param: SingleApiGetPublisherRequest, options?: Configuration): Promise<Publisher> {
        return this.api.getPublisher(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random author
     * Get Random Author
     * @param param the request object
     */
    public getRandomAuthorWithHttpInfo(param: SingleApiGetRandomAuthorRequest = {}, options?: Configuration): Promise<HttpInfo<Author>> {
        return this.api.getRandomAuthorWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random author
     * Get Random Author
     * @param param the request object
     */
    public getRandomAuthor(param: SingleApiGetRandomAuthorRequest = {}, options?: Configuration): Promise<Author> {
        return this.api.getRandomAuthor(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random concept
     * /concepts/random
     * @param param the request object
     */
    public getRandomConceptWithHttpInfo(param: SingleApiGetRandomConceptRequest = {}, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getRandomConceptWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random concept
     * /concepts/random
     * @param param the request object
     */
    public getRandomConcept(param: SingleApiGetRandomConceptRequest = {}, options?: Configuration): Promise<Concept> {
        return this.api.getRandomConcept(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random funder
     * /funders/random
     * @param param the request object
     */
    public getRandomFunderWithHttpInfo(param: SingleApiGetRandomFunderRequest = {}, options?: Configuration): Promise<HttpInfo<Funder>> {
        return this.api.getRandomFunderWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random funder
     * /funders/random
     * @param param the request object
     */
    public getRandomFunder(param: SingleApiGetRandomFunderRequest = {}, options?: Configuration): Promise<Funder> {
        return this.api.getRandomFunder(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random institution
     * /institutions/random
     * @param param the request object
     */
    public getRandomInstitutionWithHttpInfo(param: SingleApiGetRandomInstitutionRequest = {}, options?: Configuration): Promise<HttpInfo<Institution>> {
        return this.api.getRandomInstitutionWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random institution
     * /institutions/random
     * @param param the request object
     */
    public getRandomInstitution(param: SingleApiGetRandomInstitutionRequest = {}, options?: Configuration): Promise<Institution> {
        return this.api.getRandomInstitution(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random publisher
     * /publishers/random
     * @param param the request object
     */
    public getRandomPublisherWithHttpInfo(param: SingleApiGetRandomPublisherRequest = {}, options?: Configuration): Promise<HttpInfo<Publisher>> {
        return this.api.getRandomPublisherWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random publisher
     * /publishers/random
     * @param param the request object
     */
    public getRandomPublisher(param: SingleApiGetRandomPublisherRequest = {}, options?: Configuration): Promise<Publisher> {
        return this.api.getRandomPublisher(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random source
     * /sources/random
     * @param param the request object
     */
    public getRandomSourceWithHttpInfo(param: SingleApiGetRandomSourceRequest = {}, options?: Configuration): Promise<HttpInfo<Source>> {
        return this.api.getRandomSourceWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random source
     * /sources/random
     * @param param the request object
     */
    public getRandomSource(param: SingleApiGetRandomSourceRequest = {}, options?: Configuration): Promise<Source> {
        return this.api.getRandomSource(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random work
     * /works/random
     * @param param the request object
     */
    public getRandomWorkWithHttpInfo(param: SingleApiGetRandomWorkRequest = {}, options?: Configuration): Promise<HttpInfo<Work>> {
        return this.api.getRandomWorkWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random work
     * /works/random
     * @param param the request object
     */
    public getRandomWork(param: SingleApiGetRandomWorkRequest = {}, options?: Configuration): Promise<Work> {
        return this.api.getRandomWork(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources/{id}
     * @param param the request object
     */
    public getSourceWithHttpInfo(param: SingleApiGetSourceRequest, options?: Configuration): Promise<HttpInfo<Source>> {
        return this.api.getSourceWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources/{id}
     * @param param the request object
     */
    public getSource(param: SingleApiGetSourceRequest, options?: Configuration): Promise<Source> {
        return this.api.getSource(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /topics/{id}
     * @param param the request object
     */
    public getTopicByIdWithHttpInfo(param: SingleApiGetTopicByIdRequest, options?: Configuration): Promise<HttpInfo<Topic>> {
        return this.api.getTopicByIdWithHttpInfo(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /topics/{id}
     * @param param the request object
     */
    public getTopicById(param: SingleApiGetTopicByIdRequest, options?: Configuration): Promise<Topic> {
        return this.api.getTopicById(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param param the request object
     */
    public getWorkWithHttpInfo(param: SingleApiGetWorkRequest, options?: Configuration): Promise<HttpInfo<Work>> {
        return this.api.getWorkWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param param the request object
     */
    public getWork(param: SingleApiGetWorkRequest, options?: Configuration): Promise<Work> {
        return this.api.getWork(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param param the request object
     */
    public getWorkNgramsWithHttpInfo(param: SingleApiGetWorkNgramsRequest, options?: Configuration): Promise<HttpInfo<Ngrams>> {
        return this.api.getWorkNgramsWithHttpInfo(param.id, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param param the request object
     */
    public getWorkNgrams(param: SingleApiGetWorkNgramsRequest, options?: Configuration): Promise<Ngrams> {
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

export interface SourcesApiGetRandomSourceRequest {
    /**
     * 
     * @type string
     * @memberof SourcesApigetRandomSource
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof SourcesApigetRandomSource
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof SourcesApigetRandomSource
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
     * Get a random source
     * /sources/random
     * @param param the request object
     */
    public getRandomSourceWithHttpInfo(param: SourcesApiGetRandomSourceRequest = {}, options?: Configuration): Promise<HttpInfo<Source>> {
        return this.api.getRandomSourceWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random source
     * /sources/random
     * @param param the request object
     */
    public getRandomSource(param: SourcesApiGetRandomSourceRequest = {}, options?: Configuration): Promise<Source> {
        return this.api.getRandomSource(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources/{id}
     * @param param the request object
     */
    public getSourceWithHttpInfo(param: SourcesApiGetSourceRequest, options?: Configuration): Promise<HttpInfo<Source>> {
        return this.api.getSourceWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources/{id}
     * @param param the request object
     */
    public getSource(param: SourcesApiGetSourceRequest, options?: Configuration): Promise<Source> {
        return this.api.getSource(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources
     * @param param the request object
     */
    public getSourcesWithHttpInfo(param: SourcesApiGetSourcesRequest = {}, options?: Configuration): Promise<HttpInfo<Sources>> {
        return this.api.getSourcesWithHttpInfo(param.groupBy, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /sources
     * @param param the request object
     */
    public getSources(param: SourcesApiGetSourcesRequest = {}, options?: Configuration): Promise<Sources> {
        return this.api.getSources(param.groupBy, param.userAgent, param.mailto,  options).toPromise();
    }

}

import { ObservableTopicsApi } from "./ObservableAPI";
import { TopicsApiRequestFactory, TopicsApiResponseProcessor} from "../apis/TopicsApi";

export interface TopicsApiGetDomainByIdRequest {
    /**
     * 
     * @type any
     * @memberof TopicsApigetDomainById
     */
    id: any
    /**
     * 
     * @type number
     * @memberof TopicsApigetDomainById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof TopicsApigetDomainById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof TopicsApigetDomainById
     */
    mailto?: any
}

export interface TopicsApiGetFieldByIdRequest {
    /**
     * 
     * @type any
     * @memberof TopicsApigetFieldById
     */
    id: any
    /**
     * 
     * @type number
     * @memberof TopicsApigetFieldById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof TopicsApigetFieldById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof TopicsApigetFieldById
     */
    mailto?: any
}

export interface TopicsApiGetSubfieldByIdRequest {
    /**
     * 
     * @type any
     * @memberof TopicsApigetSubfieldById
     */
    id: any
    /**
     * 
     * @type number
     * @memberof TopicsApigetSubfieldById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof TopicsApigetSubfieldById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof TopicsApigetSubfieldById
     */
    mailto?: any
}

export interface TopicsApiGetTopicByIdRequest {
    /**
     * 
     * @type any
     * @memberof TopicsApigetTopicById
     */
    id: any
    /**
     * 
     * @type number
     * @memberof TopicsApigetTopicById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof TopicsApigetTopicById
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof TopicsApigetTopicById
     */
    mailto?: any
}

export interface TopicsApiGetTopicsRequest {
    /**
     * 
     * @type string
     * @memberof TopicsApigetTopics
     */
    sort?: string
    /**
     * 
     * @type number
     * @memberof TopicsApigetTopics
     */
    perPage?: number
    /**
     * 
     * @type any
     * @memberof TopicsApigetTopics
     */
    page?: any
    /**
     * 
     * @type any
     * @memberof TopicsApigetTopics
     */
    sample?: any
    /**
     * 
     * @type string
     * @memberof TopicsApigetTopics
     */
    select?: string
    /**
     * 
     * @type string
     * @memberof TopicsApigetTopics
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof TopicsApigetTopics
     */
    search?: string
    /**
     * 
     * @type string
     * @memberof TopicsApigetTopics
     */
    groupBy?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof TopicsApigetTopics
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof TopicsApigetTopics
     */
    mailto?: any
}

export class ObjectTopicsApi {
    private api: ObservableTopicsApi

    public constructor(configuration: Configuration, requestFactory?: TopicsApiRequestFactory, responseProcessor?: TopicsApiResponseProcessor) {
        this.api = new ObservableTopicsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * /domains/{id}
     * @param param the request object
     */
    public getDomainByIdWithHttpInfo(param: TopicsApiGetDomainByIdRequest, options?: Configuration): Promise<HttpInfo<Domain>> {
        return this.api.getDomainByIdWithHttpInfo(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /domains/{id}
     * @param param the request object
     */
    public getDomainById(param: TopicsApiGetDomainByIdRequest, options?: Configuration): Promise<Domain> {
        return this.api.getDomainById(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /fields/{id}
     * @param param the request object
     */
    public getFieldByIdWithHttpInfo(param: TopicsApiGetFieldByIdRequest, options?: Configuration): Promise<HttpInfo<Field>> {
        return this.api.getFieldByIdWithHttpInfo(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /fields/{id}
     * @param param the request object
     */
    public getFieldById(param: TopicsApiGetFieldByIdRequest, options?: Configuration): Promise<Field> {
        return this.api.getFieldById(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /subfields/{id}
     * @param param the request object
     */
    public getSubfieldByIdWithHttpInfo(param: TopicsApiGetSubfieldByIdRequest, options?: Configuration): Promise<HttpInfo<Subfield>> {
        return this.api.getSubfieldByIdWithHttpInfo(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /subfields/{id}
     * @param param the request object
     */
    public getSubfieldById(param: TopicsApiGetSubfieldByIdRequest, options?: Configuration): Promise<Subfield> {
        return this.api.getSubfieldById(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /topics/{id}
     * @param param the request object
     */
    public getTopicByIdWithHttpInfo(param: TopicsApiGetTopicByIdRequest, options?: Configuration): Promise<HttpInfo<Topic>> {
        return this.api.getTopicByIdWithHttpInfo(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /topics/{id}
     * @param param the request object
     */
    public getTopicById(param: TopicsApiGetTopicByIdRequest, options?: Configuration): Promise<Topic> {
        return this.api.getTopicById(param.id, param.perPage, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /topics
     * @param param the request object
     */
    public getTopicsWithHttpInfo(param: TopicsApiGetTopicsRequest = {}, options?: Configuration): Promise<HttpInfo<Topics>> {
        return this.api.getTopicsWithHttpInfo(param.sort, param.perPage, param.page, param.sample, param.select, param.filter, param.search, param.groupBy, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /topics
     * @param param the request object
     */
    public getTopics(param: TopicsApiGetTopicsRequest = {}, options?: Configuration): Promise<Topics> {
        return this.api.getTopics(param.sort, param.perPage, param.page, param.sample, param.select, param.filter, param.search, param.groupBy, param.userAgent, param.mailto,  options).toPromise();
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

export interface WorksApiGetRandomWorkRequest {
    /**
     * 
     * @type any
     * @memberof WorksApigetRandomWork
     */
    select?: any
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type any
     * @memberof WorksApigetRandomWork
     */
    userAgent?: any
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type any
     * @memberof WorksApigetRandomWork
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
     * Get a random work
     * /works/random
     * @param param the request object
     */
    public getRandomWorkWithHttpInfo(param: WorksApiGetRandomWorkRequest = {}, options?: Configuration): Promise<HttpInfo<Work>> {
        return this.api.getRandomWorkWithHttpInfo(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a random work
     * /works/random
     * @param param the request object
     */
    public getRandomWork(param: WorksApiGetRandomWorkRequest = {}, options?: Configuration): Promise<Work> {
        return this.api.getRandomWork(param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param param the request object
     */
    public getWorkWithHttpInfo(param: WorksApiGetWorkRequest, options?: Configuration): Promise<HttpInfo<Work>> {
        return this.api.getWorkWithHttpInfo(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param param the request object
     */
    public getWork(param: WorksApiGetWorkRequest, options?: Configuration): Promise<Work> {
        return this.api.getWork(param.id, param.select, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param param the request object
     */
    public getWorkNgramsWithHttpInfo(param: WorksApiGetWorkNgramsRequest, options?: Configuration): Promise<HttpInfo<Ngrams>> {
        return this.api.getWorkNgramsWithHttpInfo(param.id, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param param the request object
     */
    public getWorkNgrams(param: WorksApiGetWorkNgramsRequest, options?: Configuration): Promise<Ngrams> {
        return this.api.getWorkNgrams(param.id, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works
     * @param param the request object
     */
    public getWorksWithHttpInfo(param: WorksApiGetWorksRequest = {}, options?: Configuration): Promise<HttpInfo<WorksResponse>> {
        return this.api.getWorksWithHttpInfo(param.apiKey, param.cursor, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.filter, param.userAgent, param.mailto,  options).toPromise();
    }

    /**
     * 
     * /works
     * @param param the request object
     */
    public getWorks(param: WorksApiGetWorksRequest = {}, options?: Configuration): Promise<WorksResponse> {
        return this.api.getWorks(param.apiKey, param.cursor, param.groupBy, param.page, param.perPage, param.sample, param.search, param.seed, param.select, param.sort, param.filter, param.userAgent, param.mailto,  options).toPromise();
    }

}
