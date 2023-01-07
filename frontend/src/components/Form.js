
import { useState } from 'react';
import { FaCircle } from "react-icons/fa";
import styles from './Form.module.scss'

export default function Form({setTask, task}) {

    const [form, setForm] = useState({
        description: task.description,
        name: task.name,
        date: task.date,
        status: 'to-do'
    })

    const requiredFields = ['name', 'status', 'description']

    const statusOptions = ['to-do', 'doing', 'done']

    function handleSetTask(e) {
        e.preventDefault();

        const isValid = validateForm();
        
        if(!isValid) return

        setTask(form);
    }

    function handleInputChange(e) {
        document.querySelector('.form-control').innerHTML = ""
    
        const modifiedField = e.target.getAttribute("name")
        const modifiedValue = e.target.value;

        setForm(Object.assign({...form}, {
            [modifiedField] : modifiedValue
        }));
    }

    function validateForm() {
        const formControl = document.querySelector('.form-control');

        for (let [key, value] of Object.entries(form)) {
            
            if (!(requiredFields.includes(key) && !value)) continue;
            formControl.innerHTML += `<small>the field ${key} is required</small>`
            return false 
        }
        
        return true
    }

    function showOptions() {
        return (
            <ul className={styles.listOption}>
                {statusOptions.map((option)=>{
                return (
                    <ol key={option} className={`${styles.option}`}>
                        <label 
                        className={`${styles.option__label}`}
                        htmlFor={option}>
                            <FaCircle className={option}></FaCircle> {option}
                        </label>
    
                        <input 
                        className={`${styles.option__input}`} 
                        type="radio" 
                        name="status"
                        value={option}
                        id={option} 
                        onClick={e => handleInputChange(e)}
                        />
    
                    </ol >
                )
            })}
            </ul>
        )
    }

    return (
        <>
        <form action="." className={` ${styles.form}`}>
            <div className={`${styles.formControl} form-control danger`}></div>
            <ul className={`${styles.form__list}`}>

                <li className={`${styles.field}`}>
                    <label className={`${styles.field__label}`} htmlFor="taskName">
                        Name
                    </label>
                    <input 
                    className={`${styles.field__input}`} 
                    type="text" 
                    name="name" 
                    id="taskName" 
                    value={form.name}
                    onChange={(e) => handleInputChange(e)}/>
                </li>

                <li className={`field ${styles.field}`}>
                    <label className={`${styles.field__label}`} htmlFor="taskName">
                        Description
                    </label>
                    
                    <textarea 
                    name="description" 
                    id="taskDescription" 
                    maxLength="240"
                    value={form.description}
                    onChange={(e) => handleInputChange(e)}>
                    </textarea>
                </li>

                <li className={`field ${styles.field}`}>
                    <label className={`${styles.field__label}`} htmlFor="taskName">
                        Status
                    </label>
                    
                    {showOptions()}
                </li>

                <li className={`field ${styles.field}`}>
                    <label className={`${styles.field__label}`} htmlFor="taskName">
                    date
                    </label>
                    
                    <input 
                    className={`${styles.field__input}`}
                    type="datetime-local" 
                    name="date" 
                    onChange={(e) => handleInputChange(e)}/>
                </li>
            </ul>
            <div className={`action ${styles.action}`}>
                <button type="submit" className={`${styles.submitBtn}`} onClick={handleSetTask}>
                    Create task
                </button>
            </div>
        </form>
        </>
    )

}

Form.defaultProps = {
    task: {
        name: '',
        description: '',
        date: '',
    }
}