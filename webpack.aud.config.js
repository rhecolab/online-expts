const path = require('path');

module.exports = {
  mode: 'production',   // use 'development' while debugging if you want

  // Entry file for this task
  entry: './projs/blink/tasks/aud/audBlink.js',

  // Output bundle
  output: {
    filename: 'audBlink_bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
        name: 'ablink',
        type: 'window',
        export: 'default',
    },
  },

  // Import HTML & CSS 
    module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
};