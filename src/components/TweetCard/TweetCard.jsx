import * as SC from "./TweetCard.styled";
import { Button } from "components/Button/Button";
import { useState, useEffect } from "react";

export const TweetCard = () => {
    const [isFollowing, setIsFollowing] = useState(() => JSON.parse(window.localStorage.getItem('isFollowing')) ?? false);
    const [followerValue, setFollowerValue] = useState(100500);
    const [color, setColor] = useState('#ebd8ff');
    
    const changeIsFollowing = () => {
        setIsFollowing(!isFollowing);
        
        isFollowing ? 
            setFollowerValue(followerValue - 1)
        : 
            setFollowerValue(followerValue + 1)
        ;
        isFollowing ?  setColor('#ebd8ff') : setColor('#5CD3A8')
    };
    
    useEffect(() => {
        window.localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
    }, [isFollowing]);
    
    return <SC.Container>
        <SC.LogoIcon></SC.LogoIcon>
        <SC.PhrasesPicture></SC.PhrasesPicture>
        <SC.Rectangle></SC.Rectangle>
        <SC.Avatar></SC.Avatar>
        <SC.TextWrapper>
            <SC.Statistics>700 tweets</SC.Statistics>
            <SC.Statistics>{followerValue.toLocaleString('ja-JP')} followers</SC.Statistics>
            <Button
                handleClick={changeIsFollowing} 
                children={isFollowing ? "following" : "follow"}
                backgroundColor={color}
            ></Button>
            </SC.TextWrapper>
    </SC.Container>
};