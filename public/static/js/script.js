

let input = document.querySelector('#user_input');
let output = document.querySelector('#result_box');

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

function shortner(){
   if(input.value.length == 0){
       output.value = null;
    
    input.value = "Please! Enter valid URL";

    setTimeout( ()=>{
      input.value = null}
    ,1000);

     
   }else{

        fetch('./api/urls/', {
        method: 'POST',
        body: JSON.stringify({
            long_url: input.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
  .then((response) => response.json())
      .then((json) => {
          output.value = `${json.id}`;

});

}
}

function Allclear(){
     input.value = null;
     output.value = null;

}

function copytext(){
    const copyText = output.value;
    copyText.select();
    document.execCommand('copy');
    copyUrl.textContent = 'Copied';
    
}



btn2.addEventListener('click', Allclear);


btn1.addEventListener('click', shortner);


btn3.addEventListener('click', copytext)
