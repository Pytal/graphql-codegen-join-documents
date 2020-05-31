import { print } from 'graphql'

export default {
  plugin: (schema, documents, config, info) => (
    documents.map(({ document }) => print(document)).join('\n')
  )
}
