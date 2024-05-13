import IWysiwigEditor from "./i-wysiwig-editor";

interface IPasteStrategy {
    proccess(editor: IWysiwigEditor): void;
}

class DefaultImagePaste implements IPasteStrategy {
    image: File;
    constructor(image: File) {
        this.image = image;
    }
    proccess(editor: IWysiwigEditor): void {
        const url = URL.createObjectURL(this.image);
        editor.insertImage(url);
    }
}

class ImageJpeg extends DefaultImagePaste {}
class ImagePng extends DefaultImagePaste {}
class ImageGif extends DefaultImagePaste {}
class PlainText implements IPasteStrategy {
    text: string;
    constructor(text: string) {
        this.text = text;
    }
    proccess(editor: IWysiwigEditor): void {
        editor.insertText(this.text);
    }
}
class Empty implements IPasteStrategy {
    proccess(editor: IWysiwigEditor): void {
        return;
    }
}
//image/jpeg, image/png or image/gif

class PasteStrategyFactory {
    getPasteStrategy(clipboardData: DataTransfer): IPasteStrategy {
        if (clipboardData.getData("text/plain")) {
            console.log(`getPasteStrategy plain/text`);
            return new PlainText(clipboardData.getData("text/plain"));
        } else if (clipboardData.files && clipboardData.files.item(0)) {
            const file = clipboardData.files.item(0);
            if (file.type == "image/png") {
                console.log(`getPasteStrategy image/png`);
                return new ImagePng(file);
            } else if (file.type == "image/gif") {
                console.log(`getPasteStrategy image/gif`);
                return new ImageGif(file);
            } else if (file.type == "image/jpeg") {
                console.log(`getPasteStrategy image/jpeg`);
                return new ImageJpeg(file);
            }
        } else {
            console.log(`getPasteStrategy empty`);
            return new Empty();
        }
    }
}

export { IPasteStrategy, PasteStrategyFactory };
