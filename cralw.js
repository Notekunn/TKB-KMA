var request = require('request-promise').defaults({
  jar: true,
  followAllRedirects: true
});
var jar = request.jar();
request = request.defaults({
  jar: jar
});

var cheerio = require('cheerio');
var options = {
  method: 'POST',
  url: 'http://115.146.127.72/CMCSoft.IU.Web.Info/Login.aspx',
  headers: {
    'postman-token': '8102b037-a8ce-2b21-26fc-64b15a85c977',
    'cache-control': 'no-cache',
    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
  },
  formData: {
    __EVENTTARGET: '',
    __EVENTARGUMENT: '',
    __LASTFOCUS: '',
    __VIEWSTATE: `/wEPDwUKMTkwNDg4MTQ5MQ9kFgICAQ9kFgpmD2QWCgIBDw8WAh4EVGV4dAUjSOG7jEMgVknhu4ZOIEvhu7ggVEhV4bqsVCBN4bqsVCBNw4NkZAICD2QWAmYPDxYEHwAFDcSQxINuZyBuaOG6rXAeEENhdXNlc1ZhbGlkYXRpb25oZGQCAw8QDxYGHg1EYXRhVGV4dEZpZWxkBQZreWhpZXUeDkRhdGFWYWx1ZUZpZWxkBQJJRB4LXyFEYXRhQm91bmRnZBAVAgJWTgJFThUCIEU0MzI5NkM2RjI0QzQ0MTBBODk0RjQ2RDU3RDJEM0FCIEFCQUY0NkJENjcxMjQ3QzVCNUI1Mjg4NUJCMkY5QzQ5FCsDAmdnFgFmZAIEDw8WAh4ISW1hZ2VVcmwFKC9DTUNTb2Z0LklVLldlYi5JbmZvL0ltYWdlcy9Vc2VySW5mby5naWZkZAIFD2QWBgIBDw8WAh8ABQZLaMOhY2hkZAIDDw8WAh8AZWRkAgcPDxYCHgdWaXNpYmxlaGRkAgIPZBYEAgMPD2QWAh4Gb25ibHVyBQptZDUodGhpcyk7ZAIHDw8WAh8AZWRkAgQPDxYCHwZoZGQCBg8PFgIfBmhkFgYCAQ8PZBYCHwcFCm1kNSh0aGlzKTtkAgUPD2QWAh8HBQptZDUodGhpcyk7ZAIJDw9kFgIfBwUKbWQ1KHRoaXMpO2QCCw9kFghmDw8WAh8AZWRkAgEPZBYCZg8PFgIfAWhkZAICD2QWAmYPDxYEHwAFDcSQxINuZyBuaOG6rXAfAWhkZAIDDw8WAh8ABbQFPGEgaHJlZj0iIyIgb25jbGljaz0iamF2YXNjcmlwdDp3aW5kb3cucHJpbnQoKSI+PGRpdiBzdHlsZT0iRkxPQVQ6bGVmdCI+CTxpbWcgc3JjPSIvQ01DU29mdC5JVS5XZWIuSW5mby9pbWFnZXMvcHJpbnQucG5nIiBib3JkZXI9IjAiPjwvZGl2PjxkaXYgc3R5bGU9IkZMT0FUOmxlZnQ7UEFERElORy1UT1A6NnB4Ij5JbiB0cmFuZyBuw6B5PC9kaXY+PC9hPjxhIGhyZWY9Im1haWx0bzo/c3ViamVjdD1IZSB0aG9uZyB0aG9uZyB0aW4gSVUmYW1wO2JvZHk9aHR0cDovLzExNS4xNDYuMTI3LjcyL0NNQ1NvZnQuSVUuV2ViLkluZm8vTG9naW4uYXNweCI+PGRpdiBzdHlsZT0iRkxPQVQ6bGVmdCI+PGltZyBzcmM9Ii9DTUNTb2Z0LklVLldlYi5JbmZvL2ltYWdlcy9zZW5kZW1haWwucG5nIiAgYm9yZGVyPSIwIj48L2Rpdj48ZGl2IHN0eWxlPSJGTE9BVDpsZWZ0O1BBRERJTkctVE9QOjZweCI+R+G7rWkgZW1haWwgdHJhbmcgbsOgeTwvZGl2PjwvYT48YSBocmVmPSIjIiBvbmNsaWNrPSJqYXZhc2NyaXB0OmFkZGZhdigpIj48ZGl2IHN0eWxlPSJGTE9BVDpsZWZ0Ij48aW1nIHNyYz0iL0NNQ1NvZnQuSVUuV2ViLkluZm8vaW1hZ2VzL2FkZHRvZmF2b3JpdGVzLnBuZyIgIGJvcmRlcj0iMCI+PC9kaXY+PGRpdiBzdHlsZT0iRkxPQVQ6bGVmdDtQQURESU5HLVRPUDo2cHgiPlRow6ptIHbDoG8gxrBhIHRow61jaDwvZGl2PjwvYT5kZGSm5zBT6E9FhVX2Fsk0TRTn9HsrxRwy8HBnwkYkzMGnjg==`,
    __VIEWSTATEGENERATOR: 'D620498B',
    'PageHeader1$drpNgonNgu': 'E43296C6F24C4410A894F46D57D2D3AB',
    'PageHeader1$hidisNotify': '0',
    'PageHeader1$hidValueNotify': '.',
    txtUserName: '',
    txtPassword: '',
    btnSubmit: 'Đăng nhập',
    hidUserId: '',
    hidUserFullName: '',
    hidTrainingSystemId: ''
  }
};
module.exports = (username, pass) => {
  options.formData.txtUserName = username.trim()
  options.formData.txtPassword = pass;
  return request.get('http://115.146.127.72/CMCSoft.IU.Web.Info/Login.aspx')
    .then(() => request({ ...options}))
    .then(() => request('http://115.146.127.72/CMCSoft.IU.Web.Info/Reports/Form/StudentTimeTable.aspx'))
    .then(
      body => {
        var $ = cheerio.load(body);
        var domSelector = $('table#gridRegistered > tbody > tr');
        var listItem = domSelector.slice(1, domSelector.length - 1);
        var mangTime = new Array();
        var mangPlace = new Array();
        var mangSubject = new Array()
        listItem.each((index, element) => {
          let Node_td = $(element).children('td')

          let lopHocPhan = $(Node_td[1])
            .text()
            .trim();
          let HocPhan = $(Node_td[2])
            .text()
            .trim();
          let ThoiGian = $(Node_td[3])
            .text()
            .trim()
            .replace(/\s\s+/, '')
          let DiaDiem = $(Node_td[4])
            .text()
            .trim()
            .replace(/\s\s+/, '');
          let GiangVien = $(Node_td[5])
            .text()
            .trim()
            .replace(/\s\s+/, '');
          let SiSo = $(Node_td[6])
            .text()
            .trim()
            .replace(/\s\s+/, '');
          let SoDK = $(Node_td[7])
            .text()
            .trim()
            .replace(/\s\s+/, '');
          let SoTC = $(Node_td[8])
            .text()
            .trim()
            .replace(/\s\s+/, '');


          mangSubject.push({
            lophocphan: lopHocPhan,
            hocphan: HocPhan,
            siso: parseInt(SiSo) || 0,
            sodk: parseInt(SoDK) || 0,
            sotc: parseInt(SoTC) || 0,
            giangvien: GiangVien
          })

          tachDiaDiem(DiaDiem).forEach(place => {

            place.code = HocPhan + '_' + place.code
            // Place.findOrCreate({
            //   where: {
            //     [and]: {
            //       code: place.code
            //     }
            //   },
            //   defaults: {
            //     ...place
            //   }
            // })

            mangPlace.push({ ...place
            })
          })

          tachThoiGian(ThoiGian).forEach(time => {
            time.code = HocPhan + '_' + time.code
            time.hocphan = HocPhan;
            // TimeStudy.findOrCreate({
            //   where: {
            //     [and]: {
            //       code: time.code,
            //       date: time.date
            //     }
            //   },
            //   defaults: {
            //     ...time
            //   }
            // })
            mangTime.push({
              ...time
            })
          })
        })
        return {
          time: mangTime,
          place: mangPlace,
          subject: mangSubject
        }
      }
    )
}

