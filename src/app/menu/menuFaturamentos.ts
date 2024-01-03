import { terminal } from 'terminal-kit';
import TerminalUtil from '../util/TerminalUtil';

export default async function menuFundamentos() {
    TerminalUtil.titulo('Fundamentos');

    const resposta = await terminal.singleColumnMenu([
        '1. Polimorfirsmoking',
        'Voltar',
    ]).promise;

    switch (resposta.selectedIndex) {
        case 1: return
    }

    await menuFundamentos()
}