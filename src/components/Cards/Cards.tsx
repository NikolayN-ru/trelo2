import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBoard, iCard } from "../../interface/main.interface";
import { changeCards } from "../../redux/counterSlice";
import { CardItem, CardsWrapper } from "./Cards.styled"
import Modal from "./Modal/Modal";

interface ICards {
    activeDesk: IBoard
}

const init = {
    title: '',
    desc: '',
    desk: ''
}

const Cards: FC<ICards> = ({ activeDesk }): JSX.Element | null => {
    const [currendCard, setCurrendCard] = useState<iCard>(init);
    const [activeDesc, setActiveDesc] = useState<iCard[]>([init]);
    const [modal, setModal] = useState<iCard>(init);
    const cards = useSelector((state: any) => state.counter.group);
    const dispatch = useDispatch();

    useEffect(() => {
        cards.map((card: any) => {
            if (card.name == activeDesk.name && card.cards) setActiveDesc(card.cards);
        })
    })

    const dragStartHandler = (e: React.ChangeEvent<HTMLInputElement>, card: iCard) => {
        setCurrendCard(card);
    }

    const dragEndHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.style.background = 'white';
    }

    const dragOverHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.target.style.background = '#551ad6';
    }

    const dropHandler = (e: React.ChangeEvent<HTMLInputElement>, card: iCard) => {
        e.preventDefault();
        const newState = activeDesc.map((element: iCard) => {
            if (element.title === currendCard.title) return element = card;
            if (element.title === card.title) return element = currendCard
            return element;
        })
        dispatch(changeCards({
            desc: activeDesk,
            cards: newState,
        }))
        setActiveDesc(newState);
        e.target.style.background = 'white';
    }

    const popup = (item: iCard) => setModal(item);

    const closePopup = () => setModal(init);

    return (
        cards.length ? <CardsWrapper >
            {modal?.title && <Modal activeDesk={activeDesk} item={modal} closePopup={closePopup} />}
            {activeDesc && activeDesc.map((item: any, id: number) => {
                return (
                    <CardItem
                        key={id}
                        draggable={true}
                        onDragStart={(e: any) => dragStartHandler(e, item)}
                        onDragLeave={(e: any) => dragEndHandler(e)}
                        onDragEnd={(e: any) => dragEndHandler(e)}
                        onDragOver={(e: any) => dragOverHandler(e)}
                        onDrop={(e: any) => dropHandler(e, item)}
                        onClick={() => popup(item)}
                    >
                        <p>{item.title}</p>
                        <hr />
                        <p style={{ fontSize: "10px" }}>{item.desc}</p>
                    </CardItem>
                )
            })}
        </CardsWrapper > : null
    )
}

export default Cards;
