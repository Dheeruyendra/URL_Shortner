const express = require('express');
const router = express.Router();
const shortid = require('shortid');


const urls = {};


router.get('/', (req, res)=>{
     const urls_list = [];
     Object.keys(urls).forEach((url_id)=>{
         urls_list.push({id: url_id, long_url : urls[url_id].long_url});
     })
      res.status(200).send(urls_list);  

});


router.post('/', (req, res)=>{

    const long_url = req.body.long_url;
    const id = shortid.generate();
     urls[id]=long_url; 


    res.send({id});
   
});

router.get('/:id', (req, res)=>{

  const id = req.params.id;
   
   const long_url = urls[id];
  
   if(long_url){
        

   res.status(200).send(
         {
            id : id,
            long_url : long_url
         }
   ); 
   }else{
       res.status(404).send('Error! Invalid short url id ');
   }

});


module.exports = router;