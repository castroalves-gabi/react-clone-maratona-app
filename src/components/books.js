import './books.css'

function Books() {
    return (
        <div className="books">
            <div className="book">
                <div className="book-info">
                    <img src="https://onlivro.com.br/wp-content/uploads/2020/12/A-incendiaria-Colecao-Biblioteca-Stephen-King-Capa-dura.jpg" alt="Book Cover"/>
                    <div className="text">
                    <span className="title">A Incendiária</span>
                    <span className="autor">Stephen King</span>
                    </div>
                </div>
                <div className="book-progress">
                    <div className="reload">Atualizar</div>
                    <div className="bar"></div>
                    <div className="percentage">0%</div>
                </div>
            </div>
        </div>
      );
  }

export default Books;