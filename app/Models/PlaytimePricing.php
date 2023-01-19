<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlaytimePricing extends Model
{
    protected $fillable = [
        'name',
        'price_per_hour',
        'price_per_hour_loyal',
        'start_time',
        'end_time',
        'account_created_id',
        'stadium_id',
        'active',
        'note',
    ];
    public $rules       = [
        'name'                => 'required',
        'price_per_hour'      => '',
        'price_per_hour_loyal'=> '',
        'start_time'          => '',
        'end_time'            => '',
        'account_created_id'  => 'required',
        'stadium_id'          => '',
        'active'              => '',
        'note'                => '',
    ];

    public $timestamps = true;
}