import { suma, multiplica } from './controller.js'
import chalk from 'chalk'

const total = multiplica(suma(1, 2), suma(4, 5))
console.log(chalk.green(total))