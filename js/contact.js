// function openMenu()  {
//     document.getElementById("mobileMenu").classList.add("open")
// }

// function closeMenu() {
//     document.getElementById("mobileMenu").classList.remove("open")
// }

// const toggle = document.querySelector('.dropdown-toggle');
// const submenu = document.querySelector('.submenu');

// toggle.addEventListener('click', (e) => {
//     e.preventDefault();
//     submenu.style.display =
//      submenu.style.display === 'block' ? 'none' : 'block';
// })


// confirm JS is loaded
console.log("Contact JS loaded");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🚫 stop reload

    console.log("Form submitted");

    emailjs.sendForm(
      "service_s5u55fu",
      "template_8zf1tam",
      form,
      "szgxvejyFbwSl6GGB"
    )
    .then(function () {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch(function (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message.");
    });
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   const submitBtn = document.getElementById('submitBtn');
//   submitBtn.addEventListener('click', function() {
//       const form = document.getElementById("contactForm");

//   if (!form) {
//     console.error("Form not found");
//     return;
//   }

//   form.addEventListener("submit", function (e) {
//     e.preventDefault(); // 🚫 stop reload

//     console.log("Form submitted");

//     emailjs.sendForm(
//       "service_s5u55fu",
//       "template_8zf1tam",
//       form,
//       "szgxvejyFbwSl6GGB"
//     )
//     .then(function () {
//       alert("Message sent successfully!");
//       form.reset();
//     })
//     .catch(function (error) {
//       console.error("EmailJS Error:", error);
//       alert("Failed to send message.");
//     });
//   });
//   });
// });

// function sendMail(){
//   let parms = {
//     first_name : document.getElementById("first_name").value,
//     last_name : document.getElementById("last_name").value,
//     email : document.getElementById("email").value,
//     phone : document.getElementById("phone").value,
//     inquiry : document.getElementById("inquiry").value,
//     message : document.getElementById("message").value,
//   }

//   emailjs.send("service_s5u55fu","template_8zf1tam",parms).then(alert("Message Sent!!"))
// }

