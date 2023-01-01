<?php

namespace App\Http\Controllers\Admin;

use InnoSoft\CMS\API;
use InnoSoft\CMS\Account;

class ProductCategoryController extends API
{   
    public function __construct() {
        $this->M = new Account();
        $this->view = 'admin.pages.product_categories';
        $this->validator_msg = [];
    }
}

