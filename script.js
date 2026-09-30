// שנה נוכחית בתחתית
document.getElementById("year").textContent = new Date().getFullYear();

// שליחת הטופס בלי לעזוב את העמוד (עובד כשהאתר מאוחסן ב-Netlify)
const form = document.getElementById("contact-form");
const status = form.querySelector(".form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "שולח...";
  try {
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    });
    if (!res.ok) throw new Error(res.status);
    form.reset();
    status.textContent = "הפרטים נשלחו. אחזור אליכם בהקדם.";
  } catch {
    status.textContent = "השליחה לא עברה. אפשר להתקשר ישירות: 052-2265303";
  }
});
