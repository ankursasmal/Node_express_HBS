//  **** only problemb i want to pass api value from '/' rout to insex.html static file.
// and use it in ipublic/index.html file.
 
 let path=require('path');
let express=require('express');
let hbs=require('hbs');
const PORT=process.env.PORT || 4000;

let app=express();

// to reach html file
let staticPath=path.join(__dirname,'../public');
// connect static folder to app, req route
app.use(express.static(staticPath));

// define view engine
app.set('view engine','hbs');

// conncet partial to hbs engine
let partialsPath=path.join(__dirname,'../views/partials');

hbs.registerPartials(partialsPath);

// middelwear
app.use((req,res,next)=>{
    next();
})

// frist dynamic e khulba if error on load dynamic then static web run top to buttom flow

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        url2:"https://plus.unsplash.com/premium_photo-1686063712972-e5f1c72a25e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     url:'https://plus.unsplash.com/premium_photo-1714589991638-235c15633f59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
               url1:'https://images.unsplash.com/photo-1714498988220-d6783c81a2a2?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
})
});

// static render
app.get('/',(req,res)=>{
res.sendFile(path.join(staticPath,'av.html'));
})

// ***************** by default public ar indexe.html display hoba / routa staic render lik 
// ar na lik karaonpublic aga preferance  1. oter file normal rule follow kora jaka / a 
// likbo sa dispaly hoba static or dynamic ja file ka render korab sai render hoba



// dynamic render
app.get('/home',(req,res)=>{
    res.render('home.hbs',{
        url2:"https://plus.unsplash.com/premium_photo-1686063712972-e5f1c72a25e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     url:'https://plus.unsplash.com/premium_photo-1714589991638-235c15633f59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
               url1:'https://images.unsplash.com/photo-1714498988220-d6783c81a2a2?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
});
    })


    // api vale pass from server to hbs file
app.get('/about',(req,res)=>{
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
      res.render('about.hbs',{
        url:'https://plus.unsplash.com/premium_photo-1714589991638-235c15633f59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
        url1:'https://images.unsplash.com/photo-1714498988220-d6783c81a2a2?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        url2:"https://plus.unsplash.com/premium_photo-1686063712972-e5f1c72a25e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         data:data.products
    });
});

  
})
app.get('/contact',(req,res)=>{
    // that way easyly we pass props api also pass from hera
    res.render('contact.hbs',{
        url:'https://images.unsplash.com/photo-1715427345776-b3c07159c12f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url2:"https://images.unsplash.com/photo-1713494500139-a0d182b60cb8?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
})
app.get('/cart',(req,res)=>{
    res.render('cart.hbs');
})
 
// static and Dynamic both same time not exiquit only one exiqiiut at same becaues 1.render
// and 2.sendFile terminate rout if sendFile exiquit then render not exiquited.
// app.get('/login',(req,res)=>{
//     res.render('login.hbs');
//     res.sendFile(path.join(staticPath,'template.html'));
    
// })




app.get('*',(req,res)=>{
    res.render('Error404.hbs',{
        error:'opps page not found 404 error'
    });

})
app.listen(PORT,'127.0.0.1',()=>{
    console.log('ok')
})