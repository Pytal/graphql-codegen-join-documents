# graphql-codegen-join-documents
A plugin for [GraphQL Code Generator](https://graphql-code-generator.com/docs/getting-started/index) to join GraphQL queries/mutations/subscriptions together into a single file, useful for allowing only a subset of queries to be executed with the [Allow-list](https://hasura.io/docs/1.0/graphql/manual/deployment/allow-list.html) feature of [Hasura GraphQL-Engine](https://github.com/hasura/graphql-engine)

## Installation
``` bash
npm add -D graphql-codegen-join-documents
```

## Usage
Enter the following into `codegen.yaml`:
``` yaml
schema: schema.graphql
documents: src/**/*.gql

generates:
  queries.gql:
    plugins:
      - graphql-codegen-join-documents
```

Run codegen:
``` bash
npx graphql-codegen
```
