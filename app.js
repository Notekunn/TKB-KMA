const express = require('express');
var md5 = require('md5');
let cralw = require('./cralw')
let app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
})

app.get('/', function(req, res) {
  res.send('<h1><p>This is homepage</p></h1>')
})

app.get('/thoikhoabieu/:username/:pass', function(req, res) {
  cralw(req.params.username, md5(req.params.pass)).then(
    result => {
      res.set({
        'Content-Type': 'application/json',
        'warning': "Make by Notekunn"
      })
      res.end(JSON.stringify(result));

    }
  ).catch(error => {
    res.send('Lỗi ' + error);
  })

})
