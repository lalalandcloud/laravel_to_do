import { router, useForm } from "@inertiajs/react";
import React, { useState } from "react";



export default function Home({ tasks }) {
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 6;
    
    // Calculer les tâches à afficher
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
    
    // Calculer le nombre total de pages
    const totalPages = Math.ceil(tasks.length / tasksPerPage);

    const clearCompletedTasks = () => {
        router.post(`/tasks/clear`, {
            _method: "DELETE"
        }, {
            preserveScroll: true
        });
    };

    const deleteTask = (task) => {
        router.post(`/tasks/${task.id}`, {
            _method: "DELETE"
        }, {
            preserveScroll: true
        });
    };

    const toggleTaskState = (task) => {
        router.post(`/tasks/${task.id}/toggle`, {
            _method: "PATCH"
        }, {
            preserveScroll: true
        });
    };

    return (
        <div className="div_glo outfit">
            <button
                className="btn_delete"
                onClick={() => clearCompletedTasks()}
            >
                Supprimer toutes les tâches completées
            </button>            
            
            <a
                href="/create"
                className="btn_add"
            >
                Ajouter une tâche
            </a>            
            
            <ul>
                {currentTasks.map(task => (
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

            {totalPages > 1 && (
                <div className="next">
                    <button
                        className="completed complet" 
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Précédent
                    </button>
                    
                    <span> Page {currentPage} sur {totalPages} </span>
                    
                    <button 
                        className="completed complet"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Suivant
                    </button>
                </div>
            )}
        </div>
    );
}