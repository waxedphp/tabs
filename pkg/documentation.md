# Waxed Tabs

Implementation of tabs. It utilizes indiferent class names, so it can be
easily integrated within any CSS framework.
Nesting is supported.

Waxed API allows programatically:

- select
- add
- remove
- modify
- sort

tab titles and respective contents.

MIT License.

### HTML:

```

<div class="waxed-tabs waxed-tabs-simple"
  data-name="payload1"
  data-url="{{route}}"
  data-action="tab/select"
  >
  <div>
    <ul class="waxed-tabs-menu" >
      <li class="waxed-tabs-tab" ><a href="#...">Tab 1</a></li>
      <li class="waxed-tabs-tab" ><a href="#...">The Second Tab</a></li>
      <li class="waxed-tabs-tab" ><a href="#...">Tab C</a></li>
    </ul>
  </div>
  <div class="waxed-tabs-panel border">
    <div>
      <h2>Heading 1</h2>
      <p>This is the content of the first tab.</p>
    </div>
    <div>
      <h2>Heading 2</h2>
      <p>Stuff from the second tab.</p>
    </div>
  </div>
</div>

```

| param | description | values | default |
| ----- | ----------- | ------ | ------- |
| data-name | |  |  |
| data-url | On tab selection, POST request will be sent to the given URL. | string | false |
| data-action | On tab selection, POST request will be sent to the URL with given ACTION. | string | false |

### PHP:

```

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
];


```

### CSS:

Waxed Tabs comes with two factory styles.
Following class name shoud be applied on the topmost div element.

| class | description |
| ----- | ----------- |
| waxed-tabs-simple | Simple tabs with underline. |
| waxed-tabs-rounded | Classic rounded tabs mimicizing diary. |
|  | If none of above is used, styling fully depends on global CSS. |
