export const JAVASCRIPT_SOURCE = `{
	title: {
		type: 'String',
		trim: true,
		index: true,
		required: true
	},
	year: {
		type: 'Number',
		max: 2012,
		validate: 'validateBookYear'
	},
	author: {
		type: 'ObjectId',
		ref: 'Author',
		index: true,
		required: true
	}
}`;

export const JSON_SOURCE = `{
  "title": {
    "type": "String",
    "trim": true,
    "index": true,
    "required": true
  },
  "year": {
    "type": "Number",
    "max": 2012,
    "validate": "validateBookYear"
  },
  "author": {
    "type": "ObjectId",
    "ref": "Author",
    "index": true,
    "required": true
  }
}`;
