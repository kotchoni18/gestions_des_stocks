<?php 
namespace Database\Seeders;

use Clicalmani\Database\Seeders\Seeder;
use Clicalmani\Database\Traits\PreventEventsCapturing;
use App\Models\User;
use Clicalmani\Database\Factory\Priority;

#[Priority(1)]
class UserSeeder extends Seeder 
{
    use PreventEventsCapturing;
    
    /**
     * Run the seeder 
     *
     * @return void
     */
    public function run() : void
    {
        User::seed()
            ->count(1)
            ->superAdmin()
            ->make();
    }
}
