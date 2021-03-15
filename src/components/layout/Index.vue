<template>
  <div>
    <el-container>
      <el-header>
        <div class="header-wrapper">
          <div class="header-left">后台管理系统</div>
          <div class="header-right">
            <el-dropdown placement="bottom" @command="handleCommand">
              <div class="user-info">
                <div class="icon"></div>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu>
            <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页123</span>
          </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import menus from '../../utils/menu'
import { cloudRoles } from '../../utils/role'
import { mapState } from 'vuex'
import _ from 'lodash'
export default {
  data () {
    return {
      navMenus: []
    }
  },
  computed: {
    ...mapState(['userInfo', 'userRole'])
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化菜单
    init () {
      // 根据角色显示相关菜单
      const roleIndex = _.findIndex(cloudRoles, roleItem => roleItem.name === this.userRole.name)
      if (roleIndex >= 0) {
        const roleMenus = cloudRoles[roleIndex].menus
        _.map(roleMenus, roleMenuItem => {
          const x = _.findIndex(menus, menuItem => menuItem.name === roleMenuItem)
          if (x >= 0) {
            this.navMenus = _.concat(this.navMenus, menus[x])
          }
        })
      }
      console.log(this.navMenus)
    },
    handleCommand (command) {
      if (command === 'logout') {
        this.$store.dispatch('logout')
      }
    }
  }
}
</script>

<style lang="less">
@import "./Index.less";
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-right {
    display: flex;
    align-items: center;
    .user-info {
      height: 100%;
      .icon {
        width: 36px;
        height: 36px;
        overflow: hidden;
        background: url('../../assets/images/user-icon.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }
    }
  }
}
</style>
