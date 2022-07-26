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
import { ComGithubOpenshiftApiImageV1TagEvent } from './comGithubOpenshiftApiImageV1TagEvent';
import { ComGithubOpenshiftApiImageV1TagEventCondition } from './comGithubOpenshiftApiImageV1TagEventCondition';

/**
* NamedTagEventList relates a tag to its image history.
*/
export class ComGithubOpenshiftApiImageV1NamedTagEventList {
    /**
    * Conditions is an array of conditions that apply to the tag event list.
    */
    'conditions'?: Array<ComGithubOpenshiftApiImageV1TagEventCondition>;
    /**
    * Standard object\'s metadata.
    */
    'items': Array<ComGithubOpenshiftApiImageV1TagEvent>;
    /**
    * Tag is the tag for which the history is recorded
    */
    'tag': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<ComGithubOpenshiftApiImageV1TagEventCondition>"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ComGithubOpenshiftApiImageV1TagEvent>"
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGithubOpenshiftApiImageV1NamedTagEventList.attributeTypeMap;
    }
}

