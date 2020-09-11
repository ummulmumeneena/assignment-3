








const myImages = [
    {id: 1, pic: "img/venom-1.jpg" },
    {id: 2, pic: "img/hulk-1.jpg" },
    {id: 3, pic: "img/venom-2.jpg" },
    
];

function App (props) {
    console.log(props)
    return (
        <div className="avengers" >
            <img src={props.pic} alt="image"/>
       </div>
    );
}

let picRow = myImages.map( (i)=>  <App key={i.id} pic={i.pic} />);
ReactDOM.render(
 <React.StrictMode>
 {picRow}
 </React.StrictMode>, document.getElementById ("root"));
 