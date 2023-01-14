<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use App\Models\Court;
use App\Models\Stadium;

class CourtController extends API
{   
    public function __construct() {
        $this->M = new Court();
        $this->view = 'admin.pages.courts';
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

    protected function callback_index($data){
        foreach ($data['rows'] as $row){
            $row->stadium_info = Stadium::find($row->stadium_id);
        }
        return $data;
    }
}

