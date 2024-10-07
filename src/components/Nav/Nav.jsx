import { Link } from "react-router-dom"

const Nav = () => {
  return (

    <section className="header">
       <Link to="/">Home</Link>
       <Link to="/produto">Cadastrar Produto</Link>
      
    </section>
  )
}

export default Nav
