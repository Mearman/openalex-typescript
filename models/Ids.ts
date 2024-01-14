/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  ### Python  [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![CodeSpaces](https://img.shields.io/badge/CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Colab](https://img.shields.io/badge/Colab-gray?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ### Many more coming soon  ---
 *
 * OpenAPI spec version: 0.0.4-3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Ids {
    'crossref'?: any | null;
    'doi'?: any | null;
    'fatcat'?: any | null;
    'grid'?: any | null;
    'issn'?: any | null;
    'issnL'?: any | null;
    'mag'?: any | null;
    'openalex': any | null;
    'orcid'?: any | null;
    'pmcid'?: any | null;
    'pmid'?: any | null;
    'ror'?: any | null;
    'scopus'?: any | null;
    'wikidata'?: any | null;
    'wikipedia'?: any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "crossref",
            "baseName": "crossref",
            "type": "any",
            "format": ""
        },
        {
            "name": "doi",
            "baseName": "doi",
            "type": "any",
            "format": ""
        },
        {
            "name": "fatcat",
            "baseName": "fatcat",
            "type": "any",
            "format": ""
        },
        {
            "name": "grid",
            "baseName": "grid",
            "type": "any",
            "format": ""
        },
        {
            "name": "issn",
            "baseName": "issn",
            "type": "any",
            "format": ""
        },
        {
            "name": "issnL",
            "baseName": "issn_l",
            "type": "any",
            "format": ""
        },
        {
            "name": "mag",
            "baseName": "mag",
            "type": "any",
            "format": ""
        },
        {
            "name": "openalex",
            "baseName": "openalex",
            "type": "any",
            "format": ""
        },
        {
            "name": "orcid",
            "baseName": "orcid",
            "type": "any",
            "format": ""
        },
        {
            "name": "pmcid",
            "baseName": "pmcid",
            "type": "any",
            "format": ""
        },
        {
            "name": "pmid",
            "baseName": "pmid",
            "type": "any",
            "format": ""
        },
        {
            "name": "ror",
            "baseName": "ror",
            "type": "any",
            "format": ""
        },
        {
            "name": "scopus",
            "baseName": "scopus",
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
            "name": "wikipedia",
            "baseName": "wikipedia",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Ids.attributeTypeMap;
    }

    public constructor() {
    }
}

