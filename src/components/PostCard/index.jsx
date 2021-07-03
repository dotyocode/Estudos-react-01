import './style.css';

export const PostCard = ({title, cover, id, body}) => {

    return(
        <div className="post"> 
        <img src={cover} alt={title}/>
        <div className="post-content">
           <h2 >{title}</h2>
           <p>{body}</p>
       </div>
       </div>
    )
}