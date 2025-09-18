<?php
namespace Database\Entities;

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
)]
class CenterEntity extends Entity
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
    ), Validate('required|string|max:255')]
    public VarChar $name;

    #[Property(
        length: 255,
        nullable: true
    ), Validate('nullable|string|max:255')]
    public VarChar $address;

    #[Property(
        length: 100,
        nullable: false
    ), Validate('required|city|deparment:Littoral|max:100')]
    public VarChar $city;

    #[Property(
        length: 100,
        nullable: true
    ), Validate('nullable|string|max:100')]
    public VarChar $lat;

    #[Property(
        length: 100,
        nullable: true
    ), Validate('nullable|string|max:100')]
    public VarChar $lon;
}
