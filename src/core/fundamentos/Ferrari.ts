import Carro from './Carro.interface';

export default class Ferrari implements Carro {
    constructor(
        readonly velocidadeMaxima: number = 320,
        private _velocidadeAtual: number = 0
    ) { }

    acelerar(): void {
        this._velocidadeAtual = Math.min(
            this._velocidadeAtual + 15,
            this.velocidadeMaxima
        )
    }
    frear(): void {
        this._velocidadeAtual = Math.max(
            this._velocidadeAtual - 15,
            0
        )
    }

    get velocidadeAtual() {
        return this._velocidadeAtual
    }
}