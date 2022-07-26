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

/**
* SignatureSubject holds information about a person or entity who created the signature.
*/
export class ComGithubOpenshiftApiImageV1SignatureSubject {
    /**
    * Common name (e.g. openshift-signing-service).
    */
    'commonName'?: string;
    /**
    * Organization name.
    */
    'organization'?: string;
    /**
    * If present, it is a human readable key id of public key belonging to the subject used to verify image signature. It should contain at least 64 lowest bits of public key\'s fingerprint (e.g. 0x685ebe62bf278440).
    */
    'publicKeyID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "commonName",
            "baseName": "commonName",
            "type": "string"
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "string"
        },
        {
            "name": "publicKeyID",
            "baseName": "publicKeyID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGithubOpenshiftApiImageV1SignatureSubject.attributeTypeMap;
    }
}

