<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class DashboardController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.dashboard';
        $this->validator_msg = [];
    }
}

