let dltPost = (d) => {
  let post_to_dlt = document.getElementById(`post${d}`);
  post_to_dlt.style.display = "none";

  localStorage.setItem(`page${d}.display`, "none");
};
