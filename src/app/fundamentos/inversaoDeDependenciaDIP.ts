import Carro from '../../core/fundamentos/Carro.interface';
import Ferrari from '../../core/fundamentos/Ferrari';
import Fusca from '../../core/fundamentos/Fusca';
import corrida from '../../core/fundamentos/corrida';
import TerminalUtil from '../util/TerminalUtil';

export default async function inversaoDeDependenciaDIP() {
    TerminalUtil.titulo('Inversão De Dependencia DIP')

    const [tipo] = await TerminalUtil.selecao(
        'Tipo de Carro',
        ['Fusca', 'Ferrari']
    )

    const listaCarros = [new Fusca(), new Ferrari()]
    let carro: Carro = listaCarros[tipo]
    corrida(carro)

    await TerminalUtil.esperarEnter()

}