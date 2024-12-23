/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const serviceModalViews = document.querySelectorAll('.services__modal'),
      serviceModalBtns = document.querySelectorAll('.services__button'),
      serviceModalClose = document.querySelectorAll('.services__modal-close');
    
let serviceModal = function(modalClick) {  
    serviceModalViews[modalClick].classList.add('active-modal');
}

serviceModalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        serviceModal(i);
    });
});

serviceModalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        serviceModalViews.forEach((mv) => {
            mv.classList.remove('active-modal');
        });
    });
});

/*=============== SKILLS MODAL ===============*/
const skillModalViews = document.querySelectorAll('.skills__modal'),
      skillModalBtns = document.querySelectorAll('.skill__details'),
      skillModalClose = document.querySelectorAll('.skills__modal-close');
    
let skillModal = function(modalClick) {  
    skillModalViews[modalClick].classList.add('active-modal');
}

skillModalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        skillModal(i);
    });
});

skillModalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        skillModalViews.forEach((mv) => {
            mv.classList.remove('active-modal');
        });
    });
});

/*=============== QUALIFICATION MODAL ===============*/
const qualificationModalViews = document.querySelectorAll('.qualification__modal'),
      qualificationModalBtns = document.querySelectorAll('.qualification__details'),
      qualificationModalClose = document.querySelectorAll('.qualification__modal-close');
    
let qualificationModal = function(modalClick) {  
    qualificationModalViews[modalClick].classList.add('active-modal');
}

qualificationModalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        qualificationModal(i);
    });
});

qualificationModalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        qualificationModalViews.forEach((mv) => {
            mv.classList.remove('active-modal');
        });
    });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
// let mixerPortfolio = mixitup('.work__container', {
//     selectors: {
//         target: '.work__card'
//     },
//     animation: {
//         duration: 300
//     }
// });

/* Link active work */ 
// const linkWork = document.querySelectorAll('.work__item');

// function activeWork(){
//     linkWork.forEach(l => l.classList.remove('active-work'));
//     this.classList.add('active-work');
// }

// linkWork.forEach(l => l.addEventListener('click', activeWork));

/*=============== SWIPER TESTIMONIAL ===============*/
var swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        }
    },
});

/*==================== PORTFOLIO SWIPER  ====================*/

