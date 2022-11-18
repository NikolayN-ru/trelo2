import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanAll } from "../../redux/counterSlice";
import Cards from "../Cards/Cards";
import BoardsChange from "./BoardsChange/BoardsChange";
import BoardsItem from "./BoardsItem/BoardsItem";

const init = {
  name: '',
  cards: [],
  active: false,
}

const Boards: FC<{ activeDesk: { name: string }, setActiveDesk: (init: {}) => void }> =
  ({ activeDesk, setActiveDesk }): JSX.Element => {
    const group = useSelector((state: any) => state.counter.group);
    const dispatch = useDispatch();

    const cleanDesc = () => {
      dispatch(cleanAll())
      setActiveDesk(init)
    }

    const MainsetActiveDesk = (elem: any) => {
      setActiveDesk(elem);
    }

    return <>
      <BoardsChange cleanDesc={cleanDesc} />
      <p>Активная доска {activeDesk.name ? activeDesk.name : 'не выбрана'}</p>
      <BoardsItem activeDesk={activeDesk} setActiveDesk={MainsetActiveDesk} />
    </>
  }
export default Boards;
