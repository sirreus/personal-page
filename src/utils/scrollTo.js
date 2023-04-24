export function scrollTo(id) {
  let element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}
