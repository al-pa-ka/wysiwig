import IWysiwigEditor from "./i-wysiwig-editor";

interface KeyDownStrategy {
    proccess(editor: IWysiwigEditor, event: KeyboardEvent): void;
}

class EnterKeyDownStrategy implements KeyDownStrategy {
    proccess(editor: IWysiwigEditor, event: KeyboardEvent): void {
        event.preventDefault();
    }
}

class DefaultKeyDownStrategy implements KeyDownStrategy {
    proccess(editor: IWysiwigEditor, event: KeyboardEvent): void {}
}
