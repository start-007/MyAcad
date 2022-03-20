var email=prompt("Please enter your Email", "batman@gmail.com");

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

while(!validateEmail(email)){
    var email=prompt("Please enter valid Email", "batman@gmail.com");
}

function appleStore(){
  window.open("https://www.apple.com/in/app-store/");
};

function googleStore(){
  window.open("https://play.google.com/store/apps/details?id=com.google.android.apps.podcasts");
}

function youTube(){
  window.open("https://www.youtube.com/channel/UCjzJ8GctyZQJzN-MBncaTYg");
}

function signUp(){
  window.open("https://retail.onlinesbi.com/personal/");
}

function twitter(){
  window.open("https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D");
}

function instagram(){
  window.open("https://www.instagram.com/accounts/login/");
}

function facebook(){
  window.open("https://www.facebook.com/");
}

function mail(){
  window.open('mailto:starteja.007@gmail.com');
}


