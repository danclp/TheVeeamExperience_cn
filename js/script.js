const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
gsap.registerPlugin(ScrollTrigger);

let loadHome = gsap.timeline({
  onComplete: enableScroll
})

loadHome
  .set('.home', {
    autoAlpha: 1
  })
  .from('.home_content-logo', {
    opacity: 0,
    yPercent: -100
  })
  .from('.home_content-message > *', {
    opacity: 0,
    xPercent: -100,
    stagger: 0.5
  })
  .from('.scroll_down p', {
    yPercent: 100
  })
  .from('.scroll_down-icon', {
    opacity: 0,
    yPercent: -50
  }, "<")

function enableScroll() {
  let tellTheStory = gsap.timeline({
    scrollTrigger: {
      trigger: '.pageWrap',
      start: 'top top',
      end: 'clamp(+=60000)',
      pin: true,
      scrub: true
    }
  })

  tellTheStory
    .to('.home_content-logo', {
      yPercent: -100
    })
    .to('.home_content-message > *', {
      xPercent: -100,
      opacity: 0,
      stagger: 0.3
    }, 0)
    .to('.scroll_down p', {
      yPercent: 100
    }, 0)
    .to('.scroll_down-icon', {
      rotation: 180
    }, 0)
    .to('.scroll_down-icon', {
      opacity: 0,
      yPercent: -300
    })
    .to('.home', {
      autoAlpha: 0,
      delay: 1
    })
    .to('.intro', {
      autoAlpha: 1
    })
    .from('.intro_container', {
      height: "100%",
      opacity: 0
    })
    .from('.intro_container-message > *', {
      autoAlpha: 0,
      yPercent: -20,
      stagger: 0.5
    }, '<1')
    .from('.intro small', {
      autoAlpha: 0
    })
    .to('.intro_container-message__1', {
      autoAlpha: 0,
      display: 'none'
    })
    .to('.intro_container-message__2', {
      autoAlpha: 1,
      display: 'block'
    })
    .to('.intro', {
      autoAlpha: 0
    })
    .to('.challenge', {
      autoAlpha: 1
    })
    .from('.challenge h3', {
      opacity: 0,
      xPercent: -100
    })
    .from('.challenge-item', {
      opacity: 0,
      scale: 0.1,
      y: -60,
      ease: "power1.inOut",
      stagger: {
        amount: 1.5,
        from: 'random'
      }
    })
    .from('.challenge small', {
      autoAlpha: 0
    })
    .to('.challenge', {
      autoAlpha: 0
    })
    .fromTo('.motto', {
      autoAlpha: 0,
      y: 100
    }, {
      autoAlpha: 1,
      y: 0
    })
    .from('.motto-message', {
      opacity: 0,
      yPercent: -50
    })
    .to('.motto-message em', {
      color: '#00D15F'
    })
    .from('.motto small', {
      autoAlpha: 0
    }, "<+=0.3")
    .to('.motto', {
      autoAlpha: 0
    })
    .to('.recover', {
      autoAlpha: 1
    })
    .from('.recover-header', {
      opacity: 0,
      yPercent: 100
    })
    .from('.recover-quote', {
      opacity: 0,
      ease: "linear",
      width: 0
    })
    .from('.recover-quote .open', {
      opacity: 0,
      x: 100
    })
    .from('.recover-quote .close', {
      opacity: 0,
      x: -100
    }, "<+=0.1")
    .from('.recover-quote_message', {
      opacity: 0
    })
    .to('.recover-quote_message em', {
      color: '#00D15F'
    })
    .from('.recover small', {
      autoAlpha: 0
    })
    .to('.recover', {
      autoAlpha: 0
    })
    .to('.experience', {
      autoAlpha: 1
    })
    .from('.experience-box', {
      opacity: 0
    })
    .to('.experience-box em', {
      color: '#00D15F'
    }, "<+=0.5")
    .from('.experience small', {
      autoAlpha: 0
    })
    .to('.experience', {
      autoAlpha: 0
    })
    .to('.value', {
      autoAlpha: 1
    })
    .from('.value-quote_top__message', {
      opacity: 0,
      height: '0%'
    })
    .to('.value-quote_top__message em', {
      color: '#00D15F'
    }, "<+=0.2")
    .from('.value-quote_bottom', {
      opacity: 0,
      yPercent: -50
    })
    .from('.value small', {
      autoAlpha: 0
    })
    .to('.value', {
      autoAlpha: 0
    })
    .to('.roadmap', {
      autoAlpha: 1
    })
    .to('.roadmap-message_1', {
      autoAlpha: 1
    })
    .from('.roadmap-message_1 small', {
      autoAlpha: 0
    })
    .to('.roadmap-message_1', {
      autoAlpha: 0,
      display: 'none',
      y: -30
    })
    .to('.roadmap-message_2', {
      autoAlpha: 1
    })
    .from('.roadmap-message_2 small', {
      autoAlpha: 0
    })
    .to('.roadmap', {
      autoAlpha: 0
    })
    .to('body', {
      background: '#FFF'
    })
    .to('.promise', {
      autoAlpha: 1
    }, "<+=0.3")
    .fromTo('.promise', {
      opacity: 0,
      yPercent: 100
    }, {
      opacity: 1,
      yPercent: 0
    })
    .from('.promise h1', {
      opacity: 0,
      yPercent: 30
    })
    .from('.promise small', {
      autoAlpha: 0
    })
    .to('.promise', {
      autoAlpha: 0
    })
    .to('.resources', {
      autoAlpha: 1
    })
    .from('.resources-container_txt_1 small', {
      autoAlpha: 0
    })
    .to('.resources-container_txt_1', {
      autoAlpha: 0,
      display: 'none'
    })
    .to('.resources-container_txt_2', {
      autoAlpha: 1
    })
    .from('.resources-container_txt_2 small', {
      autoAlpha: 0
    })
    .to('body', {
      background: '#000'
    })
    .to('.resources', {
      autoAlpha: 0
    })
    .to('.assure', {
      autoAlpha: 1
    })
    .from('.assure-container', {
      opacity: 0
    })
    .from('.assure-quote .open', {
      opacity: 0,
      xPercent: 30
    })
    .from('.assure-quote .close', {
      opacity: 0,
      xPercent: -30
    }, "+=0.1")
    .from('.assure-quote p', {
      opacity: 0
    })
    .to('.assure-quote em', {
      color: '#00D15F'
    }, "<+=0.3")
    .from('.assure small', {
      autoAlpha: 0
    })
    .to('.assure', {
      autoAlpha: 0
    })
    .to('.explore', {
      autoAlpha: 1
    })
    .from('.explore-veritas h5', {
      opacity: 0,
      xPercent: -100
    })
    .from('.explore-veritas_container > *', {
      opacity: 0,
      xPercent: -100,
      stagger: 0.3
    })
    .to('.explore-veritas_txt em', {
      color: '#00D15F'
    }, "<0.3")
    .from('.explore-veritas small', {
      autoAlpha: 0
    })
    .to('.explore', {
      autoAlpha: 0
    })
    .to('.testimonial', {
      autoAlpha: 1
    })
    .to('.testimonial-block_1', {
      autoAlpha: 1
    })
    .from('.testimonial-block_1 small', {
      autoAlpha: 0
    })
    .to('.testimonial-block_1', {
      autoAlpha: 0
    })
    .to('.testimonial-block_2', {
      autoAlpha: 1
    })
    .from('.testimonial-block_2 small', {
      autoAlpha: 0
    })
    .to('.testimonial', {
      autoAlpha: 0
    })
    .to('.trial', {
      autoAlpha: 1
    })
    .from('.trial-logo', {
      yPercent: 100
    })
    .fromTo('.trial-container > *', {
      autoAlpha: 0,
      xPercent: -100
    }, {
      autoAlpha: 1,
      xPercent: 0
    })
    .fromTo('.trial .blue-button', {
      autoAlpha: 0
    }, {
      autoAlpha: 1
    })
}