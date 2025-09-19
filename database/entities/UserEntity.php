<?php
namespace Database\Entities;

use Clicalmani\Database\DataTypes\DateTime;
use Clicalmani\Database\DataTypes\Integer;
use Clicalmani\Database\DataTypes\Timestamp;
use Clicalmani\Database\DataTypes\VarChar;
use Clicalmani\Database\Factory\Entity;
use Clicalmani\Database\Factory\Index;
use Clicalmani\Database\Factory\PrimaryKey;
use Clicalmani\Database\Factory\Property;
use Clicalmani\Database\Factory\Validate;

#[Index(
    name: 'emailUNIQUE',
    key: 'email',
    unique: true
), Index(
    name: 'fk_users_centers1_idx',
    key: 'center_id',
    constraint: 'fk_users_centers1',
    references: \App\Models\Center::class,
    onDelete: Index::ON_DELETE_CASCADE,
    onUpdate: Index::ON_UPDATE_CASCADE
)]
class UserEntity extends Entity
{
    #[Property(
        length: 10,
        unsigned: true,
        nullable: false,
        autoIncrement: true
    ), PrimaryKey]
    public Integer $id;

    #[Property(
        length: 255,
        nullable: false
    ), Validate('required|max:255')]
    public VarChar $name;

    #[Property(
        length: 100,
        nullable: false
    ), Validate('required|email|unique:user|max:100')]
    public VarChar $email;

    #[Property(
        nullable: true
    ), Validate('required|datetime|format:Y-m-d H:i:s')]
    public DateTime $email_verified_at;

    #[Property(
        length: 200,
        nullable: false
    ), Validate('required|password|hash|max:200')]
    public VarChar $password;

    #[Property(
        nullable: false
    )]
    public Timestamp $created_at;

    #[Property(
        length: 10,
        unsigned: true,
        nullable: true
    ), Validate('required|id|model:center')]
    public Integer $center_id;

    #[Property(
        length: 10,
        unsigned: true,
        nullable: false
    ), Validate('required|id|model:role')]
    public Integer $role_id;
}
