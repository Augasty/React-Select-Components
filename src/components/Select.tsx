import { useState } from "react"

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

  const [open, setOpen] = useState(false)

  function clearOptions(){
    onChange(undefined)
  }
    
  function selectOption(op: SelectOption){
    console.log(value)
    onChange(op)

  }

  return (
    // with tabIndex, we can focus HTML elements that are normally not focusable
    <div tabIndex={0} className={styles.container} onBlur={()=>setOpen(false)}  onClick={()=>setOpen(!open)}>
      <span className={styles.value}>{value?.label}</span>
      <button className={styles['clear-btn']} onClick={e=>{
        e.stopPropagation()
        clearOptions()
      }}>&times;</button>

      <div className={styles.divider}/>
      <div className={styles.caret} />


      <ul className={`${styles.options} ${open ? styles.show : ''}`}>
        {options.map(op => (
        <li key={op.label} onClick={e=>{
          e.stopPropagation()
          selectOption(op)
          setOpen(false)
        }}
         className={styles.option}>{op.label}</li>
        ))}
      </ul>
    </div>
  )
}
