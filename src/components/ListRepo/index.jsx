import React from 'react';

import TitleBlock from "../SummaryBlocks/TitleBlock";
import './styles.css';

const ListRepo = ({title, repos, username}) => {
  return (
    <TitleBlock title={title}>
      <div className='list-repo-block'>
        {repos.map((e) => (
          <div className='list-repo-item'>
            <div>
              <a target='_blank'
                rel='noopener'
                className='name-repo'
                href={`https://github.com/${username}/${e.name}`}
              >
                {e.name}
              </a>
            </div>
            {e.language} – Creator & Owner
            {e.date}
            {e.description}
            <a className='mr-5'
              href={e.homepage}
              target='_blank'
              rel='noopener'
            >
              {e.homepage}
            </a>
          </div>
        ))}
      </div>
    </TitleBlock>
  );
};

export default ListRepo;