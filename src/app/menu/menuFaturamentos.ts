import polimorfismo from '../fundamentos/polimorfismo';
import TerminalUtil from '../util/TerminalUtil';

export default async function menuFundamentos() {
    TerminalUtil.titulo('Fundamentos');

    const [indece] = await TerminalUtil.menu([
        '1. Polimorfismo',
        'Voltar',
    ]);

    switch (indece) {
        case 0:
            await polimorfismo()
            break
        case 1: return
    }

    await menuFundamentos()
}