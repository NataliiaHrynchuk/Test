import * as SC from './Button.styled';
import { useState, useEffect } from "react";

export const Button = () => {
    const [isFollowing, setIsFollowing] = useState(() => JSON.parse(window.localStorage.getItem('isFollowing')) ?? false);
    const [text, setText] = useState(() => JSON.parse(window.localStorage.getItem('text')) ?? "follow",);
    
    const handleClick = () => {
        setIsFollowing(!isFollowing);
        isFollowing ? setText("following") : setText("follow");
    };

    useEffect(() => {
        window.localStorage.setItem('text', JSON.stringify(text));
        window.localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
    }, [text, isFollowing]);

    
    return <SC.FollowBtn
        onClick={handleClick}
        type="button">{text}</SC.FollowBtn>
}