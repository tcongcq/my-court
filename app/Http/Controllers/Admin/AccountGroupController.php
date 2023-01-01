<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class AccountGroupController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.account_groups';
        $this->validator_msg = [];
    }
}

