<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class CourtStatusController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.court_status';
        $this->validator_msg = [];
    }
}

