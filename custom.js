var tl = gsap.timeline({scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
}})
tl.to("#fanta",{
    top: "110%",
    left: "0%"
}, 'aa')
tl.to("#leaf", {
    top: "112%",
    left: "40%"
}, 'aa')
tl.to("#orangeCut", {
    top: "162%",
    left: "16%"
}, 'aa')