function tachThoiGian(thoiGian) {
  let mangThoiGian = new Array();
  if (thoiGian.includes('(1)')) { ///Từ 15/10/2018 đến 28/10/2018: (1) Thứ 6 tiết 1,2,3,4,5,6 (TH) Từ 29/10/2018 đến 04/11/2018: (2) Thứ 5 tiết 1,2,3 (TH) Thứ 6 tiết 1,2,3,4,5,6 (TH)
    let regexp = /\(\d\)/g
    thoiGian
      .toLowerCase()
      .split(new RegExp('từ', 'gi'))
      .filter(e => e.trim().length > 0)
      .map(e => e.split(new RegExp('đến|:', 'gi')))
      .forEach((e) => {
        let [start, end, lich] = e;
        lich = lich.trim()
        let code = lich.slice(1, 2);
        lich
          .slice(3, lich.length)
          .trim()
          .split('thứ')
          .filter(e => e.trim().length > 0)
          .map(e => e.split('tiết'))
          .forEach(
            e => {

              let tiet = e[1].match(/[\d+\,+]+/g)[0];
              let type = e[1].match(/\((.*?)\)/g)[0].slice(1, 3);
              if (tiet.includes('1,2,3')) mangThoiGian.push(new ThoiGianHocPhan(code, start, end, e[0].trim(), '1-3', type))
              if (tiet.includes('4,5,6')) mangThoiGian.push(new ThoiGianHocPhan(code, start, end, e[0].trim(), '4-6', type))
              if (tiet.includes('7,8,9')) mangThoiGian.push(new ThoiGianHocPhan(code, start, end, e[0].trim(), '7-9', type))
              if (tiet.includes('10,11,12')) mangThoiGian.push(new ThoiGianHocPhan(code, start, end, e[0].trim(), '10-12', type));
              if (tiet.includes('13,14,15,16')) mangThoiGian.push(new ThoiGianHocPhan(code, start, end, e[0].trim(), '13-16', type));

            }
          )
      })
    return mangThoiGian
  } else {
    let [start, end, lich] = thoiGian
      .toLowerCase()
      .split(new RegExp('từ|đến|:', 'gi'))
      .filter(e => e.trim().length > 0)

    code = '';
    lich = lich.trim();
    lich.split('thứ')
      .filter(e => e.trim().length > 0)
      .map(e => e.split('tiết').filter(e => e.trim().length > 0))
      .forEach(element => {
        let tiet = element[1].match(/[\d+\,+]+/g)[0];
        let type = element[1].match(/\((.*?)\)/g)[0].slice(1, 3);
        if (tiet.includes('1,2,3')) mangThoiGian.push(new ThoiGianHocPhan(code, start, end, element[0].trim(), '1-3', type))
        if (tiet.includes('4,5,6')) mangThoiGian.push(new ThoiGianHocPhan(code, start, end, element[0].trim(), '4-6', type))
        if (tiet.includes('7,8,9')) mangThoiGian.push(new ThoiGianHocPhan(code, start, end, element[0].trim(), '7-9', type))
        if (tiet.includes('10,11,12')) mangThoiGian.push(new ThoiGianHocPhan(code, start, end, element[0].trim(), '10-12', type));
        if (tiet.includes('13,14,15,16')) mangThoiGian.push(new ThoiGianHocPhan(code, start, end, element[0].trim(), '13-16', type));
      })

    return mangThoiGian;

  }


}

