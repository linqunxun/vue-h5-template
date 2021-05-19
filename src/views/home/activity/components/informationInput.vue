<template>
  <div class="information-input">
    <p class="label">{{ label }}：</p>
    <label class="input-container">
      <input
        :placeholder="placeholder"
        type="text"
        ref="input"
        @input="$emit('input', $event.target.value)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event.target.value)"
        @change="$emit('change', $event.target.value)"
        :value="value"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'InformationInput',
  props: {
    label: {
      default: () => ''
    },
    placeholder: {
      default: () => ''
    },
    value: {
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #999999;
}

input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #999999;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #999999;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #999999;
}
input:focus::-webkit-input-placeholder,
textarea:focus::-webkit-input-placeholder {
  color: #999999;
}

input:focus:-moz-placeholder,
textarea:focus:-moz-placeholder {
  color: #999999;
}

input:focus::-moz-placeholder,
textarea:focus::-moz-placeholder {
  color: #999999;
}

input:focus:-ms-input-placeholder,
textarea:focus:-ms-input-placeholder {
  color: #999999;
}
* {
  box-sizing: border-box;
}
.information-input {
  width: 100%;
  @include flexbox;
  margin-top: 15px;
  .label {
    flex-shrink: 0;
    font-size: 15px;
    color: #000000;
    font-weight: 500;
    margin: 0 5px 0 0;
  }
  .input-container {
    flex: 1;
    input {
      width: 100%;
      appearance: none;
      outline: 0;
      height: 36px;
      border-radius: 2px;
      border: 1px solid #dbdcdd;
      padding: 0 16px;
      font-size: 14px;
      color: #000000;
    }
  }
}
</style>
