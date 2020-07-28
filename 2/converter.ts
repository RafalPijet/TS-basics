import {Exchanger} from "./Exchanger";

const initEventListener = () => {
    const btn: HTMLElement | null = document.getElementById("exchange");
    const ex: HTMLElement | null = document.getElementById("result");

    const getInputValue = (id: string): number => {
        const element: HTMLElement | null = document.getElementById(id);

        if (element !== null && element instanceof HTMLInputElement) {
            return element.valueAsNumber;
        } else {
            throw new Error("HTML element is null or wrong type")
        }
    }

    if (btn !== null) {

        if (btn instanceof HTMLButtonElement) {
            btn.addEventListener<"click">("click", (event: MouseEvent) => {
                event.stopPropagation();
                event.preventDefault();
                const exchanger = new Exchanger(getInputValue('gold'), getInputValue('silver'), getInputValue('copper'));

                if (ex !== null) {
                    ex.innerText = exchanger.toCopper().toString();
                } else {
                    throw new Error("Element to show not found");
                }
            })
        } else {
            throw new Error("HTML element for exchange is not a button");
        }
    } else {
        throw new Error("Button for exchange not found");
    }
};

initEventListener();
