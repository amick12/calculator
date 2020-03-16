let rowIdArray = [];

class Model {
    constructor() {
        this.view = null;
        this.store = '';
        this.numberOne = null;
        this.numberTwo = null;
    }


    setView(view) {
        this.view = view;
    }

    clear() {
        this.storage = '';
        this.numberOne = '';
        this.numberTwo = '';
    }
}

class Controller {
    constructor(model) {
        this.model = model
    };

    clickHandler(e) {
        this.model.updateVal(e);
    }
}


class View {
    constructor(controller) {
        this.controller = controller;
    }

    updateDisplay() {

    }

    newElement(tag, id, classList, textContent, type) {
        let element = document.createElement(tag)
        element.classList = classList;
        element.id = id;
        element.innerHTML = textContent;
        element.type = type;
        return element
    }

    buildUi() {

        let container = this.newElement('div', 'container', 'align-self-center bg-dark border border-dark container container-fluid d-flex flex-column mt-5', '', '');
        document.body.appendChild(container);

        let hTwo = this.newElement('h2', '', 'mt-3 text-center text-light', 'classicCalc', '');
        container.appendChild(hTwo);

        let input = this.newElement('input', 'input', 'align-self-center border-secondary font-weight-bolder form-control-lg h-75 shadow-lg text-black-50 text-monospace text-right w-100', '', '');
        container.appendChild(input);

        document.getElementById('input').setAttribute('readonly', 'readonly');
        document.getElementById('input').setAttribute('value', '0');

        for (let i = 1; i <= 5; i++) {
            let row = this.newElement('div', 'row' + i, 'row', '', '')
            container.appendChild(row);
            rowIdArray.push('row' + i);
        }

        let column1 = this.newElement('div', 'col1', 'col d-flex justify-content-between mt-2', '', '');
        row1.appendChild(column1);

        for (let i = 1; i <= 4; i++) {
            let button = this.newElement('button', '', 'button btn btn-lg btn-primary button mr-2 rounded-circle text-center', '', '', '');
            column1.appendChild(button);
        }

        let column2 = this.newElement('div', 'col2', 'col d-flex justify-content-between mt-2', '', '');
        row2.appendChild(column2);

        for (let i = 1; i <= 4; i++) {
            let button = this.newElement('button', '', 'button btn btn-lg btn-primary button mr-2 rounded-circle text-center', '', '', '');
            column2.appendChild(button);
        }

        let column3 = this.newElement('div', 'col3', 'col d-flex justify-content-between mt-2', '', '');
        row3.appendChild(column3);

        for (let i = 1; i <= 4; i++) {
            let button = this.newElement('button', '', 'button btn btn-lg btn-primary button mr-2 rounded-circle text-center', '', '', '');
            column3.appendChild(button);
        }

        let column4 = this.newElement('div', 'col4', 'col d-flex justify-content-between mt-2', '', '');
        row4.appendChild(column4);

        for (let i = 1; i <= 4; i++) {
            let button = this.newElement('button', '', 'button btn btn-lg btn-primary button mr-2 rounded-circle text-center', '', '', '');
            column4.appendChild(button);
        }

        let column5 = this.newElement('div', 'col5', 'col d-flex justify-content-between mt-2', '', '');
        row5.appendChild(column5);

        for (let i = 1; i <= 4; i++) {
            let button = this.newElement('button', '', 'button btn btn-lg btn-primary button mr-2 rounded-circle mb-3 text-center', '', '', '');
            column5.appendChild(button);
        }

    }
}

let model = new Model();
let controller = new Controller(model);
let view = new View(controller);
model.setView(view);

view.buildUi();
