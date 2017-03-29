$(document).ready(function() {
    var x = "1";
    var x = new Promise(function(resolve, reject) {
        $.get("http://api.reimaginebanking.com/accounts/58d616e51756fc834d9064ce/purchases?key=9f3ad3aa21e67406784fb75a07145f36", function(data, status) {
            if (data) {
                console.log(data);
                x = data;
                resolve(data)
            }

        });
    });
    x.then(function(data) { console.log(data) });

    // Initialize Firebase
    var config = {
      apiKey: "",//Hidden for Security
      authDomain: "pennywise-fd6da.firebaseapp.com",
      databaseURL: "https://pennywise-fd6da.firebaseio.com",
      storageBucket: "pennywise-fd6da.appspot.com",
      messagingSenderId: ""//Hidden for Security
    };
    firebase.initializeApp(config);










    $('#login').click(login);
    $('#logout').click(logout);
    //Animations
    $('#hh1').addClass('animated fadeIn');

    function logout() {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
        });
    }




    function login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      https://www.googleapis.com/auth/gmail.readonly
      provider.addScope('https://www.googleapis.com/auth/gmail.readonly');

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;




           /* var request = gapi.client.request({
                'method': 'GET',
                'path': 'https://www.googleapis.com/gmail/v1/users/userId/messages',
                'params':
                {
                  'userId': 'me',
                  'maxResults':10,
                  'labelId':'CATEGORY_PROMOTIONS'
              }
              });
            request.execute(function(response) {
              console.log(response);
            }); */
        // addUser(user);
    function addUser(user){

      var d = new Date();
      d=d.toString();
      var userRef = firebase.database().ref().child('Users').child(user.uid);
      userRef.set({name: user.displayName, budget: 'empty', badmerchants:'empty', date: d });
      if(token){
              window.location.replace ('page_profile.html');
            }
    }












            //store in DB



            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

     var budget= getbudget();


          function getbudget(){
          return new Promise(function(resolve, reject){
          var query= firebase.database().ref('Users/'+'6DvsJKdMKSDV/'+'budget').orderByKey();
          query.on('value',function(snapshot){
            var jsonStr = JSON.stringify(budget);
            console.log(jsonStr);
                console.log(snapshot.val());
                resolve(snapshot.val());

          });

            });
        }






});
