import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addDesk } from "../../../redux/counterSlice";
import { BockDeskChangeWrapper } from "./BoardsChange.styled";

interface IBoardsChange {
    cleanDesc: () => void;
}

const BoardsChange: FC<IBoardsChange> = ({ cleanDesc }): JSX.Element => {
    const [nameDesk, setNameDesk] = useState<string>('');
    const dispatch = useDispatch();
    const addDeskLocal = () => { if (nameDesk) dispatch(addDesk(nameDesk)); setNameDesk('') }
    return <BockDeskChangeWrapper>
        <input type="text" value={nameDesk} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameDesk(e.target.value)} />
        <button onClick={addDeskLocal}>добавить доску</button>
        <button onClick={cleanDesc}>очистить все</button>
    </BockDeskChangeWrapper>
}
export default BoardsChange;