import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { PasteStrategyFactory, IPasteStrategy } from "./paste-strategy";

@customElement("wysiwig-editor")
export class WysiwigEditor extends LitElement {
    static styles = css`
        .wysiwig__buttons-panel {
            display: flex;
            width: 100%;
            flex-direction: row;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            border: 1px solid lightgray;
            box-sizing: border-box;
        }
        .wysiwig__editor {
            min-height: 100px;
            border: 1px solid lightgray;
            width: 100%;
            box-sizing: border-box;
            padding: 10px;
            overflow: hidden;
            max-width: 100%;
        }
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            list-style-type: none;
            border: 1px solid gray;
            border-radius: 10px;
            width: 30px;
            aspect-ratio: 1 / 1;
            cursor: pointer;
            user-select: none;
            transition: 0.5s;
        }
        .wysiwig__text-options {
            display: flex;
            flex-direction: row;
            gap: 10px;
        }
        li:hover {
            transition: 0.5s;
            background-color: lightgray;
        }
        * {
            font-family: "Roboto";
        }
    `;

    @query("[contenteditable=true]")
    private textarea: HTMLDivElement;

    getContent() {
        return this.textarea.textContent;
    }

    _onPaste(e: ClipboardEvent) {
        //image/jpeg, image/png or image/gif

        const pasteStrategyFactory = new PasteStrategyFactory();
        const pasteStrategy = pasteStrategyFactory.getPasteStrategy(e.clipboardData);
        pasteStrategy
        e.preventDefault();
        // let text = e.clipboardData.getData("text/plain");

        // document.execCommand("insertHtml", false, text);
    }

    _onKeydown(e: KeyboardEvent) {
        console.log("enter");
        console.log(this.getContent());
    }

    render(): TemplateResult {
        //
        return html`
            <div class="wysiwig__buttons-panel">
                <ul class="wysiwig__text-options">
                    <li title="Курсив"><i>К</i></li>
                    <li title="Жирный"><b>Ж</b></li>
                    <li title="Заголовок">H</li>
                </ul>
                <ul></ul>
            </div>
            <div
                contenteditable="true"
                @paste=${this._onPaste}
                @keydown=${this._onKeydown}
                class="wysiwig__editor"
            ></div>
        `;
    }
}
