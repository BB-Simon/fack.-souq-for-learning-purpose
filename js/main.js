const souqTopBar = document.querySelector('.souq-top-bar')
const souqBottomBar = document.querySelector('.souq-bottom-bar')
const souqTopNav = document.querySelector('.top-nav')


window.addEventListener('scroll', Scroll)

function Scroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        souqTopBar.style.display = 'none'
        souqBottomBar.style.display = 'none'
        souqTopNav.style.paddingTop = '5px'
        souqTopNav.style.paddingBottom = '5px'
    } else {
        souqTopBar.style.display = 'block'
        souqBottomBar.style.display = 'block'
        souqTopNav.style.paddingTop = '10px'
        souqTopNav.style.paddingBottom = '10px'
    }
}

let toggled = false;
const barBtn = document.querySelector('#bar')
const asidebar = document.querySelector('.asidebar')
const deal = document.querySelector('.deal')
const overlay = document.querySelector('.overlay')




barBtn.addEventListener('click', ()=>{
    if(!toggled) {
        if(screen.width <= 1140) {
            document.body.style.marginLeft = '18%'
            toggled = true;
            asidebar.style.display = 'block'
            deal.style.fontSize = '10px'
        } else if (screen.width <= 992) {
            document.body.style.marginLeft = '20%'
            toggled = true;
            asidebar.style.display = 'block'
            deal.style.fontSize = '10px'
        } else if (screen.width <= 768) {
            document.body.style.marginLeft = '25%'
            toggled = true;
            asidebar.style.display = 'block'
            deal.style.fontSize = '10px'
        } else if(screen.width <= 576 ){
            document.body.style.marginLeft = '50%'
            toggled = true;
            asidebar.style.display = 'block'
            deal.style.fontSize = '10px'
        } else {
            document.body.style.marginLeft = '15%'
        }
        toggled = true;
        asidebar.style.display = 'block'
        deal.style.fontSize = '10px'
        overlay.style.display = 'block'
        
    } else {
        toggled = false;
        document.body.style.marginLeft = '0'
        asidebar.style.display = 'none'
        deal.style.fontSize = '14px'
    }
})

overlay.addEventListener('click', ()=> {
    overlay.style.display = 'none'
    document.body.style.marginLeft = '0'
    asidebar.style.display = 'none'
    deal.style.fontSize = '14px'
    toggled = false;
})

function toggleMenuBar(){
    const toggleBtn = document.querySelectorAll('.toggle-btn')
    const angleDown = document.querySelectorAll('.ld')
    const angleUp = document.querySelectorAll('.lp')
    const menuBar = document.querySelectorAll('.menu-bar')
    

    angleDown.forEach(eleDown => {
        eleDown.style.display = 'block'
    })
    angleUp.forEach(eleUp => {
        eleUp.style.display = 'none'
    })
    menuBar.forEach(eleMenu => {
        eleMenu.style.display = 'none'
    })

    toggleBtn.forEach(ele=>{
        ele.addEventListener('click', () => {
            if (!toggled) {
                toggled = true
                angleDown.forEach(eleDown => {
                    eleDown.style.display = 'none'
                })
                angleUp.forEach(eleUp => {
                    eleUp.style.display = 'block'
                })
                menuBar.forEach(eleMenu => {
                    eleMenu.style.display = 'block'
                })
                
            } else {
                toggled = false
                angleDown.forEach(eleDown => {
                    eleDown.style.display = 'block'
                })
                angleUp.forEach(eleUp => {
                    eleUp.style.display = 'none'
                })
                menuBar.forEach(eleMenu => {
                    eleMenu.style.display = 'none'
                })
                
            }
        })
    }) 
   
}
toggleMenuBar()