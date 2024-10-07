import { useState, useEffect } from 'react';

const Home = () => {

    const [listProdutos, setListProdutos] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/produtos/')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setListProdutos(data);
        });
    }, []);

  return (
    <section className="cardProdutos">
        <div className="listaProdutos">
          <div className="cardMain">
            {listProdutos.map((item, index) => (
              <div key={index}>
                <div id="cards">
                  <div className="cardHome">
                    <p>{item.nome}</p>
                    <img src={item.foto} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Home
