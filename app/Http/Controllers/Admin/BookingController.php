<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use App\Models\CourtBooking;

class BookingController extends API
{   
    public function __construct() {
        $this->M = new CourtBooking();
        $this->view = 'admin.pages.bookings';
        $this->validator_msg = [];
    }

    protected function prepare_index(){
        return $this->M->where('id', '>', 1);
    }

    protected function prepare_add(){
        \Request::merge([
            'account_created_id' => \Auth::user()->id
        ]);
        return ['status'=>'success'];
    }


    public function getTest(){
        $booking = CourtBooking::find(2);
        return ['data'=>$booking];
    }

    // protected function callback_index($data){
    //     foreach ($data['rows'] as $row){
    //         $row->stadium_info = Stadium::find($row->stadium_id);
    //     }
    //     return $data;
    // }
}

