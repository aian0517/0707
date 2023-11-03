const body = document.querySelector('body')
const nav_link = document.querySelectorAll('.nav-link')
const body2_grid2 = document.querySelector('.body2-grid2')
const nav = document.querySelector('nav')
console.log(nav);
const ANS = [
    {
        img: '',
        title: '美味',
        text: '讚嘆好吃',
        text2: '多力多滋'
    },
    {
        img: '',
        title: '草莓蛋糕',
        text: '加草莓',
        text2: '加蛋糕'
    },
    {
        img: '',
        title: '雞腿',
        text: '加辣',
        text2: '加胡椒粉'
    },
    {
        img: '',
        title: '咖啡',
        text: '加咖',
        text2: '加啡'
    }
]
addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop
    console.log(scroll);
    if (scroll > 260) {
        body.style.backgroundColor = '#212a2b'
        body.style.color = '#fff'
        nav.classList.add('nav-scroll')
        nav_link.forEach((link)=>(
            link.classList.add('nav-link2')
        ))
    } else if (scroll == 0) {
        body.style.backgroundColor = '#d9dddd'
        body.style.color = '#000'
        nav.classList.remove('nav-scroll')
        nav_link.forEach((link)=>(
            link.classList.remove('nav-link2')
        ))
    }
})

ANS.forEach((item, index) => {
    body2_grid2.innerHTML += `
    <div class="col-lg-6 col-sm-12 py-4 d-flex flex-column" >
        <p class="fs-4 text-center">${item.title}</p>
        <div class="d-flex justify-content-start align-items-center">
        <div class="body2-round me-3"></div>
        <p class="m-0">${item.text}2</p>
        </div>
        <div class="d-flex justify-content-start align-items-center">
            <div class="body2-round me-3"></div>
            <p class="m-0">${item.text2}</p>
        </div>
        
    </div>
    `

})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 15,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})