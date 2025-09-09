<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index(){
        
        $tasks = Task::all();
        return Inertia::render('Home', compact('tasks'));
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
}