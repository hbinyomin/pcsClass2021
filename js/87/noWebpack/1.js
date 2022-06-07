import theDefaultExport from './2.js';
theDefaultExport();

setTimeout(() => {
  import('./3.js').then(({ default: theDefaultExport }) => {
    theDefaultExport();
  });
}, 5000);