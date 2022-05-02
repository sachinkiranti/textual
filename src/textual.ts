import { TextualService } from './textual-service'

String.prototype.wordCount = function () {
    let textualService = new TextualService();
    return textualService.countWords(this.toString());
}

String.prototype.charCount = function () {
    let textualService = new TextualService();
    return textualService.countChars(this.toString());
}

String.prototype.append = function (text: string) {
    let textualService = new TextualService();
    return textualService.append(this.toString(), text);
}

String.prototype.prepend = function (text: string) {
    let textualService = new TextualService();
    return textualService.prepend(this.toString(), text);
}