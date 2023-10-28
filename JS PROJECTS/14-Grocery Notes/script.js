document.addEventListener("DOMContentLoaded", function () {
  const itemInput = document.getElementById("item");
  const addButton = document.getElementById("add");
  const itemList = document.getElementById("itemList");

  const savedItems = JSON.parse(localStorage.getItem("groceryItems")) || [];

  savedItems.forEach((item, index) => {
    addItemToList(item, index);
  });

  function addItemToList(item, index) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
          ${item}
          <button class="remove" data-index="${index}">Remove</button>
      `;
    itemList.appendChild(listItem);
  }

  addButton.addEventListener("click", function () {
    const newItem = itemInput.value.trim();
    if (newItem) {
      savedItems.push(newItem);
      localStorage.setItem("groceryItems", JSON.stringify(savedItems));
      addItemToList(newItem, savedItems.length - 1);
      itemInput.value = "";
    }
  });

  itemList.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("remove")) {
      const index = e.target.getAttribute("data-index");
      savedItems.splice(index, 1);
      localStorage.setItem("groceryItems", JSON.stringify(savedItems));
      e.target.parentNode.remove();
    }
  });
});
