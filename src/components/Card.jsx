import { GoHeart, GoHeartFill } from 'react-icons/go';

export default function Card({ data, toggleLike }) {
  return (
    <article className={`card ${data.isLiked && "card-active"}`}>
      <div className="card__header">
        <div className="card__date">{data.postDate}</div>
        <button className="card__like" onClick={() => toggleLike(data.id)}>
          {data.isLiked ? <GoHeartFill /> : <GoHeart />}
        </button>
      </div>
      <h2 className="card__title">{data.title}</h2>
      <p className="card__content">
        {data.content}
      </p>
    </article>
  );
}
