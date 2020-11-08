module.exports = {
    parser: "@typescript-eslint/parser",
    ignorePatterns: [
        "**/*.d.ts",
        "*.config.js",
        ".eslintrc.js",
        "dist"
    ],
    extends: [
        'airbnb',
        "plugin:@typescript-eslint/recommended",
        'plugin:react/recommended'
    ],
    plugins: [
        "putout",
        "react-hooks"
    ],
    rules: {
        'linebreak-style': ['error', 'windows'],
        'comma-dangle': ['error', 'never'],
        'indent': ['error', 4, { SwitchCase: 1 }],
        'max-len': ['warn', 150, {
            ignorePattern: '^import\\s.+\\sfrom\\s.+;$'
        }],
        'newline-before-return': 'error',
        'object-curly-newline': ['error', {
            ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 4, multiline: true, consistent: true }
        }],
        'arrow-parens': ['error', 'as-needed'],
        'import/extensions': ['error', {
            ts: 'never',
            tsx: 'never'
        }],
        'import/no-extraneous-dependencies': 'error',
        'operator-linebreak': ['error', 'before', {
            overrides: {
                '=': 'ignore',
                '&&': 'ignore'
            }
        }],
        'quote-props': ['error', 'consistent-as-needed'],
        'array-element-newline': ['error', 'consistent'],
        'array-bracket-newline': ['error', 'consistent'],
        'no-case-declarations': 'off',
        'class-methods-use-this': 'off',
        'arrow-body-style': 'off',
        'lines-between-class-members': 'off',
        'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
        'no-array-constructor': 'off',
        'no-plusplus': 'off',
        'no-param-reassign': 'off',
        'no-confusing-arrow': 'off',
        'no-mixed-operators': 'off',
        'no-nested-ternary': 'off',
        'no-unused-vars': 'off', // used @typescript-eslint rule
        'semi': 'off', // used @typescript-eslint rule
        'no-use-before-define': 'off', // used @typescript-eslint rule
        'no-undef': 'off',
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        'no-multiple-empty-lines': ['error', { max: 2 }],

        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'react/jsx-fragments': ['error', 'element'],
        'react/static-property-placement': ['error', 'static public field'],
        'react/jsx-curly-newline': ['error', { multiline: 'require', singleline: 'consistent' }],
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/no-danger': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-array-index-key': 'off',
        'react/prefer-stateless-function': 'off',
        'react/sort-comp': 'off',
        'react/jsx-boolean-value': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/no-did-update-set-state': 'off',
        'react/no-unescaped-entities': 'off',
        'react/state-in-constructor': 'off',

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        'jsx-a11y/label-has-associated-control': ['error', {
            controlComponents: ['ValidationInput']
        }],
        'jsx-a11y/anchor-is-valid': 'off',

        'putout/single-property-destructuring': 'error',

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-inferrable-types': ['error', {
            ignoreParameters: true,
            ignoreProperties: true
        }],
        '@typescript-eslint/no-unused-vars': ['error', {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true
        }],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off'
    },

    env: {
        browser: true,
        node: true
    }
}
