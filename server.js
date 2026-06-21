const express = require('express')
const app = express()
app.use(express.json())
let blogPosts = []


app.use((req,res,next) =>{
    const time = new Date().toLocaleTimeString()
    console.log(`[$ {req.method}] ${req.url} -${time}`)
    next()
})

app.get('/posts',(req,res) =>{
    res.json(blogPosts)
})

 
app.post('/posts', (req, res) =>{
    const post = req.body
    post.id =Date.now()
    blogPosts.push(post)
    res.json(post)
})

app.get('/posts/:id',(req,res)=>{
  const id = parseInt(req.params.id)
  const post = blogPosts.find(p=> p.id === id)
  if(post){
    res.json(post)
  }else{
    res.status(404).json({message : 'post not found'})
  }
})

app.delete('/posts/:id',(req,res) =>{
    const id = parseInt(req.params.id)
    blogPosts = blogPosts.filter(p => p.id !==id)
    res.json({message : 'deleted'})
})

app.put('/posts/:id',(req,res)=>{
  const id = parseInt(req.params.id)
  const index = blogPosts.findIndex(p=> p.id ===id)
  blogPosts[index] = {...blogPosts[index], ...req.body}
  res.json(blogPosts[index])
})

app.post('/login', (req,res) =>{
  const{email,password} = req.body
  if(email && password){
    res.json({token : 'mock-jwt-token-12345'})
  }else{
    res.status(400).json({message : 'email and password required'})
  }
})




app.listen(5000,() => {
    console.log('server running onn port 5000')
    
})

