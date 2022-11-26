import styles from './Input2.module.css'

function Input2({ type, name, placeholder, handleOnChange, value }) {
    return (
        <div >
          <input className={styles.input_name}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
          />
        </div>
      )
    }

export default Input2