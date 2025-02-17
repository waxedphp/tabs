/*
 *
 *
 * updated 20190611
 *
 */
;(function ( $, window, document, undefined ) {

    var pluginName = 'waxed/tabs',
        _search = 'div.waxed-tabs',
        defaults = {
            propertyName: "value"
        },
        inited = false,
        _api = ['selectTab']
        ;


    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = 'tabs';
      this.dd = dd;
      this.name = '';
      this.cfg = {
        //animate:false,
        //updateHash:false,
        selected:0
      };

      this._inspect = function() {

        //this._tabline = $(that.element).children('ul.tabs');
        this._tabline = $(that.element).find('ul.waxed-tabs-menu').first();
        this._tabs = $(that._tabline).find('li.waxed-tabs-tab>a');
        //this._box = $(that.element).children('div.waxed-tabs-panel');
        this._box = $(that.element).find('div.waxed-tabs-panel').first();
        this._boxes = $(that._box).children('div');
        //console.log(this._tabs);
        //console.log(this._boxes);
      },

      this._setOnClick = function() {
        $(this._tabs).each(function(i,a){
          $(a).off('click').click(function(ev){
            ev.preventDefault();
            that.selectTab(i);
          });
        });
      },

      this._build = function() {
        this._inspect();
        this._setOnClick();
        if (typeof(that.dd.wait)=='number') {
          setTimeout(function(){
            that.selectTab(that.cfg.selected);
          }, that.dd.wait);          
        } else {
          that.selectTab(that.cfg.selected);
        };

      },

      this.selectTab = function(idx) {

        $(that._tabs).each(function(i,a){
          if (i == idx) {
            $(a).addClass('active');
            $(a).parent().addClass('active');
            $(a).parent().addClass('is-active');
          } else {
            $(a).removeClass('active');
            $(a).parent().removeClass('active');
            $(a).parent().removeClass('is-active');
          }
        });
        //$(that._tabs[i]).addClass('active');
        var box = null;
        $(that._boxes).each(function(i,a){
          if (i == idx) {
            $(a).show();
            box = $(a);
          } else {
            $(a).hide();
          }
        });
        //$(that._boxes[i]).show();
        that.cfg.selected = idx;

        if (typeof that.dd.url == 'string') {
          if (typeof that.dd.action == 'string') {
            that.pluggable.sendData({
              'idx': idx,
              'action': that.dd.action
            }, that.dd.url, box);


          }
        }

      },

      this.modifyTab = function(rec) {

        if (typeof(rec.tab)!='number') {
          return;
        };

        if (typeof(rec.title)=='string') {
          $(that._tabs[rec.tab]).text(rec.title);
        };

        if (typeof(rec.content)=='string') {
          $(that._boxes[rec.tab]).html(rec.content);
        };

      },

      this.addTab = function(rec) {

        var tab = $('<li class="waxed-tabs-tab"></li>').appendTo(that._tabline);
        var link = $('<a href="#..."></a>').appendTo(tab);
        var div = $('<div></div>').appendTo(that._box);

        this._inspect();
        this._setOnClick();


        if (typeof(rec.title)=='string') {
          $(link).text(rec.title);
        };

        if (typeof(rec.content)=='string') {
          $(div).html(rec.content);
        };

      },

      this.removeTab = function(rec) {

        if (typeof(rec.tab)!='number') {
          return;
        };

        var parent = $(that._tabs[rec.tab]).parent();
        $(that._tabs[rec.tab]).remove();
        $(parent).remove();
        $(that._boxes[rec.tab]).remove();
        this._inspect();
        this._setOnClick();


      },

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };

        if (typeof(rec['select'])=='number') {
          var val = rec['select'];
          that.selectTab(val);
          this.cfg.selected = val;
        };

        if (typeof(rec.modify)=='object') {
          for (var i=0; i<rec.modify.length; i++) {
            that.modifyTab(rec.modify[i]);
          };
        };

        if (typeof(rec.add)=='object') {
          for (var i=0; i<rec.add.length; i++) {
            that.addTab(rec.add[i]);
          };
        };

        if (typeof(rec.remove)=='object') {
          for (var i=0; i<rec.remove.length; i++) {
            that.removeTab(rec.remove[i]);
          };
        };

        if (typeof(rec.sort)=='object') {
          var so = [];
          for (var i=0; i<rec.sort.length; i++) {
            var idx = rec.sort[i];
            //that.removeTab(rec.remove[i]);
            so.push({
              'tab':$(that._tabs[idx]).parent(),
              'box':$(that._boxes[idx])
            });
          };
          //$(that._tabline).empty();
          //$(that._box).empty();
          for (var i=0; i<so.length; i++) {
            //$(that._tabline).append(so[i].tab);
            //$(that._box).append(so[i].box);
            so[i].tab.detach().appendTo(that._tabline);
            so[i].box.detach().appendTo(that._box);
          };
          this._inspect();
          this._setOnClick();


          that.selectTab(this.cfg.selected);
        };

      },


      this.free = function() {

      },

      this.init=function() {
        that._build();
        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);

})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
