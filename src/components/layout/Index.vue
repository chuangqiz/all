<template>
  <div>
    <el-container>
      <el-header>后台管理系统</el-header>
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
export default {}
</script>

<style lang="less">
@import "./Index.less";
</style>
