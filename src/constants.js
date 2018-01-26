const DEFAULT_CSS = require('./fix-templates/init.txt');
const DEFAULT_JS = require('./fix-templates/p5-minimum.txt');

export const P5JS_CDN_URL = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js';
export const DAT_GUI = 'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.5/dat.gui.min.js';
const DEFAULT_TITLE = 'P5 Launchpad Basic Template';
const DEFAULT_DESCRIPTION = 'METU Generative Design 101 Course.';

export const DEFAULT_CODEPEN_SETTINGS = {
  title              : DEFAULT_TITLE,
  description        : DEFAULT_DESCRIPTION,
  html               : '',
  html_pre_processor : 'none',
  css                : DEFAULT_CSS,
  css_pre_processor  : 'none',
  css_starter        : 'neither',
  css_prefix_free    : false,
  js                 : DEFAULT_JS,
  js_pre_processor   : 'none',
  js_modernizr       : false,
  js_library         : '',
  html_classes       : '',
  css_external       : '',
  js_external        : P5JS_CDN_URL
};
