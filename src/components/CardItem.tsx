import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { MEMBER_CONFIG } from '@site/data/members';

const CardItem: React.FC<CardItemProps> = ({ imageLink, name, nim, bioLink, siteLink }) => {
  return (
    <div className="card margin-vert--md">
      <div className="card__image">
        <img src={useBaseUrl(imageLink)} alt={name} />
      </div>
      <div className="card__header">
        <div className="avatar">
          <div className="avatar__intro">
            <div className="avatar__name">{name}</div>
            <small className="avatar__subtitle">{MEMBER_CONFIG.baseNim}{nim}</small>
          </div>
        </div>
      </div>
      <div className="card__footer">
        <div className="button-group button-group--block">
          {bioLink ? (
            <Link className="button button--secondary" to={bioLink}>Bio</Link>
          ) : null}
          {siteLink ? (
            <a className="button button--secondary" href={siteLink} target='_blank'>Situs</a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export interface CardItemProps {
  name: string
  nim: string
  imageLink: string
  bioLink?: string
  siteLink?: string
}

export default CardItem