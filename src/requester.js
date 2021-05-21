
class Requester {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  get(path) {
    return fetch(`${this.baseUrl}${path}`, {
      method: 'get',
      headers: {'content-type': 'application/json'}
    })
      .then(response => response.json())
  }

  put(path, body) {
    return fetch(`${this.baseUrl}${path}`, {
      method: 'put',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(body)
    })
      .then(response => response.json())
  }

  delete(path) {
    return fetch(`${this.baseUrl}${path}`, {
      method: 'delete',
      headers: {'content-type': 'application/json'}
    })
      .then(response => response.json())
  }

  post(path, body) {
    return fetch(`${this.baseUrl}${path}`, {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(body)
    })
      .then(response => response.json())
  }
}

export const requester = new Requester('http://localhost:3001/')