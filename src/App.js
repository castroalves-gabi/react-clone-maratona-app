import './App.css';
import Books from './components/books';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="title">Maratona</div>
            <nav>
                <div><a href="#">como funciona</a></div>
                <div><a href="#">maratonas</a></div>
                <div><a href="#">lcs</a></div>
                <div><a href="#">salas de foco</a></div>
                <div><a href="#">sprints</a></div>
            </nav>
            <div class="menu-container">
                <div class="menu"></div>
                <div class="menu"></div>
                <div class="menu"></div>
            </div>
      </header>
      <div class="container">
        <h1 class="page-title">Livros recentes</h1>
        <div class="content-container">
          <div class="top">
            <label class="checkbox"><input type="checkbox"/> Apenas em andamento</label>
            <div class="new-read">Nova leitura +</div>
          </div>
            <Books />
            {/* <div class="book">
              <div class="book-info">
                <img src="https://onlivro.com.br/wp-content/uploads/2020/12/A-incendiaria-Colecao-Biblioteca-Stephen-King-Capa-dura.jpg" alt="Book Cover"/>
                <div class="text">
                  <span class="title">A Incendiária</span>
                  <span class="autor">Stephen King</span>
                </div>
              </div>
              <div class="book-progress">
                <div class="reload">Atualizar</div>
                <div class="bar"></div>
                <div class="percentage">0%</div>
              </div>
            </div> */}
        </div>

        <div class="collective-readings">Quer encontrar leituras coletivas para discutir sobre o livro?</div>
        <div class="discover">Descobrir LCs</div>
      </div>
      <footer>
            <div class="app">
                <div>app android</div>
                <div>app iOS</div>
            </div>
            <div class="social-media">
                <div>nosso instagram</div>
                <div>nosso tiktok</div>
                <div>nosso twitter</div>
            </div>
            <div class="politics">
                <div>termos de uso</div>
                <div>política de privacidade</div>
                <div>precisa de ajuda?</div>
            </div>
        </footer>

    </div>
  );
}

export default App;