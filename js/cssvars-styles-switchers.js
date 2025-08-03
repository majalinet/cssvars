const styles = ['none', 'brutal-style', 'brutal-lite-style', 'glass-style', 'retro-style', 'retro-light-style',
                'minimalist-style', 'neon-style', 'cyberpunk-style', 'luxury-style', 'high-contrast-style',
                'neumorphism-style', 'modern-style', 'playful-style', 'material-style', 'modular-style',
                'flat-style', 'data-style', 'enterprise-style', 'system-ui-style', 'colorful-dashboard-style',
]

function changeStyle(){

    let stylesElement = document.querySelector('#styles')
    console.log(stylesElement)
    console.log(stylesElement.value)
    let bodyElement = document.querySelector('body')
    
    bodyElement.classList.value=''
    if (stylesElement.value != 'none'){
        bodyElement.classList.add(stylesElement.value)
    }
}
