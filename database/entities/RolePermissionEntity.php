<?php
namespace Database\Entities;

use Clicalmani\Database\DataTypes\Integer;
use Clicalmani\Database\Factory\Entity;
use Clicalmani\Database\Factory\Index;
use Clicalmani\Database\Factory\PrimaryKey;
use Clicalmani\Database\Factory\Property;
use Clicalmani\Database\Factory\Validate;

#[PrimaryKey(['role_id', 'permission_id']), 
Index(
    name: 'fk_role_permissions_roles1_idx',
    key: 'role_id',
    constraint: 'fk_role_permissions_roles1',
    references: \App\Models\Role::class,
    onDelete: Index::ON_DELETE_CASCADE,
    onUpdate: Index::ON_UPDATE_CASCADE
), Index(
    name: 'fk_role_permissions_permissions1_idx',
    key: 'permission_id',
    constraint: 'fk_role_permissions_permissions1',
    references: \App\Models\Permission::class,
    onDelete: Index::ON_DELETE_CASCADE,
    onUpdate: Index::ON_UPDATE_CASCADE
)]
class RolePermissionEntity extends Entity
{
    #[Property(
        length: 10,
        unsigned: true,
        nullable: false
    ), Validate('required|id|model:role')]
    public Integer $role_id;

    #[Property(
        length: 10,
        unsigned: true,
        nullable: false
    ), Validate('required|id|model:permission')]
    public Integer $permission_id;
}
