<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index(Request $request){
        
        $filter = $request->get('filter', 'all');
        
        $query = Task::query();
        
        switch ($filter) {
            case 'active':
                $query->where('state', false);
                break;
            case 'completed':
                $query->where('state', true);
                break;
            case 'all':
            default:
                break;
        }
        
        $tasks = $query->get();
        
        return Inertia::render('Home', [
            'tasks' => $tasks,
            'filter' => $filter
        ]);
    }

    public function create(){
        return Inertia::render('Create');
    }

    public function store(Request $request){
        
        $request->validate([
            'name' => ['required', 'string'],
            'state' => ['required', 'boolean']
        ]);

        $task = new Task();
        $task->name = $request->name;
        $task->state = $request->state;
        $task->save();
        
        return redirect('/');
    }
    
    public function destroy($id){
        Task::findOrFail($id)->delete();
        return redirect()->back()->with('success', 'Tâche supprimée');
    }

    public function clear(){
        Task::where('state', true)->delete();
        return redirect()->back()->with('success', 'Tâches terminées supprimées');
    }

    public function toggle($id){
        $task = Task::findOrFail($id);
        $task->state = !$task->state;
        $task->save();
        
        return redirect()->back()->with('success', 'État de la tâche mis à jour');
    }
}