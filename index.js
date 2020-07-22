'use strict';
hexo.extend.filter.register('post_permalink', require('./lib/logic'), 1);
