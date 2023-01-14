<?php

return [
    'navi' => [
        '' => [
            'dashboard' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\DashboardController'
            ],
            'court-status' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\CourtStatusController'
            ],
        ],
        'order-management' => [
            'booking' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\BookingController'
            ],
            'booking-history' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\BookingHistoryController'
            ],
            'order' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\OrderController'
            ],
            'order-history' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\OrderHistoryController'
            ],
            'order-report' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\OrderReportController'
            ],
        ],
        'product-management' => [
            'product-import' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\ProductImportController'
            ],
            'product-export' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\ProductExportController'
            ],
            'product-return' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\ProductReturnController'
            ],
            'product-report' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\ProductReportController'
            ],
            'product-category' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\ProductCategoryController'
            ],
        ],
        'court-management' => [
            'court' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\CourtController'
            ],
            'stadium' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\StadiumController'
            ],
            'playtime-pricing' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\PlaytimePricingController'
            ],
        ],
        'customer-management' => [
            'customer' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\CustomerController'
            ],
            'customer-report' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\CustomerReportController'
            ],
        ],
        'system-management' => [
            'config' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\ConfigController'
            ],
            'setting' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\SettingController'
            ],
        ],
        'address-management' => [
            'province' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\ProvinceController'
            ],
            'district' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\DistrictController'
            ],
            'ward' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\WardController'
            ],
            'address' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\AddressController'
            ],
        ],
        'account-management' => [
            'account' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\AccountController'
            ],
            'account-group' => [
                'icon' => 'glyphicon glyphicon-dashboard',
                'ctrl' => '\App\Http\Controllers\Admin\AccountGroupController'
            ],
        ]
    ]
];
