const express = require('express')
require('./db')
const Post = require('./models/Post')
const User = require('./models/User')
const app = express()
app.use(express.json())


app.use((req,res,next) =>{
    const time = new Date().toLocaleTimeString()
    console.log(`[$ {req.method}] ${req.url} -${time}`)
    next()
})

app.get('/posts', async (req,res) =>{
  try{const posts = await Post.find().populate('authorId')
    res.json(posts)
  }catch(err){
    res.status(500).json({message : err.message})
  }
})

 
app.post('/posts', async (req, res) =>{
  
  try{
    const post = await Post.create(req.body)
    res.status(201).json(post)
  }catch(err){
    res.status(500).json({message : err.message})
  }
})


app.delete('/posts/:id', async (req,res) =>{
  try{
    await Post.findByIdAndDelete(req.params.id)
    res.json({message : "deleted"})
  } catch(err){
    res.status(500).json({message : err.message})
  }
})


app.post('/login', (req,res) =>{
  const{email,password} = req.body
  if(email && password){
    res.json({token : 'mock-jwt-token-12345'})
  }else{
    res.status(400).json({message : 'email and password required'})
  }
})

app.get('/posts/recent' , async (req,res) =>{
  try{
    const posts = await Post.find()
    .sort({createdAt : -1})
    .limit(3)
    res.json(posts)
  }catch(err){
    res.status(500).json({message : err.message})
  }
})

app.post('/users', async(req,res) => {
  try{
    const user = await User.create(req.body)
    res.status(201).json(user)
  }catch(err){
    res.status(500).json({message : err.message})
  }
} )
app.get('/users', async (req,res) =>{
  try{const users = await User.find()
    res.json(users)
  }catch(err){
    res.status(500).json({message : err.message})
  }
})



app.listen(5000,() => {
    console.log('server running onn port 5000')
    
})

