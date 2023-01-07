import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { FiEdit2, FiCheck, FiFileText } from "react-icons/fi";
import { SlClose } from "react-icons/sl";

import styles from './Task.module.scss'

export default function Task({task}) {
    
    const [mode, setMode] = useState("preview");

    const fields = ["name", "description", "date", "status"]

    function showContent() {
        if (mode === "preview") {
            return (
                <div className={`${styles.task__content}`} style={{"cursor": "pointer"}}>
                    <div style={{"display":"flex", "alignItems":"center", "gap": "0.4rem" }}>
                    <FiFileText/>
                    {task.name}
                    </div>
                </div>
            )
        }
        
        return (
            <div className={`${styles.task__content}`} style={{"cursor": "auto"}}>
                
                {fields.map(field => {
                    return (
                        <div className={`${styles.field}`}>
                            <div className={`${styles.field__title} ${styles[field]}`}>
                                {field}
                            </div>
                            <div className={`${styles.field__value} ${styles.description}`}>
                                {field === "status" ? <FaCircle className={task[field]}/> : ''} {task[field]}
                            </div>
                        </div>
                    )
                })}

                <div className={`${styles.actions}`}>
                    <button className={`${styles.action} ${styles.actionDone} bg-primary`}>
                        <FiCheck className={`${styles.action__icon}`}/>
                        <span className={`${styles.action__name}`}>Done!</span>
                    </button>
                    <button className={`${styles.action} ${styles.actionMore}`}>
                        <FiEdit2 className={`${styles.action__icon}`}/>
                        <span className={`${styles.action__name} ${styles}`}>Edit</span>
                    </button>
                </div>
            </div>
            
        )
        
    }

    function showHeader() {
        if (mode === "preview") return;

        return (
            <header className={styles.header} >
                <SlClose onClick={() => setMode("preview")} style={{"cursor": "pointer"}}/>
            </header>
        )
    }

    function handleSetMode() {
        if (mode !== "preview") return;
        setMode("detail");
    }

    return (
        <div className={`${styles.task}`} onClick={(e) => handleSetMode()}>

            {showHeader()}
            {showContent()}

        </div>
    )
}
