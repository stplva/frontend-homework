//TABS JQUERY
// var $tabsNavItem = $('.tabsNavItem');
// var $tab = $('.tab');
//
// $tabsNavItem.on('click', function() {
//   $(this).addClass('isActive').siblings().removeClass('isActive');
//
//   $tab.removeClass('isActive').eq($(this).index()).addClass('isActive');
// });

//TABS

var tab = function () {
  var tabNav = document.querySelectorAll('.tabsNavItem'),
  tabContent = document.querySelectorAll('.tab'),
  tabName;

  tabNav.forEach( item=> {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav () {
    tabNav.forEach( item=> {
      item.classList.remove('isActive');
    });
    this.classList.add('isActive');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  };

  function selectTabContent(tabName) {
    tabContent.forEach( item=> {
      item.classList.contains(tabName) ? item.classList.add('isActive') :
        item.classList.remove('isActive');
    });
  }
};

tab();

//TOOLTIPS

var showingTooltip;

document.onmouseover = function(e) {
  var target = e.target;

  var tooltip = target.getAttribute('data-tooltip');
  if (!tooltip) {return};

  var tooltipElem = document.createElement('div');
  tooltipElem.classList.add('myToolTip');
  tooltipElem.innerHTML = tooltip;
  document.body.appendChild(tooltipElem);

  var coords = target.getBoundingClientRect();

  var left = coords.left + target.offsetWidth +10;
  if (left < 0) {left = 30};

  var top = coords.top;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';

  showingTooltip = tooltipElem;
};

document.onmouseout = function(e) {
  if (showingTooltip) {
    document.body.removeChild(showingTooltip);
    showingTooltip = null;
  }
};
