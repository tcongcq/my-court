<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class DistrictController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.districts';
        $this->validator_msg = [];
    }
}

