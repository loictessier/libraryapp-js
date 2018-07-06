class Library extends React.Component{

  constructor(props){
    super(props);
    this.state={page:"list"}
  }

  change(e){
    this.setState(old => ({"type": e.target.value}))
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
  let dest=[]
  for (var d of documentsList) {
    dest.push(<DocumentItem name={d.name} author={d.author} year={d.year} type={d.type}/>)
  }
  return (
    <div>
      <h1>Notre liste : </h1>
      <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Auteur</th>
          <th>Date de parution</th>
          <th>Type de document</th>
        </tr>
      </thead>
      <tbody>
      {dest}
      </tbody>
      </table>
    </div>
  )
}


function FormPage(props){
  console.log("L'utilisateur ajoute un nouveau Document...")
  return ( <div className="form-style-8">
      <h1>Notre Formulaire : </h1>
      <form className="" action="" method="post">
        <input type="text" name="name" placeholder="Nom du Document"/>
        <input type="text" name="author" placeholder="Nom de l'auteur" />
        <input type="number" min="1500" max="2019" name="year" placeholder="Année de parution" />
        <select type="text" name="type" placeholder="Type de document">
          <option>Roman</option>
          <option>Manga</option>
          <option>Nouvelle</option>
          <option>Document</option>
        </select>
        <input type="submit" value="Enregistrer"/>
      </form>
    </div>
  )
}

function Menu(props){
  return (
    <ul>
      <li><a href="#" onClick={()=>props.click("list")}>Les Ouvrages</a></li>
      <li><a href="#" onClick={()=>props.click("formulaire")}>Nouvel Ouvrage</a></li>
    </ul>
  )
}

function DocumentItem(props){
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.author}</td>
      <td>{props.year}</td>
      <td>{props.type}</td>
    </tr>
  )
}


ReactDOM.render(
  <Library/>,
  document.getElementById("root")
)
