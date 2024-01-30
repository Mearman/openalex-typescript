/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  [![Open in](https://img.shields.io/badge/Open%20in-Swagger%20UI-85EA2D?style=for-the-badge&logo=Swagger&link=https://mearman.github.io/openalex-swagger-ui-react/)](https://mearman.github.io/openalex-swagger-ui-react/)  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LocationSource } from '../models/LocationSource';
import { HttpFile } from '../http/http';

export class Location {
    'isAccepted'?: any | null;
    'isOa'?: any | null;
    'isPublished'?: any | null;
    'landingPageUrl'?: any | null;
    'license'?: any | null;
    'pdfUrl'?: any | null;
    'source'?: LocationSource;
    'version'?: any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isAccepted",
            "baseName": "is_accepted",
            "type": "any",
            "format": ""
        },
        {
            "name": "isOa",
            "baseName": "is_oa",
            "type": "any",
            "format": ""
        },
        {
            "name": "isPublished",
            "baseName": "is_published",
            "type": "any",
            "format": ""
        },
        {
            "name": "landingPageUrl",
            "baseName": "landing_page_url",
            "type": "any",
            "format": ""
        },
        {
            "name": "license",
            "baseName": "license",
            "type": "any",
            "format": ""
        },
        {
            "name": "pdfUrl",
            "baseName": "pdf_url",
            "type": "any",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "LocationSource",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Location.attributeTypeMap;
    }

    public constructor() {
    }
}

