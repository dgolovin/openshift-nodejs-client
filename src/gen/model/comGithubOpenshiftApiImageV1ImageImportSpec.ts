/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ComGithubOpenshiftApiImageV1TagImportPolicy } from './comGithubOpenshiftApiImageV1TagImportPolicy';
import { ComGithubOpenshiftApiImageV1TagReferencePolicy } from './comGithubOpenshiftApiImageV1TagReferencePolicy';
import { V1LocalObjectReferenceV2 } from './v1LocalObjectReferenceV2';
import { V1ObjectReferenceV2 } from './v1ObjectReferenceV2';

/**
* ImageImportSpec describes a request to import a specific image.
*/
export class ComGithubOpenshiftApiImageV1ImageImportSpec {
    'from': V1ObjectReferenceV2;
    'importPolicy'?: ComGithubOpenshiftApiImageV1TagImportPolicy;
    /**
    * IncludeManifest determines if the manifest for each image is returned in the response
    */
    'includeManifest'?: boolean;
    'referencePolicy'?: ComGithubOpenshiftApiImageV1TagReferencePolicy;
    'to'?: V1LocalObjectReferenceV2;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "from",
            "baseName": "from",
            "type": "V1ObjectReferenceV2"
        },
        {
            "name": "importPolicy",
            "baseName": "importPolicy",
            "type": "ComGithubOpenshiftApiImageV1TagImportPolicy"
        },
        {
            "name": "includeManifest",
            "baseName": "includeManifest",
            "type": "boolean"
        },
        {
            "name": "referencePolicy",
            "baseName": "referencePolicy",
            "type": "ComGithubOpenshiftApiImageV1TagReferencePolicy"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "V1LocalObjectReferenceV2"
        }    ];

    static getAttributeTypeMap() {
        return ComGithubOpenshiftApiImageV1ImageImportSpec.attributeTypeMap;
    }
}

