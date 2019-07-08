import React from 'react';
import CardStyles from 'components/card/card.module.scss';

type IProps = {style?: React.CSSProperties};

const Card: React.FunctionComponent<IProps> = ({children,style})=>{
    return (
      <div className={CardStyles['Card__Body']} style={style}>
        {children}
      </div>
    );
};

export default Card