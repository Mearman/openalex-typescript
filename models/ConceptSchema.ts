/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  [![Open in](https://img.shields.io/badge/Open%20in-Swagger%20UI-85EA2D?style=for-the-badge&logo=Swagger&link=https://mearman.github.io/openalex-swagger-ui-react/)](https://mearman.github.io/openalex-swagger-ui-react/)  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * OpenAPI spec version: 0.2.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ConceptIds } from '../models/ConceptIds';
import { InternationalDisplayNameAndDescription } from '../models/InternationalDisplayNameAndDescription';
import { SummaryStats } from '../models/SummaryStats';
import { HttpFile } from '../http/http';

export class ConceptSchema {
    'ancestors'?: any | null;
    'citedByCount'?: any | null;
    'countsByYear'?: any | null;
    'createdDate'?: any | null;
    'description'?: any | null;
    'displayName': any | null;
    'id': any | null;
    'ids'?: ConceptIds;
    'imageThumbnailUrl'?: any | null;
    'imageUrl'?: any | null;
    'international'?: InternationalDisplayNameAndDescription;
    'level'?: any | null;
    'relatedConcepts'?: any | null;
    'summaryStats'?: SummaryStats;
    'updatedDate'?: any | null;
    'wikidata'?: any | null;
    'worksApiUrl'?: any | null;
    'worksCount'?: any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ancestors",
            "baseName": "ancestors",
            "type": "any",
            "format": ""
        },
        {
            "name": "citedByCount",
            "baseName": "cited_by_count",
            "type": "any",
            "format": ""
        },
        {
            "name": "countsByYear",
            "baseName": "counts_by_year",
            "type": "any",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "created_date",
            "type": "any",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "any",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "any",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "any",
            "format": ""
        },
        {
            "name": "ids",
            "baseName": "ids",
            "type": "ConceptIds",
            "format": ""
        },
        {
            "name": "imageThumbnailUrl",
            "baseName": "image_thumbnail_url",
            "type": "any",
            "format": ""
        },
        {
            "name": "imageUrl",
            "baseName": "image_url",
            "type": "any",
            "format": ""
        },
        {
            "name": "international",
            "baseName": "international",
            "type": "InternationalDisplayNameAndDescription",
            "format": ""
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "any",
            "format": ""
        },
        {
            "name": "relatedConcepts",
            "baseName": "related_concepts",
            "type": "any",
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
            "type": "any",
            "format": ""
        },
        {
            "name": "wikidata",
            "baseName": "wikidata",
            "type": "any",
            "format": ""
        },
        {
            "name": "worksApiUrl",
            "baseName": "works_api_url",
            "type": "any",
            "format": ""
        },
        {
            "name": "worksCount",
            "baseName": "works_count",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConceptSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

