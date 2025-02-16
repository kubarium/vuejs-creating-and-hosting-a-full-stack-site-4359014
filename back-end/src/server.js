import express from "express"
import { MongoClient } from "mongodb"
import path from "path"

const app = express();
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "../assets")))


async function start() {

  const mongo = new MongoClient(`mongodb+srv://iam:yrZw6IVV2qL0C2zZ@cluster0.3qvtu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

  await mongo.connect()
  const db = mongo.db("fsv-db")

  app.get('/api/products', async (req, res) => {
    res.send(await db.collection("products").find({}).toArray())
  });
  app.get('/api/products/:id', async (req, res) => {
    res.json(await db.collection("products").findOne({ id: req.params.id }));
  });


  app.get('/api/users/:userID/cart', async (req, res) => {
    res.json((await db.collection("users").findOne({ id: req.params.userID })).cart);
  });
  app.post('/api/users/:userID/cart', async (req, res) => {
    await db.collection("users").updateOne({ id: req.params.userID }, {
      $push: {
        cart: { id: req.body.id, quantity: req.body.quantity }
      }
    })
    
    res.json((await db.collection("users").findOne({ id: req.params.userID })).cart);
  })
  app.delete('/api/users/:userID/cart/:id', (req, res) => {
    cartItems = cartItems.filter(product => product.id != req.params.id)
    res.json(cartItems)
  })

  app.listen(8000, () => {
    console.log('listening at 8000');
  })
}

start()