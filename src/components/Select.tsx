import styles from './select.module.css'
type SelectOption = {
    label: string
    value: any
}

type SelectProps = {
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
    options: SelectOption[]
}


export const Select = ({value, onChange, options}: SelectProps) => {
  return (
    // with tabIndex, we can focus HTML elements that are normally not focusable
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>Value</span>
      <button className={styles['clear-btn']}>&times;</button>

      <div className={styles.divider}/>
      <div className={styles.caret}/>


      <ul className={styles.options}>
        {options.map(op => (<li key={op.label} className={styles.option}>{op.label}</li>))}
      </ul>
    </div>
  )
}
