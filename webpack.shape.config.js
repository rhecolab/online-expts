const path = require('path');

module.exports = {
  mode: 'production',  

  // Entry file for this task
  entry: './projs/blink/tasks/shape/shapeBlink.js',

  // Output bundle
  output: {
    filename: 'shapeBlink_bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
        name: 'sblink',
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