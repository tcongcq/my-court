<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Court extends Model
{
    protected $fillable = [
        'code',
        'name',
        'stadium_id',
        'online',
        'active',
        'description',
        'account_created_id',
        'note',
    ];
    public $rules       = [
        'code' => '',
        'name' => '',
        'stadium_id' => 'required',
        'online' => '',
        'active' => '',
        'description' => '',
        'account_created_id' => 'required',
        'note' => '',
    ];

    public $timestamps = true;
}