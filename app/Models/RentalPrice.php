<?php
namespace App\Models;

class RentalPrice{
    public $start_time;
    public $finish_time;
    public $price;

    function __construct($row = []){
        $this->start_time  = $row['start_time'];
        $this->finish_time = $row['finish_time'];
        $this->price       = $row['price'];
    }
}