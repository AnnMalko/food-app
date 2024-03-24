import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/dishesSlice";

const Filter = ({ category }) => {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    return (<div>
        <p onClick={() => { dispatch(filterCategory(category)) }} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>
            {category}</p>
    </div>)
}
export default Filter;