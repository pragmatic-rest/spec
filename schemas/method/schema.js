module.exports = {
  title: "HTTP Method schema",
  description: "Describes how a http-method acts upon a resource",
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  required: [
    "method"
  ],
  properties: {
    method: {
      type: "string",
      description: "See http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html",
      enum: [
        "GET", 
        "PUT", 
        "POST", 
        "DELETE"
      ]
    },
    description: require("pr-spec-description"),
    parameters: {
      type: "array",
      default: [],
      items: require("pr-spec-parameter")
    },
    requests: {
      type: "array",
      default: [],
      items: require("pr-spec-request")
    },
    responses: {
      type: "array",
      default: [],
      items: require("pr-spec-response")
    }
  }
}
