export class TextualService {

    countWords(text: string): number {
        return text.replace(/(^\s*)|(\s*$)/gi,"")
            .replace(/[ ]{2,}/gi," ")
            .replace(/\n /,"\n")
            .split(' ')
            .length;
    }

    countChars(text: string): number {
        return text.replace(/(^\s*)|(\s*$)/gi,"")
            .replace(/[ ]{2,}/gi," ")
            .replace(/\n /,"\n")
            .length;
    }

    append(text: string, appendText: string): string {
        return text + appendText;
    }

    prepend(text: string, prependText: string): string {
        return prependText + text;
    }

}