import axios from 'axios'

const instance = axios.create({
  timeout: 10000
})

function $get (url, data = {}) {
  return instance.get(url, { params: data })
}

function $getHeader (url, data = {}) {
  return instance.get(url, {
    params: data,
    headers: {
      Authorization: JSON.parse(localStorage.getItem('user_token'))
    }
  })
}

function $post (url, data = {}) {
  return instance.post(url, data)
}

class Services {
  users = {
    login: data => $post('/v2', data),
    detail: data => $getHeader('/detail', data),
    role: data => $get('/role', data)
  }
}

export const services = new Services()