function tachDiaDiem(diaDiem) {
  let mangDiaDiem = new Array();

  if (diaDiem.includes('(')) { //Nếu nhiều tiết học (1) 202_TA4(THCNTT) TA4 (2) [T5] 206_TA3(THCNTT) TA4 [T6] 203_TA4(THCNTT) TA4


    let regexp = /\(([\d+\,+]+)\)/g
    let listTiet = diaDiem.match(regexp).map(
      e => e.replace(/(\()|(\))/g, '')
    )
    let regexp2 = new RegExp('\\(' + listTiet.join('\\)|\\(') + '\\)', 'g');
    listDiaDiem =
      diaDiem
      .split(regexp2)
      .filter(e => e.trim().length > 0);
    listDiaDiem.forEach((element, index) => {
      listTiet[index].split(',').forEach(e => {
        mangDiaDiem.push(new DiaDiemHocPhan(e, element))
      })
    });

    return mangDiaDiem;

  } else { //[T2] 203_TA2 TA2 [T4] 102_TA2 TA2
    mangDiaDiem.push(new DiaDiemHocPhan('', diaDiem))
    return mangDiaDiem;

  }
}

function dateToTimeStamp(date) {
  return new Date(date.trim().split("/").reverse().join("-")).getTime() / 1000;
}

class ThoiGianHocPhan {
  constructor(code, start, end, thu, tiet, loaitiet) {
    this.code = code;
    this.start = dateToTimeStamp(start);
    this.end = dateToTimeStamp(end);
    this.date = parseInt(thu) || 8;
    this.tiet = tiet;
    this.type = loaitiet.toUpperCase();

  }
}

class DiaDiemHocPhan {
  constructor(code, place) {
    this.code = code;
    this.place = place.trim();
  }
}
