const ghpages = require('gh-pages');

ghpages.publish('build', {
  src: [
    '**/*',
    '!**/*.map',
  ],
  branch: 'gh-pages',
  repo: 'https://github.com/hahnlee/money-counter.git',
  dotfiles: true,
});
