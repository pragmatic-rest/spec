module.exports = {
  title: "HTTP Header schema",
  description: "Describes a request on a resource",
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  required: [
    "name"
  ],
  properties: {
    name: {
      type: "string",
      description: "The name of the header e.g. X-MyHeader"
    },
    required: {
      type: "boolean",
      default: false
    },
    type: {
      type: "string",
      enum: [
        "string",
        "number",
        "boolean",
        "integer",
        "array"
      ]
    },
    description: require("pr-spec-description"),
    default: {
      description: "A defualt value, if no given value"
    }
  }
}