function populatePortfolioCertficateSlider() {
    let swiperPortfolio = new Swiper(".portfolio__container", {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
//    reset: true, 
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {delay: 700});
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'});

/*==================== HOME AUTO TYPE ====================*/ 
const homeSubtitleType = new Typed('.area__expertise-type span', {
    strings: [
        'Release and Change Management',
        'Agile and Scrum Practices', 
        'CI/CD Implementation',
        'Automation Testing',
        'Risk Management'
    ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});

/*==================== SKILLS PROGRESS BAR ====================*/ 
function skillsCounterBar () {
    const progress = document.querySelectorAll('.skills__bar-progress');
    let count = 0;
    // You must put the maximum number in the MAX variable.
    let MAX = 100;

    let run = setInterval(() => {
        count++;
        progress.forEach(element => {
            if (count <= element.dataset.progress) {
                element.parentElement.style.background = `conic-gradient(var(--first-color) ${count}%, var(--container-color) 0)`;
                element.firstElementChild.textContent = `${count}%`;
            };
            if (count == MAX) {
                clearInterval(run);
            };
        });
    }, 20);
}

/*==================== ON LOAD JS ====================*/ 
document.addEventListener('DOMContentLoaded', () => {
  
  // initialzed toastr
  toastr.options = {
    'closeButton': true,
    'debug': false,
    'newestOnTop': true,
    'progressBar': false,
    'positionClass': 'toast-top-right',
    'preventDuplicates': false,
    'showDuration': '1000',
    'hideDuration': '1000',
    'timeOut': '5000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut',
  }

  skillsCounterBar();
  populateJsonToMarkup();
});

function populateJsonToMarkup() {
    fetch("/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch JSON file");
      }
      return response.json();
    })
    .then((data) => {

      // populate site name  
      const siteNameElement = document.querySelectorAll(".siteName");
      siteNameElement.forEach(el => {
        el.textContent = data.siteName || "Portfolio";
      });

      // Populate author details
      const authorEmail = document.querySelectorAll(".authorEmail");
      authorEmail.forEach((el) => {
        el.textContent = data.siteGeneral.author_email || "N/A";
      });

      const authorEmailLink = document.querySelectorAll(".authorEmailLink");
      authorEmailLink.forEach((el) => {
        el.href = `mailto:${data.siteGeneral.author_email || ''}`;
      });

      const authorPhone = document.querySelectorAll(".authorPhone");
      authorPhone.forEach((el) => {
        el.textContent = data.siteGeneral.author_phone || "N/A";
      });

      const authorPhoneLink = document.querySelectorAll(".authorPhoneLink");
      authorPhoneLink.forEach((el) => {
        el.href = `tel:${data.siteGeneral.author_phone || ''}`;
      });

      const authorAddress = document.querySelectorAll(".authorAddress");
      authorAddress.forEach((el) => {
        el.textContent = data.siteGeneral.author_address || "N/A";
      });

      const authorAddressLink = document.querySelectorAll(".authorAddressLink");
      authorAddressLink.forEach((el) => {
        const address = data.siteGeneral.author_address || '';
        el.href = address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` : '#';
      });

      const authorTotalExperienceYear = document.querySelectorAll(".yearsWorkCounter");
      authorTotalExperienceYear.forEach((el) => {
        el.textContent = data.siteGeneral.yearsOfExperience;
      });

      const authorTotalCertifications = document.querySelectorAll(".certificateCounter");
      authorTotalCertifications.forEach((el) => {
        el.textContent = data.siteGeneral.earnedCertifications;
      });

      const authorTotalCompanies = document.querySelectorAll(".companiesCounter");
      authorTotalCompanies.forEach((el) => {
        el.textContent = data.siteGeneral.companiesWorked;
      });

      const footerCopy = document.getElementById('footer-copy');
      footerCopy.textContent = data.siteGeneral.copyright;

      // Populate config keys
      const web3FormAccessKey = document.getElementById('web3FormKey');
      web3FormAccessKey.value = data.configKeys.web3form_access_key;

      // Populate meta tags
      const metaAuthor = document.querySelector('meta[name="author"]');
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      const metaDescription = document.querySelector('meta[name="description"]');

      if (metaAuthor) {
        metaAuthor.content = data.siteGeneral.author_name || "Sejal Jawale";
      }

      if (metaKeywords) {
        metaKeywords.content = data.siteGeneral.keywords || "";
      }

      if (metaDescription) {
        metaDescription.content = data.siteGeneral.description || "Experienced Change and Release Specialist skilled in CI/CD implementation, automation testing, and risk mitigation.";
      }

      // set theme from json 
      const getJsonTheme = data.siteGeneral.theme || "light";
      const themeName = getJsonTheme === "light" ? "dark" : "light";
      const themeIcon = getJsonTheme === "light" ? 'bx bx-moon' : 'bx bx-sun';
      localStorage.setItem('selected-theme', themeName);
      localStorage.setItem('selected-icon', themeIcon);

      // populate certifications
      const certificationContainer = document.querySelector(".certification__container");
      const recentCertificationContainer = document.querySelector(".portfolio__container .swiper-wrapper");
      const recentMainContainer = document.querySelector("#recent-certificate");
      const certificates = data.certificates || [];

      let hasRecentCertificate = false;

      certificationContainer.innerHTML = "";
      recentCertificationContainer.innerHTML = "";

      certificates.forEach((cert) => {
        const cardHTML = `
          <div class="certification__card">
            <div class="certification__img-box">
              <img src="${cert.image}" alt="${cert.title}" class="certificate__img">
            </div>
            <div class="certification__data">
              <h3 class="certification__date">${cert.date}</h3>
              <h1 class="certification__title">${cert.title}</h1>
              <span class="certification__subtitle">${cert.from}</span>
              <a href="${cert.verify_url}" target="_blank" class="button--link">Verify</a>
            </div>
          </div>
        `;
        certificationContainer.innerHTML += cardHTML;

        if(cert.most_recent){
            hasRecentCertificate = true;

            const slideHTML = `
                <div class="portfolio__content grid swiper-slide">
                    <img src="${cert.image}" alt="${cert.title}" class="portfolio__img">

                    <div class="portfolio__data">
                        <h4 class="portfolio__date">${cert.date}</h4>
                        <h3 class="portfolio__title">${cert.title}</h3>
                        <span class="portfolio__from">${cert.from}</span>
                        <a href="${cert.verify_url}" target="_blank" class="button button--flex button--small portfolio__button">
                            Verify
                        </a>
                    </div>
                </div>
            `;
            recentCertificationContainer.innerHTML += slideHTML;
            populatePortfolioCertficateSlider();
        } 
      });

      if (!hasRecentCertificate) {
        recentMainContainer.style.display = "none";
      } else {
        recentMainContainer.style.display = "block";
      }

      // populate blogs
      const blogContainer = document.querySelector('.blog__container');
      const blogMainSection = document.querySelector('#blog');
      let blogs = data.blogs || [];

      blogContainer.innerHTML = "";

      if (blogs.length === 0) {
        blogMainSection.style.display = "none";
      }
      else {
        blogMainSection.style.display = "block";

        blogs.forEach((blog) => {
        const blogCard = `
            <div class="blog__card">
                <div class="blog__card-header">
                    <img src="${blog.image}" alt="${blog.post_title}" />
                </div>
                <div class="blog__card-body">
                    <span class="blog__tag">${blog.tag}</span>
                    <a href="${blog.readMore_link || '#'}" target="_blank">
                        <h4>${blog.post_title}</h4>
                    </a>
                    <p>${blog.description}</p>
                    <div class="blog__user">
                    <img src="assets/img/user-image.png" alt="${blog.author}" />
                    <div class="blog__user-info">
                        <h5>${blog.author}</h5>
                        <small>${blog.date}</small>
                    </div>
                    </div>
                </div>
            </div>
        `;

        blogContainer.innerHTML += blogCard;
        });
      }

    })
    .catch((error) => {
      console.error("Error loading website information:", error);
    });
}

/*==================== Handle validations / form submittion ====================*/ 
const form = document.getElementById('contact-form');
const submitButton = form.querySelector('button[type="submit"]');

function validateForm() {
  let isValid = true;
  const inputs = form.querySelectorAll('.contact__form-input');

  inputs.forEach(input => {
      const label = input.previousElementSibling; // Get the label element

      if (!input.value.trim()) {
          input.style.border = '2px solid red';
          label.style.color = 'red';
          isValid = false;
      } else {
          input.style.border = '2px solid var(--text-color-light)';
          label.style.color = '';
      }

      input.addEventListener('input', () => {
          input.style.border = '2px solid var(--text-color-light)';
          label.style.color = '';
      });
  });

  return isValid;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validateForm()) {
      toastr.error("Please fill in all required fields.");
      return;
  }

  const initialButtonHTML = submitButton.innerHTML;
  submitButton.innerHTML = "Sending...";
  submitButton.disabled = true;

  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  
  fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: json
  })
      .then(async (response) => {
          let json = await response.json();
          if (response.status === 200) {
              toastr.success("Your message has been submitted successfully", "Successfully!");
          } else {
              console.log(response);
              toastr.error(json.message || "Submission failed.");
          }
      })
      .catch(error => {
          console.log(error);
          toastr.error("Something went wrong!");
      })
      .finally(() => {
          submitButton.innerHTML = initialButtonHTML;
          submitButton.disabled = false;

          form.reset();
      });
});