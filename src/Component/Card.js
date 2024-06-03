import { FcLike } from "react-icons/fc";
function Card({ item }) {
  return (
    <div>
      <div>
        <img src={item.image.url}></img>
      </div>
      <div>
        <button>
          <FcLike fontSize="1.75em"></FcLike>
        </button>
      </div>
      <div>
        <p>{item.title}</p>
      </div>
      <div>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
export default Card;
