exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /model-viewer/,
              use: loaders.null(),
            },
            {
              test: /\.(glb|gltf)$/,
              use:[
                {
                  loader: 'file-loader',
                  options: {
                    outputPath: 'assets/models3d/',
                  },
                },
              ],
            },
          ],
        },
      })
    }
  }
  // exports.onCreateWebpackConfig = ({
  //   stage,
  //   rules,
  //   loaders,
  //   plugins,
  //   actions,
  // }) => {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         // {
  //         //   test: /model-viewer/,
  //         //   use: loaders.null(),
  //         // },
  //         {
  //           test: /\.(glb|gltf)$/,
  //           use:[
  //             {
  //               loader: 'file-loader',
  //               options: {
  //                 outputPath: 'assets/models3d/',
  //               },
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     plugins: [
  //       plugins.define({
  //         __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
  //       }),
  //     ],
  //   })
  // }