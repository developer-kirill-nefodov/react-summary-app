import React from 'react';

import TitleBlock from "../SummaryBlocks/TitleBlock";
import './styles.css';

const ListRepo = ({title, repos, username}) => {
  return (
    <TitleBlock title={title}>
      <div className='list-repo-block'>
        {repos.map((e, i) => (
          <div className='list-repo-item' key={'ItemRepo' + i}>
            <div>
              <a target='_blank'
                rel='noreferrer'
                className='name-repo'
                href={`https://github.com/${username}/${e.name}`}
              >
                {e.name}
              </a>
            </div>
            {e.language} – Creator & Owner
            {e.date}
            {e.description}
            <a className='ml-5 color-link'
              href={e.homepage}
              target='_blank'
              rel='noreferrer'
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