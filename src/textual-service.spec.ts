import { TextualService } from "./textual-service";

describe('TextualService', () => {

    it('should return word count for the given string', () => {
        let textualService = new TextualService();
        let textStr = textualService.countWords('Sachin Kiranti');
        expect(textStr).toBe(2);
    })

    it('should return character count for the given string', () => {
        let textualService = new TextualService();
        let textStr = textualService.countChars('Sachin Kiranti');
        expect(textStr).toBe(14);
    })

    it('should append text to given string', () => {
        let textualService = new TextualService();
        let textStr = textualService.append('Sachin Kiranti', 'Rai');
        expect(textStr).toBe('Sachin KirantiRai');
    })

    it('should prepend text to given string', () => {
        let textualService = new TextualService();
        let textStr = textualService.prepend('Sachin Kiranti', 'Rai');
        expect(textStr).toBe('RaiSachin Kiranti');
    })

})