<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlaytimePricing extends Model
{
    protected $fillable = [
        'name',
        'price_per_hour',
        'start_time',
        'end_time',
        'account_created_id',
        'active',
        'note',
    ];
    public $rules       = [
        'name'                => 'required',
        'price_per_hour'      => '',
        'start_time'          => '',
        'end_time'            => '',
        'account_created_id'  => 'required',
        'active'              => '',
        'note'                => '',
    ];

    public $timestamps = true;
}