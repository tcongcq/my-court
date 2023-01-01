<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class ProductExportController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.product_exports';
        $this->validator_msg = [];
    }
}

