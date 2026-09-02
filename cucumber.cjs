module.exports = {
  default: {
    paths: ['features/**/*.feature'],

    require: [
      'src/support/**/*.ts',
      'steps/**/*.ts'
    ],

    requireModule: ['tsx/cjs'],

    format: ['progress']
  }
};