import express from 'express';
const app = express();

app.get('/api/jokes',(req,res)=>{
  const jokes = [
  {
    id: 1,
    joke: "Why don't scientists trust atoms? Because they make up everything!"
  },
  {
    id: 2,
    joke: "I told my computer I needed a break, and now it won't stop sending me KitKat ads."
  },
  {
    id: 3,
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
  },
  {
    id: 4,
    joke: "Parallel lines have so much in common. It’s a shame they’ll never meet."
  },
  {
    id: 5,
    joke: "Why did the math book look sad? Because it had too many problems."
  }
];
res.send(jokes);
});
 


const port= process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})