<template>
  <div class="ms-calendar">
    <div class="month">
      <span>{{ year }}年</span>
      <span>{{ month }}月</span>
    </div>
    <div class="week">
      <p v-for="(item, index) in weekDay" :key="index">{{ item }}</p>
    </div>
    <div class="days">
      <div v-for="(item, index) in calendar_list" :key="index">
        <img v-show="isChecked(item)" class="draw-icon" src="../assets/draw.png" />
        <p v-show="!isChecked(item)" @click="changeActive(item)" :class="{ notDay: isBefore(item) }">
          {{ item.day }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const timestamp = 24 * 60 * 60 * 1000
export default {
  data() {
    return {
      calendar_list: [],
      weekDay: ['日', '一', '二', '三', '四', '五', '六'],
      year: '',
      month: '',
      day: ''
    }
  },
  props: {
    checkInList: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  methods: {
    isChecked(item) {
      const { day, month, year } = item
      const zm = month >= 10 ? month : `0${month}`
      const zd = day >= 10 ? day : `0${day}`
      return this.checkInList.indexOf(`${year}-${zm}-${zd}`) > -1
    },
    init() {
      const date = new Date()
      this.year = date.getFullYear()
      this.month = date.getMonth() + 1
      this.day = date.getDate()
      this.initAllMonth(date)
    },
    initAllMonth(date) {
      const MonthFirstDay = this.getMonthFirstDay(date)
      this.calendar_list = [...this.getCurrentWeekDay(MonthFirstDay)]
      while (this.calendar_list.length < 42) {
        this.calendar_list = this.calendar_list.concat(
          this.getCurrentWeekDay(
            this.getNextDay(this.transferBackToDate(this.calendar_list[this.calendar_list.length - 1]))
          )
        )
      }
    },
    getCurrentWeekDay(date) {
      const dt = new Date(date)
      const weekday = dt.getDay()
      const beginDay = new Date(dt.getTime() - weekday * timestamp)
      const backList = [this.initSpecialDateObject(beginDay)]
      for (let i = 1; i < 7; i++) {
        backList.push(this.initSpecialDateObject(beginDay.getTime() + i * timestamp))
      }
      return backList
    },
    isThisMonth(date) {
      const dt = new Date(date)
      return dt.getMonth() + 1 === this.month
    },
    getMonthFirstDay(date) {
      const dt = this.initDate(date)
      return new Date(dt.getTime() - (dt.getDate() - 1) * timestamp)
    },
    initDate(date) {
      const dt = new Date(date)
      return new Date([dt.getFullYear(), dt.getMonth() + 1, dt.getDate()].join('/'))
    },
    getNextDay(date) {
      const dt = new Date(date)
      return new Date(dt.getTime() + timestamp)
    },
    initSpecialDateObject(date) {
      const dt = new Date(date)
      return {
        year: dt.getFullYear(),
        month: dt.getMonth() + 1,
        day: dt.getDate(),
        weekday: dt.getDay()
      }
    },
    transferBackToDate(object) {
      return new Date([object.year, object.month, object.day].join('/'))
    },
    changeActive(item) {
      if (item.month === this.month) {
        this.day = item.day
      } else {
        this.month = item.month
        this.year = item.year
        this.day = item.day
        this.initAllMonth(new Date([this.year, this.month, this.day].join('/')))
      }
    },
    getLastMonth() {
      let date
      if (this.month === 1) {
        date = [(this.year -= 1), (this.month = 12), this.day].join('/')
      } else {
        date = [this.year, (this.month -= 1), this.day].join('/')
      }
      if (!new Date(date) || new Date(date).getMonth() + 1 !== this.month) {
        date = [this.year, this.month, (this.day = 1)].join('/')
      }
      this.initAllMonth(new Date(date))
    },
    getNextMonth() {
      let date
      if (this.month === 12) {
        date = [(this.year += 1), (this.month = 1), this.day].join('/')
      } else {
        date = [this.year, (this.month += 1), this.day].join('/')
      }
      if (!new Date(date) || new Date(date).getMonth() + 1 !== this.month) {
        date = [this.year, this.month, (this.day = 1)].join('/')
      }
      this.initAllMonth(new Date(date))
    },
    isBefore(item) {
      const { year, month, day } = item
      const isntCurrentMonth = year !== this.year || month !== this.month
      return isntCurrentMonth || (!isntCurrentMonth && day < this.day)
    }
  },
  created() {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.ms-calendar {
  width: 100%;
  height: 370px;
  .month {
    width: 100%;
    text-align: center;
    @include flexbox($jc: center, $ai: center);
    font-size: 20px;
    font-weight: 500;
    color: #39393a;
    margin-bottom: 15px;
    span {
      padding: 0 5px;
    }
  }
  .week {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1.3px solid #dbdcdd;
    p {
      flex: 1;
      text-align: center;
      color: #989db3;
      font-size: 13px;
    }
  }
  .days {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .draw-icon {
      width: 16.3px;
    }
    div {
      flex: 0 1 14.28%;
      margin: 10px 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      p {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.5s, color 0.5s;
        border-radius: 50%;
        font-size: 15px;
        text-align: center;
        color: #39393a;
      }
      .active {
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
      }
      .notDay {
        color: #989db3;
      }
    }
  }
}
</style>
