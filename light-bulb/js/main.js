const light = document.querySelector('#light-bulb')
const button = document.querySelector('#toggle-btn')

function toggleSwitch(){
    console.log(light.src)
    if (light.src.includes('light-off.svg')){
        light.setAttribute('src', '../res/light-on.svg')
        button.textContent = 'Tun off Light';
    } else{
        light.setAttribute('src', '../res/light-off.svg')
        button.textContent = 'Turn on Light';
    }
    
}
