<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class ConfigController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.configs';
        $this->validator_msg = [];
    }
}

