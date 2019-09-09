const fs = require('fs')

const path = require('path')

const dir = path.resolve(__dirname, './src/assets/svg')

const svgDir = name => path.resolve(__dirname, './src/assets/svg/', name)

fs.readdir(dir, (err, files) => {
  if (err) {
    console.log(err)
  }
  files.forEach(file => {
    const newFile = file.replace(/^ios-/, '')
    fs.rename(svgDir(file), svgDir(newFile), function(err) {
      if (err) {
        console.log(err)
      }
    })
  })
})
