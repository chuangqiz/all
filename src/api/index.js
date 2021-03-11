import axios from 'axios'

const instance = axios.create({
  timeout: 10000
})

function $get(url, data = {}) {
  return instance.get(url, { params: data })
}

function $post(url, data = {}) {
  return instance.post(url, data)
}

class Services {
  users = {
    
  }
}