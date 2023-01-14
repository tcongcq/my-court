<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourtBooking extends Model
{
    protected $fillable = [
        'customer_id',
        'court_id',
        'begin_time',
        'finish_time',
        'booking_date',
        'state',
        'price',
        'discount',
        'total',
        'account_created_id',
        'description',
        'note',
    ];
    public $rules       = [
        'customer_id'           => 'required',
        'court_id'              => 'required',
        'begin_time'            => 'required',
        'finish_time'           => 'required',
        'booking_date'          => 'required',
        'state'                 => '',
        'price'                 => '',
        'discount'              => '',
        'total'                 => '',
        'account_created_id'    => 'required',
        'description'           => '',
        'note'                  => '',
    ];

    public $timestamps = true;
}