<?php
namespace Database\Entities;

use Clicalmani\Database\DataTypes\DateTime;
use Clicalmani\Database\DataTypes\Integer;
use Clicalmani\Database\Factory\Entity;
use Clicalmani\Database\Factory\Index;
use Clicalmani\Database\Factory\PrimaryKey;
use Clicalmani\Database\Factory\Property;
use Clicalmani\Database\Factory\Validate;

#[Index(
    name: 'fk_appointments_users1_idx',
    key: 'user_id',
    constraint: 'fk_appointments_users1',
    references: \App\Models\User::class,
    onDelete: Index::ON_DELETE_CASCADE,
    onUpdate: Index::ON_UPDATE_CASCADE
)]
class AppointmentEntity extends Entity
{
    #[Property(
        length: 10,
        unsigned: true,
        nullable: false,
        autoIncrement: true
    ), PrimaryKey]
    public Integer $id;

    #[Property(
        nullable: false
    ), Validate('required|datetime|format:Y-m-d H:i:s')]
    public DateTime $appointment_date;

    #[Property(
        length: 10,
        unsigned: true,
        nullable: false
    ), Validate('required|id|model:user')]
    public Integer $user_id;
}
