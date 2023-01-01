<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class BookingHistoryController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.booking_histories';
        $this->validator_msg = [];
    }
}

