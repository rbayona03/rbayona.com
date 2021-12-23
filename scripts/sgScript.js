const typography = document.querySelector('.sgSec-3');
const colors = document.querySelector('.sgSec-4');
const tech = document.querySelector('.sgSec-5');

////Objects
const btcc = {
    colorScheme:{
        Color1: "253, 94, 51",
        Color2: "211, 211, 231",
        Color3: "208, 191, 86",
        Color4: "255, 255, 255",
        Color5: "0,0,0"
    },
    fonts:{
        font1:"Montserrat",
        font2:"Permanent Marker",
    },
    technologies:{
        t1: `<i class="fab fa-html5" title="HTML"></i>`,
        t2: `<i class="fab fa-css3-alt" title="CSS3"></i>`,
        t3: `<i class="fab fa-js" title="JavaScript"></i>`,
        t4: `<i class="fab fa-figma" title="Figma"></i>`,
        t5: `<i class="fab fa-paypal" title="Paypal APi"></i>`
    }
}


//DOM Manipulations
const project = function(proj){
    typography.insertAdjacentHTML('beforeend', `
    <div style="font-family:${proj.fonts.font1}">
            <ul class="fontContent">
            <li><strong>${proj.fonts.font1}</strong></li>
            <li>AaBbCc123</li>
            <li class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione tenetur debitis nisi, 
            eos, facere quis sapiente similique labore inventore natus fuga expedita, nulla rerum exercitationem magnam neque aut aliquam!</li>
            </ul>
    </div>
    <div style="font-family:${proj.fonts.font2}">
            <ul class="fontContent">
                <li><strong>${proj.fonts.font2}</strong></li>
                <li>AaBbCc123</li>
                <li class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione tenetur debitis nisi,
                eos, facere quis sapiente similique labore inventore natus fuga expedita, nulla rerum exercitationem magnam neque aut aliquam!</li>
            </ul>
    </div>`);

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
    <div class="colorCode">
        <div style="background-color:rgb(${proj.colorScheme.Color4})" class="colorbox"></div>
        <p>${proj.colorScheme.Color4}</p>
    </div>
    <div class="colorCode">
        <div style="background-color:rgb(${proj.colorScheme.Color5})" class="colorbox"></div>
        <p>${proj.colorScheme.Color5}</p>
    </div>
</div>
`);

tech.insertAdjacentHTML('beforeend', `
    <div class="techLabels">
        <ul>
            <li>${proj.technologies.t1}</li>
            <li>${proj.technologies.t2}</li>
            <li>${proj.technologies.t3}</li>
            <li>${proj.technologies.t4}</li>
            <li>${proj.technologies.t5}</li>
        </ul>
    </div>
`)
};
project(btcc);