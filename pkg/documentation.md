# Tabs

Implementation of tabs. It utilizes indiferent class names, so it can be
easily integrated within any CSS framework.
Nesting is supported.

Waxed API allows programatically select, add, remove, modify, sort tab titles and respective contents.

MIT License.

---

### PHP:

```php
  use Waxedphp\Tabs\Setter as Tabs;

  $obj = new Tabs($this->waxed);
  $obj->addTab('the TAB 4!', '<h2>the TAB 4!</h2>')
  ->addTab('OTHER one (5)!','<h2>the TAB 5!</h2>')
  ->modifyTab(1, 'the TAB!', '<h2>the TAB!</h2>'); 
  $obj->setSelect(2)->setSort([2,0,1,4,3,5]);
  $this->waxed->pick('section1')->display([
    'payload1' => $obj->value()
  ], $this->tpl.'/tabs');
      

```

---

### HTML:

```html

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
---


---

### PHP Methods:

```php
// add new tab:
$obj->addTab(string $title, string $content);

// modify tab:
$obj->modifyTab(int $id, string $title, string $content);

// select tab (open):
$obj->setSelect(int $id);

// sort tabs by id:
$arr = [3,0,1,2];
$obj->setSort(array $arr);

// return settings for frontend:
$obj->value();
```

---
### Options:

### HTML:

| param | description | values | default |
| ----- | ----------- | ------ | ------- |
| data-name | |  |  |
| data-url | On tab selection, POST request will be sent to the given URL. | string | false |
| data-action | On tab selection, POST request will be sent to the URL with given ACTION. | string | false |

### CSS:

Waxed Tabs comes with two factory styles.
Following class name shoud be applied on the topmost div element.

| class | description |
| ----- | ----------- |
| waxed-tabs-simple | Simple tabs with underline. |
| waxed-tabs-rounded | Classic rounded tabs mimicizing diary. |
|  | If none of above is used, styling fully depends on global CSS. |
