import Mock from 'mockjs'
Mock.mock('/v2', 'post', {
  token: 123
})

Mock.mock('/detail', 'get', {
  userInfo: {
    id: '123456',
    mobile: '123456789',
    name: 'zhangsan',
    nickName: 'zhangsan'
  }
})

Mock.mock(RegExp('/role' + '*'), 'get', {
  role: {
    client_id: '123456',
    name: 'admin'
  }
})
