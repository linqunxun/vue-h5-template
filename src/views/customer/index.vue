<template>
  <div class="activity">
    <div class="navigator">
<!--      <div class="navigator-inner-container">-->
<!--        <img class="angle-left-icon" src="../../assets/angle-left-black.png" />-->
<!--        <p class="navigator-title">我的</p>-->
<!--      </div>-->
    </div>
    <ul class="activity-list">
      <li class="activity-item" @click="toCheckIn">
        <div class="image-icon-container">
          <img class="icon" src="../../assets/drawDemond.png" />
        </div>
        <div class="activity-content">
          <p class="label">每日签到赢积分</p>
          <img class="angle" src="../../assets/angle-right-grey.png" />
        </div>
      </li>
    </ul>
    <div class="my-integration">
      <img class="demond" src="../../assets/drawDemond.png" />
      <p class="integration-label">您当前积分：</p>
      <p class="integration-value">{{points}}分</p>
    </div>
    <div class="award-container">
      <p class="award-label">正在火热兑换的礼品</p>
      <ul class="award-list" v-for="c in commodities">
        <li class="award">
          <div class="award-img"></div>
          <div class="award-detail">
            <p>{{c.name}}</p>
            <p>{{c.points}} 积分</p>
          </div>
        </li>
      </ul>
    </div>
    <!--占位-->
    <div class="zw" />
  </div>
</template>

<script>
import informationInput from './components/informationInput'
import {getAuthUrl, getCustomerInfo, loginByCustomer} from "api/wx_mp";
import {getCommodityList} from "api/commodity";
let config = require('../../config');

export default {
  components: {
    informationInput
  },
  data() {
    return {
      points: 0,
      commodities: []
    }
  },
  mounted() {
    let that = this;
    let tokenObj = {token: localStorage.token};
    getCustomerInfo(tokenObj)
      .then(res => {
        that.points = res.result.points;
      });
    getCommodityList(tokenObj).then(res => {
      that.commodities = res.result.map(c => {
        return {name: c.name, points: c.points};
      })
    })
  },
  methods: {
    toCheckIn() {
      this.$router.push('/check/in');
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin flex($jc: space-between, $ai: center, $fd: row, $fw: nowrap) {
  display: flex;
  display: -webkit-flex;
  justify-content: $jc;
  -webkit-justify-content: $jc;
  align-items: $ai;
  -webkit-align-items: $ai;
  flex-direction: $fd;
  -webkit-flex-direction: $fd;
  flex-wrap: $fw;
  -webkit-flex-wrap: $fw;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.activity {
  width: 100%;
  position: relative;
  background-color: rgb(243, 243, 245);
  .navigator {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(243, 243, 245);
    .navigator-inner-container {
      width: 100%;
      height: 100%;
      position: relative;
      @include flexbox($jc: center, $ai: center);
      .angle-left-icon {
        width: 12px;
        left: 20px;
        position: absolute;
      }
      .navigator-title {
        font-size: 17px;
        color: #000000;
        font-weight: 500;
      }
    }
  }
  .activity-list {
    .activity-item {
      width: 100%;
      height: 49px;
      @include flexbox($ai: center, $jc: space-between);
      background-color: #ffffff;
      .image-icon-container {
        width: 52px;
        height: 100%;
        @include flex($ai: center, $jc: center);
        flex-shrink: 0;
        padding: 0;
        .icon {
          width: 20px;
        }
      }
      .activity-content {
        flex: 1;
        height: 100%;
        border-bottom: 1px solid #c8c9ca;
        @include flex($ai: center, $jc: space-between);
        padding-right: 18px;
        .label {
          font-size: 15px;
          color: #000000;
          font-weight: 500;
        }
        .angle {
          width: 7px;
        }
      }
    }
  }
  .my-integration {
    @include flex($jc: center, $ai: center);
    margin: 20px 0 20px 0;
    .demond {
      width: 35px;
    }
    .integration-label {
      font-size: 15px;
      color: #000000;
      font-weight: 500;
    }
    .integration-value {
      font-size: 22px;
      color: #000000;
      font-weight: 500;
    }
  }
  .information-container {
    width: 100%;
    padding: 0 16px;
    .information {
      width: 100%;
      background-color: #ffffff;
      box-shadow: 0 6px 10px 0 rgba(131, 134, 163, 0.12);
      border-radius: 8px;
      padding: 20px 24px;
      .information-tip {
        width: 100%;
        @include flex($ai: flex-start);
        .warn {
          width: 17px;
          margin-right: 10px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        p {
          flex: 1;
          font-size: 14px;
          color: #ff6767;
        }
      }
      .confirm-box {
        @include flex($ai: center, $jc: center);
        margin-top: 24px;
        width: 100%;
        .confirm-button {
          width: 70%;
          height: 44px;
          background-color: #03c553;
          outline: 0;
          border: none;
          border-radius: 22px;
          color: #ffffff;
          font-size: 15px;
        }
      }
    }
  }
  .award-container {
    width: 100%;
    @include flex($ai: center, $jc: flex-start, $fd: column);
    .award-label {
      margin: 30px 0 20px 0;
      font-size: 16px;
      color: #000000;
      font-weight: 500;
    }
    .award-list {
      width: 100%;
      padding: 0 16px;
      border-radius: 8px;
      .award {
        width: 100%;
        height: 69px;
        padding: 15px 22px;
        @include flex($jc: flex-start, $ai: center);
        background-color: #ffffff;
        .award-img {
          width: 40px;
          height: 40px;
          background-color: #dddddd;
          flex-shrink: 0;
          margin-right: 10px;
        }
        .award-detail {
          flex: 1;
          height: 100%;
          @include flex($fd: column, $ai: flex-start, $jc: space-between);
          p:first-child {
            font-size: 14px;
            color: #000000;
          }
          p:last-child {
            font-size: 12px;
            color: #999999;
          }
        }
      }
    }
  }
  .zw {
    width: 100%;
    height: 120px;
  }
}
</style>
