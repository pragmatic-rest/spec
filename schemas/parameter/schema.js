module.exports = {
  title: "Method Parameter Spec",
  description: "Describes a parameters in all it's details",
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  required: [
    "name"
  ],
  properties: {
    name: {
      type: "string",
      description: "The name of the param, ?{name}={value}"
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
