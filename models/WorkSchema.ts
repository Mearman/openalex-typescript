/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * OpenAPI spec version: 0.0.4-3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Apc } from '../models/Apc';
import { Ids } from '../models/Ids';
import { Location } from '../models/Location';
import { WorkSchemaBiblio } from '../models/WorkSchemaBiblio';
import { WorkSchemaCitedByPercentileYear } from '../models/WorkSchemaCitedByPercentileYear';
import { WorkSchemaOpenAccess } from '../models/WorkSchemaOpenAccess';
import { HttpFile } from '../http/http';

export class WorkSchema {
    'abstractInvertedIndex'?: any | null;
    'apcList'?: Apc;
    'apcPaid'?: Apc;
    'authorships'?: any | null;
    'bestOaLocation'?: Location;
    'biblio'?: WorkSchemaBiblio;
    'citedByApiUrl'?: any | null;
    'citedByCount'?: any | null;
    'citedByPercentileYear'?: WorkSchemaCitedByPercentileYear;
    'concepts'?: any | null;
    'correspondingAuthorIds'?: any | null;
    'correspondingInstitutionIds'?: any | null;
    'countriesDistinctCount'?: any | null;
    'countsByYear'?: any | null;
    'createdDate'?: any | null;
    'displayName': any | null;
    'doi'?: any | null;
    'grants'?: any | null;
    'hasFulltext'?: any | null;
    'id': any | null;
    'ids'?: Ids;
    'institutionsDistinctCount'?: any | null;
    'isParatext'?: any | null;
    'isRetracted'?: any | null;
    'keywords'?: any | null;
    'language'?: any | null;
    'locations'?: any | null;
    'locationsCount'?: any | null;
    'mesh'?: any | null;
    'ngramsUrl'?: any | null;
    'openAccess'?: WorkSchemaOpenAccess;
    'primaryLocation'?: Location;
    'publicationDate'?: any | null;
    'publicationYear'?: any | null;
    'referencedWorks'?: any | null;
    'referencedWorksCount'?: any | null;
    'relatedWorks'?: any | null;
    'sustainableDevelopmentGoals'?: any | null;
    'title'?: any | null;
    'type'?: any | null;
    'typeCrossref'?: any | null;
    'updatedDate'?: any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "abstractInvertedIndex",
            "baseName": "abstract_inverted_index",
            "type": "any",
            "format": ""
        },
        {
            "name": "apcList",
            "baseName": "apc_list",
            "type": "Apc",
            "format": ""
        },
        {
            "name": "apcPaid",
            "baseName": "apc_paid",
            "type": "Apc",
            "format": ""
        },
        {
            "name": "authorships",
            "baseName": "authorships",
            "type": "any",
            "format": ""
        },
        {
            "name": "bestOaLocation",
            "baseName": "best_oa_location",
            "type": "Location",
            "format": ""
        },
        {
            "name": "biblio",
            "baseName": "biblio",
            "type": "WorkSchemaBiblio",
            "format": ""
        },
        {
            "name": "citedByApiUrl",
            "baseName": "cited_by_api_url",
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
            "name": "citedByPercentileYear",
            "baseName": "cited_by_percentile_year",
            "type": "WorkSchemaCitedByPercentileYear",
            "format": ""
        },
        {
            "name": "concepts",
            "baseName": "concepts",
            "type": "any",
            "format": ""
        },
        {
            "name": "correspondingAuthorIds",
            "baseName": "corresponding_author_ids",
            "type": "any",
            "format": ""
        },
        {
            "name": "correspondingInstitutionIds",
            "baseName": "corresponding_institution_ids",
            "type": "any",
            "format": ""
        },
        {
            "name": "countriesDistinctCount",
            "baseName": "countries_distinct_count",
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
            "name": "displayName",
            "baseName": "display_name",
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
            "name": "grants",
            "baseName": "grants",
            "type": "any",
            "format": ""
        },
        {
            "name": "hasFulltext",
            "baseName": "has_fulltext",
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
            "type": "Ids",
            "format": ""
        },
        {
            "name": "institutionsDistinctCount",
            "baseName": "institutions_distinct_count",
            "type": "any",
            "format": ""
        },
        {
            "name": "isParatext",
            "baseName": "is_paratext",
            "type": "any",
            "format": ""
        },
        {
            "name": "isRetracted",
            "baseName": "is_retracted",
            "type": "any",
            "format": ""
        },
        {
            "name": "keywords",
            "baseName": "keywords",
            "type": "any",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "any",
            "format": ""
        },
        {
            "name": "locations",
            "baseName": "locations",
            "type": "any",
            "format": ""
        },
        {
            "name": "locationsCount",
            "baseName": "locations_count",
            "type": "any",
            "format": ""
        },
        {
            "name": "mesh",
            "baseName": "mesh",
            "type": "any",
            "format": ""
        },
        {
            "name": "ngramsUrl",
            "baseName": "ngrams_url",
            "type": "any",
            "format": ""
        },
        {
            "name": "openAccess",
            "baseName": "open_access",
            "type": "WorkSchemaOpenAccess",
            "format": ""
        },
        {
            "name": "primaryLocation",
            "baseName": "primary_location",
            "type": "Location",
            "format": ""
        },
        {
            "name": "publicationDate",
            "baseName": "publication_date",
            "type": "any",
            "format": ""
        },
        {
            "name": "publicationYear",
            "baseName": "publication_year",
            "type": "any",
            "format": ""
        },
        {
            "name": "referencedWorks",
            "baseName": "referenced_works",
            "type": "any",
            "format": ""
        },
        {
            "name": "referencedWorksCount",
            "baseName": "referenced_works_count",
            "type": "any",
            "format": ""
        },
        {
            "name": "relatedWorks",
            "baseName": "related_works",
            "type": "any",
            "format": ""
        },
        {
            "name": "sustainableDevelopmentGoals",
            "baseName": "sustainable_development_goals",
            "type": "any",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "any",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "any",
            "format": ""
        },
        {
            "name": "typeCrossref",
            "baseName": "type_crossref",
            "type": "any",
            "format": ""
        },
        {
            "name": "updatedDate",
            "baseName": "updated_date",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WorkSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

