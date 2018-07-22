const imgs = ["http://boobs.fvds.ru/static/images/photo_2016-10-23_13-12-35.jpg", "http://boobs.fvds.ru/static/images/photo_2016-10-23_19-49-32.jpg", "http://boobs.fvds.ru/static/images/photo_2016-10-24_18-36-21.jpg", "http://boobs.fvds.ru/static/images/photo_2016-10-25_05-47-53.jpg", "http://boobs.fvds.ru/static/images/photo_2016-10-25_13-42-21.jpg", "http://boobs.fvds.ru/static/images/photo_2016-10-25_19-10-02.jpg", "http://boobs.fvds.ru/static/images/photo_2016-10-26_06-43-14.jpg", "http://boobs.fvds.ru/static/images/photo_2016-10-27_07-27-46.jpg", "http://boobs.fvds.ru/static/images/photo_2016-10-27_19-32-33.jpg", "http://boobs.fvds.ru/static/images/photo_2016-10-27_20-44-07.jpg", "http://boobs.fvds.ru/static/images/photo_2016-10-30_19-47-59.jpg", "http://boobs.fvds.ru/static/images/photo_2016-10-31_11-03-00.jpg", "http://boobs.fvds.ru/static/images/photo_2016-10-31_18-25-38.jpg", "http://boobs.fvds.ru/static/images/photo_2016-11-01_12-06-18.jpg", "http://boobs.fvds.ru/static/images/photo_2016-11-02_13-30-36.jpg", "http://boobs.fvds.ru/static/images/photo_2016-11-03_05-17-37.jpg", "http://boobs.fvds.ru/static/images/photo_2016-11-04_05-36-30.jpg", "http://boobs.fvds.ru/static/images/photo_2016-11-04_16-07-08.jpg", "http://boobs.fvds.ru/static/images/photo_2016-11-05_06-29-18.jpg", "http://boobs.fvds.ru/static/images/photo_2016-11-05_16-09-57.jpg", "http://boobs.fvds.ru/static/images/photo_2016-11-05_21-37-55.jpg", "http://boobs.fvds.ru/static/images/photo_2016-11-06_08-01-17.jpg", "http://boobs.fvds.ru/static/images/photo_2016-11-06_13-46-53.jpg", "http://boobs.fvds.ru/static/images/photo_2016-11-07_13-36-13.jpg"]

const fs = require('fs')
const http = require('http')
const path = require('path')

const files = imgs.map(el => {
  http.get(el, res => {
    const file = fs.createWriteStream(`./assets/img/${path.basename(el)}`)
    res.pipe(file)
    file.on('finish', () => file.close())
  })
  return path.basename(el)
})
console.dir(files)