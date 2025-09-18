<?php 
namespace App\Models;

use Clicalmani\Database\Traits\HasFactory;
use Clicalmani\Foundation\Acme\Model;

class User extends Model
{
    use HasFactory;
    
    /**
     * Model database table 
     *
     * @var string $table Table name
     */
    protected $table = "users";

    /**
     * Model entity
     * 
     * @var string
     */
    protected string $entity = \Database\Entities\UserEntity::class;

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
