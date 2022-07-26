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
import { ComGithubOpenshiftApiImageV1Image } from './comGithubOpenshiftApiImageV1Image';
import { V1Status } from './v1Status';

/**
* ImageImportStatus describes the result of an image import.
*/
export class ComGithubOpenshiftApiImageV1ImageImportStatus {
    'image'?: ComGithubOpenshiftApiImageV1Image;
    'status': V1Status;
    /**
    * Tag is the tag this image was located under, if any
    */
    'tag'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "image",
            "baseName": "image",
            "type": "ComGithubOpenshiftApiImageV1Image"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1Status"
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGithubOpenshiftApiImageV1ImageImportStatus.attributeTypeMap;
    }
}
