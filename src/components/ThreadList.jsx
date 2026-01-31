import React, { useState } from 'react';
import ThreadItem from './ThreadItem';
import PropTypes from 'prop-types';
import postedAt from '../utils/postedAt';
import ThreadInput from './ThreadInput';


function ThreadList({ threads, onAddThread }) {
  const [showInput, setShowInput] = useState(false);

  const onToggleNewThread = () => {
    setShowInput((prevShowInput) => !prevShowInput);
  };

  return (
    <main className='home-main'>
      <ThreadInput onAddThread={onAddThread} showInput={showInput} setShowInput={setShowInput} />
      <h3 className='discussion-head'>Diskusi Tersedia <button className={`${showInput ? 'hidden' : ''}`} onClick={onToggleNewThread}>Buat Thread</button></h3>
      {threads.map((disccus) => (
        <ThreadItem
          key={disccus.id}
          id={disccus.id}
          category={disccus.category}
          title={disccus.title}
          body={disccus.body}
          upVoteBy={disccus.upVotesBy}
          downVoteBy={disccus.downVotesBy}
          daysAgo={postedAt(disccus.createdAt)}
          author={disccus.user.name}
        />
      ))}
    </main>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalComments: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    ownerId: PropTypes.string.isRequired,
  })).isRequired,
  onAddThread: PropTypes.func.isRequired,
};

export default ThreadList;