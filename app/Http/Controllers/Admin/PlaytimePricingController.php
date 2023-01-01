<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class PlaytimePricingController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.playtime_pricings';
        $this->validator_msg = [];
    }
}

