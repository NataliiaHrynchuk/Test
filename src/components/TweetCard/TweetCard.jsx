import * as SC from "./TweetCard.styled";
import { Button } from "components/Button/Button";
// import { useState } from "react";

export const TweetCard = () => {
    // const [followerValue, setFollowerValue] = useState(100500)
    return <SC.Container>
        <SC.LogoIcon></SC.LogoIcon>
        <SC.PhrasesPicture></SC.PhrasesPicture>
        <SC.Rectangle></SC.Rectangle>
        <SC.Avatar></SC.Avatar>
        <SC.TextWrapper>
            <SC.Statistics>700 tweets</SC.Statistics>
            <SC.Statistics>100500 followers</SC.Statistics>
            {/* <SC.Statistics>{followerValue.toLocaleString('ja-JP')} followers</SC.Statistics> */}
<Button text='follow'></Button>
            </SC.TextWrapper>
    </SC.Container>
};