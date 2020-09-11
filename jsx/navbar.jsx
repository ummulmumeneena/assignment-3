function NavBar (){
  return(

<nav class="navbar">
       <div class="images">
        <a href="#">Hulk</a>
        <a href="#" id="logo">Mavel</a>
        <a href="#">Venom</a>
        </div>
</nav>
  )
};
ReactDOM.render ( <NavBar/>,   document.getElementById("navbar"));