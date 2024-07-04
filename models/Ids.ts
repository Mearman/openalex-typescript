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

import { HttpFile } from '../http/http';

export class Ids {
    'crossref'?: string;
    'doi'?: string;
    'fatcat'?: string;
    'grid'?: string;
    'issn'?: Array<string>;
    'issnL'?: string;
    'mag'?: string;
    'openalex': string;
    'orcid'?: string;
    'pmcid'?: string;
    'pmid'?: string;
    'ror'?: string;
    'scopus'?: string;
    'wikidata'?: string;
    'wikipedia'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "crossref",
            "baseName": "crossref",
            "type": "string",
            "format": ""
        },
        {
            "name": "doi",
            "baseName": "doi",
            "type": "string",
            "format": ""
        },
        {
            "name": "fatcat",
            "baseName": "fatcat",
            "type": "string",
            "format": ""
        },
        {
            "name": "grid",
            "baseName": "grid",
            "type": "string",
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
            "name": "mag",
            "baseName": "mag",
            "type": "string",
            "format": ""
        },
        {
            "name": "openalex",
            "baseName": "openalex",
            "type": "string",
            "format": ""
        },
        {
            "name": "orcid",
            "baseName": "orcid",
            "type": "string",
            "format": ""
        },
        {
            "name": "pmcid",
            "baseName": "pmcid",
            "type": "string",
            "format": ""
        },
        {
            "name": "pmid",
            "baseName": "pmid",
            "type": "string",
            "format": ""
        },
        {
            "name": "ror",
            "baseName": "ror",
            "type": "string",
            "format": ""
        },
        {
            "name": "scopus",
            "baseName": "scopus",
            "type": "string",
            "format": ""
        },
        {
            "name": "wikidata",
            "baseName": "wikidata",
            "type": "string",
            "format": ""
        },
        {
            "name": "wikipedia",
            "baseName": "wikipedia",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Ids.attributeTypeMap;
    }

    public constructor() {
    }
}

