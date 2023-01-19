<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Court extends Model
{
    protected $fillable = [
        'code',
        'name',
        'stadium_id',
        'online',
        'active',
        'description',
        'account_created_id',
        'note',
    ];
    public $rules       = [
        'code' => '',
        'name' => '',
        'stadium_id' => 'required',
        'online' => '',
        'active' => '',
        'description' => '',
        'account_created_id' => 'required',
        'note' => '',
    ];

    public $timestamps = true;

    public static function get_current_info($_id){
        $row = self::find($_id);
        $row->stadium_info = Stadium::find($row->stadium_id);
        return $row;
    }

    public static function get_avail_court(){
        $rows = self::where('id', '>', 1)->get();
        foreach ($rows as $key => $row){
            $row->stadium_info = Stadium::find($row->stadium_id);
        }
        return $rows;
    }
}