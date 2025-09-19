<?php 
namespace Database\Seeders;

use Clicalmani\Database\Factory\Priority;
use Clicalmani\Database\Seeders\Seeder;
use Clicalmani\Database\Traits\PreventEventsCapturing;
use Clicalmani\Foundation\Support\Facades\DB;

#[Priority(1)]
class RoleSeeder extends Seeder 
{
    use PreventEventsCapturing;

    /**
     * Run the seeder 
     *
     * @return void
     */
    public function run() : void
    {
        DB::table('roles')->insert([
            'name' => 'admin',
            'guid' => 'UID01'
        ]);
    }
}
