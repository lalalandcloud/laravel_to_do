<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
public function run(): void
{
    Task::insert([

        [
            'name' => 'Configurer l\'environnement de développement',
            'state' => true,
        ],
        [
            'name' => 'Créer la base de données',
            'state' => true,
        ],
        [
            'name' => 'Implémenter l\'authentification utilisateur',
            'state' => false,
        ],
        [
            'name' => 'Développer l\'interface d\'administration',
            'state' => false,
        ],
        [
            'name' => 'Mettre en place les tests unitaires',
            'state' => false,
        ],
        [
            'name' => 'Optimiser les performances de l\'application',
            'state' => false,
        ],
        [
            'name' => 'Configurer le système de sauvegarde',
            'state' => true,
        ],
        [
            'name' => 'Documenter l\'API REST',
            'state' => false,
        ],
        [
            'name' => 'Effectuer les tests de sécurité',
            'state' => false,
        ],
        [
            'name' => 'Déployer en production',
            'state' => false,
        ],
    ]);
}}
