<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use App\Models\Stadium;

class StadiumController extends API
{   
    public function __construct() {
        $this->M = new Stadium();
        $this->view = 'admin.pages.stadiums';
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
}

