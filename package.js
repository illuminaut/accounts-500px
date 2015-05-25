Package.describe({
  name: 'illuminaut:accounts-500px',
  version: '0.1.1',
  summary: 'Login service for 500px accounts',
  git: 'https://github.com/illuminaut/accounts-500px.git',
  documentation: 'README.md'
});
Package.onUse(function(api) {
  
  api.versionsFrom('1.0.3.1');
  
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  
  api.use('illuminaut:500px@0.1.1', ['client', 'server']);
  
  api.addFiles("500px.js");
});