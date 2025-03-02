import chalk from 'chalk';
import { Command } from './command.interface.js';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
      Программа для подготовки данных для REST API сервера.
      Пример:
          cli.js --<${chalk.blue('command')}> [${chalk.magenta('--arguments')}]
      Команды:
      ${chalk.magenta('--version')}:                   ${chalk.green('# выводит номер версии')}
      ${chalk.magenta('--help')}:                      ${chalk.green('# печатает этот текст')}
      ${chalk.magenta('--import')} <path>:             ${chalk.green('# импортирует данные из TSV')}
      ${chalk.magenta('--generate')} <n> <path> <url>  ${chalk.green('# генерирует произвольное количество тестовых данных')}
  `);
  }
}
