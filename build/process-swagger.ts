import fs from 'fs';
import _ from 'lodash';
import { OpenAPIV2 } from "openapi-types";
const jsonData = require('./swagger.json') as OpenAPIV2.Document;
import JSONPath from 'jsonpath';


function findRefsRecursively(pairs: {key: string, definition: OpenAPIV2.SchemaObject | undefined}[], processedRefs: string[], document: OpenAPIV2.Document) {
  pairs.forEach(pair => {
    if (!processedRefs.includes(pair.key)) {
      const newDefinitions = JSONPath.query(pair.definition,'$..*[\'$ref\']');
      processedRefs.push(pair.key);
      findRefsRecursively(
        [ ... new Set(newDefinitions)].map(
          (refPath) => { 
            return { 
              definition: document.definitions?.[refPath.split('#/definitions/')[1]],
              key: refPath.split('#/definitions/')[1]}
          }),
        processedRefs,
        document);
    }
  });
}

function filterOpenAPIDefinition(patterns: string[], document: OpenAPIV2.Document) {
  
  const filteredPaths =  _.reduce(
    document.paths,
    (result : {[index: string]: OpenAPIV2.PathItemObject<{}>;}, current, key) => {
      patterns.forEach((pattern)=> {
        if (key.startsWith(pattern)) {
          result[key] = current;
        }
      })
      return result;
    },
    {}
  );
  const refs: string[] = [];
  
  const definitions = [ ... new Set(JSONPath.query(filteredPaths,'$..*[\'$ref\']'))].map((refPath) => { return { definition: document.definitions?.[refPath.split('#/definitions/')[1]], key: refPath.split('#/definitions/')[1]}});
  
  findRefsRecursively(definitions, refs, document);
  const result = {...document};
  result.paths = filteredPaths;
  result.definitions = _.reduce(
    refs,
    (result: OpenAPIV2.DefinitionsObject, ref: string) => { 
      if(document.definitions?.[ref]) result[ref] = document.definitions?.[ref]; 
      return result;
    },
    {});
  return result;
}

// const projectApiPrefix = '/apis/project.openshift.io/';
// const paths = jsonData.paths;
// const definitions: any = jsonData.definitions;
// jsonData.paths = {};
// const newPaths: OpenAPIV2.PathsObject = {};
// const newDefinitions: OpenAPIV2.DefinitionsObject = {};
// const refs:string[] = [];

// TODO: 1. Move code to function to filter out specific APIs and recursively 
// search for all involved definitions
// TODO: 2. Add API endpoints related to ImageStreams, Deployments and DeploymentConfigs
// TODO: 3. Create package for generating typescript client based on definition generated out of #2
// TODO: 4. Migrate builders search from console to git-service package
// TODO: 5. Implement simple workflow to create app out of git repositories
// TODO: 6. Understand why all those warnings about multiple schemas

// Object.keys(paths).forEach((key)=> {
//     if (key.startsWith(projectApiPrefix)) {
//         const result: string[] = JSONPath.query(paths[key],'$..*[\'$ref\']');
//         refs.push(...result);
//         console.log(result);
//         newPaths[key] = paths[key];
//         console.log(key);
//     }
// });

// jsonData.paths = newPaths;

// function findRefsInRefProperties(ref: string): Set<string> {
//     const result = definitions[ref]?.properties ? JSONPath.query(definitions[ref].properties, '$..[\'$ref\']') : [];
//     return new Set(
//         result.map((fullRefPath) => fullRefPath.split('#/definitions/')[1])
//     );
// }

// function findRefsInRefsRec(set: Set<string>, currentRef: string | undefined = undefined): Set<string> {
//     if (currentRef) {
//             return new Set<string>([...set, ...findRefsInRefsRec(findRefsInRefProperties(currentRef))]);
//     } else {
//         let refsInSet: Set<string> = new Set<string>();
//         set.forEach((ref) => {
//             refsInSet = new Set([...refsInSet, ...findRefsInRefsRec(findRefsInRefProperties(ref))]);
//         })
//         return new Set<string>([...set, ...refsInSet]);
//     }
//     return set;
// }

// const refsUnique = findRefsInRefsRec(new Set([...new Set(refs)].map((ref) => ref.split('#/definitions/')[1])));

// Object.keys(definitions).forEach(key => refsUnique.has(key) ? newDefinitions[key] = definitions[key] : '');
// jsonData.definitions = newDefinitions;

fs.writeFile('swagger-processed.json', JSON.stringify(filterOpenAPIDefinition([
  '/apis/image.openshift.io/',
  '/apis/project.openshift.io/',
  '/apis/apps/',
  '/apis/apps.openshift.io/'], jsonData), undefined, 4), (err) => {
    if(err)
        console.log(err);
    else 
        console.log('Converted');
});

// const data = YAML.stringify(jsonData);

// fs.writeFile('../swagger.yaml', data, (err) => {
//     if(err)
//         console.log(err);
//     else 
//         console.log('Converted');
// });

// /l/o/models/ComCoreosMonitoringV1AlertmanagerSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelectorMatchExpressionsInner.ts