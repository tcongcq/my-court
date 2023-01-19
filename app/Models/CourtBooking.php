<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\RentalPrice;
use App\Models\TimeRentalCalculate;

class CourtBooking extends Model
{
    protected $fillable = [
        'customer_id',
        'court_id',
        'begin_datetime',
        'finish_datetime',
        'type',
        'state',
        'price',
        'discount',
        'discount_type',
        'discount_value',
        'total',
        'account_created_id',
        'description',
        'note',
    ];
    public $rules       = [
        'customer_id'           => 'required',
        'court_id'              => 'required',
        'begin_datetime'        => 'required',
        'finish_datetime'       => 'required',
        'type'                  => '', // RETAIL, WHOLESALE
        'state'                 => '',
        'price'                 => '',
        'discount'              => '',
        'discount_type'         => '',
        'discount_value'        => '',
        'total'                 => '',
        'account_created_id'    => 'required',
        'description'           => '',
        'note'                  => '',
    ];

    public $timestamps = true;

    public static function get_dates_from_range($_start, $_end){
        $start  = date('Y-m-d', strtotime($_start));
        $end    = date('Y-m-d', strtotime($_end));
        $dates = array(date('Y-m-d', strtotime($start)));
        while(end($dates) < $end){
            $dates[] = date('Y-m-d', strtotime(end($dates).' +1 day'));
        }
        $ranges = [];
        foreach ($dates as $idx => $_date){
            $date = date('Y-m-d', strtotime($_date));
            $fullstart = date('Y-m-d 00:00:00', strtotime($_date));
            $fullend = date('Y-m-d 23:59:59', strtotime($_date));
            array_push($ranges, [
                'in'    => $date == $start  ? $_start   : $fullstart,
                'out'   => $date == $end    ? $_end     : $fullend
            ]);
        }
        return $ranges;
    }

    public static function calc_court_price($court_id, $timeIn, $timeOut){
        $court      = Court::find($court_id);
        $pricings   = PlaytimePricing::where('stadium_id', $court->stadium_id)->get();
        $rental_prices = [];
        foreach ($pricings as $k => $p){
            array_push($rental_prices, new RentalPrice([
                'id'            => $p->id,
                'start_time'    => $p->start_time,
                'finish_time'   => $p->end_time,
                'price'         => $p->price_per_hour
            ]));
        }
        $rentalCalcs = [];
        foreach (self::get_dates_from_range($timeIn, $timeOut) as $k => $range){
            $in  = date('H:i:s', strtotime($range['in']));
            $out = date('H:i:s', strtotime($range['out']));
            $rentalCalc = new TimeRentalCalculate();
            $rentalCalc->set_rental_prices($rental_prices);
            $rentalCalc->set_time_range($in, $out);
            array_push($rentalCalcs, array_merge($rentalCalc->calc_rental_price(), [
                'timeIn' => $range['in'],
                'timeOut' => $range['out']
            ]));
        }
        return $rentalCalcs;
    }

    public static function has_booking_overlap($court_id, $begin_datetime, $finish_datetime){
        $exists = self::where('court_id', $court_id)
                    // ->whereIn('state', ['HOLD', 'PAID'])
                    ->where(function($q) use ($begin_datetime, $finish_datetime){
                        $q->orWhereRaw("DATE_ADD('".$begin_datetime."', INTERVAL 1 SECOND) BETWEEN begin_datetime AND finish_datetime");
                        $q->orWhereRaw("DATE_SUB('".$finish_datetime."', INTERVAL 1 SECOND) BETWEEN begin_datetime AND finish_datetime");
                    })
                    ->exists();
        return $exists;
    }
}