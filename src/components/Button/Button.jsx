import * as SC from './Button.styled';

export const Button = ({handleClick, backgroundColor, children}) => {
    
    return <SC.FollowBtn
        style={{background: backgroundColor}}
        onClick={handleClick}
        type="button"
    >
        {children}
    </SC.FollowBtn>
}