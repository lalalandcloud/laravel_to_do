import { router, useForm } from "@inertiajs/react";
import React, { useState } from "react";


export default function Home({ tasks }) {

    const { delete: destroy } = useForm();
    const [processingId, setProcessingId] = useState(null);

    const deleteTask = (task) => {
        router.post(
            `/tasks/${task.id}` ,
            {
                _method: "DELETE"
            },
            {
                preserveScroll: true
            }
        );
    };
    const clearCompletedTasks = () => {
        router.post(
            `/tasks/clear`, 
            {
                _method: "DELETE"
            },
            {
            preserveScroll: true
        });
    };
    const toggleTaskState = (task) => {
        router.post(
            `/tasks/${task.id}/toggle`,
            {
                _method: "PATCH"
            },
            {
                preserveScroll: true
            }
        );
    };

    return (
        <div className="div_glo outfit">
            <button
                className="btn_delete"
                onClick={() => clearCompletedTasks()}
            >
                Supprimer toutes les tâches completées
            </button>            
            <ul>
                {tasks.map(task => (
                    // <li key={task.id}>
                    //     <input
                    //         type="checkbox"
                    //         checked={task.state}
                    //         onChange={() => toggleTaskState(task)}
                    //     />
                    //     {task.name} - {task.state ? 'Terminé' : 'En cours'}
                        
                    //     <button onClick={() => deleteTask(task)}>
                    //         Supprimer
                    //     </button>
                    // </li>
                    <li key={task.id}
                    className={task.state ? 'toggle completed' : 'toggle progress'}
                    >
                        <div className="div_list">
                            {task.name}
                        </div>
                        <button className={task.state ? 'toggle complet' : 'toggle incomplet'} onClick={() => toggleTaskState(task)}>                        
                                {task.state ? 'Terminé' : 'En cours'}
                        </button>
                        
                        <button className="btn_delete" onClick={() => deleteTask(task)}>
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
