const menuItems = [
  { name: "Chicken Tikka", category: "main", image: "chicken_tikka.jpg" },
  { name: "Paneer Tikka", category: "main", image: "paneer_tikka.jpg" },
  { name: "Samosa", category: "appetizer", image: "samosa.jpg" },
  { name: "Aloo Gobi", category: "main", image: "aloo_gobi.jpg" },
  { name: "Gulab Jamun", category: "dessert", image: "gulab_jamun.jpg" },
  { name: "Naan", category: "main", image: "naan.jpg" },
];

const menuContainer = document.getElementById("menu");
const categoryFilter = document.getElementById("category");

function displayMenuItems(category) {
  menuContainer.innerHTML = "";
  const filteredItems =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  filteredItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `
          <h2>${item.name}</h2>
          <img src="images/${item.image}" alt="${item.name}">
          <p>Category: ${item.category}</p>
      `;
    menuContainer.appendChild(menuItem);
  });
}

categoryFilter.addEventListener("change", () => {
  displayMenuItems(categoryFilter.value);
});

displayMenuItems("all");
