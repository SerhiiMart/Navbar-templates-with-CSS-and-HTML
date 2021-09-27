document.addEventListener('click', event => {
  const isDropdownButton = event.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && event.target.closest("[data-dropdown]") !==null) return
})