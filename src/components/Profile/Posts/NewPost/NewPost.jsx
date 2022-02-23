import style from './NewPost.module.css'

const NewPost = () =>{
    return(
    <div className={style.newPost}>
      <textarea
        className={style.newPost__textarea}
        placeholder="Ну че там.."
        ></textarea>
      <button className={style.newPost__btn}>Send</button>
    </div>
    )};

export default NewPost;