document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-box.login form");
  const usernameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector('input[type="email"]');
  const passwordInput = form.querySelector('input[type="password"]');
  const rememberMe = form.querySelector('input[type="checkbox"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || email === "" || password === "") {
      alert("❌ يرجى ملء جميع الحقول");
      return;
    }
    if (username.length < 3) {
      alert("❌ اسم المستخدم يجب أن يكون 3 أحرف على الأقل");
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
      localStorage.setItem("rememberUser", username);
    } else {
      localStorage.removeItem("rememberUser");
    }

    window.location.href = "home.html" ; 
  });

  const savedUser = localStorage.getItem("rememberUser");
  if (savedUser) {
    usernameInput.value = savedUser;
    rememberMe.checked = true;
  }
});
