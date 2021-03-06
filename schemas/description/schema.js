module.exports = {
  title: "Description schema",
  description: "A common description property for other schemas",
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    short: {
      type: "string",
      default : "",
      description: "A short to the point description"
    },
    long: {
      type: "string",
      default: "",
      description: "Describe in more detail here"
    }
  }
};