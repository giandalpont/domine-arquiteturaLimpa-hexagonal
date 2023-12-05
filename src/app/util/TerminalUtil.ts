import { terminal } from 'terminal-kit'

export default class TerminalUtil {
    static titulo(testo: string): void {
        terminal.clear()
        terminal.magenta(`${testo}\n`)
        terminal.magenta(`-`.repeat(testo.length) + `\n`)
    }
}
