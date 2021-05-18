<template>
  <div class="check-days">
    <div class="check-in-bonus">
      <p>已连续签到</p>
      <p class="day">1</p>
      <p>天</p>
    </div>
    <ul class="day-list">
      <li v-for="(itm, idx) in mockData" :key="idx" :class="(idx + 1) % 4 !== 0 ? 'mg-right' : ''">
        <reward v-if="collapse || idx < 8" :isComplete="itm.state === 1" :day="itm.day" />
      </li>
    </ul>
    <div class="angle-container">
      <img
        :class="collapse ? 'collapse' : 'un-collapse'"
        class="black-angle"
        src="../../../../assets/angle-block.png"
        @click="collapse = !collapse"
        v-show="mockData.length > 8"
      />
    </div>
  </div>
</template>

<script>
import Reward from './reward'
export default {
  name: 'CheckDays',
  components: {
    Reward
  },
  data() {
    return {
      mockData: [
        {
          day: 1,
          state: 1
        },
        {
          day: 2,
          state: 1
        },
        {
          day: 3,
          state: 1
        },
        {
          day: 4,
          state: 1
        },
        {
          day: 5,
          state: 1
        },
        {
          day: 6,
          state: 0
        },
        {
          day: 7,
          state: 0
        },
        {
          day: 8,
          state: 0
        },
        {
          day: 9,
          state: 0
        }
      ],
      collapse: false
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  padding: 0;
  margin: 0;
}
.check-days {
  width: 100%;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 6px 10px 0 rgba(131, 134, 163, 0.12);
  background-color: #ffffff;
  padding: 12px 24px;
  box-sizing: border-box;
  .check-in-bonus {
    @include flexbox($ai: flex-end, $jc: flex-start);
    p:first-child {
      font-size: 16px;
      color: #000000;
    }
    .day {
      font-size: 28px;
      color: #eca008;
      padding: 0 5px 0 10px;
      line-height: 28px;
    }
    p:last-child {
      font-size: 16px;
      color: #eca008;
    }
  }
  .day-list {
    width: 100%;
    @include flexbox($jc: flex-start, $ai: flex-start, $fw: wrap);
    margin-top: 10px;
    li {
      margin-bottom: 10px;
    }
  }
  .mg-right {
    margin-right: 17px;
  }
  .angle-container {
    width: 100%;
    @include flexbox($ai: center, $jc: center);
    margin-top: 10px;
    img {
      width: 17.5px;
    }
    .un-collapse {
      transform: rotate(180deg);
    }
    .collapse {
      transform: rotate(0deg);
    }
  }
}
</style>
