import { IoHeartOutline } from "react-icons/io5";

export default function Card(props) {
    return (
        <article className="card">
            <div className="card__header">
                <div className="card__date">{props.data.postDate}</div>
                <div className="card__like">
                    <IoHeartOutline />
                </div>
            </div>
            <h2 className="card__title">{props.data.title}</h2>
            <p className="card__content">
                {props.data.content}
            </p>
        </article>
    )
}