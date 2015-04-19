module.exports = {
  title: "HTTP Method Response schema",
  description: "Describes a request on a resource",
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  required: [
    "contentType",
    "statusCode"
  ],
  properties: {
    contentType: {
      type: "string"
    },
    statusCode: {
      type: "number",
      description: "See http://en.wikipedia.org/wiki/List_of_HTTP_status_codes"
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
