module.exports = {
    rules: {
        'no-unused-vars': [0],
        'comma-dangle': [0],
        indent: 2,
        'no-console': 0,
        quotes: [2, 'single', { avoidEscape: true }],
        'linebreak-style': [2, 'unix'],
        semi: [2, 'always']
    },
    env: {
        es6: true,
        node: true,
        mocha: true
    },
    extends: 'eslint:recommended'
};
