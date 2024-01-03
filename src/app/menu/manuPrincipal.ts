import { terminal } from 'terminal-kit';
import TerminalUtil from '../util/TerminalUtil';
import menuFundamentos from './menuFaturamentos';

export default async function menuPrincipal() {
    TerminalUtil.titulo('Menu Principal')

    const responstaMenu = await terminal.singleColumnMenu([
        '1 - Fundamentos',
        'Sair'
    ]).promise;

    switch (responstaMenu.selectedIndex) {
        case 0: await menuFundamentos(); break;
        case 1: process.exit(0);
    }

    menuPrincipal();
}