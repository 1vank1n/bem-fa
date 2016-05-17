var techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        stylus: require('enb-stylus/techs/stylus'),

        // bemhtml
        bemhtml: require('enb-bemxjst/techs/bemhtml'),
        htmlFromBemjson: require('enb-bemxjst/techs/bemjson-to-html')
    },
    enbBemTechs = require('enb-bem-techs'),
    levels = [
        {path: 'vendors/bem-core/common.blocks', check: false},
        {path: 'vendors/bem-core/desktop.blocks', check: false},
        'common.blocks',
        'desktop.blocks'
    ];

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, {levels: levels}],
            [techs.fileProvider, {target: '?.bemjson.js'}],
            [enbBemTechs.bemjsonToBemdecl],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.stylus, {
                autoprefixer: true,
                target: '?.css',
                browsers: require('../.cssautoprefixer')
            }],

            // bemhtml
            [techs.bemhtml, {devMode: process.env.BEMHTML_ENV === 'development'}],
            [techs.htmlFromBemjson],

            // borschik
            [techs.borschik, {
                sourceTarget: '?.css',
                destTarget: '_?.css',
                tech: 'cleancss',
                freeze: true,
                minify: isProd
            }]
        ]);

        nodeConfig.addTargets(['?.html', '_?.css']);
    });

    config.includeConfig('enb-bem-tmpl-specs');

    config.module('enb-bem-tmpl-specs')
        .createConfigurator('test:templates', {
            coverage: {
                engines: ['bemhtml'],
                reportDirectory: 'tests/coverage/template',
                exclude: ['**/node_modules/**', '**/libs/**'],
                reporters: ['lcov']
            }
        })
        .configure({
            destPath: 'tests/templates',
            levels: ['common.blocks'],
            sourceLevels: levels,
            engines: {
                bemhtml: {
                    tech: 'enb-bemxjst/techs/bemhtml'
                },
                bh: {
                    tech: 'enb-bh/techs/bh-commonjs',
                    options: {
                        jsAttrName: 'data-bem',
                        jsAttrScheme: 'json'
                    }
                }
            }
        });
};
