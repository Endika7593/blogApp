import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/edit`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>

        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi libero unde delectus quos velit ea modi harum hic impedit maiores pariatur nesciunt ducimus vitae sunt, dignissimos animi. Dolorem ad consectetur animi reiciendis voluptate dolore cum ratione non fugit corporis! Et.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at, neque minus excepturi officia sint est vero delectus, voluptates placeat quasi in voluptatum debitis soluta? Laudantium modi, esse porro assumenda accusantium veniam est nihil ipsam dolor! Molestiae, neque velit quam harum numquam necessitatibus distinctio? Aliquam quod quis culpa totam. Non modi a debitis? Unde, ipsam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero a autem, excepturi laboriosam possimus vero. Provident quaerat in assumenda cumque vitae veniam necessitatibus saepe minus? Accusantium nostrum reprehenderit provident maxime nemo reiciendis repudiandae, fugit quidem odit quo quae totam voluptates impedit? Est enim, deserunt dolorem magni debitis qui aspernatur doloremque quod culpa in. Minima consequuntur, error aspernatur iure exercitationem hic obcaecati labore tenetur repellat unde dolorem laudantium qui explicabo soluta recusandae dolores sunt culpa, dolorum fuga enim. Recusandae consequuntur excepturi eligendi aspernatur animi. Sequi molestias voluptatum est mollitia facere deleniti natus fugiat quas, commodi cupiditate debitis, accusantium optio hic inventore, soluta deserunt sapiente autem temporibus rem. Qui possimus distinctio tempora explicabo!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptatibus cupiditate quibusdam eaque eveniet minima natus inventore esse delectus eius.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi, esse laborum nam, nemo at iusto dolorem expedita in asperiores est perferendis quam quae quas eaque? Quasi aspernatur excepturi voluptate adipisci nulla dignissimos! Ratione ipsam corrupti, ut hic quasi autem vero, corporis voluptas delectus consequatur sit error consectetur. Reiciendis labore modi adipisci officiis repudiandae aliquam recusandae blanditiis doloremque, iure quidem voluptas eligendi veritatis accusantium dignissimos quisquam maxime deserunt debitis qui magni voluptatum animi? Error nisi eaque aspernatur accusamus debitis mollitia beatae veniam reprehenderit dolores ex aliquid officia molestias voluptatibus ab similique cupiditate id consequatur, vel perspiciatis soluta culpa. Culpa optio illum quia vitae veritatis quis earum at mollitia porro! Corporis, in magnam! Ipsa, impedit animi doloremque cumque quo dignissimos laborum velit ea, vel omnis ullam reprehenderit quaerat. Natus dicta fugiat praesentium optio laborum veritatis vero laudantium aperiam aliquid iusto? Assumenda ex inventore consectetur! Minus ratione id culpa autem, magni nihil molestiae ipsum hic ut illo temporibus officia, modi quos pariatur dicta magnam doloribus architecto nulla enim maxime suscipit quis quas non. Temporibus, cupiditate corrupti libero dolor quasi, necessitatibus maxime excepturi voluptatem id debitis placeat assumenda quae est veniam fugit exercitationem eius modi ad amet nulla similique tempore blanditiis optio magni!</p>
      </div>
    </section>
  )
}

export default PostDetail
