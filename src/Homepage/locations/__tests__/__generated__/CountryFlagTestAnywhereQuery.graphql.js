/**
 * @flow
 * @relayHash c1ab9d9daa652f2a929e4e72d60f4034
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type CountryFlag_location$ref = any;
export type CountryFlagTestAnywhereQueryVariables = {||};
export type CountryFlagTestAnywhereQueryResponse = {|
  +location: ?{|
    +$fragmentRefs: CountryFlag_location$ref
  |}
|};
export type CountryFlagTestAnywhereQuery = {|
  variables: CountryFlagTestAnywhereQueryVariables,
  response: CountryFlagTestAnywhereQueryResponse,
|};

/*
query CountryFlagTestAnywhereQuery {
  location(input: {locationId: "test-location-id"}) {
    ...CountryFlag_location
    id
  }
}

fragment CountryFlag_location on Location {
  country {
    code
    name
  }
  code
  name
  type
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "input",
    "value": {
      "locationId": "test-location-id"
    }
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CountryFlagTestAnywhereQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "location",
        "storageKey": "location(input:{\"locationId\":\"test-location-id\"})",
        "args": (v0/*: any*/),
        "concreteType": "Location",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CountryFlag_location",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CountryFlagTestAnywhereQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "location",
        "storageKey": "location(input:{\"locationId\":\"test-location-id\"})",
        "args": (v0/*: any*/),
        "concreteType": "Location",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "country",
            "storageKey": null,
            "args": null,
            "concreteType": "LocationArea",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
            ]
          },
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CountryFlagTestAnywhereQuery",
    "id": null,
    "text": "query CountryFlagTestAnywhereQuery {\n  location(input: {locationId: \"test-location-id\"}) {\n    ...CountryFlag_location\n    id\n  }\n}\n\nfragment CountryFlag_location on Location {\n  country {\n    code\n    name\n  }\n  code\n  name\n  type\n}\n",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "location": {
          "type": "Location",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "location.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "location.country": {
          "type": "LocationArea",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "location.code": (v3/*: any*/),
        "location.name": (v3/*: any*/),
        "location.type": (v3/*: any*/),
        "location.country.code": (v3/*: any*/),
        "location.country.name": (v3/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node: any).hash = '9facb0d14e3f34a90ad570053e5e077b';
export default node;
