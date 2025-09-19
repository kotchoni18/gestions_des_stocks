<?php 
namespace Database\Factories;

use Clicalmani\Database\Factory\Factory;
use App\Models\User;
use Clicalmani\Foundation\Support\Facades\DB;

class UserFactory extends Factory 
{
    /**
     * Factory model 
     *
     * @var string User Model name 
     */
    protected $model = User::class;

    /**
     * Factory definition 
     *
     * @return array
     */
    public function definition() : array
    {
        return [
            'name' => null,
            'email' => null,
            'email_verified_at' => null,
            'password' => null,
            'center_id' => null,
        ];
    }

    public function superAdmin() : UserFactory
    {
        return $this->state(function (array $attributes) {
            $center_id = DB::table('centers')->insertGetId([
                'name' => 'Super Admin Center',
                'address' => '123 Admin St',
                'city' => 'Admin City',
                'lat' => '0.0000',
                'lon' => '0.0000'
            ]);

            $role_id = DB::table('roles')->all()->first()['id'];

            return [
                'name' => faker()->name(),
                'email' => faker()->unique()->safeEmail,
                'email_verified_at' => now(),
                'password' => password('password'), // password
                'center_id' => $center_id,
                'role_id' => $role_id
            ];
        });
    }
}
