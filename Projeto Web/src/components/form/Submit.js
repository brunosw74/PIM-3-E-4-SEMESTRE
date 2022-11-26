import styles from './Submit.module.css'

function Submit({ text }) {
    return (
        <div>
            <button className={styles.btn_submit}>{text}</button>
        </div>
    )
}

export default Submit