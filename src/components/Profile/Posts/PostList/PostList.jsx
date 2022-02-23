import style from './PostList.module.css'
import Post from './Post/Post.jsx';

const PostList = () => {
    return (
        <div className={style.postsList}>
            <Post name = "lox" text = "text" />
            <Post name = "ну да я" text = "хочу питьсю.............." />
            <Post name = "Котек" text = "ОООООООООУОУОООООООООООООУОУООООООООООООООООООООООУОО" />
        </div>
    )};

export default PostList;