import { useState,useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const Produto = () => {

      //Hook- useNavigate
  const navigate = useNavigate();

   //Hook- useParams - cria e manipula o id

   let { id } = useParams();

 //Hook-useState
 const [produtos, setProdutos] = useState({
    id,
    nome: '',
    foto: '',
  });

  /*criando variavel metodo para o post */
  let metodo = 'post';
  // se o id for diferente de post então é editar
  if (id) {
    metodo = 'put';
  }

  //função handleChange

  const handleChange = (e) => {
    setProdutos({ ...produtos, [e.target.name]: e.target.value });
  };


    //função handleSubmit

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/produtos/${id ? id : ''}`, {
          method: metodo,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(produtos),
        }).then(() => {
          navigate('/');
        });
      };

      useEffect(() => {
        if (id) {
          fetch(`http://localhost:5000/produtos/${id}`)
            .then((resp) => {
              return resp.json();
            })
            .then((data) => {
              setProdutos(data);
            });
        }
      }, [id]);
    


  return (
    <section className="produto">
        <h1>Cadastro Produto</h1>

        <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="nome">Nome do Produto</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={produtos.nome}
            onChange={handleChange}
            required
          />
        </p>

        <p>
          <label htmlFor="foto">Foto do Produto</label>
          <input
            type="url"
            name="foto"
            id="foto"
            value={produtos.foto}
            onChange={handleChange}
          />
        </p>

        <p>
          <button type="submit">Cadastrar</button>
        </p>
        
        </form>
      
    </section>
  )
}

export default Produto
