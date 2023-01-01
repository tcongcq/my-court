<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class StadiumController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.stadiums';
        $this->validator_msg = [];
    }
}

