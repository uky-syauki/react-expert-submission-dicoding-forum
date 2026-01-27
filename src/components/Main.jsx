import React from 'react';
import DiscussionCard from './DiscussionCard';

function Main() {
  const dummyDiscussion = [
    {
      tag:'redux',
      title:'Bagaimana',
      description: 'desc',
      likes: 2,
      comments: 3,
      views: 44,
      daysAgo: 3,
      author: 'Achmad Syauky'
    },
    {
      tag:'nodejs',
      title:'Bagaimana',
      description: 'desc',
      likes: 2,
      comments: 3,
      views: 44,
      daysAgo: 3,
      author: 'Achmad Syauky'
    },
    {
      tag:'redux',
      title:'Bagaimana',
      description: 'desc',
      likes: 2,
      comments: 3,
      views: 44,
      daysAgo: 3,
      author: 'Achmad Syauky'
    },
    {
      tag:'nodejs',
      title:'Bagaimana',
      description: 'desc',
      likes: 2,
      comments: 3,
      views: 44,
      daysAgo: 3,
      author: 'Achmad Syauky'
    }
  ];

  return (
    <main className='home-main'>
      <h3 className='discussion-head'>Diskusi Tersedia</h3>
      {dummyDiscussion.map((disccus, index) => (
        <DiscussionCard
          key={index}
          tag={disccus.tag}
          title={disccus.title}
          description={disccus.description}
          likes={disccus.likes}
          comments={disccus.comments}
          views={disccus.views}
          daysAgo={disccus.daysAgo}
          author={disccus.author}
        />
      ))}
    </main>
  );
}

export default Main;