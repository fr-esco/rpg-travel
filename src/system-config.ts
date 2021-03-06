/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'js-quantities': 'vendor/js-quantities'
};

/** User packages configuration. */
const packages: any = {
  'vendor/js-quantities': {
    format: 'global',
    exports: 'Qty',
    main: 'src/quantities.js'
  }
};

/** Material packages configuration. */
const materialPkgs: string[] = [
  'button',
  'card',
  'checkbox',
  'core',
  'grid-list',
  'icon',
  'input',
  'list',
  'radio',
  'sidenav',
  'toolbar'
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = { main: `${pkg}.js` };
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/+speed',
  'app/+speed/speed-input',
  'app/+speed/speed-output',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
