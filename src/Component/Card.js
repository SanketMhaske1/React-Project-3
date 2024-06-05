import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
function Card(props) {
  let item = props.item;
  let likeCourses = props.likeCourses;
  let setLikeCourses = props.setLikeCourses;
  function clickHandler() {
    if (likeCourses.includes(item.id)) {
      setLikeCourses((perv) => {
        perv.filter(perv.id !== item.id);
      });
      toast.warning("Like Removed");
    } else {
      if (likeCourses.length === 0) {
        setLikeCourses([item.id]);
      } else {
        setLikeCourses((perv) => [...perv, item.id]);
      }
      toast.success("Like Successfully");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={item.image.url}></img>

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            <FcLike fontSize="1.75em"></FcLike>
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {item.title}
        </p>
        <p className="text-white mt-2 ">{item.description}</p>
      </div>
    </div>
  );
}
export default Card;
