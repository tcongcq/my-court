<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class OrderReportController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.order_reports';
        $this->validator_msg = [];
    }
}

