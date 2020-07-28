# hexo-abbrlink2
[![npm](https://img.shields.io/npm/dm/hexo-abbrlink2.svg)](https://www.npmjs.com/package/hexo-abbrlink2)
[![npm](https://img.shields.io/npm/dy/hexo-abbrlink2.svg)](https://www.npmjs.com/package/hexo-abbrlink2)
[![npm](https://img.shields.io/npm/dt/hexo-abbrlink2.svg)](https://www.npmjs.com/package/hexo-abbrlink2)

A [Hexo plugin](https://hexo.io/plugins/) to generate static post link based on post titles.

## How to install

Add plugin to Hexo:

```
npm install hexo-abbrlink2 --save
```

Modify permalink in config.yml file:

```
permalink: posts/:abbrlink/
```

optional settings:

```
abbrlink:
  start: 1000 # the first id, default 0
```

## Sample

The generated link will look like the following:

```
https://post.zz173.com/posts/1.html
https://post.zz173.com/posts/2.html
https://post.zz173.com/posts/3.html
```


## Sponsor
The project is develop by [JetBrains Ide](https://www.jetbrains.com/?from=puck)

[![](https://www.jetbrains.com/company/brand/img/logo1.svg)](https://www.jetbrains.com/?from=puck)
