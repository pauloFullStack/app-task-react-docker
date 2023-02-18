import { useState } from 'react';

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Por favor adicione uma tarefa');
            return;
        }

        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);

    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control' >
                <label>Tarefa</label>
                <input
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Add tarefa' />
            </div>
            <div className='form-control' >
                <label>Dia & Horário</label>
                <input
                    type='text'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    placeholder='Add Dia & Horário' />
            </div>
            <div className='form-control form-control-check' >
                <label>Lembrete</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Salvar Tarefa' className='btn btn-block' />
        </form>
    )
}

export default AddTask
