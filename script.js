  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider ,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8U6hOvr6QP9DSDKxMQ5qIiIEhjdbjxPc",
  authDomain: "authetication-85c4d.firebaseapp.com",
  projectId: "authetication-85c4d",
  storageBucket: "authetication-85c4d.firebasestorage.app",
  messagingSenderId: "379031153136",
  appId: "1:379031153136:web:8acfbcace6d0d165761535",
  measurementId: "G-EXK9PS7409"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const Analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();

// Sign Up
document.getElementById("signup-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("SignUp successful...✔");
      window.location.href = "form.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
});
// Login
document.getElementById("login-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password )
    .then(() => {
      alert("Login Successful!");
      window.location.href = "form.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
});

// Google Sign Up
document.getElementById("google-signup-btn")?.addEventListener('click', () => {
  signInWithPopup(auth, provider)
      .then(() => {
          alert("Signup successfully!!");
          window.location.href = "form.html";
      })
      .catch((error) => {
          document.getElementById("message").innerText = error.message;
      });
});

// Google Login
document.getElementById("google-login-btn")?.addEventListener('click', () => {
  signInWithPopup(auth, provider)
      .then(() => {
          alert("Login successfully!!");
          window.location.href = "form.html";
      })
      .catch((error) => {
          document.getElementById("message").innerText = error.message;
      });
});

// Logout
document.getElementById("logout-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      alert("Logout Successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
        document.getElementById("message").innerText = error.message;
    });
});

// Reset Password
document.getElementById("reset-password")?.addEventListener('click' , (e) => {
  e.preventDefault();

  const email = prompt('Please enter a email address');
  if(email){
    sendPasswordResetEmail(auth , email)
    .then(()=>{
      alert("Password Reset!! <br>  Email Sent , Check Your Inbox")
    })
    .catch((error)=>{
      document.getElementById("message").innerText = error.message;
    })
  }
  else{
      alert("Enter a valid Email Address!!")
  }
})

// Logout
document.getElementById("logout-btn")?.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Logged Out Successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});

//Resett Password :

document.getElementById('reset-password-link')?.addEventListener('click', (e)=>{
  e.preventDefault();
  let email = prompt('Please Enter Your Email');
  if (email){
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      alert('Password Reset Email Send , Check Your Inbox');
    })
  .catch((error)=>{
    alert(error.message);
  })
  }
else{
  alert('Please Enter Valid Email Address!!')
}
})










































































// // Show User Email on Welcome Page
// onAuthStateChanged(auth, (user) => {
//   if (user && window.location.pathname.includes("welcome.html")) {
//     document.getElementById("user-email").textContent = user.email;
//   } else if (!user && window.location.pathname.includes("welcome.html")) {
//     window.location.href = "index.html";
//   }
// });

// //Firebase folder name : Authentication

// //* {
//   box-sizing: border-box;
// }

// body {
//     margin: 0;
//     font-family: 'Poppins', sans-serif;
//     line-height: 1.6;
//     background: linear-gradient(135deg, #deeeffea, #1f7ac9, #0274ef);
//     animation: backgroundShift 30s ease infinite alternate;
//     background-repeat: no-repeat;
//     background-size: 400% 400%;
//     min-height: 100vh;
//     display: flex;
//     align-items: flex-start;
//     justify-content: center;
//     padding: 60px 20px 20px;
// }

// @keyframes backgroundShift {
//     0% { background-position: 0% 50%; }
//     50% { background-position: 50% 100%; }
//     100% { background-position: 100% 50%; }
// }

// #auth-container,#welcome-page {
//     width: 100%;
//     max-width: 400px;
//     padding: 35px 28px;
//     background: linear-gradient(145deg, #ffffff, #f0f4ff);
//     border-radius: 20px;
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     animation: slideDown 0.8s ease forwards;
//     opacity: 0;
//     margin-top: 3rem;
// }

// @keyframes slideDown {
//     from { transform: translateY(-30px); opacity: 0; }
//     to { transform: translateY(0); 
//     opacity: 1; }
// }

// #auth-container,#welcome-page:hover {
//     transform: scale(1.03);
//     box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
// }

// #auth-container h2 {
//     margin-bottom: 25px;
//     font-size: 30px;
//     color: #007bff;
// }

// #auth-container input,
// #auth-container button, #logout-btn {
//     width: 90%;
//     padding: 10px;
//     margin-bottom: 12px;
//     font-size: 15px;
// }

// #auth-container input {
//     border: 1px solid #ccc;
//     border-radius: 8px;
//     transition: all 0.3s ease;
// }

// #auth-container input:focus {
//     outline: none;
//     border-color: #007bff;
//     box-shadow: 0 0 10px rgba(0, 123, 255, 0.4);
// }

// #auth-container button {
//     background: linear-gradient(to right, #0066ff, #33ccff);
//     color: white;
//     border: none;
//     border-radius: 20px;
//     font-weight: 500;
//     cursor: pointer;
//     transition: background 0.4s, transform 0.2s ease;
// }

// #auth-container button:hover {
//     background: linear-gradient(to right, #0052cc, #3399ff);
//     transform: scale(1.05);
// }
//     /*logout btn */
//     #welcome-page{
//         background: linear-gradient(to right, #0066ff, #33ccff);
//         color: white;
//         border: none;
//         border-radius: 20px;
//         font-weight: 500;
//         cursor: pointer;
//         transition: background 0.4s, transform 0.2s ease;
//     }
//     #welcome-page:hover{
//         background: linear-gradient(to right, #0052cc, #3399ff);
//         transform: scale(1.05);
//     }
//      /*logout btn */
// #welcome-page{
//     color: white;
//     border: none;
//     border-radius: 20px;
//     font-weight: 500;
//     cursor: pointer;
//     transition: background 0.4s, transform 0.2s ease;
// }
// #welcome-page:hover{
//     background: linear-gradient(to right, #0052cc, #3399ff);
//     transform: scale(1.05);
// }

// #auth-container p {
//     margin-top: 10px;
//     font-size: 13px;
//     color: #444;
//     text-align: center;
// }

// #auth-container a {
//     color: #007bff;
//     text-decoration: none;
//     transition: color 0.3s ease;
// }

// #auth-container a:hover {
//     text-decoration: underline;
//     color: #0056b3;
// }

// @media (max-width: 500px) {
//     #auth-container {
//         max-width: 90%;
//         padding: 30px 22px;
//     }

//     #auth-container h2 {
//         font-size: 24px;
//     }

//     #auth-container input,
//     #auth-container button {
//         width: 95%;
//         padding: 10px;
//         font-size: 14px;
//     }
// }



