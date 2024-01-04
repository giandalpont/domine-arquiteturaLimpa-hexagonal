import { terminal } from 'terminal-kit'
import Carro from './Carro.interface'

export default function corrida(carro: Carro) {

    Array.from({ length: 10 }).forEach(_ => {
        carro.acelerar()
        terminal.red(`\n Velocidade: ${carro.velocidadeAtual}`)
    })

    Array.from({ length: 10 }).forEach(_ => {
        carro.frear()
        terminal.red(`\n Velocidade: ${carro.velocidadeAtual}`)
    })
}