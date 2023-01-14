<?php

namespace App\Models;

use InnoSoft\CMS\Account as User;

class Account extends User {

    protected static $info = null;
    protected $fillable = [
        'fullname',
        'username',
        'password',
        'avatar',
        'remember_token',
        'token_login',
        'device_token',
        'login_backend',
        'login_frontend',
        'gender',
        'birthday',
        'phone',
        'email',
        'address',
        'active',
        'locked',
        'attribs',
        'last_login',
        'protected',
        'anonymous',
        'user_group_id',
        'type_user',
        'expiry_date',
        'note'
    ];
    public $rules = [
        'fullname'              => 'required',
        'username'              => 'required|unique:users,username',
        'password'              => 'required|min:4|confirmed',
        'avatar'                => '',
        'remember_token'        => '',
        'token_login'           => '',
        'device_token'          => '',
        'login_backend'         => 'required',
        'login_frontend'        => 'required',
        'gender'                => '',
        'birthday'              => '',
        'phone'                 => /*'required|regex:/^[0]{1}[189]{1}[0-9]{8,9}$/|unique:users,phone'*/'',
        'email'                 => 'required|email|unique:users,email',
        'address'               => '',
        'active'                => 'required',
        'locked'                => '',
        'attribs'               => '',
        'last_login'            => '',
        'protected'             => '',
        'anonymous'             => '',
        'user_group_id'         => '',
        'type_user'             => '',
        'expiry_date'           => '',
        'note'                  => ''
    ];
    protected $hidden = ['password', 'remember_token'];

    public static function get_info() {
        return \Auth::user();
    }
    
    // check permission
    // $params as array()
    public static function has_permission($params){
        return true;
    }

    public function allowed_filemanager() {
        // check permission of current user here
        // and return the filemanager config or empty array
        // example
        $config = config('filemanager.auth.admin');
        return $config === '' ? [] : $config;
    }

}
