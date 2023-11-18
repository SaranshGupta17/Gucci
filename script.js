gsap.to("#gucci",{
    top:"20%",
    display:"block",
    scrollTrigger:{
        trigger:"#part1",
        scroller:"body",
        start:"top -10%",
        end:"top -30%",
        scrub:2
    }
    
})

gsap.to("#gucci svg",{
    height:"30px",
    width:"140px",
    scrollTrigger:{
        trigger:"#part1",
        scroller:"body",
        start:"top -10%",
        end:"top -30%",
        scrub:2
    }
})
gsap.to("#contact",{
    borderBottom:"1.5px solid black", 
    color:"#000",
    scrollTrigger:{
        trigger:"#part1",
        scroller:"body",
        start:"top -10%",
        end:"top -30%",
        scrub:2
    }
})

gsap.from("#part1 #base",{
    position:"fixed",
    top:"80%",
    left:"30%",
    scrollTrigger:{
        trigger:"#part1 img",
        scroller:"body",
        start:"top -80%",
        end:"top -80%",
        scrub:true
    }
})

gsap.from("#part1 #base h1",{
    color:"#fff",
    scrollTrigger:{
        trigger:"#part1 img",
        scroller:"body",
        start:"top -55%",
        end:"top -70%",
        scrub:true
    }
})

gsap.from("#part1 #base button",{
    color:"#000",
    backgroundColor:"#fff",
    scrollTrigger:{
        trigger:"#part1 img",
        scroller:"body",
        start:"top -48%",
        end:"top -85%",
        scrub:true,
    }
})

