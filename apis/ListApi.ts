// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ErrorMessage } from '../models/ErrorMessage';
import { WorksResponseSchema } from '../models/WorksResponseSchema';

/**
 * no description
 */
export class ListApiRequestFactory extends BaseAPIRequestFactory {

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
    public async getWorks(apiKey?: string, cursor?: string, filter?: any, groupBy?: string, page?: number, perPage?: number, sample?: number, search?: string, select?: string, sort?: string, userAgent?: any, mailto?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/works';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "any", ""));
        }

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("group_by", ObjectSerializer.serialize(groupBy, "string", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", ""));
        }

        // Query Params
        if (sample !== undefined) {
            requestContext.setQueryParam("sample", ObjectSerializer.serialize(sample, "number", ""));
        }

        // Query Params
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }

        // Query Params
        if (select !== undefined) {
            requestContext.setQueryParam("select", ObjectSerializer.serialize(select, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (mailto !== undefined) {
            requestContext.setQueryParam("mailto", ObjectSerializer.serialize(mailto, "any", ""));
        }

        // Header Params
        requestContext.setHeaderParam("User-Agent", ObjectSerializer.serialize(userAgent, "any", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ListApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWorks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWorksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WorksResponseSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorksResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorksResponseSchema", ""
            ) as WorksResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorMessage = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorMessage", ""
            ) as ErrorMessage;
            throw new ApiException<ErrorMessage>(response.httpStatusCode, "", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorksResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorksResponseSchema", ""
            ) as WorksResponseSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
