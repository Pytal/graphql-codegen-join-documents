const { print } = require('graphql')

module.exports = {
  plugin: (schema, documents, config, info) => (
    documents.map( ({ document }) => print(document) ).join('\n')
  )
}
