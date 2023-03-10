
const routeHandler=(req,res)=>{

    const url=req.url;
    const users=["Vasu Oberoi", "Megha Oberoi", "Raghav Oberoi", "Pari Oberoi","Dbtean-Bot"];
    if(url==='/')
    {
          res.write('<html>');
          res.write('<h1>Hi there thanks for visiting this Page </h1>');
          
          res.write('<form action="/create-user" method="post">');
          
          res.write(`<label for="username">User Name :  </label>`);
          res.write(`<input type="text" name="x-name" id="username"> `);
          res.write('<input type="submit" value="Submit">');
            

          res.write('</form>');          
        
        
        res.write('</html>');
        return res.end();
    }else if(url==='/users')
    {
          res.write('<html>');
          
          res.write('<ul>');
            
          res.write(`<li>${users[0]}</li>`);
          res.write(`<li>${users[1]}</li>`);
          res.write(`<li>${users[2]}</li>`);
          res.write(`<li>${users[3]}</li>`);  
          res.write(`<li>${users[4]}</li>`);



          res.write('</ul>');


          res.write('</html>')
          return res.end();
    }else if(url==='/create-user')
    {
        const data=[];
        // Parsing-Data : Streams and Buffers.
        // Parsing Incoming Req Data will be easier with Express.js.
        req.on('data',(chunk)=>{
         console.log(chunk);
         data.push(chunk);
        });
        
        req.on('end',()=>{
          const parsedBody=Buffer.concat(data).toString();
          console.log(parsedBody.split('=')[1]);
        })
         
        res.statusCode=302;
        res.setHeader('Location','/users');


        return res.end();
    }




res.end();
}

function normal() {
console.log('Hi there');
}


module.exports={
    
    RouteHandler:routeHandler
};