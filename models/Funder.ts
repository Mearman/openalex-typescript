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

import { CountsByYearInner } from '../models/CountsByYearInner';
import { Ids } from '../models/Ids';
import { Role } from '../models/Role';
import { SummaryStats } from '../models/SummaryStats';
import { HttpFile } from '../http/http';

export class Funder {
    'alternateTitles': Array<string>;
    'citedByCount'?: number;
    'countryCode'?: string;
    'countsByYear'?: Array<CountsByYearInner>;
    'createdDate'?: string;
    'description'?: string;
    'displayName': string;
    'grantsCount'?: number;
    'homepageUrl'?: string;
    'id': string;
    'ids'?: Ids;
    'imageThumbnailUrl'?: string;
    'imageUrl'?: string;
    'relevanceScore'?: number;
    'roles'?: Array<Role>;
    'summaryStats'?: SummaryStats;
    'updatedDate'?: string;
    'worksCount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "alternateTitles",
            "baseName": "alternate_titles",
            "type": "Array<string>",
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
            "name": "description",
            "baseName": "description",
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
            "name": "grantsCount",
            "baseName": "grants_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "homepageUrl",
            "baseName": "homepage_url",
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
            "name": "imageThumbnailUrl",
            "baseName": "image_thumbnail_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "imageUrl",
            "baseName": "image_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "relevanceScore",
            "baseName": "relevance_score",
            "type": "number",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<Role>",
            "format": ""
        },
        {
            "name": "summaryStats",
            "baseName": "summary_stats",
            "type": "SummaryStats",
            "format": ""
        },
        {
            "name": "updatedDate",
            "baseName": "updated_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "worksCount",
            "baseName": "works_count",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Funder.attributeTypeMap;
    }

    public constructor() {
    }
}

