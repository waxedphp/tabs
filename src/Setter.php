<?php
namespace Waxedphp\Tabs;

class Setter extends \Waxedphp\Waxedphp\Php\Setters\AbstractSetter {

  /**
   * @var array<mixed> $setup
   */
  private array $setup = [
  ];
  
  protected ?int $select = null;
  
  protected ?array $sort = null;
  
  protected ?array $remove = null;
  
  protected ?array $add = null;
  
  protected ?array $modify = null;
  
  /**
   * allowed options
   *
   * @var array<mixed> $_allowedOptions
   */
  protected array $_allowedOptions = [
  'select', 'sort', 'remove', 'add', 'modify'
  ];

  function setSort(array $a) {
    $b = [];
    foreach ($a as $val) {
      $b[] = intval($val);
    }
    $this->sort = $b;
    return $this;
  }

  function setRemove(array $a) {
    $b = [];
    foreach ($a as $val) {
      $b[] = intval($val);
    }
    $this->remove = $b;
    return $this;
  }

  function addTab(string $title, string $content) {
    if (!is_array($this->add)) $this->add = [];
    $this->add[] = [
      'title' => $title,
      'content' => $content,
    ];
    return $this;
  }

  function modifyTab(int $which, string $title, string $content) {
    if (!is_array($this->modify)) $this->modify = [];
    $this->modify[] = [
      'tab' => $which,
      'title' => $title,
      'content' => $content,
    ];
    return $this;
  }

  /**
  * value
  *
  * @param mixed $value
  * @return array<mixed>
  */
  public function value(mixed $value = null): array {
    $a = [];
    $b = $this->getArrayOfAllowedOptions();
    if (!empty($b)) {
      //$a['config'] = $b;
      $a = array_merge($a, $b);
    }
    $a['value'] = $value;
    return $a;
  }

}
