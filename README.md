<a href="https://codeclimate.com/github/Jorah-M/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/b2c278eac2d81d66aeb1/maintainability" /></a>
![NodeProject CI](https://github.com/Jorah-M/frontend-project-lvl2/workflows/NodeProject%20CI/badge.svg)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b2c278eac2d81d66aeb1/test_coverage)](https://codeclimate.com/github/Jorah-M/frontend-project-lvl2/test_coverage)

<h1>Второй проект Hexlet - вычислитель отличий.</h1>

Его задача - провести сравнение двух файлов определенного формата и вывести их различия в удобной форме.

<b>Поддерживаемые форматы файлов для сравнения:</b>
 - json
 - yml
 - ini

<b>Поддерживаемые форматы вывода:</b>
 - stylish (tree format)
 - plain
 - json
 
<b>Запуск вычислителя:</b>

<pre>
  <code>
$ gendiff [options] filepath1 filepath2
  </code>
</pre>

<b>Доступные опции:</b>
<pre>
  <code>
-V, --version        output the version number
-f, --format [type]  output format (default: stylish)
-h, --help           display help for command
  </code>
</pre>

Пример работы вычислителя по default (без указания формата):
<a href="https://asciinema.org/a/336526" target="_blank"><img src="https://asciinema.org/a/336526.svg" /></a>

Пример работы вычислителя с выводом в формате json:
<a href="https://asciinema.org/a/336527" target="_blank"><img src="https://asciinema.org/a/336527.svg" /></a>

Пример работы вычислителя с выводом в формате plain:
<a href="https://asciinema.org/a/336529" target="_blank"><img src="https://asciinema.org/a/336529.svg" /></a>

Пример работы вычислителя с выводом в формате stylish:
<a href="https://asciinema.org/a/336531" target="_blank"><img src="https://asciinema.org/a/336531.svg" /></a>