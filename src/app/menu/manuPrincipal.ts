import { terminal } from 'terminal-kit';
import TerminalUtil from '../util/TerminalUtil';

export default async function menuPrincipal() {
    TerminalUtil.titulo('Menu Principal')

    const responstaMenu = await terminal.singleColumnMenu([
        '1 - Fundamentos',
        'Sair'
    ]).promise;

    switch (responstaMenu.selectedIndex) {
        case 1: process.exit(0);
    }

    menuPrincipal();
}