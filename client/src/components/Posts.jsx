import React, { useState } from 'react'
import Thumbnail from '../images/thumbnail.jpg'
import PostItem from './PostItem'





const DUMMY_POSTS = [
  {
    id: '1',
    thumbnail: Thumbnail,
    category: 'education',
    title: 'This is the title of the very first post on this blog',
    desc: 'lorem ipsum macu macu, lorem ipsum macu macu, lore ipsum macu macu, fiestooooon, lorem ipsum macu macu, lorem ipsum macu macu, lore ipsum macu macu, fiestooooon, lorem ipsum macu macu, lorem ipsum macu macu, lore ipsum macu macu, fiestooooon',
    authorID: 3
  },
  {
    id: '2',
    thumbnail: Thumbnail,
    category: 'science',
    title: 'This is the title of the very first post on this blog',
    desc: 'lorem ipsum macu macu, lorem ipsum macu macu, lore ipsum macu macu, fiestooooon, lorem ipsum macu macu, lorem ipsum macu macu, lore ipsum macu macu, fiestooooon, lorem ipsum macu macu, lorem ipsum macu macu, lore ipsum macu macu, fiestooooon',
    authorID: 8
  },
  {
    id: '3',
    thumbnail: Thumbnail,
    category: 'art',
    title: 'This is the title of the very first post on this blog',
    desc: 'lorem ipsum macu macu, lorem ipsum macu macu, lore ipsum macu macu, fiestooooon, lorem ipsum macu macu, lorem ipsum macu macu, lore ipsum macu macu, fiestooooon, lorem ipsum macu macu, lorem ipsum macu macu, lore ipsum macu macu, fiestooooon',
    authorID: 10
  },
  {
    id: '4',
    thumbnail: Thumbnail,
    category: 'business',
    title: 'This is the title of the very first post on this blog',
    desc: 'lorem ipsum macu macu, lorem ipsum macu macu, lore ipsum macu macu, fiestooooon, lorem ipsum macu macu, lorem ipsum macu macu, lore ipsum macu macu, fiestooooon, lorem ipsum macu macu, lorem ipsum macu macu, lore ipsum macu macu, fiestooooon',
    authorID: 11
  },

]

const Posts = () => {
  const [posts] = useState(DUMMY_POSTS)
  return (

    <section className="posts">
      <div className="container posts__container">
        {
          posts.map(({ id, thumbnail, category, title, desc, authorID }) =>
            <PostItem key={id} postID={id} thumbnail={thumbnail} category={category}
              title={title} description={desc} authorID={authorID} />)
        }
      </div>
    </section>
  )
}

export default Posts
