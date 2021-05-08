let perks_section = document.getElementById("perks_section");
let donate_btn = document.getElementById("donate_btn");
function on_off_perk() {
  if (perks_section.style.display === "none") {
    perks_section.style.display = "block";
  }
  else {
    perks_section.style.display = "none";
  }
}
donate_btn.addEventListener("click", on_off_perk);