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
        <div>
            <h1>Liste des tâches</h1>
            <button
                className="text-red-500 hover:text-red-700 text-xl font-bold ml-2 transition-colors cursor-pointer"
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
                    <li key={task.id}>
                        {task.name} - 
                        <button onClick={() => toggleTaskState(task)}>
                            {task.state ? 'Terminé' : 'En cours'}
                        </button>
                        
                        <button onClick={() => deleteTask(task)}>
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
