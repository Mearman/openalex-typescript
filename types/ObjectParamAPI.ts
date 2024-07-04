import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AffiliationsInner } from '../models/AffiliationsInner';
import { Apc } from '../models/Apc';
import { ApcPricesInner } from '../models/ApcPricesInner';
import { AssociatedInstitution } from '../models/AssociatedInstitution';
import { Author } from '../models/Author';
import { Authors } from '../models/Authors';
import { AuthorshipsInner } from '../models/AuthorshipsInner';
import { AuthorshipsInnerAuthor } from '../models/AuthorshipsInnerAuthor';
import { AuthorshipsInnerInstitutionsInner } from '../models/AuthorshipsInnerInstitutionsInner';
import { AutoCompleteResultItem } from '../models/AutoCompleteResultItem';
import { AutoCompleteResultSchema } from '../models/AutoCompleteResultSchema';
import { BaseSelectionAttributes } from '../models/BaseSelectionAttributes';
import { Concept } from '../models/Concept';
import { ConceptIds } from '../models/ConceptIds';
import { Concepts } from '../models/Concepts';
import { CountsByYearInner } from '../models/CountsByYearInner';
import { DehydratedConcept } from '../models/DehydratedConcept';
import { DehydratedInstitution } from '../models/DehydratedInstitution';
import { Domain } from '../models/Domain';
import { ErrorMessage } from '../models/ErrorMessage';
import { Field } from '../models/Field';
import { Funder } from '../models/Funder';
import { FunderSchema } from '../models/FunderSchema';
import { FundersArray } from '../models/FundersArray';
import { Geo } from '../models/Geo';
import { GroupByResultInner } from '../models/GroupByResultInner';
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
import { NgramInner } from '../models/NgramInner';
import { NgramMeta } from '../models/NgramMeta';
import { Ngrams } from '../models/Ngrams';
import { Person } from '../models/Person';
import { Publisher } from '../models/Publisher';
import { PublisherParentPublisher } from '../models/PublisherParentPublisher';
import { PublisherSchema } from '../models/PublisherSchema';
import { Publishers } from '../models/Publishers';
import { RepositoriesArrayInner } from '../models/RepositoriesArrayInner';
import { Role } from '../models/Role';
import { RootResponseSchema } from '../models/RootResponseSchema';
import { Source } from '../models/Source';
import { SourceSchema } from '../models/SourceSchema';
import { SourceSocietiesInner } from '../models/SourceSocietiesInner';
import { Sources } from '../models/Sources';
import { Subfield } from '../models/Subfield';
import { SubfieldTopicsInner } from '../models/SubfieldTopicsInner';
import { SummaryStats } from '../models/SummaryStats';
import { Topic } from '../models/Topic';
import { TopicLevelArraySchema } from '../models/TopicLevelArraySchema';
import { TopicLevelSchema } from '../models/TopicLevelSchema';
import { TopicLevelSchemaId } from '../models/TopicLevelSchemaId';
import { Topics } from '../models/Topics';
import { TopicsMeta } from '../models/TopicsMeta';
import { TopicsResultsInner } from '../models/TopicsResultsInner';
import { Work } from '../models/Work';
import { WorkAttributes } from '../models/WorkAttributes';
import { WorkBiblio } from '../models/WorkBiblio';
import { WorkCitedByPercentileYear } from '../models/WorkCitedByPercentileYear';
import { WorkGrantsInner } from '../models/WorkGrantsInner';
import { WorkKeywordsInner } from '../models/WorkKeywordsInner';
import { WorkMeshInner } from '../models/WorkMeshInner';
import { WorkOpenAccess } from '../models/WorkOpenAccess';
import { WorkSchema } from '../models/WorkSchema';
import { WorkSustainableDevelopmentGoalsInner } from '../models/WorkSustainableDevelopmentGoalsInner';
import { WorksResponse } from '../models/WorksResponse';

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
     * @type string
     * @memberof OpenAlexApigetAuthor
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetAuthor
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetAuthors
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetAuthors
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetAutocomplete
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetAutocomplete
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetAutocompleteAuthors
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetAutocompleteAuthors
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetAutocompleteConcepts
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetAutocompleteConcepts
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetAutocompleteFunders
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetAutocompleteFunders
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetAutocompleteInstitutions
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetAutocompleteInstitutions
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetAutocompletePublishers
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetAutocompletePublishers
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetAutocompleteSources
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetAutocompleteSources
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetAutocompleteWorks
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetAutocompleteWorks
     */
    mailto?: string
}

export interface OpenAlexApiGetConceptByIdRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetConceptById
     */
    id: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetConceptById
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetConceptById
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetConceptById
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetConcepts
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetConcepts
     */
    mailto?: string
}

export interface OpenAlexApiGetDomainByIdRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetDomainById
     */
    id: string
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetDomainById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetDomainById
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetDomainById
     */
    mailto?: string
}

export interface OpenAlexApiGetFieldByIdRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetFieldById
     */
    id: string
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetFieldById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetFieldById
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetFieldById
     */
    mailto?: string
}

export interface OpenAlexApiGetFunderRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetFunder
     */
    id: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetFunder
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetFunder
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetFunder
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetFunders
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetFunders
     */
    mailto?: string
}

export interface OpenAlexApiGetInstitutionRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetInstitution
     */
    id: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetInstitution
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetInstitution
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetInstitution
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetInstitutions
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetInstitutions
     */
    mailto?: string
}

export interface OpenAlexApiGetPersonRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetPerson
     */
    id: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetPerson
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetPerson
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetPerson
     */
    mailto?: string
}

export interface OpenAlexApiGetPublisherRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetPublisher
     */
    id: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetPublisher
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetPublisher
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetPublisher
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetPublishers
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetPublishers
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetRandomAuthor
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetRandomAuthor
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetRandomConcept
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetRandomConcept
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetRandomFunder
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetRandomFunder
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetRandomInstitution
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetRandomInstitution
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetRandomPublisher
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetRandomPublisher
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetRandomSource
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetRandomSource
     */
    mailto?: string
}

export interface OpenAlexApiGetRandomWorkRequest {
    /**
     * 
     * @type Array&lt;WorkAttributes &amp; BaseSelectionAttributes&gt;
     * @memberof OpenAlexApigetRandomWork
     */
    select?: Array<WorkAttributes & BaseSelectionAttributes>
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetRandomWork
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetRandomWork
     */
    mailto?: string
}

export interface OpenAlexApiGetRootRequest {
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetRoot
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetRoot
     */
    mailto?: string
}

export interface OpenAlexApiGetSourceRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetSource
     */
    id: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetSource
     */
    select?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetSource
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetSource
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetSources
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetSources
     */
    mailto?: string
}

export interface OpenAlexApiGetSubfieldByIdRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetSubfieldById
     */
    id: string
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetSubfieldById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetSubfieldById
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetSubfieldById
     */
    mailto?: string
}

export interface OpenAlexApiGetTopicByIdRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetTopicById
     */
    id: string
    /**
     * 
     * @type number
     * @memberof OpenAlexApigetTopicById
     */
    perPage?: number
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetTopicById
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetTopicById
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetTopics
     */
    page?: string
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetTopics
     */
    sample?: string
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
     * @type string
     * @memberof OpenAlexApigetTopics
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetTopics
     */
    mailto?: string
}

export interface OpenAlexApiGetWorkRequest {
    /**
     * The id of the work to retrieve
     * @type string
     * @memberof OpenAlexApigetWork
     */
    id: string
    /**
     * 
     * @type Array&lt;WorkAttributes &amp; BaseSelectionAttributes&gt;
     * @memberof OpenAlexApigetWork
     */
    select?: Array<WorkAttributes & BaseSelectionAttributes>
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetWork
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetWork
     */
    mailto?: string
}

export interface OpenAlexApiGetWorkNgramsRequest {
    /**
     * 
     * @type string
     * @memberof OpenAlexApigetWorkNgrams
     */
    id: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetWorkNgrams
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetWorkNgrams
     */
    mailto?: string
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
     * @type string
     * @memberof OpenAlexApigetWorks
     */
    filter?: string
    /**
     * [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @type string
     * @memberof OpenAlexApigetWorks
     */
    userAgent?: string
    /**
     * The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @type string
     * @memberof OpenAlexApigetWorks
     */
    mailto?: string
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
