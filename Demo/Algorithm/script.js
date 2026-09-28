const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const scrollTopButton = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const formStatus = document.getElementById('formStatus');

const toggleMenu = (forceOpen) => {
    const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !navLinks.classList.contains('is-open');

    navLinks.classList.toggle('is-open', shouldOpen);
    menuToggle.classList.toggle('is-open', shouldOpen);
    menuToggle.setAttribute('aria-expanded', String(shouldOpen));
    document.body.classList.toggle('menu-open', shouldOpen);
};

menuToggle?.addEventListener('click', () => toggleMenu());

navLinks?.addEventListener('click', (event) => {
    const clickedLink = event.target.closest('a');

    if (!clickedLink) {
        return;
    }

    toggleMenu(false);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        toggleMenu(false);
    }
});

const handleScroll = () => {
    const hasScrolled = window.scrollY > 24;

    navbar?.classList.toggle('scrolled', hasScrolled);
    scrollTopButton?.classList.toggle('show', window.scrollY > 480);
};

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

scrollTopButton?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

const sections = [...document.querySelectorAll('main section[id], header[id]')];
const sectionLinks = [...document.querySelectorAll('.nav-links a')];

const setActiveLink = () => {
    const currentSection = sections
        .slice()
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= 150);

    if (!currentSection) {
        return;
    }

    sectionLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentSection.id}`);
    });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

const revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 })
    : null;

document.querySelectorAll('.section-reveal').forEach((element) => {
    if (revealObserver) {
        revealObserver.observe(element);
    } else {
        element.classList.add('is-visible');
    }
});

contactForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);

  const params = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  try {
    await emailjs.send(
      "service_272vzve",
      "template_edkfzrt",
      params,
      "I8DlOVrL0sO3QUPiz",
    );

    contactForm.reset();

    formStatus.textContent = "تم إرسال رسالتك بنجاح.";
  } catch (error) {
    // formStatus.textContent = "حدث خطأ أثناء الإرسال.";
    console.log(error);
    console.log(error.status);
    console.log(error.text);

    formStatus.textContent = error.text;
  }
});
