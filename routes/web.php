<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::get('/', [TaskController::class, 'index']);
Route::get('/create', [TaskController::class, 'create'])->name('task.create');
Route::post('/store', [TaskController::class, 'store']);
// Route::delete('/{id}/destroy', [TaskController::class, 'destroy']);
Route::delete('/tasks/clear', [TaskController::class, 'clear'])->name('tasks.clear');
Route::delete('/tasks/{id}', [TaskController::class, 'destroy'])->name('tasks.destroy');
Route::patch('/tasks/{id}/toggle', [TaskController::class, 'toggle'])->name('tasks.toggle');