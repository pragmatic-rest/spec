module.exports = {
  title: "Resource schema",
  description: "The representation of a 'resource' can be anything, eg a users resource",
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  required: [
    "path",
    "description",
    "contentType",
    "methods"
  ],
  properties: {
    path: {
      type: "string",
      description: "The base uri + version + resource path -> resource location"
    },
    description: require("pr-spec-description"),
    contentType: {
      type: "string",
      description: "What is the resource data format? E.g. application/json"
    },
    model: require("pr-spec-model"),
    authRequired: {
      type: "boolean",
      default: false
    },
    methods: {
      type: "array",
      minItems: 1,
      uniqueItems: true,
      items: require("pr-spec-method")
    }
  }
}
