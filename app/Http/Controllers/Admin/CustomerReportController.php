<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class CustomerReportController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.customer_reports';
        $this->validator_msg = [];
    }
}

