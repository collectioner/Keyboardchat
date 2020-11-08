const webpack = require('webpack');
const path = require('path');
const MiniSCCExtractPlugin = require('mini-css-extract-plugin');

const isDev = (/development/).test(process.env.NODE_ENV);

const outputPath = path.resolve(__dirname, '../KeyBoardChat.Web/wwwroot');
const resultOutputPath = path.resolve(outputPath, './build');


const generateStyleLoader = () => [
    MiniSCCExtractPlugin.loader,
    {
        loader: 'css-loader',
        options: {
            modules: false,
            importLoaders: 2,
            sourceMap: true
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: true
        }
    },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
            sassOptions: {
                includePaths: ['source']
            }
        }
    }
];

const getRules = () => [
    {
        test: /\.js?$/,
        loader: 'babel-loader'
    }, {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: false,
                    instance: 'client-ts'
                }
            }
        ]
    }, {
        test: /\.s?css$/,
        use: generateStyleLoader()
    }
];

function generatePlugins() {
    const plugins = [
        new MiniSCCExtractPlugin({
            filename: 'bundle.css'
        })
    ];

    if (!isDev) {
        plugins.push(
            new webpack.IgnorePlugin({
                resourceRegExp: /fake\.json$/
            })
        );
    }

    return plugins;
}

function generateConfig() {
    return {
        resolve: {
            modules: ['source', 'node_modules'],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                shared: path.resolve(__dirname, './source/shared/'),
                fake_data: path.resolve(__dirname, './fake_data/'),
                styles: path.resolve(__dirname, './source/styles/'),
                logic: path.resolve(__dirname, './source/logic/'),
                components: path.resolve(__dirname, './source/components/'),
                layouts: path.resolve(__dirname, './source/layouts/')
            }
        },
        mode: isDev ? 'development' : 'production',
        entry: path.resolve(__dirname, './source/index.tsx'),
        module: {
            rules: getRules()
        },
        plugins: generatePlugins(),
        devtool: 'eval-source-map',
        devServer: {
            // open: s,
            hot: true,
            contentBase: outputPath,
            port: 3000,
            proxy: {
                '/': 'http://localhost:5000'
            }
        },

        output: {
            path: resultOutputPath,
            filename: 'bundle.js'
        }
    };
}

module.exports = generateConfig();
