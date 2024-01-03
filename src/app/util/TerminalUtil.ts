import { terminal } from 'terminal-kit'

export default class TerminalUtil {
    static titulo(texto: string): void {
        terminal.clear()
        terminal.magenta(`${texto}\n`)
        terminal.magenta(`-`.repeat(texto.length) + `\n`)
    }

    static limpar(): void {
        terminal.clear()
    }

    static exibirChaveValor(chave: string, valor: any) {
        terminal.yellow(chave).green(valor).white('\n')
    }

    static async menu(opcoes: string[]): Promise<[number, string]> {
        const resposta = await terminal.singleColumnMenu(opcoes).promise

        return [
            resposta.selectedIndex,
            resposta.selectedText
        ]
    }

    static async confirmacao(texto: string): Promise<boolean> {
        terminal.yellow(`\n${texto}`)
        const responsta = await terminal.singleColumnMenu([
            'Sim',
            'Não'
        ]).promise

        return responsta.selectedIndex === 0
    }

    static async selecao(texto: string, opcao: string[]): Promise<[number, string]> {
        terminal.yellow(`\n${texto}`)
        const resposta = await terminal.singleColumnMenu(opcao).promise

        return [
            resposta.selectedIndex,
            resposta.selectedText
        ]
    }
}
