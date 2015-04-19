module.exports = {
  title: "HTTP Method Request schema",
  description: "Describes a request on a resource",
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  required: [
    "contentType"
  ],
  properties: {
    contentType: {
      type: "string"
    },
    headers: {
      type: "array",
      default: [],
      items: require("pr-spec-header")
    },
    body: {
      type: "string",
      default: "",
      description: "Does the request send any data via the body?"
    },
    description: require("pr-spec-description")
  }
}
