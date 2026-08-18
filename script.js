// Populate year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (simple class toggle)
const themeToggle = document.getElementById('themeToggle');
themeToggle && themeToggle.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('dark');
  themeToggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
});

// Contact form handling — open mailto as fallback
const form = document.getElementById('contactForm');
const result = document.getElementById('formResult');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      result.textContent = 'Please complete all fields.';
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:krithishkumar2@gmail.com?subject=${subject}&body=${body}`;
    result.textContent = 'Opening mail client...';
  });
}

// Copy email button
const copyEmail = document.getElementById('copyEmail');
if(copyEmail){
  copyEmail.addEventListener('click', async ()=>{
    try{
      await navigator.clipboard.writeText('krithishkumar2@gmail.com');
      result.textContent = 'Email copied to clipboard.';
    }catch(e){
      result.textContent = 'Could not copy — please copy manually.';
    }
  });
}

// Quick phone/email click handlers (optional)
const phoneLink = document.getElementById('phoneLink');
const emailLink = document.getElementById('emailLink');
if(phoneLink) phoneLink.addEventListener('click', ()=>{/* native tel handled by browser */});
if(emailLink) emailLink.addEventListener('click', ()=>{/* native mailto handled */});
