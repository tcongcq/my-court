<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class CourtController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.courts';
        $this->validator_msg = [];
    }
}

