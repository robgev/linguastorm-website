import { parse, stringify } from 'query-string';

export const searchToQuery = (search) => parse(search);
export const queryToSearch = (query) => stringify(query);
