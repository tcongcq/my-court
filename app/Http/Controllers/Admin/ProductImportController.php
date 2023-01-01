<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class ProductImportController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.product_imports';
        $this->validator_msg = [];
    }
}

