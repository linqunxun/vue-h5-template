<template>
  <div class="check-in">
    <div class="up-container">
      <div class="navigator">
<!--        <img @click="back" class="angle-icon" src="../../../assets/angle-left.png" />-->
<!--        <span class="navigator-title">签到</span>-->
      </div>
      <div class="points-button" @click="showPointsDesc">
        <p>积分兑换</p>
      </div>
      <div class="rule-button" @click="showRuleDesc">
        <p>签到规则</p>
      </div>
      <div class="today-check">
        <img class="check-label-image" src="../../../assets/checkLabel.png" />
        <div class="my-integration">
          <img src="../../../assets/drawDemond.png" class="demond-icon" />
          <span class="integration">积分:</span>
          <span class="integration-value">100</span>
        </div>
        <p class="integration-rank">今日总签到20人，您排在第8位！</p>
      </div>
    </div>
    <div class="check-day-container">
      <check-days :mock-data="mockData"/>
    </div>
    <div class="calendar-container">
      <calendar :check-in-list="checkList" />
      <div class="bottom-block"></div>
    </div>
    <div class="block"></div>
  </div>
</template>

<script>
import {Dialog} from "vant";

const backgroundImageSize = {
  width: 750,
  height: 598
}
import { Calendar } from '@/components'
import CheckDays from './components/checkDays'
export default {
  name: 'CheckIn',
  components: {
    Calendar,
    CheckDays
  },
  data() {
    return {
      pointsDesc: "积分可以兑换丰厚的礼品，请在群里添加【服务助手】为好友进行兑换！",
      ruleDesc: "✌️✌️签到赢积分✌️✌️️",
      show: false,
      checkList: ['2021-05-01', '2021-05-03', '2021-05-04', '2021-05-05', '2021-05-10'],
      mockData: [
        {
          day: 1,
          state: 1,
          points: 5
        },
        {
          day: 2,
          state: 1,
          points: 5
        },
        {
          day: 3,
          state: 1,
          points: 5
        },
        {
          day: 4,
          state: 1,
          points: 5
        },
        {
          day: 5,
          state: 1,
          points: 10
        },
        {
          day: 6,
          state: 0,
          points: 5
        },
        {
          day: 7,
          state: 0,
          points: 5
        },
        {
          day: 8,
          state: 0,
          points: 5
        },
        {
          day: 9,
          state: 0,
          points: 5
        }
      ],
      backgroundImageSize
    }
  },
  methods: {
    showPointsDesc(){
      Dialog({ title: "积分兑换", message: this.pointsDesc });
    },
    showRuleDesc(){
      Dialog({ title: "签到规则", message: this.ruleDesc });
    }
  }
}
</script>

<style lang="scss" scoped>
.check-in {
  width: 100%;
  background-color: #ffffff;
  .up-container {
    width: 100%;
    background-image: url('../../../assets/checkBg.png');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: 80vw;
    position: relative;
    .navigator {
      width: 100%;
      height: 25px;
      @include flexbox($ai: center, $jc: center);
      position: relative;
      .angle-icon {
        position: absolute;
        left: 20px;
        width: 9px;
      }
      .navigator-title {
        font-size: 17px;
        color: #ffffff;
      }
    }
    .points-button {
      width: 80px;
      height: 32px;
      @include flexbox($ai: center, $jc: center);
      background-color: rgba(0, 0, 0, 0.16);
      font-size: 14px;
      color: #ffffff;
      border-radius: 100px 0 0 100px;
      right: 0;
      top: 15px;
      position: absolute;
      p {
        margin: 0;
      }
    }
    .rule-button {
      width: 80px;
      height: 32px;
      @include flexbox($ai: center, $jc: center);
      background-color: rgba(0, 0, 0, 0.16);
      font-size: 14px;
      color: #ffffff;
      border-radius: 100px 0 0 100px;
      right: 0;
      top: 60px;
      position: absolute;
      p {
        margin: 0;
      }
    }
    .today-check {
      width: 80%;
      padding-left: 20px;
      margin-top: 5px;
      position: relative;
      @include flexbox($fd: column, $ai: flex-start, $jc: flex-start);

      .check-label-image {
        width: 80%;
      }
      .my-integration {
        @include flexbox($ai: center, $jc: flex-start);
        margin-top: 14px;
        .demond-icon {
          width: 23px;
        }
        .integration {
          font-size: 18px;
          color: #ffffff;
          padding-left: 8px;
          padding-right: 5px;
        }
        .integration-value {
          color: #ffffff;
          font-size: 18px;
        }
      }
      .integration-rank {
        color: #ffffff;
        font-size: 14px;
        margin-top: 14px;
        font-weight: 500;
      }
    }
  }
  .check-day-container {
    width: 100%;
    padding: 0 4.5%;
    box-sizing: border-box;
    margin-top: -103px;
    margin-bottom: 30px;
    position: relative;
  }
  .calendar-container {
    width: 100%;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 6px 10px 0 rgba(131, 134, 163, 0.12);
    @include flexbox($fd: column, $jc: flex-start, $ai: center);
    .bottom-block {
      width: 32px;
      height: 3px;
      background-color: #dadef0;
      margin: 15px 0;
      border-radius: 5px;
    }
  }
}
.block {
  width: 100%;
  height: 120px;
  background-color: #dddddd;
  margin: 20px 0;
}
</style>
