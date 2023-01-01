<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class BookingController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.bookings';
        $this->validator_msg = [];
    }
}

