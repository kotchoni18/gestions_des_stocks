<?php
namespace Database\Entities;

use Clicalmani\Database\DataTypes\Char;
use Clicalmani\Database\DataTypes\Integer;
use Clicalmani\Database\DataTypes\VarChar;
use Clicalmani\Database\Factory\Entity;
use Clicalmani\Database\Factory\Index;
use Clicalmani\Database\Factory\PrimaryKey;
use Clicalmani\Database\Factory\Property;
use Clicalmani\Database\Factory\Validate;

#[Index(
    name: 'nameUNIQUE',
    key: 'name',
    unique: true
), Index(
    name: 'guidUNIQUE',
    key: 'guid',
    unique: true
)]
class RoleEntity extends Entity
{
    #[Property(
        length: 10,
        unsigned: true,
        nullable: false,
        autoIncrement: true
    ), PrimaryKey]
    public Integer $id;

    #[Property(
        length: 100,
        nullable: false
    ), Validate('required|string|max:100')]
    public VarChar $name;

    #[Property(
        length: 10,
        nullable: false
    ), Validate('required|string|length:10')]
    public Char $guid;
}
