<template>
  <div class="login-page">
    <div class="login">
      <div class="login-box">
        <div class="title">
          <h2>欢迎登录</h2>
        </div>
        <div class="form">
          <ul>
            <li :class='mobileActive ? "active" : "" ' class="mobile-item">
              <input
                type="text"
                pattern="[0-9]*"
                maxlength="11"
                placeholder="输入手机号"
                v-model.trim="mobile"
                @focus="mobileFocus"
                @blur="mobileBlur"
              >
              <b
                :class="mobile.length > 0 ? 'active' : ''"
                class="clear-btn"
                @click="mobileClear"
              ></b>
            </li>
            <li
              :class='codeActive ? "active" : "" '
            >
              <input
                type="text"
                placeholder="输入验证码"
                @focus="mobileFocus"
                @blur="mobileBlur"
                v-model.trim="verify_code"
              >
            </li>
          </ul>
        </div>
        <div
          class="enter"
          @click="handleLogin"
        >
          登录
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobileActive: false,
      codeActive: false,
      mobile: '',
      verify_code: ''
    }
  },
  methods: {
    mobileFocus () {
      this.mobileActive = true
    },
    mobileBlur () {
      this.mobileActive = false
    },
    mobileClear () {
      this.mobile = ''
    },
    handleLogin () {
      this.$api.users.login({
        mobile: this.mobile,
        verify_code: this.verify_code
      }).then(result => {
        console.log(result)
        if (result.status === 200) {
          const token = result.data.token
          localStorage.setItem('user_token', JSON.stringify(token))
          this.getUserInfo()
        } else {
          this.$message.error('登录失败')
        }
      })
    },
    getUserInfo () {
      this.$api.users.detail().then(result => {
        console.log(result)
        if (result.status === 200) {
          const userInfo = result.data.userInfo
          this.$store.dispatch('setUserInfo', userInfo)
          this.getUserRole(userInfo.id)
        } else {
          this.$message.error('获取不到改用户信息')
        }
      })
    },
    getUserRole (uid) {
      this.$api.users.role({
        uid: uid
      }).then(result => {
        console.log(result)
        this.$router.push('/layout')
      })
    }
  }
}
</script>

<style lang="less" scope>
  @import './index';
</style>
