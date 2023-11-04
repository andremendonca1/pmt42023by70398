const dropdown = document.querySelector("[data-dropdown]");

if (dropdown) {
  dropdown.addEventListener("click", e => {
    e.currentTarget.classList.toggle("active");
  });
}


const loading = document.querySelector("#loading");

if (loading) {
  setTimeout(() => {
    loading.style.display = "none";
  }, 1000);
}
