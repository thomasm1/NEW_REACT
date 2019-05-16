module.exports = {
     entry: './src/client.js',
     output: {
         path: './',
         filename: 'index.js',
     },
     devServer:{
        inline:true,
        contentBase:'./public',
        port:3004
     },

     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel'
         },
         {
            test:/\.csv$/,
            loader:'dsv'
         }
         ]
     }
 }
