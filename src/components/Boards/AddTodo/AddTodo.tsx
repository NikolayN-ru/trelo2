import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/counterSlice";
import { AddTodoWrapper } from "./AddTodo.styled"

interface IDesc {
    active: boolean;
    cards: Object[];
    name: string;
}

const AddTodo: FC<{ activeDesk: IDesc }> = ({ activeDesk }): JSX.Element => {
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const dispatch = useDispatch();

    const addTaskLocal = (task: any) => {
        const candidate = { ...task, desk: activeDesk.name }
        dispatch(addTask(candidate));
    }

    const addCard = () => {
        if (title && desc) {
            setTitle('')
            setDesc('')
            addTaskLocal({ title, desc })
        }
    }

    return (
        <AddTodoWrapper>
            <div>
                <p>Заголовок:</p>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <p>Описание:</p>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <button onClick={addCard}>Добавить задачу</button>
        </AddTodoWrapper>
    )
}

export default AddTodo;