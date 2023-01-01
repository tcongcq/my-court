<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => 'Phải đồng ý :attribute.',
    'active_url'           => ':attribute là đường dẫn không hợp lệ.',
    'after'                => ':attribute phải trước ngày :date.',
    'alpha'                => ':attribute chỉ chứa ký tự.',
    'alpha_dash'           => ':attribute chỉ chứa ký tự, số và dấu chấm.',
    'alpha_num'            => ':attribute chỉ chứa ký tự và số.',
    'array'                => ':attribute phải là một mảng.',
    'before'               => ':attribute phải sau ngày :date.',
    'between'              => [
        'numeric' => ':attribute có giá trị từ :min đến :max.',
        'file'    => ':attribute có kích thước từ :min đến :max KB.',
        'string'  => ':attribute chỉ được có từ :min đến :max ký tự.',
        'array'   => ':attribute chỉ được có từ :min đến :max phần tử.',
    ],
    'boolean'              => ':attribute có giá trị đúng hoặc sai.',
    'confirmed'            => ':attribute xác nhận không trùng khớp.',
    'date'                 => ':attribute không phải là ngày hợp lệ.',
    'date_format'          => ':attribute không phù hợp định dạng :format.',
    'different'            => ':attribute và :other phải khác nhau.',
    'digits'               => ':attribute phải có :digits chữ số.',
    'digits_between'       => ':attribute phải có từ :min đến :max chữ số.',
    'dimensions'           => ':attribute có kích thước không hợp lệ.',
    'distinct'             => ':attribute bị trùng dữ liệu.',
    'email'                => ':attribute phải là địa chỉ mail.',
    'exists'               => 'Lựa chọn :attribute không hợp lệ.',
    'file'                 => ':attribute phải là tập tin.',
    'filled'               => ':attribute là trường cần thiết.',
    'image'                => ':attribute phải là hình ảnh.',
    'in'                   => 'Lựa chọn :attribute không hợp lệ.',
    'in_array'             => ':attribute không tồn tại trong :other.',
    'integer'              => ':attribute phải là số tự nhiên.',
    'ip'                   => ':attribute phải là địa chỉ IP.',
    'json'                 => ':attribute phải là chuỗi JSON hợp lệ.',
    'max'                  => [
        'numeric' => ':attribute phải nhỏ hơn :max.',
        'file'    => ':attribute phải nhỏ hơn :max KB.',
        'string'  => ':attribute phải ít hơn :max ký tự.',
        'array'   => ':attribute phải ít hơn :max phần tử.',
    ],
    'mimes'                => ':attribute phải là tập tin dạng: :values.',
    'min'                  => [
        'numeric' => ':attribute phải lớn hơn :min.',
        'file'    => ':attribute phải lớn hơn :min KB.',
        'string'  => ':attribute phải nhiều hơn :min ký tự.',
        'array'   => ':attribute phải nhiều hơn :min phần tử.',
    ],
    'not_in'               => 'Lựa chọn :attribute không hợp lệ.',
    'numeric'              => ':attribute phải là số.',
    'present'              => ':attribute phải có mặt.',
    'regex'                => ':attribute định dạng không hợp lệ.',
    'required'             => ':attribute là bắt buộc.',
    'required_if'          => ':attribute là bắt buộc khi :other là :value.',
    'required_unless'      => ':attribute là bắt buộc trừ khi :other trong :values.',
    'required_with'        => ':attribute là bắt buộc khi :values xuất hiện.',
    'required_with_all'    => ':attribute là bắt buộc khi :values xuất hiện.',
    'required_without'     => ':attribute là bắt buộc khi :values không xuất hiện.',
    'required_without_all' => ':attribute là bắt buộc khi không có :values xuất hiện.',
    'same'                 => ':attribute và :other phải giống nhau.',
    'size'                 => [
        'numeric' => ':attribute phải có giá trị :size.',
        'file'    => ':attribute phải có kích thước :size KB.',
        'string'  => ':attribute phải có :size ký tự.',
        'array'   => ':attribute phải chứa :size phần tử.',
    ],
    'string'               => ':attribute phải là một chuỗi.',
    'timezone'             => ':attribute phải là múi giờ hợp lệ.',
    'unique'               => ':attribute đã được sử dụng.',
    'url'                  => ':attribute định dạng không hợp lệ.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [],

];
