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

export const TYPESCRIPT_SOURCE = `interface RootObject {
    title: Title;
    year: Year;
    author: Author;
}
interface Title {
    type: string;
    trim: boolean;
    index: boolean;
    required: boolean;
}
interface Year {
    type: string;
    max: number;
    validate: string;
}
interface Author {
    type: string;
    ref: string;
    index: boolean;
    required: boolean;
}
`;
