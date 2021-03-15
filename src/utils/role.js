import _ from 'lodash'
const cloudRoles = [
  {
    name: 'admin', // 超级管理员
    grade: 1,
    menus: ['basics', 'manage'],
    routers: ['']
  },
  {
    name: 'person', // 普通
    grade: 2,
    menus: ['basics'],
    routers: ['']
  }
]

const rolesGrade = function (name) {
  const n = _.findIndex(cloudRoles, item => item.name === name)
  if (n >= 0) {
    return cloudRoles[n].grade
  } else {
    return -1
  }
}

export {
  cloudRoles,
  rolesGrade
}
