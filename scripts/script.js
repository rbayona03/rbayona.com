'use strict'

const preloader = document.querySelector('.preload');
const scrollBtn = document.querySelector('.scrollBtn');
const abtSection = document.querySelector('.about_container');

const projectTitle = document.querySelector('.project_ttl');
const projectContain = document.querySelectorAll('.portfolio');

const header = document.querySelector('.header_container');
const hero = document.querySelector('.hero');
const portfolioTitle = document.querySelector('.folio_ttl');
const projectCardCont = document.querySelector('.projectCards');

/////JSX SEction
const Robert = {
  name: 'Roberto Bayona',
  location: 'Miami',
  job: 'Web Developer',
}

const Projects = {
  first: {
    id: 'Project_Card0',
    pName: 'BalanceTradeCoffee',
    pNum: '.01',
    pGit: 'https://github.com/rbayona03/BalancedTradeCoffee/',
    pLink: 'https://balancetradecoffee.com/',
    pImg: 'images/Card-0.png',
    pGuide: 'StyleGuides/CoffeeSG.html'
  },
    second:  {
      id: 'Project_Card1',
      pName: 'Pharma-Trials',
      pNum: '.02',
      pLink: 'http://pharma-trials.com/',
      pGit: 'https://github.com/rbayona03/PharmaResearch',
      pImg: 'images/Card-1.png',
      pGuide: 'StyleGuides/PharmaSG.html'

    },
    third:  {
      id: 'Project_Card2',
      pName: 'JanesyAlvarez',
      pNum: '.03',
      pLink: 'http://janesy-alvarez.com/',
      pGit: 'https://github.com/rbayona03/Janesy-Alvarez.com',
      pImg: 'images/Card-2.png',
      pGuide: 'StyleGuides/nessySG.html'

    }
}

function headerContent(){
  header.insertAdjacentHTML('afterbegin', `
  <div class="nav_link"><h4>${Robert.name}</h4></div>
  <div class=" nav_link"><h4>${Robert.location}</h4></div>
`)
}

function heroContent(){
  hero.insertAdjacentHTML('afterbegin', `
  <h1 class="heroTitle">${Robert.job}</h1>
        <div class="heroImg"></div>
`)
}

function portfolioEffect(){
  portfolioTitle.insertAdjacentHTML('afterbegin', `
  <li><h4 class=" folio1">.2</h4></li>
                <li><h1 class=" folio-2">Folio</h1></li>
                <li><h4 class=" folio1" aria-hidden="true">.2</h4></li>
                <li><h1 class=" folio-2" aria-hidden="true">Folio</h1></li>
                <li><h4 class=" folio1" aria-hidden="true">.2</h4></li>
                <li><h1 class=" folio-2" aria-hidden="true">Folio</h1></li>
                <li><h4 class=" folio1" aria-hidden="true">.2</h4></li>
                <li><h1 class=" folio-2" aria-hidden="true">Folio</h1></li>
                <li><h4 class=" folio1" aria-hidden="true">.2</h4></li>
                <li><h1 class=" folio-2" aria-hidden="true">Folio</h1></li>
                <li><h4 class=" folio1" aria-hidden="true">.2</h4></li>
                <li><h1 class=" folio-2" aria-hidden="true">Folio</h1></li>
                <li><h4 class=" folio1" aria-hidden="true">.2</h4></li>
                <li><h1 class=" folio-2" aria-hidden="true">Folio</h1></li>
                <li><h4 class=" folio1" aria-hidden="true">.2</h4></li>
                <li><h1 class=" folio-2" aria-hidden="true">Folio</h1></li>
  `)
};

const projectCard = p => {
  projectCardCont.insertAdjacentHTML('afterbegin', `
  <div class=" project">
                    <h4 class="project_Num">${p.pNum}</h4>
                    <h3 class="Project_Name">${p.pName}</h3>
                    <div class="Project_Card ${p.id}" style="background-image: url('../${p.pImg}')">
                        <div class="links__Container">
                            <a class="links_content" href="${p.pGuide}" title="Style Guide"><i class="fas fa-palette"></i></a>
                            <a class="links_content" href="${p.pLink}" title="Web Page Link"><i class="fas fa-link"></i></a>
                            <a class="links_content" href="${p.pGit}" title="GitHub Link"><i class="fab fa-github-alt" ></i></a>
                        </div>
                    </div>

                </div>
  `)
};

const linkHover = () => {
  const contactLink = Array.prototype.slice.apply(
    document.querySelectorAll('.contact_lnk')  
    );
  
  contactLink.forEach(i => {
    i.addEventListener('mouseenter', () => {
      i.classList.add('hover'); 
    })
  
    i.addEventListener('mouseleave', () => {
      i.classList.remove('hover');
    })
  })
}

linkHover();
projectCard(Projects.third);
projectCard(Projects.second);
projectCard(Projects.first);
portfolioEffect();
heroContent();
headerContent();

////To Top effect
scrollBtn.addEventListener('click', (e) => {
    const abtCoords = abtSection.getBoundingClientRect();
    window.scrollTo({
        left: window.document.left + window.pageXOffset,
        top: window.document.top + window.pageXOffset,
        behavior: 'smooth',
    });
});

//////Page Loader

// const loadEffect = setInterval((e) => {
//     if (!preloader.style.opacity) {
//       preloader.style.opacity = 1;
//     }
//    else if (preloader.style.opacity > 0) {
//       preloader.style.opacity -= 0.1;
//     } else {
//       clearInterval(e);
//     }
// }, 75);
  
// window.addEventListener('load', ()=>{
//   loadEffect;
// });





