# express-ejs-bootstrap template :
- repos: boot-ejs-sample

## overview :
- generated a site by express generator for ejs template engine,
- and apply a simple sidemenu-design of bootstrap 4,
- and use express-ejs-layouts for design layout
- use config.js to get "APP_NAME" form `config/default`.
- use express-session.js to share uuid generated between pages.

## installation :
```
PS G:\workspace> git clone https://github.com/sakai-memore/boot-ejs-sample
Cloning into 'boot-tjs-sample'...
remote: Enumerating objects: 61, done.
remote: Counting objects: 100% (61/61), done.
remote: Compressing objects: 100% (41/41), done.

Unpacking objects: 100% (61/61), done.
PS G:\workspace> cd .\boot-ejs-sample\
PS G:\workspace\boot-ejs-sample> npm install
added 54 packages from 39 contributors and audited 142 packages in 4.2s
found 0 vulnerabilities
```

## execution :
```
PS G:\workspace\boot-ejs-sample> npm start

> boot-sample@0.0.1 start
> node ./bin/www

APP_NAME : boot-sample
MYUUID : 51d018b0-5c89-11ec-bf0e-d5b2ffed6e1a
```
## sources
```
PS G:\workspace\boot-ejs-sample> tree
Folder PATH listing for volume New Volume
Volume serial number is A0B0-51B7
G:.
├───bin
├───config
├───docs
├───public
│   ├───bootstrap-icons
│   │   └───font
│   │       └───fonts
│   ├───css
│   └───vendor
│       ├───bootstrap
│       │   ├───css
│       │   └───js
│       └───jquery
├───routes
└───views
    └───includes

``` 

## package.json :
```
{
  "name": "boot-sample",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "^1.19.0",
    "bootstrap-icons": "^1.7.2",
    "config": "^3.3.6",
    "csurf": "^1.11.0",
    "debug": "~2.6.9",
    "ejs": "~2.6.1",
    "express": "~4.16.1",
    "express-ejs-layouts": "^2.5.0",
    "express-session": "^1.17.2",
    "express-state": "^2.0.0",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "uuid": "^8.3.2"
  }
}
````
## screenshot :
![screenshot](https://gyazo.com/cb5d79c403680b309c2a67de063045e9.png)

## reference :
- startbootstrap.com
  - https://startbootstrap.com/previews/simple-sidebar/
