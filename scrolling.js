const header = document.querySelector(".div1");
const sectionOne = document.querySelector(".div2");

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      header.classList.add("div1-scrolled");
    } else {
      header.classList.remove("div1-scrolled");
    }
  });
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);