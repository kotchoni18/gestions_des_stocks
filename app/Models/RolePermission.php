<?php 
namespace App\Models;

use Clicalmani\Foundation\Acme\Model;

class RolePermission extends Model
{
    /**
     * Model database table 
     *
     * @var string $table Table name
     */
    protected $table = "role_permission";

    /**
     * Model entity
     * 
     * @var string
     */
    protected string $entity = \Database\Entities\RolePermissionEntity::class;

    /**
     * Table primary key(s)
     * Use an array if the key is composed with more than one attributes.
     *
     * @var string|array $primary_keys Table primary key.
     */
    protected $primaryKey = ["role_id","permission_id"];

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
