// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//     config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
//     return config;
// };

const {
    override,
    fixBabelImports,
    addLessLoader,
} = require("customize-cra")

module.exports = override(
    fixBabelImports("babel-plugin-import", {
        libraryName: "antd-mobile",
        style: 'css'
    }),
    addLessLoader({
        ident: 'postcss'
    })
);
