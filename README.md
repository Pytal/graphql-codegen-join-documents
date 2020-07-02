# graphql-codegen-join-documents
A plugin for [GraphQL Code Generator](https://graphql-code-generator.com/docs/getting-started/index) to join GraphQL queries/mutations/subscriptions together into a single file.

## Usage
Install the plugin:
``` bash
npm add -D graphql-codegen-join-documents
```

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
