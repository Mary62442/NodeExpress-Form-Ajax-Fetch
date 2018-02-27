
getData = () => {
            
  let name = document.getElementById('nameGet').value;
  let surname = document.getElementById('surnameGet').value;
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()  {              
      if (this.readyState == 4 && this.status == 200) {

          document.getElementById('resultGet').innerHTML = this.responseText;


      }
  };

  xhttp.open('GET', `/getdataasync?name=${name}&surname=${surname}`, true);
  xhttp.send();
}

postData = () => {
  let name = document.getElementById('namePost').value;
  let surname = document.getElementById('surnamePost').value;
  let xhttp = new XMLHttpRequest();            
  xhttp.onreadystatechange = function()  {              
      if (this.readyState == 4 && this.status == 200) {
          document.getElementById('resultPost').innerHTML = this.responseText;
      }
  };
  xhttp.open('POST', '/postdataasync', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send(`name=${name}&surname=${surname}`);
}


fetchGetData = () => {
  let name = document.getElementById('nameGetFetch').value;
  let surname = document.getElementById('surnameGetFetch').value;
  fetch(`/getdataasyncfetch?name=${name}&surname=${surname}`, { method: "GET" })
  .then(response => {
    if (response.status >= 400) {
      status = response.status;
      console.log(response.status);      
    }    
    return response.json();
  })
  .then(data => {
    console.log(data);
    document.getElementById('resultGetFetch').innerHTML = data;
  }); 
}


fetchPostDataJson = () => {
  let name = document.getElementById('namePostFetch').value;
  let surname = document.getElementById('surnamePostFetch').value;

 
  fetch(`/postdataasyncfetch`, { 
    method: "POST",
    body:JSON.stringify({name:name, surname:surname}),
    headers: {
      'Content-type':'application/json'
    }
  })
  .then(response => {
    if (response.status >= 400) {
      status = response.status;
      console.log(response.status);      
    }    
    return response.json();
  })
  .then(data => {
    console.log(data);
    document.getElementById('resultPostFetch').innerHTML = data;
  }); 
}

/* fetchPostDataFormData = () => {
  let name = document.getElementById('namePostFetchFormData').value;
  let surname = document.getElementById('surnamePostFetchFormData').value;

  let formData = new FormData();

 formData.set('name',name);
 formData.set('surname',surname);
 

 
  fetch(`/postdataasyncfetch`, { 
    method: "POST",
    body:formData,
    headers: {
      'Content-type':'application/x-www-form-urlencoded'
    }
  })
  .then(response => {
    if (response.status >= 400) {
      status = response.status;
      console.log(response.status);      
    }    
    return response.json();
  })
  .then(data => {
    console.log(data);
    document.getElementById('resultPostFetchFormData').innerHTML = data;
  }); 
} */