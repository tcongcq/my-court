<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stadium extends Model
{
    protected $fillable = [
        'name',
        'address',
        'address_id',
        'description',
        'account_created_id',
        'active',
        'note',
    ];
    public $rules       = [
        'name'                => '',
        'address'             => '',
        'address_id'          => '',
        'description'         => '',
        'account_created_id'  => 'required',
        'active'              => '',
        'note'                => '',
    ];

    public $timestamps = true;
}