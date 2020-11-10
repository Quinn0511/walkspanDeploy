const { override, addLessLoader, fixBabelImports } = require('customize-cra');

module.exports = override(
    // fixBabelImports('antd', {
    //     libraryDirectory: 'es',
    //     style: 'css',
    // }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true  //这里一定要写true，css和less都不行哦
      }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { "@primary-color": "#DB6333"}
        }
    })
)