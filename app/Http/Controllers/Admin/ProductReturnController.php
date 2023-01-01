<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class ProductReturnController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.product_returns';
        $this->validator_msg = [];
    }
}

