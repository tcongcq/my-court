<?php

/* get current uri without prefix */
function rUri($path = ''){
    $route = '/' . Request::path();
    $prefix = Route::current()->getPrefix() . '/';
    return explode($prefix, $route)[1] . ($path == '' ? '' : '/'.$path);
}