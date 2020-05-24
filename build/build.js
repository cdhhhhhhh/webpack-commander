const ora = require('ora');
const chalk = require('chalk');

const config = require('./base');
const webpack = require('webpack');
const spinner = ora('开始构建项目...');
spinner.start();

//命令行设置
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');
program
 .option('-e, --entry <type>', 'entry path','../src/main.js')
 .option('-d, --dev ', 'mode dev')
 .option('-p, --production ', 'mode production')

program.parse(process.argv);

let commanderOptions = program.opts();

webpack(config, function(err, stats) {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n'
  );

  if (stats.hasErrors()) {
    console.log(chalk.red('构建失败\n'));
    process.exit(1);
  }

  console.log(chalk.cyan('build完成\n'));
});

