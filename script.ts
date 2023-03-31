// Get the sections of the page
const homeSection = document.getElementById("home");
const categoriesSection = document.getElementById("categories");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");

// Create a function to animate the sections
function animateSection(section: HTMLElement) {
  // Define the animation properties
  const animationDuration = 1000;
  const animationDelay = 200;
  const animationEase = "ease-out";

  // Set the initial state of the section
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";

  // Animate the section
  section.animate(
    [
      { opacity: "0", transform: "translateY(20px)" },
      { opacity: "1", transform: "translateY(0)" },
    ],
    {
      duration: animationDuration,
      delay: animationDelay,
      easing: animationEase,
      fill: "forwards",
    }
  );
}

// Call the animateSection function on each section
animateSection(homeSection);
animateSection(categoriesSection);
animateSection(aboutSection);
animateSection(contactSection);
