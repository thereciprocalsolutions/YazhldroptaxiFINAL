//API
  var firebaseConfig = {
    apiKey: "AIzaSyApJyVkBmioQPGrpNikqP1yAlR9DMODGd4",
    authDomain: "taxi-booking-form-data.firebaseapp.com",
    projectId: "taxi-booking-form-data",
    databaseURL: "https://taxi-booking-form-data-default-rtdb.firebaseio.com",
    storageBucket: "taxi-booking-form-data.appspot.com",
    messagingSenderId: "928582427056",
    appId: "1:928582427056:web:181b9b490e7c59e0687675",
    measurementId: "G-93LNLNV2PM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Yazhldroptaxi/contact');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var phone = getInputVal('email');
    var pickup = getInputVal('phone');
    var drop = getInputVal('msg');
  
  
    // Save message
    saveMessage(name, phone, email, msg);
   alert("You're Booking has been submitted.Soon we'll contact you Or You can contact us on whatsapp anytime.");
    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    
  
    // Hide alert after 3 seconds
    setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
    },7000);
    
    //window.open('bookingSuccess.html', '_blank');
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, phone, email, msg){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name:name,
      phone:phone,
      email:email,
      masg:msg
    });
  }
