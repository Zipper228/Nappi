document.addEventListener("DOMContentLoaded", () => {
  const menuToggles = document.querySelectorAll("[data-menu-toggle]");
  const menuId = document.querySelectorAll("[data-menu]");
  const menu = menuId[0];
  menuToggles.forEach((toggleButton) => {
    toggleButton.addEventListener("click", () => {
      // Get the target menu element's ID from the data attribute

      if (menu) {
        // Get the current state
        const currentState = menu.getAttribute("data-menu-state");

        // Toggle the state between 'open' and 'closed'
        const newState = currentState === "open" ? "closed" : "open";
        menu.setAttribute("data-menu-state", newState);

        // Optional: Toggle an aria-expanded attribute for accessibility
        toggleButton.setAttribute("aria-expanded", newState === "open");
      }
    });
  });

  const navbars = document.querySelectorAll(".nav-scroll");
  let lastScrollY = 0; // Initialize the tracking variable
  const scrollThreshold = 50; // Distance to scroll down before hiding (prevents flicker at the top)
  console.log(navbars);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // 1. Logic to HIDE the navbar (scrolling DOWN)
    // Check if scrolling down AND past a small threshold
    if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
      // Add a class that translates the navbar up by its full height
      navbars.forEach((navbar) => navbar.classList.add("translate-y-[-100%]"));
    }

    // 2. Logic to SHOW the navbar (scrolling UP)
    // Check if scrolling up
    else if (currentScrollY < lastScrollY) {
      // Remove the class to bring it back into view
      navbars.forEach((navbar) =>
        navbar.classList.remove("translate-y-[-100%]")
      );
    }

    // Update the last scroll position for the next event loop
    lastScrollY = currentScrollY;
  };

  // Attach the event listener to the window
  // NOTE: For production, this should be debounced or throttled for better performance.
  window.addEventListener("scroll", handleScroll);
});
