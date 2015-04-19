module.exports = {
  title: "Model Definition",
  description: "How to effectively describe a model",
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    schema: {
      type: "string",
      description: "A Link to the model schema"
    },
    example: {
      type: "object",
      description: "JSON blob of the models structure and properties etc"
    }
  }
}