gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE
const ligthMode = gsap.timeline({
    scrollTrigger:{
    trigger:  ".line-one",
    start: "top top",
    //markers: true,
    pin: true,
    scrub: true
    }
})

ligthMode
    .from(".line-one span",{y:'100vw', opacity: 0, duration: 1, stagger: .2})
    .to(".line-one",{backgroundColor: "yellow", duration: 2})
    .from(".sun",{x: "50%", opacity: 0, duration: 1})
    .to(".sun",{x : "-100vw", duration: 1})
    .to(".line-one span",{x : "100vw", duration: 1},"<")
    .to(".line-one",{backgroundColor: "white", opacity: 0, duration: 1},"<")

const orTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".line-two",
        start: "top top",
        //markers: true,
        pin: true,
        scrub: true
        }
})

orTl
    .from(".line-two span:first-child ", {opacity: 0, x: "-100vw", scale: "5", duration: 1})
    .from(".line-two span:last-child ", {opacity: 0, x: "100vw", scale: "5", duration: 1},"<")
    .to(".line-two span:first-child ", {y: "-20px", duration: 1})
    .to(".line-two span:first-child ", {y: 0, duration: 1})
    .to(".line-two span:last-child ", {y: "-20px", duration: 1})
    .to(".line-two span:last-child ", {y: 0, duration: 1})


const darkmode = gsap.timeline({
    scrollTrigger:{
        trigger: ".line-three",
        start: "top top",
        //markers: true,
        pin: true,
        scrub: true
        }
})

darkmode
    .from(".line-three span",{y:'100vw', opacity: 0, duration: 1, stagger: .2})
    .to(".line-three",{backgroundPositionX: 0, duration: 1})
    .to(".line-three span",{color: "white", opacity: 1, duration: 1},"<")
    .to(".moon",{x: "-200px", opacity: 1, duration: 1},"<")
    