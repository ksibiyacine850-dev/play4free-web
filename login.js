document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-box.login form");

  const emailInput = form.querySelector('input[type="email"]');
  const passwordInput = form.querySelector('input[type="password"]');
  const rememberMe = form.querySelector('input[type="checkbox"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
      alert("❌ يرجى ملء جميع الحقول");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("❌ البريد الإلكتروني غير صالح");
      return;
    }

    if (password.length < 6) {
      alert("❌ كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }

    if (rememberMe.checked) {
      localStorage.setItem("rememberEmail", email);
    } else {
      localStorage.removeItem("rememberEmail");
    }

    window.location.href = "home.html"; 

  });

  const savedEmail = localStorage.getItem("rememberEmail");
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberMe.checked = true;
  }
});
