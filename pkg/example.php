<?php
return [
'payload1' =>
  [
    'select' => 2,
    'modify' => [
      [
        'tab' => 1,
        'title' => 'the TAB!',
        'content' => '<h2>the TAB!</h2>',
      ],
      [
        'tab' => 2,
        'title' => 'OTHER one 2!',
      ],
    ],
    'add' => [
      [
        'title' => 'the TAB 4!',
        'content' => '<h2>the TAB 4!</h2>',
      ],
      [
        'title' => 'OTHER one (5)!',
        'content' => '<h2>the TAB 5!</h2>',
      ],
    ],
    'remove' => [
      [
        //'tab' => 1,
      ],
      [
        //'tab' => 0,
      ],
    ],
    'sort' => [
      3, 4, 1, 2, 0
    ],
  ],
'payload2' =>
  [
    'select' => 1,
  ],
];

