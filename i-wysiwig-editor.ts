import { WysiwigDataType } from "./wysiwig-model";

interface IWysiwigEditor {
    getContent(): WysiwigDataType[];
    insertImage(url: string, index?: number): void;
    insertText(text: string): void;
}

export default IWysiwigEditor;
