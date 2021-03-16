//Funcion para aplicar la vista maximizada a los Blog Post
function blogPostURL() {
  var origen = window.location.href;
  if (origen.includes("-/blogs")) {
    if (!origen.includes("maximized")) {
      location.href = window.location.href + "/maximized";
    }
  }
}
