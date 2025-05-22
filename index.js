import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))






app.get("/", (req, res) => {
    
    res.render("index.ejs")
  });

  app.use("/home", (req, res) =>{
    res.render("index.ejs")
  })
  
  

 


  app.get("/politic", (req, res) =>{
    res.render("pol.ejs")
  })

  app.get("/bus", (req, res) =>{
   res.render("bus.ejs")
  })

  app.get("/enter", (req, res) =>{

  })

  app.get("/sport", (req, res) =>{
   res.render("sport.ejs")
  })

  app.get("/music", (req, res) =>{
   res.render("music.ejs")
  })

  app.get("/celeb", (req, res) =>{
   res.render("celeb.ejs")
  })


  app.get("/another-page", (req, res) =>{
    res.render("ano.ejs")
  })
  app.get("/another-page1", (req, res) =>{
    res.render("another1.ejs")
  })

  app.get("/another-page2", (req, res) =>{
    res.render("another2.ejs")
  })

  app.get("/another", (req,res) =>{
    res.render("another3.ejs")
  })

  app.get("/another2", (req, res) =>{
    res.render("another4.ejs")
  })

 
app.get("/index-page", (req,res)=>{
  res.render("page.ejs")
})

app.get("/index-three",(req,res)=>{
  res.render("index-three.ejs")
})


app.get("/index-four",(req,res)=>{
  res.render("index-four.ejs")
})

app.get("/index-five",(req,res)=>{
  res.render("index-five.ejs")
})

app.get("/index-six",(req,res)=>{
  res.render("index-six.ejs")
})

app.get("/index-seven ",(req,res)=>{
  res.render("index-seven.ejs")
})

app.get("/index-eight",(req,res)=>{
  res.render("index-eight.ejs")
})

app.get("/index-nine",(req,res)=>{
  res.render("index-nine.ejs")
})


app.get("/index-ten",(req,res)=>{
  res.render("index-ten.ejs")
})

app.get("/pol-1",(req,res)=>{
  res.render("pol-index1.ejs")
})

app.get("/pol-2",(req,res)=>{
  res.render("pol-index2.ejs")
})

app.get("/pol-3",(req,res)=>{
  res.render("pol-index3.ejs")
})


app.get("/pol-4",(req,res)=>{
  res.render("pol-index4.ejs")
})

app.get("/pol-5",(req,res)=>{
  res.render("pol-index5.ejs")
})


app.get("/pol-6",(req,res)=>{
  res.render("pol-index6.ejs")
})


app.get("/pol-7",(req,res)=>{
  res.render("pol-index7.ejs")
})


app.get("/pol-8",(req,res)=>{
  res.render("pol-index8.ejs")
})


app.get("/pol-9",(req,res)=>{
  res.render("pol-index9.ejs")
})

app.get("/pol-10",(req,res)=>{
  res.render("pol-index10.ejs")
})



app.get("/bus-1",(req,res)=>{
  res.render("bus-index1.ejs")
})


app.get("/bus-2",(req,res)=>{
  res.render("bus-index2.ejs")
})


app.get("/bus-3",(req,res)=>{
  res.render("bus-index3.ejs")
})


app.get("/bus-4",(req,res)=>{
  res.render("bus-index4.ejs")
})


app.get("/bus-5",(req,res)=>{
  res.render("bus-index5.ejs")
})


app.get("/bus-6",(req,res)=>{
  res.render("bus-index6.ejs")
})


app.get("/bus-7",(req,res)=>{
  res.render("pol-index10.ejs")
})



app.get("/bus-8",(req,res)=>{
  res.render("pol-index10.ejs")
})


app.get("/bus-9",(req,res)=>{
  res.render("pol-index10.ejs")
})


app.get("/bus-10",(req,res)=>{
  res.render("pol-index10.ejs")
})



app.get("/bus-10",(req,res)=>{
  res.render("pol-index10.ejs")
})



app.get("/celeb-1",(req,res)=>{
  res.render("celebs-index1.ejs")
})


app.get("/celeb-2",(req,res)=>{
  res.render("celebs-index2.ejs")
})


app.get("/celeb-3",(req,res)=>{
  res.render("celebs-index3.ejs")
})

app.get("/celeb-4",(req,res)=>{
  res.render("celebs-index4.ejs")
})

app.get("/celeb-5",(req,res)=>{
  res.render("celebs-index5.ejs")
})

app.get("/celeb-6",(req,res)=>{
  res.render("celebs-index6.ejs")
})

app.get("/celeb-7",(req,res)=>{
  res.render("celebs-index7.ejs")
})

app.get("/celeb-8",(req,res)=>{
  res.render("celebs-index8.ejs")
})

app.get("/celeb-9",(req,res)=>{
  res.render("celebs-index9.ejs")
})

app.get("/celeb-10",(req,res)=>{
  res.render("celebs-index10.ejs")
})


app.get("/sports-1",(req,res)=>{
  res.render("sports-index1.ejs")
})

app.get("/sports-2",(req,res)=>{
  res.render("sports-index2.ejs")
})

app.get("/sports-3",(req,res)=>{
  res.render("sports-index3.ejs")
})

app.get("/sports-4",(req,res)=>{
  res.render("sports-index4.ejs")
})

app.get("/sports-5",(req,res)=>{
  res.render("sports-index5.ejs")
})

app.get("/sports-6",(req,res)=>{
  res.render("sports-index6.ejs")
})

app.get("/sports-7",(req,res)=>{
  res.render("sports-index7.ejs")
})

app.get("/sports-8",(req,res)=>{
  res.render("sports-index8.ejs")
})


app.get("/sports-9",(req,res)=>{
  res.render("sports-index9.ejs")
})

app.get("/sports-10",(req,res)=>{
  res.render("sports-index10.ejs")
})




  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });