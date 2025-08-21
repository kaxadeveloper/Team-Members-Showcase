// Select all team cards
const teamCards = document.querySelectorAll(".team-card");

// Toggle expand on click
teamCards.forEach(card => {
  card.addEventListener("click", () => {
    // Remove 'active' class from other cards
    teamCards.forEach(c => c !== card && c.classList.remove("active"));
    // Toggle this card
    card.classList.toggle("active");
  });
});

// Tooltip for social icons
const socialIcons = document.querySelectorAll(".social-icon");

socialIcons.forEach(icon => {
  const label = icon.querySelector("i").classList[1].replace("fa-", "").replace("-", " ");
  icon.setAttribute("title", label);
});

// Ripple effect on CTA button
const ctaButton = document.querySelector(".cta-button");
ctaButton.addEventListener("click", (e) => {
  const circle = document.createElement("span");
  circle.classList.add("ripple");
  const rect = ctaButton.getBoundingClientRect();
  circle.style.left = `${e.clientX - rect.left}px`;
  circle.style.top = `${e.clientY - rect.top}px`;
  ctaButton.appendChild(circle);
  setTimeout(() => {
    circle.remove();
  }, 600);
});

// Optional: Filter by role (e.g., show only Developers)
const filterButtons = document.querySelectorAll("[data-filter]");
if (filterButtons.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const role = button.getAttribute("data-filter");
      teamCards.forEach(card => {
        const roleText = card.querySelector(".role").textContent.toLowerCase();
        if (role === "all" || roleText.includes(role)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
      filterButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
    });
  });
}
