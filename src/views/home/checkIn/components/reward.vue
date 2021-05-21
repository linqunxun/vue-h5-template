<template>
  <div class="reward" :class="isComplete ? 'active-bg' : 'un-active-bg'">
    <p class="day" :class="isComplete ? 'active-text' : 'un-active-day'">第{{ day }}天</p>
    <img class="icon" :src="isComplete ? icons.completeIcon : icons.unCompleteIcon" />
    <p :class="isComplete ? 'active-text' : 'un-active-reward-value'" class="reward-value">{{points}}积分</p>
  </div>
</template>

<script>
import unCompleteIcon from '../../../../assets/drawDemond.png'
import completeIcon from '../../../../assets/drawCoin.png'
export default {
  props: {
    day: {
      type: Number,
      default: () => 0,
      required: true
    },
    isComplete: {
      type: Boolean,
      default: () => false,
      required: true
    },
    points: {
      type: Number,
      default: () => 0,
      required: true
    }
  },
  data() {
    return {
      icons: {
        unCompleteIcon,
        completeIcon
      }
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  padding: 0;
}
.reward {
  width: 60px;
  height: 85px;
  border-radius: 6px;
  @include flexbox($jc: space-between, $fd: column, $ai: center);
  padding: 10px 0 8px 0;
  box-sizing: border-box;
  .icon {
    width: 23px;
  }

  .day {
    font-size: 14px;
  }
  .reward-value {
    font-size: 12px;
  }
  .un-active-day {
    color: #000000;
  }
  .un-active-reward-value {
    color: #999999;
  }
  .active-text {
    color: #ffffff;
  }
}
.active-bg {
  background-color: #03c553;
}
.un-active-bg {
  background-color: #f7f7f7;
}
</style>
