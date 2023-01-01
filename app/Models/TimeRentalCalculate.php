<?php

namespace App\Models;
use Datetime;

class TimeRentalCalculate
{
    private string  $begin  = '';
    private string  $end    = '';
    private array   $rentalPrices   = [];
    private string  $StartTime     = 'start_time';
    private string  $FinishTime    = 'finish_time';
    private string  $Price         = 'price';

    function __construct($options = []) {
        $this->set_options($options);
    }

    private function set_options($options){
        if (!empty($options['rentalPrices']))
            $this->rentalPrices = $options['rentalPrices'];
        if (!empty($options['start_time']))
            $this->StartTime    = $options['start_time'];
        if (!empty($options['finish_time']))
            $this->FinishTime   = $options['finish_time'];
        if (!empty($options['price']))
            $this->Price        = $options['price'];
    }

    private function sort_by($arr){
        $arr = collect($arr);
        $sorted = $arr->sortBy($this->StartTime);
        return $sorted->values()->all();
    }

    private function get_diff_time($start_time, $end_time){
        $time1 = new DateTime($start_time);
        $time2 = new DateTime($end_time);
        return $time1->diff($time2);
    }

    private function get_partial_time($sTime){
        $date  = new \DateTime("1970-01-01T$sTime+00:00");
        return round($date->format('U')/3600, 2);
    }

    private function has_overlap($beginRange, $endRange){
        return 
            (   $this->begin    >= $beginRange && $this->begin  <= $endRange)
            || ($this->end      >= $beginRange && $this->end    <= $endRange)
            || ($this->begin    <= $beginRange && $this->end    >= $endRange);
    }

    public function set_rental_prices($rentalPrices){
        $this->set_options(['rentalPrices' => $rentalPrices]);
    }

    public function set_time_range($begin, $end){
        $this->begin = $begin;
        $this->end   = $end;
    }

    public function calc_rental_price(){
        $matchTime    = [];
        foreach ($this->sort_by($this->rentalPrices) as $k => $rp){
            if ($this->has_overlap($rp->{$this->StartTime}, $rp->{$this->FinishTime})){
                array_push($matchTime, $rp);
                error_log(json_encode($rp));
            }
        }
        $matchTime = $this->sort_by($matchTime);
        $rentalPrice = [];
        $totalAmount   = 0;
        foreach ($matchTime as $idx => $priceRange){
            // error_log(json_encode($priceRange));
            $fromTime = max($this->begin, $priceRange->{$this->StartTime});
            $toTime   = min($this->end, $priceRange->{$this->FinishTime});
            $timeDiff   = $this->get_diff_time($fromTime, $toTime);
            $timeFormat = implode(':', [$timeDiff->format('%h'), $timeDiff->format('%i'), $timeDiff->format('%s')]);
            $paidAmount = $this->get_partial_time($timeFormat)*$priceRange->{$this->Price};
            array_push($rentalPrice, [
                'time_range'    => [$fromTime, $toTime],
                'diff_time'     => $timeDiff,
                'price_range'   => $priceRange,
                'price'         => $paidAmount
            ]);
            $totalAmount += $paidAmount;
            error_log(json_encode([$timeDiff->format('%h hour'), $timeDiff->format('%i min'), $timeDiff->format('%s second')]));
            error_log(json_encode('$ '.$paidAmount));
        }
        return ['rental_prices' => $rentalPrice, 'total_amount' => $totalAmount];
    }
}


// $start_time = "17:00:01";
// $end_time = "17:47:25";

// $time1 = new DateTime($start_time);
// $time2 = new DateTime($end_time);
// $interval = $time1->diff($time2);

// echo $hour = $interval->format('%h hour');
// echo $min = $interval->format('%i min');
// echo $sec = $interval->format('%s second');
