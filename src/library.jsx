class Library extends React.Component{

  constructor(props){
    super(props);
    this.state={page:"list"}
  }

  render(){
    let page;
    switch(this.state.page){
      case "list":
          page = <ListPage/>;
          break;
      case "formulaire":
          page = <FormPage/>;
          break;
    }
    return (
        <div>
            <h1>Library App</h1>
            <Menu click={p=>this.setState({page:p})} />
            {page}
        </div>
    )
  }
}

function ListPage(props){

  console.log("On affiche la liste des bouquins...")
  return (
    <div>
      <h1>Notre liste : </h1>
      <table>
      <tbody>
          <th>Nom</th>
          <th>Auteur</th>
          <th>Date de parution</th>
          <th>Type de document</th>
      </tbody>
      </table>
    </div>

  )
}


function FormPage(props){
  console.log("L'utilisateur ajoute un nouveau Document...")
  return ( <div className="form-style-8">
      <h1>Notre Formulaire : </h1>
      <form class="" action="" method="post">
        <input type="text" name="name" placeholder="Nom du Document"/>
        <input type="text" name="author" placeholder="Nom de l'auteur" />
        <input type="number" min="1500" max="2019" name="year" placeholder="Année de parution" />
        <input type="text" name="type" placeholder="Type de document"/>
        <input type="button" value="Enregistrer"/>
      </form>
    </div>
  )
}

function Menu(props){
  return (
    <p>
      <a href="#" onClick={()=>props.click("list")}>list</a>
      <a href="#" onClick={()=>props.click("formulaire")}>formulaire</a>
    </p>
  )
}


ReactDOM.render(
  <Library/>,
  document.getElementById("root")
)
