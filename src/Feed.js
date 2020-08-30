import React, {useState, useEffect} from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        db.collection('posts')
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        ));
    }, [])
 
    return (
        <div className="feed">
            <StoryReel />

            <MessageSender />

            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                
                />
            ))}

            <Post 
                profilePic="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Favatars-circle-2%2F72%2F146-512.png&f=1&nofb=1"
                message="wow this is awesome"
                timestamp="this is timestamp"
                username="yattsun"
                image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbuzz-plus.com%2Fwp-content%2Fuploads%2F2017%2F01%2Framen-jiro-otakibashi8.jpg&f=1&nofb=1"
            />
            <Post 
                profilePic="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Favatars-1-5%2F136%2F87-512.png&f=1&nofb=1"
                message="we went here and got wasted.."
                timestamp="this is timestamp"
                username="hikaru"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuds.gnst.jp%2Frest%2Fimg%2F1rz3unvc0000%2Fs_0n82.jpg&f=1&nofb=1"
            />
            
        </div>
    )
}

export default Feed
