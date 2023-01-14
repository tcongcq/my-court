<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = [
        'code',
        'name',
        'display_name',
        'phone',
        'email',
        'classify',
        'active',
        'zalo',
        'facebook',
        'account_created_id',
        'upload_dir',
        'note',
        'deleted_at',
    ];
    public $rules       = [
        'code'                 => '',
        'name'                 => 'required',
        'display_name'         => '',
        'phone'                => '',
        'email'                => '',
        'classify'             => '',
        'active'               => '',
        'zalo'                 => '',
        'facebook'             => '',
        'account_created_id'   => 'required',
        'upload_dir'           => '',
        'note'                 => '',
        'deleted_at'           => '',
    ];

    public $timestamps = true;
}