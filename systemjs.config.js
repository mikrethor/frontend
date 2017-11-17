System.config({
  transpiler: 'typescript',
  typescriptOptions: { emitDecoratorMetadata: true },
  map: {
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    '@angular2-material': 'node_modules/@angular2-material'
  },
  paths: {
    'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
  },
  meta: {
    '@angular/*': { 'format': 'cjs' }
  },
  packages: {
    'app': { main: 'main', defaultExtension: 'ts' },
    'rxjs': { main: 'Rx' },
    '@angular/core': { main: 'core.umd.min.js' },
    '@angular/common': { main: 'common.umd.min.js' },
    '@angular/compiler': { main: 'compiler.umd.min.js' },
    '@angular/router': { main: 'router.umd.min.js' },
    '@angular/platform-browser': { main: 'platform-browser.umd.min.js' },
    '@angular/platform-browser-dynamic': { main: 'platform-browser-dynamic.umd.min.js' },
    '@angular/http': { main: 'http.umd.min.js' },
    '@angular/forms': { main: 'forms.umd.min.js' },
    '@angular2-material/core': { main: 'core.umd.js' },
    '@angular2-material/menu': { main: 'menu.umd.js' },
    '@angular2-material/icon': { main: 'icon.umd.js' },
    "@angular2-material/toolbar": { main: 'toolbar.umd.js' },
    "@angular2-material/button": { main: 'button.umd.js' },
    "@angular2-material/list": { main: 'list.umd.js' },
    "@angular2-material/dialog": { main: 'dialog.umd.js' },
    "@angular2-material/input": { main: 'input.umd.js' },
    "@angular2-material/radio": { main: 'radio.umd.js' },
    
  }
});