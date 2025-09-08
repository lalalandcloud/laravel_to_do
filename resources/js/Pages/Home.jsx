import React from "react"

export default function Home({ tasks }) {
    return (
        <div>
            <h1>Liste des tâches</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.name} - {task.state ? 'Terminé' : 'En cours'}
                    </li>
                ))}
            </ul>
        </div>
    );
}