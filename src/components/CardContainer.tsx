import React from 'react';
import CardItem from './CardItem';
import type { MEMBER_DATA_TYPE } from '@site/data/members';

const CardContainer: React.FC<CardContainerProps> = ({ members }) => {
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      {members.map((member) => {
        return (
          <div className="col col--3" id={member.nim}>
            <CardItem {...member} />
          </div>
        )
      })}
    </div>
  )
}

export interface CardContainerProps {
  members: MEMBER_DATA_TYPE[],
}

export default CardContainer