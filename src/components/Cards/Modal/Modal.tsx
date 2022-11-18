import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { changeDataCard } from "../../../redux/counterSlice";
import { BlockChange, ButtonClose, ButtonSuccess, Input, ModalWrapper } from "./Modal.styled";

interface IModal {
    item: { title: string, desc: string };
    closePopup: () => void;
    activeDesk: Object;
}

const Modal: FC<IModal> = ({ item, closePopup, activeDesk }): JSX.Element => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>(item.title);
    const [desc, setDesc] = useState<string>(item.desc);

    const changeData = () => {
        dispatch(changeDataCard({
            item,
            title,
            desc,
            activeDesk
        }))
        closePopup();
    }

    return (
        <ModalWrapper>
            <ButtonClose onClick={closePopup}>Закрыть</ButtonClose>
            <BlockChange>
                <p>Заголовок</p>
                <Input type="text" value={title} onChange={(e: any) => setTitle(e.target.value)} />
                <p>Описание</p>
                <Input type="text" value={desc} onChange={(e: any) => setDesc(e.target.value)} />
                <ButtonSuccess onClick={changeData}>сохранить</ButtonSuccess>
            </BlockChange>
        </ModalWrapper>
    )
}
export default Modal;
