const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const connectionString = 'mongodb+srv://vincinchristmas:TXqiqz9qo6RtzWeB@cluster0.yumwt7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

MongoClient.connect(connectionString).then(client => {

    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    app.get('/', (req, res) => {
      db.collection('BookTitles').find().toArray().then(BookTitles => {
        res.render('index.ejs', {BookTitles : BookTitles})
      })
      .catch(error => console.error(error))  
    })

    app.post('/BookTitles', (req, res) => {
      booksCollection.insertOne(req.body)
         .then(result => {
          res.redirect('/')
         })
         .catch(error => console.error(error))
    })

    app.put('/BookTitles', (req, res) => {
      booksCollection.findOneAndUpdate(    { name: 'Andrew Carnegie' },
      {
        $set: {
          name: req.body.name,
          BookTitles: req.body.BookTitles,
        },
      },
      {
        upsert: true,
      })
      .then(result => res.json('Success'))
      .catch(error => console.error(error))
    })
  
    app.delete('/BookTitles', (req, res) => {
      booksCollection
      .deleteOne({ name: req.body.name })
    .then(result => {
      if (result.deletedCount === 0) {
        return res.json('No BookTitles to delete')
      }
      res.json(`Deleted all book tities`)
    })
    .catch(error => console.error(error))
    })

    app.listen(3000, function () {
      console.log('listening on 3000')
    })

    console.log('connected to database')


    const db = client.db('My-Book-Wish-List')
    const booksCollection = db.collection('BookTitles')

   
  })

  .catch(error => console.error(error))








  