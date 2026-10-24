

module.exports = function (config) {
  config.set({
    // Frameworks utilizados para las pruebas
    frameworks: ["jasmine", "webpack"],

    // Archivos de pruebas
    files: [
      { pattern: "src/test/**/*.spec.jsx", watched: false }
    ],

    // Procesamiento de los archivos de prueba
    preprocessors: {
      "src/test/**/*.spec.jsx": ["webpack"]
    },

    // Configuración de Webpack
    webpack: {
      mode: "development",
      devtool: "inline-source-map",

      resolve: {
        extensions: [".js", ".jsx"]
      },

      module: {
        rules: [
          {
            test: /\.css$/,
            type: "asset/source"
          },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,

            use: {
              loader: "babel-loader",

              options: {
                babelrc: false,
                configFile: false,

                presets: [
                  "@babel/preset-env",
                  ["@babel/preset-react", { runtime: "automatic" }]
                ],

                plugins: [
                  ["istanbul", {
                    include: [
                      "src/components/**/*.jsx",
                      "src/admin/**/*.jsx",
                      "src/utils/**/*.js"
                    ],
                    exclude: ["**/*.spec.jsx"]
                  }]
                ]
              }
            }
          }
        ]
      }
    },

    // Plugins necesarios
    plugins: [
      "karma-jasmine",
      "karma-webpack",
      "karma-chrome-launcher",
      "karma-coverage",
      "karma-spec-reporter"
    ],

    // Reportes de resultados
    reporters: ["spec", "coverage"],

    // Configuración del informe de cobertura
    coverageReporter: {
      dir: "coverage",

      reporters: [
        { type: "html", subdir: "html" },
        { type: "text-summary" }
      ]
    },

    // Ejecutar las pruebas con Google Chrome sin interfaz gráfica
    browsers: ["ChromeHeadless"],

    // Ejecutar una sola vez y finalizar
    singleRun: true
  });
};

