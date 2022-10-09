module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'plugin:react/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 13,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        '@typescript-eslint',
    ],
    'rules': {
        'require-jsdoc': ['error', {
            'require': {
                'FunctionDeclaration': false,
                'MethodDefinition': false,
                'ClassDeclaration': false,
                'ArrowFunctionExpression': false,
                'FunctionExpression': false,
            },
        }],
        'react/react-in-jsx-scope': 'off',
        'max-len': [2, {'code': 120}],
        'linebreak-style': 0,
        'quotes': ['error', 'single'],
        'indent': ['error', 4],
    },
};
