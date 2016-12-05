/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/',
      //'application/*': './js/mobile/dist/*'    
      'app/*': './*'   
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      // Correção erro: 'zone.js:1382 GET http://localhost:3000/traceur 404 (Not Found)'
      //'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      
      // Original (Socket.io-client versão 1.6)
      //'socket.io-client': 'npm:socket.io-client/socket.io.js'
      // Socket.io-client Versão 1.7
      'socket.io-client': 'npm:socket.io-client/dist/socket.io.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        //main: './compile/main.js',  //AS alterei qd deixei de compilar p '/compile'
        main: 'main.js',   
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      /*},      // Correção erro: 'zone.js:1382 GET http://localhost:3000/traceur 404 (Not Found)'
        'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'*/
      }
    }
  });
})(this);

