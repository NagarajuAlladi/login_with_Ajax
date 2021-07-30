// var username1 = document.getElementById('username');
// var email1 = document.getElementById('email');
// var password1 = document.getElementById('password');

// //console.log(username.value);

// document.getElementById("login_form").addEventListener
// ("submit",loadData);


// function loadData(e){
// e.preventDefault();

// console.log(username1.value,email1.value,password1.value);
// }


        var username1 = document.getElementById('username');
        var email1 = document.getElementById('email');
        var password1 = document.getElementById('password');

        var error1 = document.getElementById('error1');
        var error2 = document.getElementById('error2');

        //console.log(username.value);
        console.log(username1.value,email1.value,password1.value);

        document.getElementById("login_form").addEventListener
       ("submit",loadData);


    function loadData(e){
        e.preventDefault();
        if(username1.value === ""){
            error1.innerText = "Please enter valid username"
        }
        else if(username1.value.length<8 || username1.value.length >= 15){
            error1.innerText = "username should containe 8 to 15 characters";
        }else if(email1.value === ""){
            error2.innerText="Please enter valid email"
        }
        else{
            error1.innerHTML = "";
            error2.innerText = "";
            
            loadAPI();
            document.querySelector(".outside_div").style.display = "none";
            // window.location.replace("ajax.html");
        }
        console.log(username1.value,email1.value,password1.value);
    
    }

    function loadAPI() {
        console.log('hello');
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/users/", true);
        xhttp.onload = function() {
          if (this.status == 200) {
           var result = JSON.parse(this.responseText);
           console.log(result);
           let output = '';
           let c = 0;
            result.map(user => {
              console.log(user.id);
             output+= `
              <div id="user-details" key="${user.id}" >
                <h2 id="name">Name : ${user.name}</h2>
                <h4 id="email">Email: ${user.email}</h4>
                <h4 id="mobile">Mobile: ${user.phone}</h4>
                <h4 id="company">Compnay: ${user.company.name}</h4>
              </div>
              `
              //c++;
            })
            document.getElementById('users').innerHTML = output;
          }
        };
        // xhttp.open("GET", "https://jsonplaceholder.typicode.com/users/", true);
        xhttp.send();
    }


