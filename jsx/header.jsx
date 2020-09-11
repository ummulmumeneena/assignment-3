function HeadBar (){

    return(
        <div class="container">
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
        molestias earum eveniet.
        </p>
        <div class="search-bar">
          <input type="search" placeholder="Search" />
        </div>
        </div>
       
     )
};
ReactDOM.render ( <HeadBar/>, document.getElementById("header"));

