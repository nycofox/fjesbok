<?php

return [

    'menu' => [
        [
            'icon' => 'fa fa-sitemap',
            'title' => 'Home',
            'url' => '/',
            'route-name' => 'home'
        ],
        [
            'icon' => 'fas fa-face-grin-squint-tears',
            'title' => 'Entertainment',
            'url' => 'javascript:;',
            'caret' => true,
            'sub_menu' => [
                [
                    'title' => 'Webcomics',
                    'url' => '/webcomics',
                    'route-name' => 'webcomics.show',
                    'role' => 'webcomics',
                ],
                [
                    'title' => 'Games',
                    'url' => '#',
                    'route-name' => ''
                ],

            ]
        ],
        [
            'icon' => 'fas fa-lock',
            'title' => 'Admin',
            'role' => 'admin',
            'url' => 'javascript:;',
            'caret' => true,
            'sub_menu' => [
                [
                    'title' => 'Admin',
                    'url' => '/admin',
                    'route-name' => 'admin.index',
                ],
            ],
        ],
        /*
                [
                    'icon' => 'fa fa-align-left',
                    'title' => 'Menu Level',
                    'url' => 'javascript:;',
                    'caret' => true,
                    'sub_menu' => [[
                        'url' => 'javascript:;',
                        'title' => 'Menu 1.1',
                        'sub_menu' => [[
                            'url' => 'javascript:;',
                            'title' => 'Menu 2.1',
                            'sub_menu' => [[
                                'url' => 'javascript:;',
                                'title' => 'Menu 3.1',
                            ], [
                                'url' => 'javascript:;',
                                'title' => 'Menu 3.2'
                            ]]
                        ], [
                            'url' => 'javascript:;',
                            'title' => 'Menu 2.2'
                        ], [
                            'url' => 'javascript:;',
                            'title' => 'Menu 2.3'
                        ]]
                    ], [
                        'url' => 'javascript:;',
                        'title' => 'Menu 1.2'
                    ], [
                        'url' => 'javascript:;',
                        'title' => 'Menu 1.3'
                    ]]
                ]]
        */
    ]
];
