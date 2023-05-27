function HouseForm({addHouseTodo}) {
    const [value, setValue] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addHouseTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>  
            <input 
                type="text"
                className="input"
                value={value}
                placeholder="Add Task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}