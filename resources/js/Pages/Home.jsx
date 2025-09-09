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
    // const clearCompletedTasks = () => {
    //     router.delete(route('tasks.clear'), {
    //         preserveScroll: true
    //     });
    // };

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
                    <li key={task.id}>
                        {task.name} - {task.state ? 'Terminé' : 'En cours'} ||
                         
                        {/* <button
                            onClick={(e) => handleClick(e, task.id)}
                            className="cursor-pointer"
                        >
                            Supprimer
                        </button> */}
                        <button
                            className="text-red-500 hover:text-red-700 text-xl font-bold ml-2 transition-colors cursor-pointer"
                            onClick={() => deleteTask(task)}
                        >
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}