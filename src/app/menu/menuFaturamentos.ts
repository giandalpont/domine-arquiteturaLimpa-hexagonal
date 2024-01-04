import inversaoDeDependenciaDIP from '../fundamentos/inversaoDeDependenciaDIP';
import polimorfismo from '../fundamentos/polimorfismo';
import TerminalUtil from '../util/TerminalUtil';

export default async function menuFundamentos() {
    TerminalUtil.titulo('Fundamentos');

    const [indece] = await TerminalUtil.menu([
        '1. Polimorfismo',
        '2. DIP',
        'Voltar',
    ]);

    switch (indece) {
        case 0:
            await polimorfismo()
            break
        case 1:
            await inversaoDeDependenciaDIP()
            break
        default:
            return
    }

    await menuFundamentos()
}