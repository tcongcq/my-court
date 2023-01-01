<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class ProvinceController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.provinces';
        $this->validator_msg = [];
    }
}

