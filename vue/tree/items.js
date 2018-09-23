var jsf = require('json-schema-faker')

var schema = {
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
    },
    "items": {
      "type": "array",
      "items": {
        $ref: '#'
      },
      minItems: 2
    },
  },
  "required": ["id", "items"]
}

jsf.resolve(schema).then(function(sample) {
  console.log(JSON.stringify(sample))
})