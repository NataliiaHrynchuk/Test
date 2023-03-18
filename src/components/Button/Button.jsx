import * as SC from './Button.styled';
import { useState, useEffect } from "react";

export const Button = () => {
    const [isFollowing, setIsFollowing] = useState(() => JSON.parse(window.localStorage.getItem('isFollowing')) ?? false);
        
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    useEffect(() => {
        window.localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
    }, [ isFollowing]);

    
    return <SC.FollowBtn
        onClick={handleClick}
        type="button"
    >
        {isFollowing ? 'following' : 'follow'}
    </SC.FollowBtn>
}