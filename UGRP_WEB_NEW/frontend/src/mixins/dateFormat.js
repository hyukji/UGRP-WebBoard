export const dateFormat = {
  methods: {
    getDateAndTime(date) {
      if (date !== null) {
        let hour = date.getHours()
        let minutes = date.getMinutes()
        let fullDate = `${date.getFullYear()}/${dage.getMonth() +
          1}/${date.getDate()}`
        return `${fullDate} ${hour}:${minutes}`
      } else {
        return null
      }
    },
    printDatePast(date) {
      let nowdate = new Date()
      if (nowdate.getFullYear() != date.getFullYear()) {
        let num = nowdate.getFullYear() - date.getFullYear()
        return num + "년 전"
      }
      if (nowdate.getMonth() != date.getMonth()) {
        let num = nowdate.getMonth() - date.getMonth()
        return num + "달 전"
      }
      if (nowdate.getHours() != date.getHours()) {
        let num = nowdate.getHours() - date.getHours()
        return num + "일 전"
      } else {
        return "오늘"
      }
    }
  }
}

//사용될 component에 date라는 변수가 있어야 하며
//import {dateFormat} from "../mixins/dateFormat" 을 하고
//methods처럼 mixins: [dateFormat] 을 넣어주면 된다.
//사용할때에는 그냥 {{getDateAndTime(데이터)}} 그냥 거기 안에서 불린단어처럼 사용 사용.

//methods처럼 data 넣어서 그냥 사용사능.
