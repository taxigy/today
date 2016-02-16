#!/usr/bin/env node

const fs = require('fs');
const _ = require('lodash');
const argv = require('minimist')(_.slice(process.argv, 2));
const clean = require('remove-markdown');

if (_.size(_.flatten(_.toArray(argv))) === 0) {
  const usage = fs.readFileSync(`${__dirname}/../USAGE.md`, {
    encoding: 'utf8',
    flag: 'r'
  });

  console.log(clean(usage));
} else {
  console.log(argv);
  // TODO: open and parse JSON where the data is stored
  // TODO: crate a new day or modify existing, add values
  // TODO: overwrite the file with new JSON data
  // TODO: remove "dones" with "today --remove done1 done2"
  // TODO: make it look nice with React.renderToString
}

process.exit(0);
