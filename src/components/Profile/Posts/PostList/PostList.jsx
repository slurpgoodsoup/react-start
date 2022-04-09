import style from './PostList.module.css'
import Post from './Post/Post.jsx';

const PostList = (props) => {
    let postsElements = props.profilePage.postsData.map (post => <Post key = {post.id} name = {post.name} text = {post.text} />);
   
    return (
        <div className={style.postsList}>
            {postsElements}
        </div>
    )};

export default PostList;