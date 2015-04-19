module.exports = {
  title: "Root Schema",
  description: "This is the backbone of pragmatic.rest",
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  required: [
    "specVersion",
    "baseUri",
    "version",
    "resources"
  ],
  properties: {
    specVersion: {
      type: "string",
      description: "The specification version used - semver format"
    },
    baseUri: {
      type: "string",
      description: "Eg: https://api.example.com/"
    },
    version: {
      type: "string",
      description: "Users api version - the value inserted into the uri"
    },
    resources: {
      type: "array",
      items: require("pr-spec-resource")
    },
    name: {
      type: "string",
      description: "Name your api - example's super duper awsome api"
    },
    description: require("pr-spec-description"),
    license: {
      type: "string",
      description: "Does the api come with a license?"
    },
    auth: {
      type: "string",
      description: "Describe the authenication method used"
    }
  }
}
