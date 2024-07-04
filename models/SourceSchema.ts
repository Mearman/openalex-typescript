/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  [![Open in](https://img.shields.io/badge/Open%20in-Swagger%20UI-85EA2D?style=for-the-badge&logo=Swagger&link=https://mearman.github.io/openalex-swagger-ui-react/)](https://mearman.github.io/openalex-swagger-ui-react/)  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * OpenAPI spec version: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApcPricesInner } from '../models/ApcPricesInner';
import { CountsByYearInner } from '../models/CountsByYearInner';
import { DehydratedConcept } from '../models/DehydratedConcept';
import { Ids } from '../models/Ids';
import { SourceSocietiesInner } from '../models/SourceSocietiesInner';
import { SummaryStats } from '../models/SummaryStats';
import { HttpFile } from '../http/http';

export class SourceSchema {
    'abbreviatedTitle'?: string;
    'alternateTitles'?: Array<string>;
    'apcPrices'?: Array<ApcPricesInner>;
    'apcUsd'?: number;
    'citedByCount'?: number;
    'countryCode'?: string;
    'countsByYear'?: Array<CountsByYearInner>;
    'createdDate'?: string;
    'displayName': string;
    'homepageUrl'?: string;
    'hostOrganization'?: string;
    'hostOrganizationLineage'?: Array<string>;
    'hostOrganizationName'?: string;
    'id': string;
    'ids'?: Ids;
    'isInDoaj'?: boolean;
    'isOa'?: boolean;
    'issn'?: Array<string>;
    'issnL'?: string;
    'societies'?: Array<SourceSocietiesInner>;
    'summaryStats'?: SummaryStats;
    'type'?: string;
    'updatedDate'?: string;
    'worksApiUrl'?: string;
    'worksCount'?: number;
    'xConcepts'?: Array<DehydratedConcept>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "abbreviatedTitle",
            "baseName": "abbreviated_title",
            "type": "string",
            "format": ""
        },
        {
            "name": "alternateTitles",
            "baseName": "alternate_titles",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "apcPrices",
            "baseName": "apc_prices",
            "type": "Array<ApcPricesInner>",
            "format": ""
        },
        {
            "name": "apcUsd",
            "baseName": "apc_usd",
            "type": "number",
            "format": ""
        },
        {
            "name": "citedByCount",
            "baseName": "cited_by_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "countsByYear",
            "baseName": "counts_by_year",
            "type": "Array<CountsByYearInner>",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "created_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "homepageUrl",
            "baseName": "homepage_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostOrganization",
            "baseName": "host_organization",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostOrganizationLineage",
            "baseName": "host_organization_lineage",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "hostOrganizationName",
            "baseName": "host_organization_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "ids",
            "baseName": "ids",
            "type": "Ids",
            "format": ""
        },
        {
            "name": "isInDoaj",
            "baseName": "is_in_doaj",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isOa",
            "baseName": "is_oa",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "issn",
            "baseName": "issn",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "issnL",
            "baseName": "issn_l",
            "type": "string",
            "format": ""
        },
        {
            "name": "societies",
            "baseName": "societies",
            "type": "Array<SourceSocietiesInner>",
            "format": ""
        },
        {
            "name": "summaryStats",
            "baseName": "summary_stats",
            "type": "SummaryStats",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedDate",
            "baseName": "updated_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "worksApiUrl",
            "baseName": "works_api_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "worksCount",
            "baseName": "works_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "xConcepts",
            "baseName": "x_concepts",
            "type": "Array<DehydratedConcept>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SourceSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

