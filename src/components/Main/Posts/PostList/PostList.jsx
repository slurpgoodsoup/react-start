import style from './PostList.module.css'

const PostList = () => {
    return (
        <div className={style.postsList}>
        <div className={style.postsListEl}>
            <img
            className={style.postsListEl__photo}
            src="https://vjoy.cc/wp-content/uploads/2020/04/50059_19633152-7566413-image-a-56_1570908569851.jpg"
            />
            <p className={style.postsListEl__name}>Kotya</p>
            <p className={style.postsListEl__text}>
            Oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh Caught in a bad romance
            </p>
        </div>
        </div>
    )};

export default PostList;