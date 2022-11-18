import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBoard } from "../../../interface/main.interface";
import { changePlace } from "../../../redux/counterSlice";
import { DeskItem, DeskWrapper } from "./BoardsItem.styles";

const BoardsItem: FC<{ activeDesk: { name: string }, setActiveDesk: (item: any) => void }> =
  ({ activeDesk, setActiveDesk }): JSX.Element => {
    const [stateCards, setStateCards] = useState<IBoard | any>({});
    const [currendCard, setCurrendCard] = useState<IBoard | null>(null);
    const state = useSelector((state: any) => state.counter.group);
    const dispatch = useDispatch();

    useEffect(() => {
      setStateCards(state);
    }, [state]);

    const dragStartHandler = (e: React.ChangeEvent<HTMLInputElement>, item: IBoard) => {
      setCurrendCard(item);
    }

    const dragEndHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.style.background = '#dbdbdb';
    }

    const dragOverHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      e.target.style.background = '#c616c9';
    }

    const dropHandler = (e: React.ChangeEvent<HTMLInputElement>, card: IBoard) => {
      e.preventDefault();
      if (currendCard) {
        const newState = stateCards.map((element: IBoard) => {
          if (element.name === currendCard.name) return element = card
          if (element.name === card.name) return element = currendCard
          return element;
        })
        setStateCards(newState);
        e.target.style.background = '#dbdbdb';
        dispatch(changePlace(newState))
      }
    }

    return (
      <DeskWrapper>
        {stateCards.length ? stateCards.map((item: any, id: number) => (
          item.name &&
          <DeskItem
            key={id}
            onClick={() => setActiveDesk(item)}
            active={item.name == activeDesk.name ? true : false}
            draggable={true}
            onDragStart={(e: any) => dragStartHandler(e, item)} //взяли 
            onDragLeave={(e: any) => dragEndHandler(e)} // вышли за пределы другой карточки
            onDragEnd={(e: any) => dragEndHandler(e)} // отпустили перемещение
            onDragOver={(e: any) => dragOverHandler(e)} // находимся на другим объектом
            onDrop={(e: any) => dropHandler(e, item)} // отпустили - что-то происходит 
          >
            {item.name}
          </DeskItem>
        ))
          : null}
      </DeskWrapper>
    )
  }
export default BoardsItem
