$(document).ready (function(){

    $('#profile__ripple').ripples({
        resolution: 512, 
        dropRadius:10
    })

    const bars = document.querySelectorAll('.progress__bar');

    console.log(bars); 

    bars.forEach(function(bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%'
        bar.style.width = percentage + '%';
        console.log(percentage);
    })

    // conuter 
    const conuters = document.querySelectorAll('.counter'); 
    console.log(conuters);

    function runCounter (){
        conuters.forEach(counter =>{
            counter.innerText = 0; 
            let target = +counter.dataset.count;
            let step = target / 100;

            let countIt = function(){
                let displayedCount = +counter.innerText; 
                if (displayedCount < target){

                    counter.innerText = Math.ceil(displayedCount + step);
                    console.log(displayedCount);
                    setTimeout(countIt, 1);
                } else {
                    counter.innerText = target;
                }
            }
            countIt();
        })
    }
    runCounter();

    let counterSection = document.querySelectorAll('.counter__section'); 

    let options = {
        rootMargin: '0px 0px -200px 0px'
    }
    let done = 0;

    const sectionObserver = new IntersectionObserver(function(entries){

        if (entries[0].isIntersecting && done!==1 ){
            done = 1; 
            runCounter();
        }

    }, options)

    sectionObserver.observe(counterSection);


});

var $wrapper = $('.portfolio__wrapper');

$wrapper.isotope({
    filter : '*', 
    layoutMode : 'masonry', 
    animationOptions : {
        duration: 750, 
        easing: 'linear'

    }
});

let links = document.querySelectorAll('.tabs a')

links.forEach(link => {

    let selector = link.dataset.filter;
    console.log(selector);
    link.addEventListener('click',function(e){
        e.preventDefault();

        $wrapper.isotope({
            filter : selector, 
            layoutMode : 'masonry', 
            animationOptions : {
                duration: 750, 
                easing: 'linear'

            }
        });



        links.forEach(link => {
            link.classList.remove('active');
        })

        e.target.classList.add('active');
    });
})

$('.slider').slick({
    arrows: false,
    autoplay: true
});

function myfun() {
    window.print();
}
