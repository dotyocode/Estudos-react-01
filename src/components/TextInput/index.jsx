import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TextInput = ({searchValue, handleChange}) => {

    return (
    
    <input className="form-control w-50 mb-3"
    onChange={handleChange}
    value={searchValue}
    type="search"
    placeholder="Pesquisar algum conteúdo"
    />
    )    
}
