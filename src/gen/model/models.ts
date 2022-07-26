import localVarRequest from 'request';

export * from './comGithubOpenshiftApiImageV1Image';
export * from './comGithubOpenshiftApiImageV1ImageBlobReferences';
export * from './comGithubOpenshiftApiImageV1ImageImportSpec';
export * from './comGithubOpenshiftApiImageV1ImageImportStatus';
export * from './comGithubOpenshiftApiImageV1ImageLayer';
export * from './comGithubOpenshiftApiImageV1ImageLayerData';
export * from './comGithubOpenshiftApiImageV1ImageList';
export * from './comGithubOpenshiftApiImageV1ImageLookupPolicy';
export * from './comGithubOpenshiftApiImageV1ImageSignature';
export * from './comGithubOpenshiftApiImageV1ImageStream';
export * from './comGithubOpenshiftApiImageV1ImageStreamImage';
export * from './comGithubOpenshiftApiImageV1ImageStreamImport';
export * from './comGithubOpenshiftApiImageV1ImageStreamImportSpec';
export * from './comGithubOpenshiftApiImageV1ImageStreamImportStatus';
export * from './comGithubOpenshiftApiImageV1ImageStreamLayers';
export * from './comGithubOpenshiftApiImageV1ImageStreamList';
export * from './comGithubOpenshiftApiImageV1ImageStreamMapping';
export * from './comGithubOpenshiftApiImageV1ImageStreamSpec';
export * from './comGithubOpenshiftApiImageV1ImageStreamStatus';
export * from './comGithubOpenshiftApiImageV1ImageStreamTag';
export * from './comGithubOpenshiftApiImageV1ImageStreamTagList';
export * from './comGithubOpenshiftApiImageV1ImageTag';
export * from './comGithubOpenshiftApiImageV1ImageTagList';
export * from './comGithubOpenshiftApiImageV1NamedTagEventList';
export * from './comGithubOpenshiftApiImageV1RepositoryImportSpec';
export * from './comGithubOpenshiftApiImageV1RepositoryImportStatus';
export * from './comGithubOpenshiftApiImageV1SecretList';
export * from './comGithubOpenshiftApiImageV1SignatureCondition';
export * from './comGithubOpenshiftApiImageV1SignatureIssuer';
export * from './comGithubOpenshiftApiImageV1SignatureSubject';
export * from './comGithubOpenshiftApiImageV1TagEvent';
export * from './comGithubOpenshiftApiImageV1TagEventCondition';
export * from './comGithubOpenshiftApiImageV1TagImportPolicy';
export * from './comGithubOpenshiftApiImageV1TagReference';
export * from './comGithubOpenshiftApiImageV1TagReferencePolicy';
export * from './comGithubOpenshiftApiProjectV1Project';
export * from './comGithubOpenshiftApiProjectV1ProjectList';
export * from './comGithubOpenshiftApiProjectV1ProjectRequest';
export * from './comGithubOpenshiftApiProjectV1ProjectSpec';
export * from './comGithubOpenshiftApiProjectV1ProjectStatus';
export * from './v1APIGroup';
export * from './v1APIResource';
export * from './v1APIResourceList';
export * from './v1DeleteOptions';
export * from './v1GroupVersionForDiscovery';
export * from './v1ListMeta';
export * from './v1LocalObjectReferenceV2';
export * from './v1ManagedFieldsEntry';
export * from './v1NamespaceCondition';
export * from './v1ObjectMeta';
export * from './v1ObjectReferenceV2';
export * from './v1OwnerReference';
export * from './v1Preconditions';
export * from './v1Secret';
export * from './v1ServerAddressByClientCIDR';
export * from './v1Status';
export * from './v1StatusCause';
export * from './v1StatusDetails';
export * from './v1WatchEvent';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ComGithubOpenshiftApiImageV1Image } from './comGithubOpenshiftApiImageV1Image';
import { ComGithubOpenshiftApiImageV1ImageBlobReferences } from './comGithubOpenshiftApiImageV1ImageBlobReferences';
import { ComGithubOpenshiftApiImageV1ImageImportSpec } from './comGithubOpenshiftApiImageV1ImageImportSpec';
import { ComGithubOpenshiftApiImageV1ImageImportStatus } from './comGithubOpenshiftApiImageV1ImageImportStatus';
import { ComGithubOpenshiftApiImageV1ImageLayer } from './comGithubOpenshiftApiImageV1ImageLayer';
import { ComGithubOpenshiftApiImageV1ImageLayerData } from './comGithubOpenshiftApiImageV1ImageLayerData';
import { ComGithubOpenshiftApiImageV1ImageList } from './comGithubOpenshiftApiImageV1ImageList';
import { ComGithubOpenshiftApiImageV1ImageLookupPolicy } from './comGithubOpenshiftApiImageV1ImageLookupPolicy';
import { ComGithubOpenshiftApiImageV1ImageSignature } from './comGithubOpenshiftApiImageV1ImageSignature';
import { ComGithubOpenshiftApiImageV1ImageStream } from './comGithubOpenshiftApiImageV1ImageStream';
import { ComGithubOpenshiftApiImageV1ImageStreamImage } from './comGithubOpenshiftApiImageV1ImageStreamImage';
import { ComGithubOpenshiftApiImageV1ImageStreamImport } from './comGithubOpenshiftApiImageV1ImageStreamImport';
import { ComGithubOpenshiftApiImageV1ImageStreamImportSpec } from './comGithubOpenshiftApiImageV1ImageStreamImportSpec';
import { ComGithubOpenshiftApiImageV1ImageStreamImportStatus } from './comGithubOpenshiftApiImageV1ImageStreamImportStatus';
import { ComGithubOpenshiftApiImageV1ImageStreamLayers } from './comGithubOpenshiftApiImageV1ImageStreamLayers';
import { ComGithubOpenshiftApiImageV1ImageStreamList } from './comGithubOpenshiftApiImageV1ImageStreamList';
import { ComGithubOpenshiftApiImageV1ImageStreamMapping } from './comGithubOpenshiftApiImageV1ImageStreamMapping';
import { ComGithubOpenshiftApiImageV1ImageStreamSpec } from './comGithubOpenshiftApiImageV1ImageStreamSpec';
import { ComGithubOpenshiftApiImageV1ImageStreamStatus } from './comGithubOpenshiftApiImageV1ImageStreamStatus';
import { ComGithubOpenshiftApiImageV1ImageStreamTag } from './comGithubOpenshiftApiImageV1ImageStreamTag';
import { ComGithubOpenshiftApiImageV1ImageStreamTagList } from './comGithubOpenshiftApiImageV1ImageStreamTagList';
import { ComGithubOpenshiftApiImageV1ImageTag } from './comGithubOpenshiftApiImageV1ImageTag';
import { ComGithubOpenshiftApiImageV1ImageTagList } from './comGithubOpenshiftApiImageV1ImageTagList';
import { ComGithubOpenshiftApiImageV1NamedTagEventList } from './comGithubOpenshiftApiImageV1NamedTagEventList';
import { ComGithubOpenshiftApiImageV1RepositoryImportSpec } from './comGithubOpenshiftApiImageV1RepositoryImportSpec';
import { ComGithubOpenshiftApiImageV1RepositoryImportStatus } from './comGithubOpenshiftApiImageV1RepositoryImportStatus';
import { ComGithubOpenshiftApiImageV1SecretList } from './comGithubOpenshiftApiImageV1SecretList';
import { ComGithubOpenshiftApiImageV1SignatureCondition } from './comGithubOpenshiftApiImageV1SignatureCondition';
import { ComGithubOpenshiftApiImageV1SignatureIssuer } from './comGithubOpenshiftApiImageV1SignatureIssuer';
import { ComGithubOpenshiftApiImageV1SignatureSubject } from './comGithubOpenshiftApiImageV1SignatureSubject';
import { ComGithubOpenshiftApiImageV1TagEvent } from './comGithubOpenshiftApiImageV1TagEvent';
import { ComGithubOpenshiftApiImageV1TagEventCondition } from './comGithubOpenshiftApiImageV1TagEventCondition';
import { ComGithubOpenshiftApiImageV1TagImportPolicy } from './comGithubOpenshiftApiImageV1TagImportPolicy';
import { ComGithubOpenshiftApiImageV1TagReference } from './comGithubOpenshiftApiImageV1TagReference';
import { ComGithubOpenshiftApiImageV1TagReferencePolicy } from './comGithubOpenshiftApiImageV1TagReferencePolicy';
import { ComGithubOpenshiftApiProjectV1Project } from './comGithubOpenshiftApiProjectV1Project';
import { ComGithubOpenshiftApiProjectV1ProjectList } from './comGithubOpenshiftApiProjectV1ProjectList';
import { ComGithubOpenshiftApiProjectV1ProjectRequest } from './comGithubOpenshiftApiProjectV1ProjectRequest';
import { ComGithubOpenshiftApiProjectV1ProjectSpec } from './comGithubOpenshiftApiProjectV1ProjectSpec';
import { ComGithubOpenshiftApiProjectV1ProjectStatus } from './comGithubOpenshiftApiProjectV1ProjectStatus';
import { V1APIGroup } from './v1APIGroup';
import { V1APIResource } from './v1APIResource';
import { V1APIResourceList } from './v1APIResourceList';
import { V1DeleteOptions } from './v1DeleteOptions';
import { V1GroupVersionForDiscovery } from './v1GroupVersionForDiscovery';
import { V1ListMeta } from './v1ListMeta';
import { V1LocalObjectReferenceV2 } from './v1LocalObjectReferenceV2';
import { V1ManagedFieldsEntry } from './v1ManagedFieldsEntry';
import { V1NamespaceCondition } from './v1NamespaceCondition';
import { V1ObjectMeta } from './v1ObjectMeta';
import { V1ObjectReferenceV2 } from './v1ObjectReferenceV2';
import { V1OwnerReference } from './v1OwnerReference';
import { V1Preconditions } from './v1Preconditions';
import { V1Secret } from './v1Secret';
import { V1ServerAddressByClientCIDR } from './v1ServerAddressByClientCIDR';
import { V1Status } from './v1Status';
import { V1StatusCause } from './v1StatusCause';
import { V1StatusDetails } from './v1StatusDetails';
import { V1WatchEvent } from './v1WatchEvent';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "ComGithubOpenshiftApiImageV1Image": ComGithubOpenshiftApiImageV1Image,
    "ComGithubOpenshiftApiImageV1ImageBlobReferences": ComGithubOpenshiftApiImageV1ImageBlobReferences,
    "ComGithubOpenshiftApiImageV1ImageImportSpec": ComGithubOpenshiftApiImageV1ImageImportSpec,
    "ComGithubOpenshiftApiImageV1ImageImportStatus": ComGithubOpenshiftApiImageV1ImageImportStatus,
    "ComGithubOpenshiftApiImageV1ImageLayer": ComGithubOpenshiftApiImageV1ImageLayer,
    "ComGithubOpenshiftApiImageV1ImageLayerData": ComGithubOpenshiftApiImageV1ImageLayerData,
    "ComGithubOpenshiftApiImageV1ImageList": ComGithubOpenshiftApiImageV1ImageList,
    "ComGithubOpenshiftApiImageV1ImageLookupPolicy": ComGithubOpenshiftApiImageV1ImageLookupPolicy,
    "ComGithubOpenshiftApiImageV1ImageSignature": ComGithubOpenshiftApiImageV1ImageSignature,
    "ComGithubOpenshiftApiImageV1ImageStream": ComGithubOpenshiftApiImageV1ImageStream,
    "ComGithubOpenshiftApiImageV1ImageStreamImage": ComGithubOpenshiftApiImageV1ImageStreamImage,
    "ComGithubOpenshiftApiImageV1ImageStreamImport": ComGithubOpenshiftApiImageV1ImageStreamImport,
    "ComGithubOpenshiftApiImageV1ImageStreamImportSpec": ComGithubOpenshiftApiImageV1ImageStreamImportSpec,
    "ComGithubOpenshiftApiImageV1ImageStreamImportStatus": ComGithubOpenshiftApiImageV1ImageStreamImportStatus,
    "ComGithubOpenshiftApiImageV1ImageStreamLayers": ComGithubOpenshiftApiImageV1ImageStreamLayers,
    "ComGithubOpenshiftApiImageV1ImageStreamList": ComGithubOpenshiftApiImageV1ImageStreamList,
    "ComGithubOpenshiftApiImageV1ImageStreamMapping": ComGithubOpenshiftApiImageV1ImageStreamMapping,
    "ComGithubOpenshiftApiImageV1ImageStreamSpec": ComGithubOpenshiftApiImageV1ImageStreamSpec,
    "ComGithubOpenshiftApiImageV1ImageStreamStatus": ComGithubOpenshiftApiImageV1ImageStreamStatus,
    "ComGithubOpenshiftApiImageV1ImageStreamTag": ComGithubOpenshiftApiImageV1ImageStreamTag,
    "ComGithubOpenshiftApiImageV1ImageStreamTagList": ComGithubOpenshiftApiImageV1ImageStreamTagList,
    "ComGithubOpenshiftApiImageV1ImageTag": ComGithubOpenshiftApiImageV1ImageTag,
    "ComGithubOpenshiftApiImageV1ImageTagList": ComGithubOpenshiftApiImageV1ImageTagList,
    "ComGithubOpenshiftApiImageV1NamedTagEventList": ComGithubOpenshiftApiImageV1NamedTagEventList,
    "ComGithubOpenshiftApiImageV1RepositoryImportSpec": ComGithubOpenshiftApiImageV1RepositoryImportSpec,
    "ComGithubOpenshiftApiImageV1RepositoryImportStatus": ComGithubOpenshiftApiImageV1RepositoryImportStatus,
    "ComGithubOpenshiftApiImageV1SecretList": ComGithubOpenshiftApiImageV1SecretList,
    "ComGithubOpenshiftApiImageV1SignatureCondition": ComGithubOpenshiftApiImageV1SignatureCondition,
    "ComGithubOpenshiftApiImageV1SignatureIssuer": ComGithubOpenshiftApiImageV1SignatureIssuer,
    "ComGithubOpenshiftApiImageV1SignatureSubject": ComGithubOpenshiftApiImageV1SignatureSubject,
    "ComGithubOpenshiftApiImageV1TagEvent": ComGithubOpenshiftApiImageV1TagEvent,
    "ComGithubOpenshiftApiImageV1TagEventCondition": ComGithubOpenshiftApiImageV1TagEventCondition,
    "ComGithubOpenshiftApiImageV1TagImportPolicy": ComGithubOpenshiftApiImageV1TagImportPolicy,
    "ComGithubOpenshiftApiImageV1TagReference": ComGithubOpenshiftApiImageV1TagReference,
    "ComGithubOpenshiftApiImageV1TagReferencePolicy": ComGithubOpenshiftApiImageV1TagReferencePolicy,
    "ComGithubOpenshiftApiProjectV1Project": ComGithubOpenshiftApiProjectV1Project,
    "ComGithubOpenshiftApiProjectV1ProjectList": ComGithubOpenshiftApiProjectV1ProjectList,
    "ComGithubOpenshiftApiProjectV1ProjectRequest": ComGithubOpenshiftApiProjectV1ProjectRequest,
    "ComGithubOpenshiftApiProjectV1ProjectSpec": ComGithubOpenshiftApiProjectV1ProjectSpec,
    "ComGithubOpenshiftApiProjectV1ProjectStatus": ComGithubOpenshiftApiProjectV1ProjectStatus,
    "V1APIGroup": V1APIGroup,
    "V1APIResource": V1APIResource,
    "V1APIResourceList": V1APIResourceList,
    "V1DeleteOptions": V1DeleteOptions,
    "V1GroupVersionForDiscovery": V1GroupVersionForDiscovery,
    "V1ListMeta": V1ListMeta,
    "V1LocalObjectReferenceV2": V1LocalObjectReferenceV2,
    "V1ManagedFieldsEntry": V1ManagedFieldsEntry,
    "V1NamespaceCondition": V1NamespaceCondition,
    "V1ObjectMeta": V1ObjectMeta,
    "V1ObjectReferenceV2": V1ObjectReferenceV2,
    "V1OwnerReference": V1OwnerReference,
    "V1Preconditions": V1Preconditions,
    "V1Secret": V1Secret,
    "V1ServerAddressByClientCIDR": V1ServerAddressByClientCIDR,
    "V1Status": V1Status,
    "V1StatusCause": V1StatusCause,
    "V1StatusDetails": V1StatusDetails,
    "V1WatchEvent": V1WatchEvent,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
