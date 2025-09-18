<?php 
namespace App\Models;

use Clicalmani\Foundation\Acme\Model;

class Role extends Model
{
    /**
     * Model database table 
     *
     * @var string $table Table name
     */
    protected $table = "roles";

    /**
     * Model entity
     * 
     * @var string
     */
    protected string $entity = \Database\Entities\RoleEntity::class;

    /**
     * Table primary key(s)
     * Use an array if the key is composed with more than one attributes.
     *
     * @var string|array $primary_keys Table primary key.
     */
    protected $primaryKey = "id";

    /**
     * Constructor 
     *
     * @param mixed $id
     */
    public function __construct(mixed $id = null)
    {
        parent::__construct($id);
    }
}
