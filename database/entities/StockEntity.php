<?php
namespace Database\Entities;

use Clicalmani\Database\DataTypes\Integer;
use Clicalmani\Database\DataTypes\TinyInt;
use Clicalmani\Database\Factory\Entity;
use Clicalmani\Database\Factory\Index;
use Clicalmani\Database\Factory\PrimaryKey;
use Clicalmani\Database\Factory\Property;
use Clicalmani\Database\Factory\Validate;

#[Index(
    name: 'fk_centers_stocks1_idx',
    key: 'center_id',
    constraint: 'fk_centers_stocks1',
    references: \App\Models\Center::class,
    onDelete: Index::ON_DELETE_CASCADE,
    onUpdate: Index::ON_UPDATE_CASCADE
)]
class StockEntity extends Entity
{
    #[Property(
        length: 10,
        unsigned: true,
        nullable: false,
        autoIncrement: true
    ), PrimaryKey]
    public Integer $id;

    #[Property(
        length: 3,
        unsigned: true,
        nullable: false,
        default: 0
    ), Validate('required|integer|min:0|max:100')]
    public TinyInt $quantity;

    #[Property(
        length: 10,
        unsigned: true,
        nullable: false
    ), Validate('required|id|model:center')]
    public Integer $center_id;
}
