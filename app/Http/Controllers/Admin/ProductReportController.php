<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class ProductReportController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.product_reports';
        $this->validator_msg = [];
    }
}

