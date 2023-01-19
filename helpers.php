<?php
use Carbon\Carbon;
use Carbon\CarbonPeriod;

/* get current uri without prefix */
function rUri($path = ''){
    $route = '/' . Request::path();
    $prefix = Route::current()->getPrefix() . '/';
    return explode($prefix, $route)[1] . ($path == '' ? '' : '/'.$path);
}

/**
 * Get weekdays of month input by $from_date
 * 
 * @param  $weekdays
 * @param  $from_date 
 * @return $days
 */
function get_month_weekdays($weekdays=[], $from_date=null){
    $from_date   = $from_date ?? date(Carbon::now()->startOfMonth());
    $mapWeekdays = ['mon'=>'isMonday','tue'=>'isTuesday','wed'=>'isWednesday','thu'=>'isThursday','fri'=>'isFriday','sat'=>'isSaturday','sun'=>'isSunday'];
    if (empty($weekdays))
        $returnWd = array_filter($mapWeekdays, function ($agg) {return ($agg != 'isSaturday') and ($agg != 'isSunday');});
    else
        $returnWd = array_map(function($x) use ($mapWeekdays) { return $mapWeekdays[strtolower($x)]; }, $weekdays);
    $returnWd = array_values($returnWd);
    $period   = CarbonPeriod::between($from_date, Carbon::now()->endOfMonth())->addFilter(function ($date) use ($returnWd) {
        foreach ($returnWd as $key => $d){
            if ($date->{$d}())
                return true;
        }
    });
    $days = [];
    foreach ($period as $date) {
        $days[] = $date->format('Y-m-d');
    }
    return $days;
}