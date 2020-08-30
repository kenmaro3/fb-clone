import React from 'react'
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff5%2FDrigung_monastery3.jpg%2F1200px-Drigung_monastery3.jpg&f=1&nofb=1"
                profileSrc="https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png"
                title="kenmaro"
            />

            <Story
                image="https://iphone-mania.jp/wp-content/uploads/2018/06/AI-e1530163156605.jpg"
                profileSrc="http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/robot-02-icon.png"
                title="omiita"
            />

        </div>
    )
}

export default StoryReel
