import { router, useForm } from "@inertiajs/react";
import React, { useState } from "react";


export default function Home({ tasks }) {

    const { delete: destroy } = useForm();
    const [processingId, setProcessingId] = useState(null);

    // function handleClick(e, id) {
        
    //     destroy(`/${id}/destroy`, {
    //         preserveScroll: true,
    //         preserveState: true,
    //         onFinish: () => setProcessingId(null),
    //     });
    // }
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

    return (
        <div>
            <h1>Liste des tâches</h1>
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