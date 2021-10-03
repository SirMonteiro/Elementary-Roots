module.exports = {
  presets: ['next/babel'],
  plugins: [
    'inline-react-svg',
    [
      'module-resolver',
      {
        root: ['./']
      }
    ]
  ]
}
