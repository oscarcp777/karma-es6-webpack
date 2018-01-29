module.exports = function(config) {
    config.set({
        browsers: ['jsdom'],
        files: [
            { pattern: 'test-context.js', watched: false }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test-context.js': ['webpack']
        },
        webpack: {
            module: {
                rules: [
                    {
                      test: /\.js$/,
                      exclude: /(node_modules)/,
                      use: {
                        loader: 'babel-loader'
                      }
                    }
                  ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['dots'],
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true,
        concurrency: Infinity
    });
};
