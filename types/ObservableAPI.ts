import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AuthorsApiRequestFactory, AuthorsApiResponseProcessor} from "../apis/AuthorsApi";
export class ObservableAuthorsApi {
    private requestFactory: AuthorsApiRequestFactory;
    private responseProcessor: AuthorsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthorsApiRequestFactory,
        responseProcessor?: AuthorsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthorsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthorsApiResponseProcessor();
    }

    /**
     * Get a single author by id
     * Get Author
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAuthorWithHttpInfo(id: string, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<Author>> {
        const requestContextPromise = this.requestFactory.getAuthor(id, select, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuthorWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a single author by id
     * Get Author
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAuthor(id: string, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<Author> {
        return this.getAuthorWithHttpInfo(id, select, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<Author>) => apiResponse.data));
    }

    /**
     * Get lists of authors
     * List Authors
     * @param apiKey 
     * @param cursor 
     * @param filter 
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param seed 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAuthorsWithHttpInfo(apiKey?: string, cursor?: string, filter?: string, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, seed?: any, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AuthorsResponseSchema>> {
        const requestContextPromise = this.requestFactory.getAuthors(apiKey, cursor, filter, groupBy, page, perPage, sample, search, seed, select, sort, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuthorsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get lists of authors
     * List Authors
     * @param apiKey 
     * @param cursor 
     * @param filter 
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param seed 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAuthors(apiKey?: string, cursor?: string, filter?: string, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, seed?: any, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AuthorsResponseSchema> {
        return this.getAuthorsWithHttpInfo(apiKey, cursor, filter, groupBy, page, perPage, sample, search, seed, select, sort, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AuthorsResponseSchema>) => apiResponse.data));
    }

    /**
     * 
     * /autocomplete/authors
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteAuthorsWithHttpInfo(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompleteAuthors(q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompleteAuthorsWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/authors
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteAuthors(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompleteAuthorsWithHttpInfo(q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * Get a single author by id
     * Get Random Author
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getRandomAuthorWithHttpInfo(select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<Author>> {
        const requestContextPromise = this.requestFactory.getRandomAuthor(select, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRandomAuthorWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a single author by id
     * Get Random Author
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getRandomAuthor(select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<Author> {
        return this.getRandomAuthorWithHttpInfo(select, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<Author>) => apiResponse.data));
    }

}

import { AutocompleteApiRequestFactory, AutocompleteApiResponseProcessor} from "../apis/AutocompleteApi";
export class ObservableAutocompleteApi {
    private requestFactory: AutocompleteApiRequestFactory;
    private responseProcessor: AutocompleteApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AutocompleteApiRequestFactory,
        responseProcessor?: AutocompleteApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AutocompleteApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AutocompleteApiResponseProcessor();
    }

    /**
     * 
     * /autocomplete
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteWithHttpInfo(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocomplete(q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocomplete(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompleteWithHttpInfo(q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * 
     * /autocomplete/authors
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteAuthorsWithHttpInfo(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompleteAuthors(q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompleteAuthorsWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/authors
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteAuthors(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompleteAuthorsWithHttpInfo(q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * 
     * /autocomplete/concepts
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteConceptsWithHttpInfo(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompleteConcepts(q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompleteConceptsWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/concepts
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteConcepts(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompleteConceptsWithHttpInfo(q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * 
     * /autocomplete/funders
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteFundersWithHttpInfo(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompleteFunders(q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompleteFundersWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/funders
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteFunders(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompleteFundersWithHttpInfo(q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * 
     * /autocomplete/institutions
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteInstitutionsWithHttpInfo(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompleteInstitutions(q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompleteInstitutionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/institutions
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteInstitutions(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompleteInstitutionsWithHttpInfo(q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * 
     * /autocomplete/publishers
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompletePublishersWithHttpInfo(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompletePublishers(q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompletePublishersWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/publishers
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompletePublishers(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompletePublishersWithHttpInfo(q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * 
     * /autocomplete/sources
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteSourcesWithHttpInfo(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompleteSources(q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompleteSourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/sources
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteSources(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompleteSourcesWithHttpInfo(q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * 
     * /autocomplete/works
     * @param filter 
     * @param search 
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteWorksWithHttpInfo(filter?: string, search?: string, q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompleteWorks(filter, search, q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompleteWorksWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/works
     * @param filter 
     * @param search 
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteWorks(filter?: string, search?: string, q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompleteWorksWithHttpInfo(filter, search, q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

}

import { ConceptsApiRequestFactory, ConceptsApiResponseProcessor} from "../apis/ConceptsApi";
export class ObservableConceptsApi {
    private requestFactory: ConceptsApiRequestFactory;
    private responseProcessor: ConceptsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConceptsApiRequestFactory,
        responseProcessor?: ConceptsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConceptsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConceptsApiResponseProcessor();
    }

    /**
     * 
     * /autocomplete/concepts
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteConceptsWithHttpInfo(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompleteConcepts(q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompleteConceptsWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/concepts
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteConcepts(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompleteConceptsWithHttpInfo(q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * Get a single concept
     * /concepts/{id}
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getConceptWithHttpInfo(id: any, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<Concept>> {
        const requestContextPromise = this.requestFactory.getConcept(id, select, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConceptWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a single concept
     * /concepts/{id}
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getConcept(id: any, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<Concept> {
        return this.getConceptWithHttpInfo(id, select, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<Concept>) => apiResponse.data));
    }

    /**
     * 
     * /concepts
     * @param apiKey 
     * @param cursor 
     * @param filter 
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param seed 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getConceptsWithHttpInfo(apiKey?: string, cursor?: string, filter?: string, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, seed?: any, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<ConceptsResponseSchema>> {
        const requestContextPromise = this.requestFactory.getConcepts(apiKey, cursor, filter, groupBy, page, perPage, sample, search, seed, select, sort, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConceptsWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /concepts
     * @param apiKey 
     * @param cursor 
     * @param filter 
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param seed 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getConcepts(apiKey?: string, cursor?: string, filter?: string, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, seed?: any, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<ConceptsResponseSchema> {
        return this.getConceptsWithHttpInfo(apiKey, cursor, filter, groupBy, page, perPage, sample, search, seed, select, sort, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<ConceptsResponseSchema>) => apiResponse.data));
    }

}

import { FundersApiRequestFactory, FundersApiResponseProcessor} from "../apis/FundersApi";
export class ObservableFundersApi {
    private requestFactory: FundersApiRequestFactory;
    private responseProcessor: FundersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FundersApiRequestFactory,
        responseProcessor?: FundersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FundersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FundersApiResponseProcessor();
    }

    /**
     * 
     * /autocomplete/funders
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteFundersWithHttpInfo(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompleteFunders(q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompleteFundersWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/funders
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteFunders(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompleteFundersWithHttpInfo(q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * 
     * /funders/{id}
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getFunderWithHttpInfo(id: any, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<FunderSchema>> {
        const requestContextPromise = this.requestFactory.getFunder(id, select, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFunderWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /funders/{id}
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getFunder(id: any, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<FunderSchema> {
        return this.getFunderWithHttpInfo(id, select, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<FunderSchema>) => apiResponse.data));
    }

    /**
     * 
     * /funders
     * @param apiKey 
     * @param cursor 
     * @param filter 
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param seed 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getFundersWithHttpInfo(apiKey?: string, cursor?: string, filter?: string, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, seed?: any, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<FundersArray>> {
        const requestContextPromise = this.requestFactory.getFunders(apiKey, cursor, filter, groupBy, page, perPage, sample, search, seed, select, sort, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFundersWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /funders
     * @param apiKey 
     * @param cursor 
     * @param filter 
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param seed 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getFunders(apiKey?: string, cursor?: string, filter?: string, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, seed?: any, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<FundersArray> {
        return this.getFundersWithHttpInfo(apiKey, cursor, filter, groupBy, page, perPage, sample, search, seed, select, sort, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<FundersArray>) => apiResponse.data));
    }

}

import { InfoApiRequestFactory, InfoApiResponseProcessor} from "../apis/InfoApi";
export class ObservableInfoApi {
    private requestFactory: InfoApiRequestFactory;
    private responseProcessor: InfoApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InfoApiRequestFactory,
        responseProcessor?: InfoApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InfoApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InfoApiResponseProcessor();
    }

    /**
     * Root endpoint
     * Root
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getRootWithHttpInfo(userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<RootResponseSchema>> {
        const requestContextPromise = this.requestFactory.getRoot(userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRootWithHttpInfo(rsp)));
            }));
    }

    /**
     * Root endpoint
     * Root
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getRoot(userAgent?: any, mailto?: any, _options?: Configuration): Observable<RootResponseSchema> {
        return this.getRootWithHttpInfo(userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<RootResponseSchema>) => apiResponse.data));
    }

}

import { InstitutionsApiRequestFactory, InstitutionsApiResponseProcessor} from "../apis/InstitutionsApi";
export class ObservableInstitutionsApi {
    private requestFactory: InstitutionsApiRequestFactory;
    private responseProcessor: InstitutionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InstitutionsApiRequestFactory,
        responseProcessor?: InstitutionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InstitutionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InstitutionsApiResponseProcessor();
    }

    /**
     * 
     * /autocomplete/institutions
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteInstitutionsWithHttpInfo(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompleteInstitutions(q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompleteInstitutionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/institutions
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteInstitutions(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompleteInstitutionsWithHttpInfo(q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * 
     * /institutions/{id}
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getInstitutionWithHttpInfo(id: any, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<InstitutionSchema>> {
        const requestContextPromise = this.requestFactory.getInstitution(id, select, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInstitutionWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /institutions/{id}
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getInstitution(id: any, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<InstitutionSchema> {
        return this.getInstitutionWithHttpInfo(id, select, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<InstitutionSchema>) => apiResponse.data));
    }

    /**
     * 
     * /institutions
     * @param apiKey 
     * @param cursor 
     * @param filter 
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param seed 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getInstitutionsWithHttpInfo(apiKey?: string, cursor?: string, filter?: string, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, seed?: any, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<InstitutionsResponseSchema>> {
        const requestContextPromise = this.requestFactory.getInstitutions(apiKey, cursor, filter, groupBy, page, perPage, sample, search, seed, select, sort, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInstitutionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /institutions
     * @param apiKey 
     * @param cursor 
     * @param filter 
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param seed 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getInstitutions(apiKey?: string, cursor?: string, filter?: string, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, seed?: any, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<InstitutionsResponseSchema> {
        return this.getInstitutionsWithHttpInfo(apiKey, cursor, filter, groupBy, page, perPage, sample, search, seed, select, sort, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<InstitutionsResponseSchema>) => apiResponse.data));
    }

}

import { ListApiRequestFactory, ListApiResponseProcessor} from "../apis/ListApi";
export class ObservableListApi {
    private requestFactory: ListApiRequestFactory;
    private responseProcessor: ListApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ListApiRequestFactory,
        responseProcessor?: ListApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ListApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ListApiResponseProcessor();
    }

    /**
     * 
     * /works
     * @param apiKey 
     * @param cursor 
     * @param filter Filter works by a specific field. See the [filter works](https://docs.openalex.org/api-entities/works/filter-works) documentation for more information. Valid filters are:   - &#x60;abstract.search&#x60; - &#x60;apc_list.currency&#x60; - &#x60;apc_list.provenance&#x60; - &#x60;apc_list.value&#x60; - &#x60;apc_list.value_usd&#x60; - &#x60;apc_paid.currency&#x60; - &#x60;apc_paid.provenance&#x60; - &#x60;apc_paid.value&#x60; - &#x60;apc_paid.value_usd&#x60; - &#x60;author.id&#x60; - &#x60;author.orcid&#x60; - &#x60;authors_count&#x60; - &#x60;authorships.author.id&#x60; - &#x60;authorships.author.orcid&#x60; - &#x60;authorships.countries&#x60; - &#x60;authorships.institutions.continent&#x60; - &#x60;authorships.institutions.country_code&#x60; - &#x60;authorships.institutions.id&#x60; - &#x60;authorships.institutions.is_global_south&#x60; - &#x60;authorships.institutions.lineage&#x60; - &#x60;authorships.institutions.ror&#x60; - &#x60;authorships.institutions.type&#x60; - &#x60;authorships.is_corresponding&#x60; - &#x60;best_oa_location.is_accepted&#x60; - &#x60;best_oa_location.is_oa&#x60; - &#x60;best_oa_location.is_published&#x60; - &#x60;best_oa_location.landing_page_url&#x60; - &#x60;best_oa_location.license&#x60; - &#x60;best_oa_location.source.host_organization&#x60; - &#x60;best_oa_location.source.host_organization_lineage&#x60; - &#x60;best_oa_location.source.id&#x60; - &#x60;best_oa_location.source.is_in_doaj&#x60; - &#x60;best_oa_location.source.is_oa&#x60; - &#x60;best_oa_location.source.issn&#x60; - &#x60;best_oa_location.source.type&#x60; - &#x60;best_oa_location.version&#x60; - &#x60;best_open_version&#x60; - &#x60;cited_by&#x60; - &#x60;cited_by_count&#x60; - &#x60;cited_by_percentile_year.max&#x60; - &#x60;cited_by_percentile_year.min&#x60; - &#x60;cites&#x60; - &#x60;concept.id&#x60; - &#x60;concepts.id&#x60; - &#x60;concepts.wikidata&#x60; - &#x60;concepts_count&#x60; - &#x60;corresponding_author_ids&#x60; - &#x60;corresponding_institution_ids&#x60; - &#x60;countries_distinct_count&#x60; - &#x60;default.search&#x60; - &#x60;display_name&#x60; - &#x60;display_name.search&#x60; - &#x60;doi&#x60; - &#x60;doi_starts_with&#x60; - &#x60;from_created_date&#x60; - &#x60;from_publication_date&#x60; - &#x60;fulltext.search&#x60; - &#x60;fulltext_origin&#x60; - &#x60;grants.award_id&#x60; - &#x60;grants.funder&#x60; - &#x60;has_abstract&#x60; - &#x60;has_doi&#x60; - &#x60;has_fulltext&#x60; - &#x60;has_ngrams&#x60; - &#x60;has_oa_accepted_or_published_version&#x60; - &#x60;has_oa_submitted_version&#x60; - &#x60;has_old_authors&#x60; - &#x60;has_orcid&#x60; - &#x60;has_pdf_url&#x60; - &#x60;has_pmcid&#x60; - &#x60;has_pmid&#x60; - &#x60;has_raw_affiliation_string&#x60; - &#x60;has_references&#x60; - &#x60;host_venue.id&#x60; - &#x60;ids.mag&#x60; - &#x60;ids.openalex&#x60; - &#x60;ids.pmcid&#x60; - &#x60;ids.pmid&#x60; - &#x60;institution.id&#x60; - &#x60;institutions.continent&#x60; - &#x60;institutions.country_code&#x60; - &#x60;institutions.id&#x60; - &#x60;institutions.is_global_south&#x60; - &#x60;institutions.ror&#x60; - &#x60;institutions.type&#x60; - &#x60;institutions_distinct_count&#x60; - &#x60;is_corresponding&#x60; - &#x60;is_oa&#x60; - &#x60;is_paratext&#x60; - &#x60;is_retracted&#x60; - &#x60;journal&#x60; - &#x60;keyword.search&#x60; - &#x60;keywords.keyword&#x60; - &#x60;language&#x60; - &#x60;locations.is_accepted&#x60; - &#x60;locations.is_oa&#x60; - &#x60;locations.is_published&#x60; - &#x60;locations.landing_page_url&#x60; - &#x60;locations.license&#x60; - &#x60;locations.source.has_issn&#x60; - &#x60;locations.source.host_institution_lineage&#x60; - &#x60;locations.source.host_organization&#x60; - &#x60;locations.source.host_organization_lineage&#x60; - &#x60;locations.source.id&#x60; - &#x60;locations.source.is_in_doaj&#x60; - &#x60;locations.source.is_oa&#x60; - &#x60;locations.source.issn&#x60; - &#x60;locations.source.publisher_lineage&#x60; - &#x60;locations.source.type&#x60; - &#x60;locations.version&#x60; - &#x60;locations_count&#x60; - &#x60;mag&#x60; - &#x60;oa_status&#x60; - &#x60;open_access.any_repository_has_fulltext&#x60; - &#x60;open_access.is_oa&#x60; - &#x60;open_access.oa_status&#x60; - &#x60;openalex&#x60; - &#x60;openalex_id&#x60; - &#x60;pmcid&#x60; - &#x60;pmid&#x60; - &#x60;primary_location.is_accepted&#x60; - &#x60;primary_location.is_oa&#x60; - &#x60;primary_location.is_published&#x60; - &#x60;primary_location.landing_page_url&#x60; - &#x60;primary_location.license&#x60; - &#x60;primary_location.source.has_issn&#x60; - &#x60;primary_location.source.host_institution_lineage&#x60; - &#x60;primary_location.source.host_organization&#x60; - &#x60;primary_location.source.host_organization_lineage&#x60; - &#x60;primary_location.source.id&#x60; - &#x60;primary_location.source.is_in_doaj&#x60; - &#x60;primary_location.source.is_oa&#x60; - &#x60;primary_location.source.issn&#x60; - &#x60;primary_location.source.publisher_lineage&#x60; - &#x60;primary_location.source.type&#x60; - &#x60;primary_location.version&#x60; - &#x60;publication_date&#x60; - &#x60;publication_year&#x60; - &#x60;raw_affiliation_string.search&#x60; - &#x60;referenced_works&#x60; - &#x60;referenced_works_count&#x60; - &#x60;related_to&#x60; - &#x60;repository&#x60; - &#x60;sustainable_development_goals.id&#x60; - &#x60;sustainable_development_goals.score&#x60; - &#x60;title.search&#x60; - &#x60;title_and_abstract.search&#x60; - &#x60;to_publication_date&#x60; - &#x60;to_updated_date&#x60; - &#x60;type&#x60; - &#x60;type_crossref&#x60; - &#x60;version&#x60;
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWorksWithHttpInfo(apiKey?: string, cursor?: string, filter?: any, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<WorksResponseSchema>> {
        const requestContextPromise = this.requestFactory.getWorks(apiKey, cursor, filter, groupBy, page, perPage, sample, search, select, sort, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorksWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /works
     * @param apiKey 
     * @param cursor 
     * @param filter Filter works by a specific field. See the [filter works](https://docs.openalex.org/api-entities/works/filter-works) documentation for more information. Valid filters are:   - &#x60;abstract.search&#x60; - &#x60;apc_list.currency&#x60; - &#x60;apc_list.provenance&#x60; - &#x60;apc_list.value&#x60; - &#x60;apc_list.value_usd&#x60; - &#x60;apc_paid.currency&#x60; - &#x60;apc_paid.provenance&#x60; - &#x60;apc_paid.value&#x60; - &#x60;apc_paid.value_usd&#x60; - &#x60;author.id&#x60; - &#x60;author.orcid&#x60; - &#x60;authors_count&#x60; - &#x60;authorships.author.id&#x60; - &#x60;authorships.author.orcid&#x60; - &#x60;authorships.countries&#x60; - &#x60;authorships.institutions.continent&#x60; - &#x60;authorships.institutions.country_code&#x60; - &#x60;authorships.institutions.id&#x60; - &#x60;authorships.institutions.is_global_south&#x60; - &#x60;authorships.institutions.lineage&#x60; - &#x60;authorships.institutions.ror&#x60; - &#x60;authorships.institutions.type&#x60; - &#x60;authorships.is_corresponding&#x60; - &#x60;best_oa_location.is_accepted&#x60; - &#x60;best_oa_location.is_oa&#x60; - &#x60;best_oa_location.is_published&#x60; - &#x60;best_oa_location.landing_page_url&#x60; - &#x60;best_oa_location.license&#x60; - &#x60;best_oa_location.source.host_organization&#x60; - &#x60;best_oa_location.source.host_organization_lineage&#x60; - &#x60;best_oa_location.source.id&#x60; - &#x60;best_oa_location.source.is_in_doaj&#x60; - &#x60;best_oa_location.source.is_oa&#x60; - &#x60;best_oa_location.source.issn&#x60; - &#x60;best_oa_location.source.type&#x60; - &#x60;best_oa_location.version&#x60; - &#x60;best_open_version&#x60; - &#x60;cited_by&#x60; - &#x60;cited_by_count&#x60; - &#x60;cited_by_percentile_year.max&#x60; - &#x60;cited_by_percentile_year.min&#x60; - &#x60;cites&#x60; - &#x60;concept.id&#x60; - &#x60;concepts.id&#x60; - &#x60;concepts.wikidata&#x60; - &#x60;concepts_count&#x60; - &#x60;corresponding_author_ids&#x60; - &#x60;corresponding_institution_ids&#x60; - &#x60;countries_distinct_count&#x60; - &#x60;default.search&#x60; - &#x60;display_name&#x60; - &#x60;display_name.search&#x60; - &#x60;doi&#x60; - &#x60;doi_starts_with&#x60; - &#x60;from_created_date&#x60; - &#x60;from_publication_date&#x60; - &#x60;fulltext.search&#x60; - &#x60;fulltext_origin&#x60; - &#x60;grants.award_id&#x60; - &#x60;grants.funder&#x60; - &#x60;has_abstract&#x60; - &#x60;has_doi&#x60; - &#x60;has_fulltext&#x60; - &#x60;has_ngrams&#x60; - &#x60;has_oa_accepted_or_published_version&#x60; - &#x60;has_oa_submitted_version&#x60; - &#x60;has_old_authors&#x60; - &#x60;has_orcid&#x60; - &#x60;has_pdf_url&#x60; - &#x60;has_pmcid&#x60; - &#x60;has_pmid&#x60; - &#x60;has_raw_affiliation_string&#x60; - &#x60;has_references&#x60; - &#x60;host_venue.id&#x60; - &#x60;ids.mag&#x60; - &#x60;ids.openalex&#x60; - &#x60;ids.pmcid&#x60; - &#x60;ids.pmid&#x60; - &#x60;institution.id&#x60; - &#x60;institutions.continent&#x60; - &#x60;institutions.country_code&#x60; - &#x60;institutions.id&#x60; - &#x60;institutions.is_global_south&#x60; - &#x60;institutions.ror&#x60; - &#x60;institutions.type&#x60; - &#x60;institutions_distinct_count&#x60; - &#x60;is_corresponding&#x60; - &#x60;is_oa&#x60; - &#x60;is_paratext&#x60; - &#x60;is_retracted&#x60; - &#x60;journal&#x60; - &#x60;keyword.search&#x60; - &#x60;keywords.keyword&#x60; - &#x60;language&#x60; - &#x60;locations.is_accepted&#x60; - &#x60;locations.is_oa&#x60; - &#x60;locations.is_published&#x60; - &#x60;locations.landing_page_url&#x60; - &#x60;locations.license&#x60; - &#x60;locations.source.has_issn&#x60; - &#x60;locations.source.host_institution_lineage&#x60; - &#x60;locations.source.host_organization&#x60; - &#x60;locations.source.host_organization_lineage&#x60; - &#x60;locations.source.id&#x60; - &#x60;locations.source.is_in_doaj&#x60; - &#x60;locations.source.is_oa&#x60; - &#x60;locations.source.issn&#x60; - &#x60;locations.source.publisher_lineage&#x60; - &#x60;locations.source.type&#x60; - &#x60;locations.version&#x60; - &#x60;locations_count&#x60; - &#x60;mag&#x60; - &#x60;oa_status&#x60; - &#x60;open_access.any_repository_has_fulltext&#x60; - &#x60;open_access.is_oa&#x60; - &#x60;open_access.oa_status&#x60; - &#x60;openalex&#x60; - &#x60;openalex_id&#x60; - &#x60;pmcid&#x60; - &#x60;pmid&#x60; - &#x60;primary_location.is_accepted&#x60; - &#x60;primary_location.is_oa&#x60; - &#x60;primary_location.is_published&#x60; - &#x60;primary_location.landing_page_url&#x60; - &#x60;primary_location.license&#x60; - &#x60;primary_location.source.has_issn&#x60; - &#x60;primary_location.source.host_institution_lineage&#x60; - &#x60;primary_location.source.host_organization&#x60; - &#x60;primary_location.source.host_organization_lineage&#x60; - &#x60;primary_location.source.id&#x60; - &#x60;primary_location.source.is_in_doaj&#x60; - &#x60;primary_location.source.is_oa&#x60; - &#x60;primary_location.source.issn&#x60; - &#x60;primary_location.source.publisher_lineage&#x60; - &#x60;primary_location.source.type&#x60; - &#x60;primary_location.version&#x60; - &#x60;publication_date&#x60; - &#x60;publication_year&#x60; - &#x60;raw_affiliation_string.search&#x60; - &#x60;referenced_works&#x60; - &#x60;referenced_works_count&#x60; - &#x60;related_to&#x60; - &#x60;repository&#x60; - &#x60;sustainable_development_goals.id&#x60; - &#x60;sustainable_development_goals.score&#x60; - &#x60;title.search&#x60; - &#x60;title_and_abstract.search&#x60; - &#x60;to_publication_date&#x60; - &#x60;to_updated_date&#x60; - &#x60;type&#x60; - &#x60;type_crossref&#x60; - &#x60;version&#x60;
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWorks(apiKey?: string, cursor?: string, filter?: any, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<WorksResponseSchema> {
        return this.getWorksWithHttpInfo(apiKey, cursor, filter, groupBy, page, perPage, sample, search, select, sort, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<WorksResponseSchema>) => apiResponse.data));
    }

}

import { NgramsApiRequestFactory, NgramsApiResponseProcessor} from "../apis/NgramsApi";
export class ObservableNgramsApi {
    private requestFactory: NgramsApiRequestFactory;
    private responseProcessor: NgramsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NgramsApiRequestFactory,
        responseProcessor?: NgramsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NgramsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NgramsApiResponseProcessor();
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param id 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWorkNgramsWithHttpInfo(id: any, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<WorkNgramsSchema>> {
        const requestContextPromise = this.requestFactory.getWorkNgrams(id, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorkNgramsWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param id 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWorkNgrams(id: any, userAgent?: any, mailto?: any, _options?: Configuration): Observable<WorkNgramsSchema> {
        return this.getWorkNgramsWithHttpInfo(id, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<WorkNgramsSchema>) => apiResponse.data));
    }

}

import { PeopleApiRequestFactory, PeopleApiResponseProcessor} from "../apis/PeopleApi";
export class ObservablePeopleApi {
    private requestFactory: PeopleApiRequestFactory;
    private responseProcessor: PeopleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PeopleApiRequestFactory,
        responseProcessor?: PeopleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PeopleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PeopleApiResponseProcessor();
    }

    /**
     * 
     * /people/{id}
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getPersonWithHttpInfo(id: any, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<PersonResponseSchema>> {
        const requestContextPromise = this.requestFactory.getPerson(id, select, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPersonWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /people/{id}
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getPerson(id: any, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<PersonResponseSchema> {
        return this.getPersonWithHttpInfo(id, select, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<PersonResponseSchema>) => apiResponse.data));
    }

}

import { PublishersApiRequestFactory, PublishersApiResponseProcessor} from "../apis/PublishersApi";
export class ObservablePublishersApi {
    private requestFactory: PublishersApiRequestFactory;
    private responseProcessor: PublishersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PublishersApiRequestFactory,
        responseProcessor?: PublishersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PublishersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PublishersApiResponseProcessor();
    }

    /**
     * 
     * /autocomplete/publishers
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompletePublishersWithHttpInfo(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompletePublishers(q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompletePublishersWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/publishers
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompletePublishers(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompletePublishersWithHttpInfo(q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * 
     * /publishers/{id}
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getPublisherWithHttpInfo(id: any, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<PublisherSchema>> {
        const requestContextPromise = this.requestFactory.getPublisher(id, select, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPublisherWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /publishers/{id}
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getPublisher(id: any, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<PublisherSchema> {
        return this.getPublisherWithHttpInfo(id, select, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<PublisherSchema>) => apiResponse.data));
    }

    /**
     * 
     * /publishers
     * @param apiKey 
     * @param cursor 
     * @param filter 
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param seed 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getPublishersWithHttpInfo(apiKey?: string, cursor?: string, filter?: string, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, seed?: any, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<PublishersResponseSchema>> {
        const requestContextPromise = this.requestFactory.getPublishers(apiKey, cursor, filter, groupBy, page, perPage, sample, search, seed, select, sort, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPublishersWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /publishers
     * @param apiKey 
     * @param cursor 
     * @param filter 
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param seed 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getPublishers(apiKey?: string, cursor?: string, filter?: string, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, seed?: any, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<PublishersResponseSchema> {
        return this.getPublishersWithHttpInfo(apiKey, cursor, filter, groupBy, page, perPage, sample, search, seed, select, sort, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<PublishersResponseSchema>) => apiResponse.data));
    }

}

import { SingleApiRequestFactory, SingleApiResponseProcessor} from "../apis/SingleApi";
export class ObservableSingleApi {
    private requestFactory: SingleApiRequestFactory;
    private responseProcessor: SingleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SingleApiRequestFactory,
        responseProcessor?: SingleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SingleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SingleApiResponseProcessor();
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param id The id of the work to retrieve
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWorkWithHttpInfo(id: any, select?: any, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<WorkSchema>> {
        const requestContextPromise = this.requestFactory.getWork(id, select, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param id The id of the work to retrieve
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWork(id: any, select?: any, userAgent?: any, mailto?: any, _options?: Configuration): Observable<WorkSchema> {
        return this.getWorkWithHttpInfo(id, select, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<WorkSchema>) => apiResponse.data));
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param id 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWorkNgramsWithHttpInfo(id: any, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<WorkNgramsSchema>> {
        const requestContextPromise = this.requestFactory.getWorkNgrams(id, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorkNgramsWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param id 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWorkNgrams(id: any, userAgent?: any, mailto?: any, _options?: Configuration): Observable<WorkNgramsSchema> {
        return this.getWorkNgramsWithHttpInfo(id, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<WorkNgramsSchema>) => apiResponse.data));
    }

}

import { SourcesApiRequestFactory, SourcesApiResponseProcessor} from "../apis/SourcesApi";
export class ObservableSourcesApi {
    private requestFactory: SourcesApiRequestFactory;
    private responseProcessor: SourcesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SourcesApiRequestFactory,
        responseProcessor?: SourcesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SourcesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SourcesApiResponseProcessor();
    }

    /**
     * 
     * /autocomplete/sources
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteSourcesWithHttpInfo(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompleteSources(q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompleteSourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/sources
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteSources(q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompleteSourcesWithHttpInfo(q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * 
     * /sources/{id}
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getSourceWithHttpInfo(id: any, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<SourceSchema>> {
        const requestContextPromise = this.requestFactory.getSource(id, select, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSourceWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /sources/{id}
     * @param id 
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getSource(id: any, select?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<SourceSchema> {
        return this.getSourceWithHttpInfo(id, select, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<SourceSchema>) => apiResponse.data));
    }

    /**
     * 
     * /sources
     * @param groupBy 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getSourcesWithHttpInfo(groupBy?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<SourcesArray>> {
        const requestContextPromise = this.requestFactory.getSources(groupBy, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /sources
     * @param groupBy 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getSources(groupBy?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<SourcesArray> {
        return this.getSourcesWithHttpInfo(groupBy, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<SourcesArray>) => apiResponse.data));
    }

}

import { WorksApiRequestFactory, WorksApiResponseProcessor} from "../apis/WorksApi";
export class ObservableWorksApi {
    private requestFactory: WorksApiRequestFactory;
    private responseProcessor: WorksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WorksApiRequestFactory,
        responseProcessor?: WorksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WorksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WorksApiResponseProcessor();
    }

    /**
     * 
     * /autocomplete/works
     * @param filter 
     * @param search 
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteWorksWithHttpInfo(filter?: string, search?: string, q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<AutoCompleteResultSchema>> {
        const requestContextPromise = this.requestFactory.getAutocompleteWorks(filter, search, q, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutocompleteWorksWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /autocomplete/works
     * @param filter 
     * @param search 
     * @param q 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getAutocompleteWorks(filter?: string, search?: string, q?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<AutoCompleteResultSchema> {
        return this.getAutocompleteWorksWithHttpInfo(filter, search, q, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<AutoCompleteResultSchema>) => apiResponse.data));
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param id The id of the work to retrieve
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWorkWithHttpInfo(id: any, select?: any, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<WorkSchema>> {
        const requestContextPromise = this.requestFactory.getWork(id, select, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a single work by its id
     * /works/{id}
     * @param id The id of the work to retrieve
     * @param select 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWork(id: any, select?: any, userAgent?: any, mailto?: any, _options?: Configuration): Observable<WorkSchema> {
        return this.getWorkWithHttpInfo(id, select, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<WorkSchema>) => apiResponse.data));
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param id 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWorkNgramsWithHttpInfo(id: any, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<WorkNgramsSchema>> {
        const requestContextPromise = this.requestFactory.getWorkNgrams(id, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorkNgramsWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /works/{id}/ngrams
     * @param id 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWorkNgrams(id: any, userAgent?: any, mailto?: any, _options?: Configuration): Observable<WorkNgramsSchema> {
        return this.getWorkNgramsWithHttpInfo(id, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<WorkNgramsSchema>) => apiResponse.data));
    }

    /**
     * 
     * /works
     * @param apiKey 
     * @param cursor 
     * @param filter Filter works by a specific field. See the [filter works](https://docs.openalex.org/api-entities/works/filter-works) documentation for more information. Valid filters are:   - &#x60;abstract.search&#x60; - &#x60;apc_list.currency&#x60; - &#x60;apc_list.provenance&#x60; - &#x60;apc_list.value&#x60; - &#x60;apc_list.value_usd&#x60; - &#x60;apc_paid.currency&#x60; - &#x60;apc_paid.provenance&#x60; - &#x60;apc_paid.value&#x60; - &#x60;apc_paid.value_usd&#x60; - &#x60;author.id&#x60; - &#x60;author.orcid&#x60; - &#x60;authors_count&#x60; - &#x60;authorships.author.id&#x60; - &#x60;authorships.author.orcid&#x60; - &#x60;authorships.countries&#x60; - &#x60;authorships.institutions.continent&#x60; - &#x60;authorships.institutions.country_code&#x60; - &#x60;authorships.institutions.id&#x60; - &#x60;authorships.institutions.is_global_south&#x60; - &#x60;authorships.institutions.lineage&#x60; - &#x60;authorships.institutions.ror&#x60; - &#x60;authorships.institutions.type&#x60; - &#x60;authorships.is_corresponding&#x60; - &#x60;best_oa_location.is_accepted&#x60; - &#x60;best_oa_location.is_oa&#x60; - &#x60;best_oa_location.is_published&#x60; - &#x60;best_oa_location.landing_page_url&#x60; - &#x60;best_oa_location.license&#x60; - &#x60;best_oa_location.source.host_organization&#x60; - &#x60;best_oa_location.source.host_organization_lineage&#x60; - &#x60;best_oa_location.source.id&#x60; - &#x60;best_oa_location.source.is_in_doaj&#x60; - &#x60;best_oa_location.source.is_oa&#x60; - &#x60;best_oa_location.source.issn&#x60; - &#x60;best_oa_location.source.type&#x60; - &#x60;best_oa_location.version&#x60; - &#x60;best_open_version&#x60; - &#x60;cited_by&#x60; - &#x60;cited_by_count&#x60; - &#x60;cited_by_percentile_year.max&#x60; - &#x60;cited_by_percentile_year.min&#x60; - &#x60;cites&#x60; - &#x60;concept.id&#x60; - &#x60;concepts.id&#x60; - &#x60;concepts.wikidata&#x60; - &#x60;concepts_count&#x60; - &#x60;corresponding_author_ids&#x60; - &#x60;corresponding_institution_ids&#x60; - &#x60;countries_distinct_count&#x60; - &#x60;default.search&#x60; - &#x60;display_name&#x60; - &#x60;display_name.search&#x60; - &#x60;doi&#x60; - &#x60;doi_starts_with&#x60; - &#x60;from_created_date&#x60; - &#x60;from_publication_date&#x60; - &#x60;fulltext.search&#x60; - &#x60;fulltext_origin&#x60; - &#x60;grants.award_id&#x60; - &#x60;grants.funder&#x60; - &#x60;has_abstract&#x60; - &#x60;has_doi&#x60; - &#x60;has_fulltext&#x60; - &#x60;has_ngrams&#x60; - &#x60;has_oa_accepted_or_published_version&#x60; - &#x60;has_oa_submitted_version&#x60; - &#x60;has_old_authors&#x60; - &#x60;has_orcid&#x60; - &#x60;has_pdf_url&#x60; - &#x60;has_pmcid&#x60; - &#x60;has_pmid&#x60; - &#x60;has_raw_affiliation_string&#x60; - &#x60;has_references&#x60; - &#x60;host_venue.id&#x60; - &#x60;ids.mag&#x60; - &#x60;ids.openalex&#x60; - &#x60;ids.pmcid&#x60; - &#x60;ids.pmid&#x60; - &#x60;institution.id&#x60; - &#x60;institutions.continent&#x60; - &#x60;institutions.country_code&#x60; - &#x60;institutions.id&#x60; - &#x60;institutions.is_global_south&#x60; - &#x60;institutions.ror&#x60; - &#x60;institutions.type&#x60; - &#x60;institutions_distinct_count&#x60; - &#x60;is_corresponding&#x60; - &#x60;is_oa&#x60; - &#x60;is_paratext&#x60; - &#x60;is_retracted&#x60; - &#x60;journal&#x60; - &#x60;keyword.search&#x60; - &#x60;keywords.keyword&#x60; - &#x60;language&#x60; - &#x60;locations.is_accepted&#x60; - &#x60;locations.is_oa&#x60; - &#x60;locations.is_published&#x60; - &#x60;locations.landing_page_url&#x60; - &#x60;locations.license&#x60; - &#x60;locations.source.has_issn&#x60; - &#x60;locations.source.host_institution_lineage&#x60; - &#x60;locations.source.host_organization&#x60; - &#x60;locations.source.host_organization_lineage&#x60; - &#x60;locations.source.id&#x60; - &#x60;locations.source.is_in_doaj&#x60; - &#x60;locations.source.is_oa&#x60; - &#x60;locations.source.issn&#x60; - &#x60;locations.source.publisher_lineage&#x60; - &#x60;locations.source.type&#x60; - &#x60;locations.version&#x60; - &#x60;locations_count&#x60; - &#x60;mag&#x60; - &#x60;oa_status&#x60; - &#x60;open_access.any_repository_has_fulltext&#x60; - &#x60;open_access.is_oa&#x60; - &#x60;open_access.oa_status&#x60; - &#x60;openalex&#x60; - &#x60;openalex_id&#x60; - &#x60;pmcid&#x60; - &#x60;pmid&#x60; - &#x60;primary_location.is_accepted&#x60; - &#x60;primary_location.is_oa&#x60; - &#x60;primary_location.is_published&#x60; - &#x60;primary_location.landing_page_url&#x60; - &#x60;primary_location.license&#x60; - &#x60;primary_location.source.has_issn&#x60; - &#x60;primary_location.source.host_institution_lineage&#x60; - &#x60;primary_location.source.host_organization&#x60; - &#x60;primary_location.source.host_organization_lineage&#x60; - &#x60;primary_location.source.id&#x60; - &#x60;primary_location.source.is_in_doaj&#x60; - &#x60;primary_location.source.is_oa&#x60; - &#x60;primary_location.source.issn&#x60; - &#x60;primary_location.source.publisher_lineage&#x60; - &#x60;primary_location.source.type&#x60; - &#x60;primary_location.version&#x60; - &#x60;publication_date&#x60; - &#x60;publication_year&#x60; - &#x60;raw_affiliation_string.search&#x60; - &#x60;referenced_works&#x60; - &#x60;referenced_works_count&#x60; - &#x60;related_to&#x60; - &#x60;repository&#x60; - &#x60;sustainable_development_goals.id&#x60; - &#x60;sustainable_development_goals.score&#x60; - &#x60;title.search&#x60; - &#x60;title_and_abstract.search&#x60; - &#x60;to_publication_date&#x60; - &#x60;to_updated_date&#x60; - &#x60;type&#x60; - &#x60;type_crossref&#x60; - &#x60;version&#x60;
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWorksWithHttpInfo(apiKey?: string, cursor?: string, filter?: any, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<HttpInfo<WorksResponseSchema>> {
        const requestContextPromise = this.requestFactory.getWorks(apiKey, cursor, filter, groupBy, page, perPage, sample, search, select, sort, userAgent, mailto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorksWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * /works
     * @param apiKey 
     * @param cursor 
     * @param filter Filter works by a specific field. See the [filter works](https://docs.openalex.org/api-entities/works/filter-works) documentation for more information. Valid filters are:   - &#x60;abstract.search&#x60; - &#x60;apc_list.currency&#x60; - &#x60;apc_list.provenance&#x60; - &#x60;apc_list.value&#x60; - &#x60;apc_list.value_usd&#x60; - &#x60;apc_paid.currency&#x60; - &#x60;apc_paid.provenance&#x60; - &#x60;apc_paid.value&#x60; - &#x60;apc_paid.value_usd&#x60; - &#x60;author.id&#x60; - &#x60;author.orcid&#x60; - &#x60;authors_count&#x60; - &#x60;authorships.author.id&#x60; - &#x60;authorships.author.orcid&#x60; - &#x60;authorships.countries&#x60; - &#x60;authorships.institutions.continent&#x60; - &#x60;authorships.institutions.country_code&#x60; - &#x60;authorships.institutions.id&#x60; - &#x60;authorships.institutions.is_global_south&#x60; - &#x60;authorships.institutions.lineage&#x60; - &#x60;authorships.institutions.ror&#x60; - &#x60;authorships.institutions.type&#x60; - &#x60;authorships.is_corresponding&#x60; - &#x60;best_oa_location.is_accepted&#x60; - &#x60;best_oa_location.is_oa&#x60; - &#x60;best_oa_location.is_published&#x60; - &#x60;best_oa_location.landing_page_url&#x60; - &#x60;best_oa_location.license&#x60; - &#x60;best_oa_location.source.host_organization&#x60; - &#x60;best_oa_location.source.host_organization_lineage&#x60; - &#x60;best_oa_location.source.id&#x60; - &#x60;best_oa_location.source.is_in_doaj&#x60; - &#x60;best_oa_location.source.is_oa&#x60; - &#x60;best_oa_location.source.issn&#x60; - &#x60;best_oa_location.source.type&#x60; - &#x60;best_oa_location.version&#x60; - &#x60;best_open_version&#x60; - &#x60;cited_by&#x60; - &#x60;cited_by_count&#x60; - &#x60;cited_by_percentile_year.max&#x60; - &#x60;cited_by_percentile_year.min&#x60; - &#x60;cites&#x60; - &#x60;concept.id&#x60; - &#x60;concepts.id&#x60; - &#x60;concepts.wikidata&#x60; - &#x60;concepts_count&#x60; - &#x60;corresponding_author_ids&#x60; - &#x60;corresponding_institution_ids&#x60; - &#x60;countries_distinct_count&#x60; - &#x60;default.search&#x60; - &#x60;display_name&#x60; - &#x60;display_name.search&#x60; - &#x60;doi&#x60; - &#x60;doi_starts_with&#x60; - &#x60;from_created_date&#x60; - &#x60;from_publication_date&#x60; - &#x60;fulltext.search&#x60; - &#x60;fulltext_origin&#x60; - &#x60;grants.award_id&#x60; - &#x60;grants.funder&#x60; - &#x60;has_abstract&#x60; - &#x60;has_doi&#x60; - &#x60;has_fulltext&#x60; - &#x60;has_ngrams&#x60; - &#x60;has_oa_accepted_or_published_version&#x60; - &#x60;has_oa_submitted_version&#x60; - &#x60;has_old_authors&#x60; - &#x60;has_orcid&#x60; - &#x60;has_pdf_url&#x60; - &#x60;has_pmcid&#x60; - &#x60;has_pmid&#x60; - &#x60;has_raw_affiliation_string&#x60; - &#x60;has_references&#x60; - &#x60;host_venue.id&#x60; - &#x60;ids.mag&#x60; - &#x60;ids.openalex&#x60; - &#x60;ids.pmcid&#x60; - &#x60;ids.pmid&#x60; - &#x60;institution.id&#x60; - &#x60;institutions.continent&#x60; - &#x60;institutions.country_code&#x60; - &#x60;institutions.id&#x60; - &#x60;institutions.is_global_south&#x60; - &#x60;institutions.ror&#x60; - &#x60;institutions.type&#x60; - &#x60;institutions_distinct_count&#x60; - &#x60;is_corresponding&#x60; - &#x60;is_oa&#x60; - &#x60;is_paratext&#x60; - &#x60;is_retracted&#x60; - &#x60;journal&#x60; - &#x60;keyword.search&#x60; - &#x60;keywords.keyword&#x60; - &#x60;language&#x60; - &#x60;locations.is_accepted&#x60; - &#x60;locations.is_oa&#x60; - &#x60;locations.is_published&#x60; - &#x60;locations.landing_page_url&#x60; - &#x60;locations.license&#x60; - &#x60;locations.source.has_issn&#x60; - &#x60;locations.source.host_institution_lineage&#x60; - &#x60;locations.source.host_organization&#x60; - &#x60;locations.source.host_organization_lineage&#x60; - &#x60;locations.source.id&#x60; - &#x60;locations.source.is_in_doaj&#x60; - &#x60;locations.source.is_oa&#x60; - &#x60;locations.source.issn&#x60; - &#x60;locations.source.publisher_lineage&#x60; - &#x60;locations.source.type&#x60; - &#x60;locations.version&#x60; - &#x60;locations_count&#x60; - &#x60;mag&#x60; - &#x60;oa_status&#x60; - &#x60;open_access.any_repository_has_fulltext&#x60; - &#x60;open_access.is_oa&#x60; - &#x60;open_access.oa_status&#x60; - &#x60;openalex&#x60; - &#x60;openalex_id&#x60; - &#x60;pmcid&#x60; - &#x60;pmid&#x60; - &#x60;primary_location.is_accepted&#x60; - &#x60;primary_location.is_oa&#x60; - &#x60;primary_location.is_published&#x60; - &#x60;primary_location.landing_page_url&#x60; - &#x60;primary_location.license&#x60; - &#x60;primary_location.source.has_issn&#x60; - &#x60;primary_location.source.host_institution_lineage&#x60; - &#x60;primary_location.source.host_organization&#x60; - &#x60;primary_location.source.host_organization_lineage&#x60; - &#x60;primary_location.source.id&#x60; - &#x60;primary_location.source.is_in_doaj&#x60; - &#x60;primary_location.source.is_oa&#x60; - &#x60;primary_location.source.issn&#x60; - &#x60;primary_location.source.publisher_lineage&#x60; - &#x60;primary_location.source.type&#x60; - &#x60;primary_location.version&#x60; - &#x60;publication_date&#x60; - &#x60;publication_year&#x60; - &#x60;raw_affiliation_string.search&#x60; - &#x60;referenced_works&#x60; - &#x60;referenced_works_count&#x60; - &#x60;related_to&#x60; - &#x60;repository&#x60; - &#x60;sustainable_development_goals.id&#x60; - &#x60;sustainable_development_goals.score&#x60; - &#x60;title.search&#x60; - &#x60;title_and_abstract.search&#x60; - &#x60;to_publication_date&#x60; - &#x60;to_updated_date&#x60; - &#x60;type&#x60; - &#x60;type_crossref&#x60; - &#x60;version&#x60;
     * @param groupBy 
     * @param page 
     * @param perPage 
     * @param sample 
     * @param search 
     * @param select 
     * @param sort 
     * @param userAgent [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param mailto The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     */
    public getWorks(apiKey?: string, cursor?: string, filter?: any, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Observable<WorksResponseSchema> {
        return this.getWorksWithHttpInfo(apiKey, cursor, filter, groupBy, page, perPage, sample, search, select, sort, userAgent, mailto, _options).pipe(map((apiResponse: HttpInfo<WorksResponseSchema>) => apiResponse.data));
    }

}
