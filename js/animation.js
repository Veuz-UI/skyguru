// ------------  window animation----------//



// Ensure the DOM is fully loaded before running the animation
document.addEventListener('DOMContentLoaded', () => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Function to create scroll animation for a given element
    const createScrollAnimation = (element) => {
        gsap.to(element, {
            y: '-200px', // Move upwards by 50px
            duration: 1, // Animation duration of 1 second
            ease: 'power1.inOut', // Easing function for smooth animation
            scrollTrigger: {
                trigger: element, // Element that triggers the animation
                start: "top center", // Animation starts when the top of the element hits the center of the viewport
                end: "top 300px", // Animation ends when the top of the element hits 100px from the top of the viewport
                scrub: true // Smooth scrubbing, the animation follows the scroll
            }
        });
    };
    
    // Select elements and create animations
    const view1 = document.querySelector('.view-1');
    const view2 = document.querySelector('.view-2');
    const view3 = document.querySelector('.view-3');
    
    createScrollAnimation(view1);
    createScrollAnimation(view2);
    createScrollAnimation(view3);
    });








// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Get the viewport width
const viewportWidth = window.innerWidth;

// Animate the cloud to the right side of the screen on scroll
gsap.to("#cloud", {
    x: viewportWidth - 100,
    scrollTrigger: {
        trigger: "#cloud",
        start: "center center",
        end: "top top",
        scrub: true
    }
});

// Animate the bird to the right side of the screen on scroll
gsap.to("#bird", {
    x: viewportWidth - 100,
    scrollTrigger: {
        trigger: "#bird",
        start: "center center",
        end: "bottom top",
        scrub: true
    }
});



   // Register ScrollTrigger plugin
   gsap.registerPlugin(ScrollTrigger);

   // Define the text changes based on scroll position
   const textElement = document.getElementById("text");

   const textChanges = [
       { scrollPos: 0, text: "Attention Passengers: <br> <span> Your journey is about to begin.</span> <br>Please ensure your seatbelts are fastened and your<br> window shades are down." },
       { scrollPos: 50, text: "Ladies and Gentlemen,<br> we are now preparing for takeoff.As we ascend,<br> <span>enjoy a glimpse of the world beyond.</span><br>Stay tuned for the full view." },
       { scrollPos: 100, text: "Welcome to the world above the clouds!<br>Your adventure awaits.<br><span>Explore stunning destinations with Sky Guru Travels.<br></span>Fasten your seatbelts and get ready for an unforgettable journey." },
   ];

   // Create a ScrollTrigger instance
   textChanges.forEach(change => {
       ScrollTrigger.create({
           trigger: document.body,
           start: `${change.scrollPos}px top`,
           end: `${change.scrollPos + 50}px top`,
           onEnter: () => textElement.innerHTML = change.text,
           onLeaveBack: () => textElement.innerHTML = change.text
       });
   });