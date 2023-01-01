<?php

/*
 * FileManager Config
 */

return [
    'assets_path' => '/assets/', // public/assets/

    /*
     * permission setting of user groups
     */
    'auth' => [
        'admin' => [
            'upload_dir'         => 'upload/admin/',
            'max_size_dir'       => 10, // limit 10MB
            'max_size_upload'    => 2, // limit 2MB
            'allowed_extensions' => [
                'jpeg' ,'bmp', 'cod', 'gif', 'ief', 'jpg', 'jfif', 'tif', 'ras', 'cmx', 'ico', 'pnm', 'pbm', 'pgm', 'ppm', 'rgb', 'xbm', 'xpm', 'xwd', 'png', 'jps', 'fh',
                '7z', 'gz', 'rar', 'tar', 'zip',
                'ac3', 'aiff', 'm4a', 'mid', 'mp3', 'ogg', 'wav',
                'accdb', 'ade', 'adp', 'mdb',
                'avi', 'mov', 'mp4', 'mpeg', 'mpg', 'webm', 'wma',
                'csv', 'xls', 'xlsx',
                'doc', 'docx', 'odb', 'odf', 'odg', 'odp', 'ods', 'odt', 'otg', 'rtf', 'txt',
                'pdf',
                'ppt', 'pptx',
                'css', 'html', 'js', 'php', 'sql'
            ],
            'hidden_folders'     => [],
            'permissions'        => [
                'create_folders', 'delete_folders', 'rename_folders',
                'upload_files', 'delete_files', 'rename_files',
                'extract_and_compress', 'photo_editor', // extensions toolbar
            ]
        ]
    ]
];
