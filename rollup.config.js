import buble from 'rollup-plugin-buble'
import jsx from 'rollup-plugin-jsx'

export default {
  entry: 'src/index.js',
  plugins: [buble(), jsx({ factory: 'React.createElement' })],
  targets: [
    { dest: 'dist/bundle.cjs.js', format: 'cjs' },
    { dest: 'dist/bundle.umd.js', format: 'umd' },
    { dest: 'dist/bundle.es.js', format: 'es' }
  ]
}
