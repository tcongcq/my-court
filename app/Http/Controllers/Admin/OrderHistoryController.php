<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class OrderHistoryController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.order_histories';
        $this->validator_msg = [];
    }
}

