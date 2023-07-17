import { toUpperCase } from "../app/Utils";

describe('Utils test suite', () => {
    it('should return uppercase', () => {
        const result = toUpperCase('hello world');
        expect(result).toBe('HELLO WORLD');
    });
});