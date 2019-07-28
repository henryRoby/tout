# grunt-shrinkwrap

> Grunt task for shrinkwrapping your project's dependencies via npm shrinkwrap

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-shrinkwrap --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-shrinkwrap');
```

## The "shrinkwrap" task

### Overview
In your project's Gruntfile, the `shrinkwrap` task is available to use.

You can run `grunt shrinkwrap` standalone
Or add it to an existing task: `grunt.registerTask('test', ['clean', 'shrinkwrap']);`

The `shrinkwrap` task has the following configuration options.

```js
shrinkwrap: {
  dev: true, // whether the shrinkwrap dev dependencies. Defaults to false.
  dedupe: true // whether to run dedupe before shrinkwrapping.  Defaults to false.
  prune: true // whether to run prune before deduping. Defaults to false.
}
```

## Release History
0.1.1 - First release.
