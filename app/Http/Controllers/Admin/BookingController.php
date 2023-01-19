<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use App\Models\Court;
use App\Models\Customer;
use App\Models\CourtBooking;
use App\Models\PlaytimePricing;
use Carbon\CarbonPeriod;

class BookingController extends API
{   
    protected $wholesaleDays = null;
    public function __construct() {
        $this->M = new CourtBooking();
        $this->view = 'admin.pages.bookings';
        $this->validator_msg = [];
        $this->wholesaleDays = [];
    }

    protected function prepare_index(){
        return $this->M->where('id', '>', 1)->orderBy('begin_datetime', 'DESC');
    }

    public function getIndex(){
        $courts = Court::get_avail_court();
        return view($this->view, [
            'customers' => Customer::where('id', '>', 1)->get(),
            'courts'    => $courts
        ]);
    }

    protected function prepare_add(){
        if (empty($this->wholesaleDays) && \Request::get('type') == 'WHOLESALE')
            $this->wholesaleDays = get_month_weekdays(\Request::get('booking_weekdays'), date('Y-m-d'));
        if (empty(\Request::get('booking_date')))
            $booking_date = array_shift($this->wholesaleDays);
        else
            $booking_date = \Request::get('booking_date');
        if (empty($booking_date))
            return ['status'=>'error','message'=>'Ngày được chọn không hợp lệ!', 'date'=>$this->wholesaleDays];
        $court_id           = \Request::get('court_id');
        $begin_datetime     = $booking_date.' '.\Request::get('begin_time');
        $finish_datetime    = $booking_date.' '.\Request::get('finish_time');
        if (!empty($this->wholesaleDays)){
            foreach ($this->wholesaleDays as $key => $day){
                $_begin     = $day.' '.\Request::get('begin_time');
                $_finish    = $day.' '.\Request::get('finish_time');
                $wasTaken = CourtBooking::has_booking_overlap($court_id, $_begin, $_finish);
                if ($wasTaken){
                    error_log($_begin);
                    return ['status' => 'warning', 'message'=>'Lịch đặt đã bị trùng. Hãy kiểm tra lại.'];
                }
            }
        }
        \Request::merge([
            'begin_datetime'  => $begin_datetime,
            'finish_datetime' => $finish_datetime
        ]);
        $overlap = CourtBooking::has_booking_overlap($court_id, $begin_datetime, $finish_datetime);
        if ($overlap)
            return ['status' => 'warning', 'message'=>'Lịch đặt đã bị trùng. Hãy kiểm tra lại.'];
        $calc = CourtBooking::calc_court_price($court_id, $begin_datetime, $finish_datetime);
        $price = !empty($calc[0]) ? $calc[0]['total_amount'] : 0;
        \Request::merge([
            'account_created_id' => \Auth::user()->id,
            'price' => $price,
            'total' => $price - \Request::get('discount', 0)
        ]);
        return ['status'=>'success'];
    }

    protected function callback_add($data){
        foreach ($this->wholesaleDays as $key => $booking_date){
            $request = \Request::all();
            $request['begin_datetime']  = $booking_date.' '.$request['begin_time'];
            $request['finish_datetime'] = $booking_date.' '.$request['finish_time'];
            $this->M->create($request);
        }
        return $data;
    }

    protected function prepare_update(){
        $booking_date       = \Request::get('booking_date');
        $begin_datetime     = $booking_date.' '.\Request::get('begin_time');
        $finish_datetime    = $booking_date.' '.\Request::get('finish_time');
        \Request::merge([
            'begin_datetime'  => $begin_datetime,
            'finish_datetime' => $finish_datetime
        ]);
        $overlap = CourtBooking::has_booking_overlap($court_id, $begin_datetime, $finish_datetime);
        if ($overlap)
            return ['status' => 'warning', 'message'=>'Lịch đặt đã bị trùng. Hãy kiểm tra lại.'];
        return ['status'=>'success'];
    }

    protected function callback_index($data){
        foreach ($data['rows'] as $row){
            $row->court_info = Court::get_current_info($row->court_id);
            $row->customer_info = Customer::find($row->customer_id);
        }
        return $data;
    }

    public function getPlaytimePricing(){
        $court = Court::find(\Request::get('court_id'));
        if (empty($court) || empty($court->stadium_id))
            return false;
        return PlaytimePricing::where('stadium_id', $court->stadium_id)->get();
    }

    public function getCalcCourtPrice(){
        $calc = CourtBooking::calc_court_price(\Request::get('court_id') , \Request::get('begin_datetime') , \Request::get('finish_datetime'));
        return !empty($calc[0]) ? $calc[0]['total_amount'] : 0;
    }

    public function getTest2(){
        return date('Y-m-d');
        $fromDate = '2023-01-01';

        return get_month_weekdays(['sat','sun','mon'], $fromDate);
        return get_month_weekdays(['mon','wed','sat']);
        return date('Y-m-d', strtotime('+1 day', strtotime('2023-01-18')));

        $dates = ['isMonday','isWednesday','isFriday','isSaturday'];
        $period = CarbonPeriod::between('2023-01-01', '2023-01-31')->addFilter(function ($date) use ($dates) {
            foreach ($dates as $key => $d){
                if ($date->{$d}())
                    return true;
            }
        });
        foreach ($period as $date) {
          $days[] = $date->format('Y-m-d');
        }
        return $days;
    }

    public function getTest(){
        $court_id = 3;
        $begin_datetime  = '2023-01-15 17:45:00';
        $finish_datetime = '2023-01-15 18:45:00';

        return ['xx'=>CourtBooking::has_booking_overlap($court_id, $begin_datetime, $finish_datetime)];

        $booking = CourtBooking::where('court_id', $court_id)
                    ->where(function($q) use ($begin_datetime, $finish_datetime){
                        $q->orWhereRaw("DATE_ADD('".$begin_datetime."', INTERVAL 1 SECOND) BETWEEN begin_datetime AND finish_datetime");
                        $q->orWhereRaw("DATE_SUB('".$finish_datetime."', INTERVAL 1 SECOND) BETWEEN begin_datetime AND finish_datetime");
                        $q->orWhereRaw("'".$begin_datetime."' <= begin_datetime AND '".$finish_datetime."' >= finish_datetime");
                    })
                    ->exists();

        return ['x'=>$booking];


        return \Request::get('discount', 0);
        $booking = CourtBooking::find(2);
        $calc = CourtBooking::calc_court_price($booking->court_id, $booking->begin_datetime, $booking->finish_datetime);
        return ['x'=>$calc];
    }


}

