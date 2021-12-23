const typography = document.querySelector('.sgSec-3');
const colors = document.querySelector('.sgSec-4');
const tech = document.querySelector('.sgSec-5');

const alvarez = {
    colorScheme:{
        Color1: "0, 109, 119",
        Color2: "114, 178, 171",
        Color3: "255,255,255",
    },
    fonts:{
        font1:"Raleway"
    },
    technologies:{
        t1: `<i class="fab fa-html5" title="HTML"></i>`,
        t2: `<i class="fab fa-css3-alt" title="CSS3"></i>`,
        t3: `<i class="fab fa-js" title="JavaScript"></i>`,
        t4: `<i class="fab fa-figma" title="Figma"></i>`,
    }
};

const project = function(proj){
    typography.insertAdjacentHTML('beforeend', `
    <div style="font-family:${proj.fonts.font1}">
            <ul class="fontContent">
            <li><strong>${proj.fonts.font1}</strong></li>
            <li>AaBbCc123</li>
            <li class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione tenetur debitis nisi, 
            eos, facere quis sapiente similique labore inventore natus fuga expedita, nulla rerum exercitationem magnam neque aut aliquam!</li>
            </ul>
    </div>`
    );

colors.insertAdjacentHTML('beforeend', `
<div  class="colorBox-Wrapper">
    <div class="colorCode">
        <div style="background-color:rgb(${proj.colorScheme.Color1})" class="colorbox"></div>
        <p>${proj.colorScheme.Color1}</p>
    </div>
    <div class="colorCode">
        <div style="background-color:rgb(${proj.colorScheme.Color2})" class="colorbox"></div>
        <p>${proj.colorScheme.Color2}</p>
    </div>
    <div class="colorCode">
        <div style="background-color:rgb(${proj.colorScheme.Color3})" class="colorbox"></div>
        <p>${proj.colorScheme.Color3}</p>
    </div>
`);

tech.insertAdjacentHTML('beforeend', `
    <div class="techLabels">
        <ul>
            <li>${proj.technologies.t1}</li>
            <li>${proj.technologies.t2}</li>
            <li>${proj.technologies.t3}</li>
            <li>${proj.technologies.t4}</li>
        </ul>
    </div>
`)
};
project(alvarez);