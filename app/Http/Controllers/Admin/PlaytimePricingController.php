<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use App\Models\Stadium;
use App\Models\PlaytimePricing;

class PlaytimePricingController extends API
{   
    public function __construct() {
        $this->M = new PlaytimePricing();
        $this->view = 'admin.pages.playtime_pricings';
        $this->validator_msg = [];
    }

    protected function prepare_index(){
        return $this->M->where('id', '>', 1);
    }

    public function getIndex(){
        return view($this->view, [
            "stadia" => Stadium::where('id', '>', 1)->get()
        ]);
    }

    protected function prepare_add(){
        \Request::merge([
            'account_created_id' => \Auth::user()->id
        ]);
        return ['status'=>'success'];
    }
}

