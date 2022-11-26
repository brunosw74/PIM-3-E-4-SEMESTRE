// import { Link } from 'react-router-dom'
import styles from './MenuButton.module.css'
// import { useLocation } from 'react-router-dom'
// import ButtonSelect from './Select/ButtonSelect'

function MenuButton({ name, options, handleOnchange, value }) {

    // const location = useLocation();
    // const id_page = 0;

    // if(options.map((option) => (
    //     id_page = <option value={option.id} key={option.id}></option> ? 
    // ))){

    // }

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}></label>
            <select name={name} id={name}>
                <option>Menu</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))};
            </select>
        </div>
    )
}

export default MenuButton
