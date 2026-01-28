import React from 'react';
import DiscussionCard from './DiscussionCard';
import PropTypes from 'prop-types';
import postedAt from '../utils/postedAt';

function Main({ threads }) {
  return (
    <main className='home-main'>
      <h3 className='discussion-head'>Diskusi Tersedia</h3>
      {threads.map((disccus) => (
        <DiscussionCard
          key={disccus.id}
          category={disccus.category}
          title={disccus.title}
          body={disccus.body}
          likes={disccus.upVotesBy.length}
          comments={disccus.totalComments}
          views={15}
          daysAgo={postedAt(disccus.createdAt)}
          author={disccus.ownerId}
        />
      ))}
    </main>
  );
}

Main.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalComments: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    ownerId: PropTypes.string.isRequired,
  })).isRequired,
};

export default Main;