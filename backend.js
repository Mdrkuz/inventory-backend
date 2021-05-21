const cors = require('cors')
const express = require('express')
const app = express()
const port = 3001

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})


class List {
  constructor(name, price, quantity, id) {
    this.id = id
    this.name = name
    this.price = Number(price)
    this.quantity = Number(quantity)
    this.code = Math.random()
    
  }
}


class InventoryList {
  constructor() {
    this.list = []
    this.idCounter = 0
    this.mode = false
  }

  create(name, price, quantity) {
    const newItemName = name
    const newItemPrice = price
    const newItemQuantity = quantity
    const inventoryItem = this.list.find(it => it.name === newItemName)
    if(inventoryItem) {
      inventoryItem.quantity = Number(newItemQuantity) + inventoryItem.quantity
    } else {
      this.list = [...this.list, new List(newItemName, newItemPrice, newItemQuantity, ++this.idCounter)]
    }
    return this.list
  }

  delete(id) {
    this.list = this.list.filter(it => it.id !== Number(id))
    this.list.idCounter = --this.idCounter
    return this.list
  }

  find(productName) {
    const filtered = productName ? inventoryList.list.filter(it => it.name.includes(productName)) : inventoryList.list
    return filtered
  }

  sorted(field, direction) {
  
  let sortedInventory = direction === 'asc' ? [...this.list].sort((a, b) => {
    if(a[field].localeCompare) {
      return a[field].localeCompare(b[field])
    }
    return a[field] - b[field]
  }) : [...this.list].sort((a, b) => {
    if(b[field].localeCompare) {
      return b[field].localeCompare(a[field])
    }
    return b[field] - a[field]
  });

  return sortedInventory
  }

  increment(id) {
    const inventoryItem = inventoryList.list.find(it => it.id === Number(id))
    if(inventoryItem) {
      inventoryItem.quantity += 1
    }
    return inventoryList.list
  }

  decrement(id) {
    const inventoryItem = inventoryList.list.find(it => it.id === Number(id))
    if(inventoryItem) {
      inventoryItem.quantity -= 1
    }
    return inventoryList.list
  }
}

const inventoryList = new InventoryList()


app.get('/list', (req, res) => {
  const search = req.query.search
  const field = req.query.field
  const direction = req.query.direction

  if(search) {
    const filtered = inventoryList.find(search)
    res.send(filtered)
    return 
  }  
  if(field) {
    const sortedInventory = inventoryList.sorted(field, direction)
    res.send(sortedInventory)
    return
  } 
  res.send(inventoryList.list)  
})

app.delete('/list/:id', ((req, res) => {
  const newInventoryList = inventoryList.delete(req.params.id)
  res.send(newInventoryList)
  return
}))

app.put('/list', ((req, res) => {
  const newInventoryList = inventoryList.create(req.body.name, req.body.price, req.body.quantity)
  res.send(newInventoryList)
  return
}))

app.post('/list', ((req, res) => {
  res.send(inventoryList.list)
}))

app.post('/list/:id/increment', (req, res) => {
  const newInventoryList = inventoryList.increment(req.params.id)
  res.send(newInventoryList)
  return 
})

app.post('/list/:id/decrement', (req, res) => {
  const newInventoryList = inventoryList.decrement(req.params.id)
  res.send(newInventoryList)
  return 
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})