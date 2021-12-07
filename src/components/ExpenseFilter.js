
const ExpenseFilter = (props) => {
    
    const {onFilterChanged} = props;

    const yearChangedHandler = (e) => {
        onFilterChanged(e.target.value)
        if (e.target.value === 'Select Year') {
            onFilterChanged('')
        }
    }
    return (
        <div>
            <label>Filter By Year</label>
            <select onChange={yearChangedHandler}>
                <option>Select Year</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;
