const path = require('path');

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/leaflet.js'),
      name: 'echarts-leaflet',
      formats: ['es', 'umd'],
      fileName: (format) => `echarts-leaflet.${format}.js`,
    },
    minify: false,
    terserOptions: {
      minify: {
        mangle: false
      }
    },
    rollupOptions: {
      external: ['echarts/lib/echarts', 'leaflet/src/Leaflet'],
    },
    outDir: 'dist',
  },
};
