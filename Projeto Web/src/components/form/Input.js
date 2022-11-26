import styles from './Input.module.css'

function Input({ type, name, placeholder, handleOnChange, value }) {
    return (
        <div >
          <input className={styles.input_general}
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

export default Input