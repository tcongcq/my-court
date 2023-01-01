<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class CustomerController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.customers';
        $this->validator_msg = [];
    }
}

