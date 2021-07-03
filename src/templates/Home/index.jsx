import './style.css';
import { Component } from 'react';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load_post';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {
    //usado para colocar um estado em componente funcional
    //todo componente react pode ter um estado
    //tem de ser sempre um objeto que contem os dados do componente
    state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 4,
      searchValue: ''
    };      

  async componentDidMount(){
    await this.loadPosts()
  }

  //funcao para chamar a api externa
  loadPosts = async() => {
    const{page, postsPerPage} = this.state

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    })
  }   


  //carregando os posts
  loadMorePosts = () => {
    const {page,
    postsPerPage,
    posts,
    allPosts} = this.state;
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({posts, page: nextPage})
  }

  handleChange = (e) => {

    const { value } = e.target;
    this.setState({searchValue: value})
    
  }
  

  render() {
    //Atribuição de Destruturação ( MELHOR FORMA PARA DECLARAR VARIAVEL PARA OBJETOS )
    const {posts, searchValue, allPosts} = this.state;

    //filtrando os posts
    const filterPosts = !!searchValue ?  

    allPosts.filter(post => {

      return post.title.toLowerCase().includes(searchValue.toLowerCase());}):posts;

    return (
      <section className="container">

      <div className="searchContainer">

      {!!searchValue && (
        <h1>Search Value: {searchValue}</h1>
      )}    

      <TextInput searchValue={searchValue} handleChange={this.handleChange} />  

      </div>

        {filterPosts.length > 0 && (
           <Posts posts={filterPosts}/>
        )}    

        {filterPosts.length === 0 && (
           <p>Não foi possivel encontrar sua pesquisa</p>
        )}  

        <div className="button-container">

          {!searchValue && (
            <Button onClick={this.loadMorePosts} text="Carregar mais"/>
          )}
        
        </div>
      
      </section>
    );
  }
}


export default Home;
