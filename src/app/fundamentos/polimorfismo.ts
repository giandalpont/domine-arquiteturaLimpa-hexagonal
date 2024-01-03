import Carro from '../../core/fundamentos/Carro.interface';
import Ferrari from '../../core/fundamentos/Ferrari';
import Fusca from '../../core/fundamentos/Fusca';
import TerminalUtil from '../util/TerminalUtil';

export default async function polimorfismo() {
    TerminalUtil.titulo("==== POLIMORFISMO ====");

    const [tipoCarro] = await TerminalUtil.selecao('Tipo de carro?', ['Ferrari', 'Funca'])

    const carro: Carro = tipoCarro == 0 ? new Ferrari() : new Fusca()


    while (true) {
        TerminalUtil.limpar()

        TerminalUtil.exibirChaveValor('Velocidade Máxim: ', `${carro.velocidadeMaxima} Km/h`)
        TerminalUtil.exibirChaveValor('Velocidade Atual: ', `${carro.velocidadeAtual} Km/h`)

        const [opcao] = await TerminalUtil.selecao('Qual opção?', ['Acelerar', 'Frear'])
        opcao === 0 ? carro.acelerar() : carro.frear()


        const continuar = await TerminalUtil.confirmacao('Deseja continuar?')
        if (!continuar) return
    }

}
