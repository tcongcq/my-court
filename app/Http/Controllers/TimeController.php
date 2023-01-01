<?php

namespace App\Http\Controllers;
use App\Models\RentalPrice;
use App\Models\TimeRentalCalculate;

class TimeController extends Controller
{

    public function getDatesFromRange($_start, $_end){
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
                'in'    => $date == $start ? $_start : $fullstart,
                'out'   => $date == $end ? $_end : $fullend
            ]);
        }
        return $ranges;
    }
    public function getIndex(){

        $timeIn  = '2022-11-01 01:00:00';
        $timeOut = '2022-11-09 19:00:00';



        // $timeIn  = '00:00:00';
        // $timeOut = '24:00:00';
        $rental_prices = [];
        array_push($rental_prices, new RentalPrice([
            'id' => 1,
            'start_time' => '04:00:00',
            'finish_time'=> '08:30:00',
            'price' => 100
        ]));
        array_push($rental_prices, new RentalPrice([
            'id' => 2,
            'start_time' => '08:30:00',
            'finish_time'=> '10:15:00',
            'price' => 90
        ]));
        array_push($rental_prices, new RentalPrice([
            'id' => 3,
            'start_time' => '10:15:00',
            'finish_time'=> '12:00:00',
            'price' => 80
        ]));
        array_push($rental_prices, new RentalPrice([
            'id' => 4,
            'start_time' => '13:00:00',
            'finish_time'=> '17:00:00',
            'price' => 70
        ]));
        array_push($rental_prices, new RentalPrice([
            'id' => 5,
            'start_time' => '17:00:00',
            'finish_time'=> '23:00:00',
            'price' => 100
        ]));
        array_push($rental_prices, new RentalPrice([
            'id' => 6,
            'start_time' => '23:00:00',
            'finish_time'=> '23:59:59',
            'price' => 50
        ]));
        array_push($rental_prices, new RentalPrice([
            'id' => 7,
            'start_time' => '00:00:00',
            'finish_time'=> '04:00:00',
            'price' => 50
        ]));

        $rentalCalcs = [];
        foreach (self::getDatesFromRange($timeIn, $timeOut) as $k => $range){
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
}






