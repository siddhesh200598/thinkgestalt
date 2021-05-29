function toggleSidebar() {
  const sidebar = document.querySelector(".page0");
  const newcol = document.querySelector(".new");
  
  sidebar.classList.toggle("active");
  newcol.classList.toggle("active");
  
}

function loadmore() {

  const loadmore = document.querySelector(".loadmorecontent");
  const rmvloadmore = document.querySelector(".loadmore");

  loadmore.classList.add("active");
  rmvloadmore.classList.add("active");
  

}

