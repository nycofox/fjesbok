/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 5
Version: 5.1.3
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
	----------------------------
	APPS CONTENT TABLE
	----------------------------

	<!-- ======== GLOBAL SCRIPT SETTING ======== -->
	01. Handle Scrollbar
	02. Handle Sidebar Menu
	03. Handle Sidebar Toggle
	04. Handle Sidebar End
	05. Handle Sidebar Minified
	06. Handle Page Loader 
	07. Handle Panel Action
	08. Handle Panel Draggable
	09. Handle Tooltip Popover Activation
	10. Handle Scroll to Top Button
	11. Handle Theme Panel
	12. Handle Save Panel Position Function
	13. Handle Draggable Panel Local Storage Function
	14. Handle Reset Local Storage
	15. Handle Unlimited Nav Tabs
	16. Handle Top Menu - Unlimited Top Menu Render
	17. Handle Top Menu - Sub Menu Toggle
	18. Handle Top Menu - Mobile Sub Menu Toggle
	19. Handle Top Menu - Mobile Top Menu Toggle
	20. Handle Page Scroll Class
	21. Handle Toggle Navbar Profile
	22. Handle Sidebar Scroll Memory
	23. Handle Sidebar Minify Sub Menu
	24. Handle Ajax Mode
	25. Handle Float Navbar Search
	26. Handle Animation
	27. Handle Sidebar Search
	28. Handle Toggle Class
	29. Handle Dismiss Class

	<!-- ======== APPLICATION SETTING ======== -->
	Application Controller
*/
var app = {
	id: '#app',
	isMobile: ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || window.innerWidth < 992),
	bootstrap: {
		tooltip: {
			attr: 'data-bs-toggle="tooltip"'
		},
		popover: {
			attr: 'data-bs-toggle="popover"'
		},
		modal: {
			attr: 'data-bs-toggle="modal"',
			dismissAttr: 'data-bs-dismiss="modal"',
			event: {
				hidden: 'hidden.bs.modal'
			}
		},
		nav: {
			class: 'nav',
			tabs: {
				class: 'nav-tabs',
				activeClass: 'active',
				itemClass: 'nav-item',
				itemLinkClass: 'nav-link'
			}
		}
	},
	ajax: {
		attr: 'data-toggle="ajax"',
		clearOption: '',
		clearElement: '.jvectormap-label, .jvector-label, .AutoFill_border ,#gritter-notice-wrapper, .ui-autocomplete, .colorpicker, .FixedHeader_Header, .FixedHeader_Cloned .lightboxOverlay, .lightbox, .introjs-hints, .nvtooltip, .sp-container, .dz-hidden-input, .lightboxOverlay',
		emptyElement: '[data-id="app-extra-elm"]',
		loader: {
			id: '#app-content-loader',
			html: '<div id="app-content-loader"><span class="spinner"></span></div>',
			class: 'app-content-loading'
		},
		error: {
			html: '<div class="px-3 text-center fs-20px"><i class="fa fa-warning fa-lg text-muted me-1"></i> <span class="fw-600 text-inverse">Error 404! Page not found.</span></div>'
		}
	},
	header: {
		id: '#header',
		class: 'app-header',
		hasScrollClass: 'has-scroll',
		brand: {
			class: 'navbar-brand'
		},
		floatingForm: {
			toggleAttr: 'data-toggle="app-header-floating-form"',
			dismissAttr: 'data-dismiss="app-header-floating-form"',
			toggledClass: 'app-header-floating-form-toggled'
		},
		inverse: {
			class: 'app-header-inverse'
		}
	},
	sidebar: {
		id: '#sidebar',
		class: 'app-sidebar',
		scrollBar: {
			localStorage: 'appSidebarScrollPosition',
			dom: ''
		},
		bg: {
			class: 'app-sidebar-bg'
		},
		menu: {
			class: 'menu',
			disableAnimationAttr: 'data-disable-slide-animation',
			disableAutoCollapseAttr: 'data-disable-auto-collapse',
			animationTime: 250,
			headerClass: 'menu-header',
			itemClass: 'menu-item',
			itemLinkClass: 'menu-link',
			hasSubClass: 'has-sub',
			activeClass: 'active',
			expandingClass: 'expanding',
			expandClass: 'expand',
			closingClass: 'closing',
			closedClass: 'closed',
			submenu: {
				class: 'menu-submenu',
			}
		},
		profile: {
			class: 'menu-profile',
			toggleAttr: 'data-toggle="app-sidebar-profile"',
			targetAttr: 'data-target'
		},
		mobile: {
			toggleAttr: 'data-toggle="app-sidebar-mobile"',
			dismissAttr: 'data-dismiss="app-sidebar-mobile"',
			toggledClass: 'app-sidebar-mobile-toggled',
			closedClass: 'app-sidebar-mobile-closed',
			backdrop: {
				class: 'app-sidebar-mobile-backdrop'
			}
		},
		minify: {
			toggleAttr: 'data-toggle="app-sidebar-minify"',
			toggledClass: 'app-sidebar-minified',
			cookieName: 'app-sidebar-minified'
		},
		floatSubmenu: {
			id: '#app-sidebar-float-submenu',
			dom: '',
			timeout: '',
			class: 'app-sidebar-float-submenu',
			container: {
				class: 'app-sidebar-float-submenu-container'
			},
			arrow: {
				id: '#app-sidebar-float-submenu-arrow',
				class: 'app-sidebar-float-submenu-arrow'
			},
			line: {
				id: '#app-sidebar-float-submenu-line',
				class: 'app-sidebar-float-submenu-line'
			},
			overflow: {
				class: 'overflow-scroll mh-100vh'
			}
		},
		search: {
			class: 'menu-search',
			toggleAttr: 'data-sidebar-search="true"',
			hideClass: 'd-none',
			foundClass: 'has-text'
		},
		transparent: {
			class: 'app-sidebar-transparent'
		}
	},
	sidebarEnd: {
		class: 'app-sidebar-end',
		toggleAttr: 'data-toggle="app-sidebar-end"',
		toggledClass: 'app-sidebar-end-toggled',
		collapsedClass: 'app-sidebar-end-collapsed',
		mobile: {
			toggleAttr: 'data-toggle="app-sidebar-end-mobile"',
			dismissAttr: 'data-dismiss="app-sidebar-end-mobile"',
			toggledClass: 'app-sidebar-end-mobile-toggled',
			collapsedClass: 'app-sidebar-end-mobile-collapsed',
			closedClass: 'app-sidebar-end-mobile-closed'
		}
	},
	topMenu: {
		id: '#top-menu',
		class: 'app-top-menu',
		mobile: {
			toggleAttr: 'data-toggle="app-top-menu-mobile"'
		},
		menu: {
			class: 'menu',
			itemClass: 'menu-item',
			linkClass: 'menu-link',
			activeClass: 'active',
			hasSubClass: 'has-sub',
			expandClass: 'expand',
			submenu: {
				class: 'menu-submenu'
			}
		},
		control: {
			class: 'menu-control',
			startClass: 'menu-control-start',
			endClass: 'menu-control-end',
			showClass: 'show',
			buttonPrev: {
				class: 'menu-control-start',
				toggleAttr: 'data-toggle="app-top-menu-prev"'
			},
			buttonNext: {
				class: 'menu-control-end',
				toggleAttr: 'data-toggle="app-top-menu-next"'
			}
		}
	},
	scrollBar: {
		attr: 'data-scrollbar="true"',
		skipMobileAttr: 'data-skip-mobile',
		initAttr: 'data-init',
		heightAttr: 'data-height',
		wheelPropagationAttr: 'data-wheel-propagation'
	},
	content: {
		id: '#content',
		class: 'app-content',
		fullHeight: {
			class: 'app-content-full-height'
		},
		fullWidth: {
			class: 'app-content-full-width'
		}
	},
	layout: {
		sidebarLight: {
			class: 'app-with-light-sidebar'
		},
		sidebarEnd: {
			class: 'app-with-end-sidebar'
		},
		sidebarWide: {
			class: 'app-with-wide-sidebar'
		},
		sidebarMinified: {
			class: 'app-sidebar-minified'
		},
		sidebarTwo: {
			class: 'app-with-two-sidebar'
		},
		withoutHeader: {
			class: 'app-without-header'
		},
		withoutSidebar: {
			class: 'app-without-sidebar'
		},
		topMenu: {
			class: 'app-with-top-menu'
		},
		boxedLayout: {
			class: 'boxed-layout'
		}
	},
	loader: {
		class: 'app-loader',
		fadingClass: 'fading',
		fadingTime: 200,
		loadedClass: 'loaded'
	},
	panel: {
		class: 'panel',
		headClass: 'panel-heading',
		titleClass: 'panel-title',
		bodyClass: 'panel-body',
		expandClass: 'panel-expand',
		loadingClass: 'panel-loading',
		loader: {
			class: 'panel-loader',
			html: '<span class="spinner spinner-sm"></span>'
		},
		toggle: {
			remove: {
				attr: 'data-toggle="panel-remove"',
				tooltipText: 'Remove'
			},
			collapse: {
				attr: 'data-toggle="panel-collapse"',
				tooltipText: 'Collapse / Expand'
			},
			reload: {
				attr: 'data-toggle="panel-reload"',
				tooltipText: 'Reload',
			},
			expand: {
				attr: 'data-toggle="panel-expand"',
				tooltipText: 'Expand / Compress'
			}
		},
		draggable: {
			disableAttr: 'data-sortable="false"',
			connectedTarget: '.row > [class*=col]',
			spinnerHtml: '<i class="fa fa-spinner fa-spin ms-2" data-id="title-spinner"></i>',
		},
		sortable: {
			class: 'ui-sortable',
			attr: 'data-sortable-id',
			spinnerAttr: 'data-id="title-spinner"',
			disableAttr: 'data-sortable="false"',
			parentAttr: 'class*="col-"'
		},
		localStorage: {
			notSupportMessage: 'Your browser is not supported with the local storage',
			loadedEvent: 'localstorage-position-loaded',
			reset: {
				attr: 'data-toggle="reset-local-storage"',
				modal: {
					id: '#modalResetLocalStorage',
					title: 'Reset Local Storage Confirmation',
					message: 'Would you like to RESET all your saved widgets and clear Local Storage?',
					alert: 'info',
					confirmResetAttr: 'data-toggle="confirm-reset-local-storage"'
				}
			}
		}
	},
	scrollToTopBtn: {
		showClass: 'show',
		heightShow: 200,
		toggleAttr: 'data-toggle="scroll-to-top"',
		scrollSpeed: 500
	},
	unlimitedTabs: {
		class: 'tab-overflow',
		overflowLeft: {
			class: 'overflow-left'
		},
		overflowRight: {
			class: 'overflow-right'
		},
		buttonNext: {
			class: 'next-button',
			toggleAttr: 'data-click="next-tab"'
		},
		buttonPrev: {
			class: 'prev-button',
			toggleAttr: 'data-click="prev-tab"'
		}
	},
	themePanel: {
		class: 'theme-panel',
		toggleAttr: 'data-toggle="theme-panel-expand"',
		cookieName: 'theme-panel-expand',
		activeClass: 'active',
		themeListCLass: 'theme-list',
		themeListItemCLass: 'theme-list-item',
		theme: {
			toggleAttr: 'data-toggle="theme-selector"',
			cookieName: 'app-theme',
			activeClass: 'active',
			classAttr: 'data-theme-class'
		},
		themeHeader: {
			class: 'app-header-inverse',
			toggleAttr: 'name="app-header-inverse"',
			cookieName: 'app-theme-header'
		},
		themeHeaderFixed: {
			class: 'app-header-fixed',
			toggleAttr: 'name="app-header-fixed"',
			cookieName: 'app-header-fixed',
			disabledClass: 'app-header-fixed-disabled',
			errorMessage: 'Default Header with Fixed Sidebar option is not supported. Proceed with Default Header with Default Sidebar.'
		},
		themeSidebarGrid: {
			class: 'app-sidebar-grid',
			toggleAttr: 'name="app-sidebar-grid"',
			cookieName: 'app-sidebar-grid',
		},
		themeGradientEnabled: {
			class: 'app-gradient-enabled',
			toggleAttr: 'name="app-gradient-enabled"',
			cookieName: 'app-gradient-enabled',
		},
		themeSidebarFixed: {
			class: 'app-sidebar-fixed',
			toggleAttr: 'name="app-sidebar-fixed"',
			cookieName: 'app-sidebar-fixed',
			disabledClass: 'app-sidebar-fixed-disabled',
			errorMessage: 'Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar.',
			mobileErrorMessage: 'Mobile view sidebar will always fixed'
		},
		themeDarkMode: {
			class: 'dark-mode',
			toggleAttr: 'name="app-theme-dark-mode"',
			cookieName: 'app-theme-dark-mode'
		},
	},
	animation: {
		attr: 'data-animation',
		valueAttr: 'data-value',
		speed: 1000,
		effect: 'swing'
	},
	dismissClass: {
		toggleAttr: 'data-dismiss-class',
		targetAttr: 'data-target'
	},
	toggleClass: {
		toggleAttr: 'data-toggle-class',
		targetAttr: 'data-target'
	},
	helper: {
		display: {
			none: 'd-none'
		},
		margin: {
			left: {
				0: 'ms-0'
			},
			right: {
				0: 'me-0'
			}
		}
	},
	font: {
	
	},
	color: {
	
	}
};


/* 1. Handle Scrollbar
------------------------------------------------ */
var handleScrollbar = function() {
	"use strict";
	
	var elms = document.querySelectorAll('['+ app.scrollBar.attr +']');
		
	for (var i = 0; i < elms.length; i++) {
		generateScrollbar(elms[i])
	}
};
var generateScrollbar = function(elm) {
  "use strict";
	
	if ($(elm).attr(app.scrollBar.initAttr) || (app.isMobile && $(elm).attr(app.scrollBar.skipMobileAttr))) {
		return;
	}
	var dataHeight = (!$(elm).attr(app.scrollBar.heightAttr)) ? $(elm).height() : $(elm).attr(app.scrollBar.heightAttr);
	
	$(elm).css('height', dataHeight);
	
	if(app.isMobile) {
		$(elm).css('overflow-x','scroll');
	} else {
		var dataWheelPropagation = ($(elm).attr(app.scrollBar.wheelPropagationAttr)) ? $(elm).attr(app.scrollBar.wheelPropagationAttr) : false;
		
		if ($(elm).closest('.'+ app.sidebar.class +':not(.'+ app.sidebarEnd.class +')').length !== 0) {
			app.sidebar.scrollBar.dom = new PerfectScrollbar(elm, {
				wheelPropagation: dataWheelPropagation
			});
		} else {
			new PerfectScrollbar(elm, {
				wheelPropagation: dataWheelPropagation
			});
		}
	}
	$(elm).attr(app.scrollBar.initAttr, true);
};


/* 2. Handle Sidebar Menu
------------------------------------------------ */
var handleSidebarMenu = function() {
  "use strict";
    
	var expandTime          = ($(app.sidebar.id).attr(app.sidebar.menu.disableAnimationAttr)) ? 0 : app.sidebar.menu.animationTime;
	var disableAutoCollapse = ($(app.sidebar.id).attr(app.sidebar.menu.disableAutoCollapseAttr)) ? 1 : 0;
	
	// 2.1 Menu - Toggle / Collapse
	$(document).on('click', '.'+ app.sidebar.class +' .'+ app.sidebar.menu.class +' > .'+ app.sidebar.menu.itemClass +'.'+ app.sidebar.menu.hasSubClass +' > .'+ app.sidebar.menu.itemLinkClass, function() {
		var menu      = $(this).next('.'+ app.sidebar.menu.submenu.class);
		var menuOther = $('.'+ app.sidebar.class +' .'+ app.sidebar.menu.class +' > .'+ app.sidebar.menu.itemClass +'.'+ app.sidebar.menu.hasSubClass +' > .'+ app.sidebar.menu.submenu.class).not(menu);

		if ($('.'+ app.sidebar.minify.toggledClass).length === 0) {
			if (!disableAutoCollapse) {
				$(menuOther).closest('.'+ app.sidebar.menu.itemClass).addClass(app.sidebar.menu.closingClass);
				$(menuOther).slideUp(expandTime, function() {
					$(menuOther).closest('.'+ app.sidebar.menu.itemClass).addClass(app.sidebar.menu.closedClass).removeClass(app.sidebar.menu.expandClass + ' ' + app.sidebar.menu.closingClass);
				});
			}
			if ($(menu).is(':visible')) {
				$(menu).closest('.'+ app.sidebar.menu.itemClass).addClass(app.sidebar.menu.closingClass).removeClass(app.sidebar.menu.expandClass);
			} else {
				$(menu).closest('.'+ app.sidebar.menu.itemClass ).addClass(app.sidebar.menu.expandingClass).removeClass(app.sidebar.menu.closedClass);
			}
			
			$(menu).slideToggle(expandTime, function() {
				var menuItem = $(this).closest('.'+ app.sidebar.menu.itemClass);
				if (!$(menu).is(':visible')) {
					$(menuItem).addClass(app.sidebar.menu.closedClass);
					$(menuItem).removeClass(app.sidebar.menu.expandClass);
				} else {
					$(menuItem).addClass(app.sidebar.menu.expandClass);
					$(menuItem).removeClass(app.sidebar.menu.closedClass);
				}
				$(menuItem).removeClass(app.sidebar.menu.expandingClass + ' ' + app.sidebar.menu.closingClass);
			});
		}
	});
	
	// 2.2 Menu Submenu - Toggle / Collapse 
	$(document).on('click', '.'+ app.sidebar.class +' .'+ app.sidebar.menu.class +' > .'+ app.sidebar.menu.itemClass +'.'+ app.sidebar.menu.hasSubClass +' .'+ app.sidebar.menu.submenu.class +' .'+ app.sidebar.menu.itemClass +'.'+ app.sidebar.menu.hasSubClass +' > .'+ app.sidebar.menu.itemLinkClass, function() {
		if ($('.'+ app.sidebar.minify.toggledClass).length === 0) {
			var menu = $(this).next('.'+ app.sidebar.menu.submenu.class);
			if ($(menu).is(':visible')) {
				$(menu).closest('.'+ app.sidebar.menu.itemClass).addClass(app.sidebar.menu.closingClass).removeClass(app.sidebar.menu.expandClass);
			} else {
				$(menu).closest('.'+ app.sidebar.menu.itemClass).addClass(app.sidebar.menu.expandingClass).removeClass(app.sidebar.menu.closedClass);
			}
			$(menu).slideToggle(expandTime, function() {
				var menuItem = $(this).closest('.'+ app.sidebar.menu.itemClass);
				if (!$(menu).is(':visible')) {
					$(menuItem).addClass(app.sidebar.menu.closedClass);
					$(menuItem).removeClass(app.sidebar.menu.expandClass);
				} else {
					$(menuItem).addClass(app.sidebar.menu.expandClass);
					$(menuItem).removeClass(app.sidebar.menu.closedClass);
				}
				$(menuItem).removeClass(app.sidebar.menu.expandingClass + ' ' + app.sidebar.menu.closingClass);
			});
		}
	});
};


/* 3. Handle Sidebar Toggle
------------------------------------------------ */
var handleSidebarToggle = function() {
  "use strict";

	// 3.1 Mobile - Toggle
	$(document).on('click', '['+ app.sidebar.mobile.toggleAttr +']', function(e) {
		e.preventDefault();
		
		$(app.id).addClass(app.sidebar.mobile.toggledClass).removeClass(app.sidebar.mobile.closedClass);
	});
	
	// 3.2 Mobile - Dismiss 
	$(document).on('click', '['+ app.sidebar.mobile.dismissAttr +']', function(e) {
		e.preventDefault();
		
		$(app.id).removeClass(app.sidebar.mobile.toggledClass).addClass(app.sidebar.mobile.closedClass);
		setTimeout(function() {
			$(app.id).removeClass(app.sidebar.mobile.closedClass);
		}, 250);
	});
};


/* 4. Handle Sidebar End
------------------------------------------------ */
var handleSidebarEndToggle = function() {
  "use strict";

	// 4.1 Desktop - Toggle / Collapse
	$(document).on('click', '['+ app.sidebarEnd.toggleAttr +']', function(e) {
		e.preventDefault();
		
		if (!$(app.id).hasClass(app.sidebarEnd.toggledClass) && !$(app.id).hasClass(app.sidebarEnd.collapsedClass)) {
			$(app.id).addClass(app.sidebarEnd.collapsedClass);
		} else if ($(app.id).hasClass(app.sidebarEnd.toggledClass)) {
			$(app.id).removeClass(app.sidebarEnd.toggledClass).addClass(app.sidebarEnd.collapsedClass);
		} else {
			$(app.id).removeClass(app.sidebarEnd.collapsedClass).addClass(app.sidebarEnd.toggledClass);
		}
	});
	
	// 4.2 Mobile - Toggle
	$(document).on('click', '['+ app.sidebarEnd.mobile.toggleAttr +']', function(e) {
		e.preventDefault();
		
		$(app.id).addClass(app.sidebarEnd.mobile.toggledClass).removeClass(app.sidebarEnd.mobile.closedClass);
	});
	
	// 4.3 Mobile - Dismiss
	$(document).on('click', '['+ app.sidebarEnd.mobile.dismissAttr +']', function(e) {
		e.preventDefault();
		
		$(app.id).removeClass(app.sidebarEnd.mobile.toggledClass).addClass(app.sidebarEnd.mobile.closedClass);
		setTimeout(function() {
			$(app.id).removeClass(app.sidebarEnd.mobile.closedClass);
		}, 250);
	});
};


/* 5. Handle Sidebar Minified
------------------------------------------------ */
var handleSidebarMinify = function() {
  "use strict";
	
	// 5.1 Minify - Toggle / Dismiss
	$(document).on('click', '['+ app.sidebar.minify.toggleAttr +']', function(e) {
		e.preventDefault();
		var appSidebarMinified = false;

		if ($(app.id).hasClass(app.sidebar.minify.toggledClass)) {
			$(app.id).removeClass(app.sidebar.minify.toggledClass);
			$(app.sidebar.floatSubmenu.id).remove();
		} else {
			$(app.id).addClass(app.sidebar.minify.toggledClass);

			if(app.isMobile) {
				var scrollBarAttr = '.' + app.sidebar.class +' '+ app.scrollBar.attr;
				$(scrollBarAttr).css('margin-top','0');
				$(scrollBarAttr).css('overflow-x', 'scroll');
			}
			appSidebarMinified = true;
		}
		if (Cookies) {
			Cookies.set(app.sidebar.minify.cookieName, appSidebarMinified);
		}
	});
	
	// 5.2 Minify - Page Load Cookies 
	if (Cookies) {
		var appSidebarMinified = Cookies.get(app.sidebar.minify.cookieName);
		
		if (appSidebarMinified == 'true') {
			$(app.id).addClass(app.sidebar.minify.toggledClass);
		}
	}
};


/* 6. Handle Page Loader 
------------------------------------------------ */
var handlePageLoader = function() {
  "use strict";

	$(window).on('load', function() {
		var appLoaderClass = '.'+ app.loader.class;
		$(appLoaderClass).addClass(app.loader.fadingClass);
		
		setTimeout(function() {
			$(appLoaderClass).removeClass(app.loader.fadingClass).addClass(app.loader.loadedClass);
		}, app.loader.fadingTime);
	});
};


/* 7. Handle Panel Action
------------------------------------------------ */
var handlePanelAction = function() {
	"use strict";
	
	var panelTooltip;

	// 7.1 Panel Remove - Mouseover
	$(document).on('mouseover', '['+ app.panel.toggle.remove.attr + ']', function(e) {
		if (!$(this).attr('data-tooltip-init')) {
			var panelTooltip = new bootstrap.Tooltip(this, { 
				title: app.panel.toggle.remove.tooltipText, 
				placement: 'bottom' 
			});
			panelTooltip.show();
			$(this).attr('data-tooltip-init', true);
		}
	});
	
	// 7.2 Panel Remove - Click
	$(document).on('click', '['+ app.panel.toggle.remove.attr + ']', function(e) {
		e.preventDefault();
		
		if (panelTooltip) {
			panelTooltip.hide();
		}
		$(this).closest('.'+ app.panel.class).remove();
	});

	// 7.3 Panel Collapse - Mouseover
	$(document).on('mouseover', '['+ app.panel.toggle.collapse.attr + ']', function(e) {
		if (!$(this).attr('data-tooltip-init')) {
			panelTooltip = new bootstrap.Tooltip(this, { 
				title: app.panel.toggle.collapse.tooltipText, 
				placement: 'bottom' 
			});
			panelTooltip.show();
			$(this).attr('data-tooltip-init', true);
		}
	});
	
	// 7.4 Panel Collapse - Click
	$(document).on('click', '['+ app.panel.toggle.collapse.attr + ']', function(e) {
		e.preventDefault();
		
		if (panelTooltip) {
			panelTooltip.hide();
		}
		$(this).closest('.'+ app.panel.class).find('.'+ app.panel.bodyClass).slideToggle();
	});

	// 7.5 Panel Reload - Mouseover
	$(document).on('mouseover', '['+ app.panel.toggle.reload.attr + ']', function(e) {
		if (!$(this).attr('data-tooltip-init')) {
			panelTooltip = new bootstrap.Tooltip(this, { 
				title: app.panel.toggle.reload.tooltipText, 
				placement: 'bottom' 
			});
			panelTooltip.show();
			$(this).attr('data-tooltip-init', true);
		}
	});
	
	// 7.6 Panel Reload - Click
	$(document).on('click', '['+ app.panel.toggle.reload.attr + ']', function(e) {
		e.preventDefault();
		
		if (panelTooltip) {
			panelTooltip.hide();
		}
		var target = $(this).closest('.'+ app.panel.class);
		if (!$(target).hasClass(app.panel.loadingClass)) {
			var targetBody = $(target).find('.'+ app.panel.bodyClass);
			var spinnerHtml = '<div class="'+ app.panel.loader.class +'">'+ app.panel.loader.html +'</div>';
			$(target).addClass(app.panel.loadingClass);
			$(targetBody).prepend(spinnerHtml);
			setTimeout(function() {
				$(target).removeClass(app.panel.loadingClass);
				$(target).find('.'+ app.panel.loader.class).remove();
			}, 2000);
		}
	});

	// 7.7 Panel Expand - Mouseover
	$(document).on('mouseover', '['+ app.panel.toggle.expand.attr + ']', function(e) {
		if (!$(this).attr('data-tooltip-init')) {
			panelTooltip = new bootstrap.Tooltip(this, { 
				title: app.panel.toggle.expand.tooltipText, 
				placement: 'bottom' 
			});
			panelTooltip.show();
			$(this).attr('data-tooltip-init', true);
		}
	});

	// 7.8 Panel Expand - Click
	$(document).on('click', '['+ app.panel.toggle.expand.attr + ']', function(e) {
		e.preventDefault();
		
		if (panelTooltip) {
			panelTooltip.hide();
		}
		var target = $(this).closest('.'+ app.panel.class);
		var targetBody = $(target).find('.'+ app.panel.bodyClass);
		var targetTop = 40;
		if ($(targetBody).length !== 0) {
			var targetOffsetTop = $(target).offset().top;
			var targetBodyOffsetTop = $(targetBody).offset().top;
			targetTop = targetBodyOffsetTop - targetOffsetTop;
		}

		if ($('body').hasClass(app.panel.expandClass) && $(target).hasClass(app.panel.expandClass)) {
			$('body, .'+ app.panel.class).removeClass(app.panel.expandClass);
			$('.'+ app.panel.class).removeAttr('style');
			$(targetBody).removeAttr('style');
		} else {
			$('body').addClass(app.panel.expandClass);
			$(this).closest('.'+ app.panel.class).addClass(app.panel.expandClass);
		}
	});
};


/* 8. Handle Panel Draggable
------------------------------------------------ */
var handlePanelDraggable = function() {
	"use strict";
	
	var target = $('.'+ app.panel.class +':not(['+ app.panel.draggable.disableAttr +'])').parent('[class*=col]');
	var targetHandle = '.'+ app.panel.headClass;
	var connectedTarget = app.panel.draggable.connectedTarget;

	$(target).sortable({
		handle: targetHandle,
		connectWith: connectedTarget,
		stop: function(event, ui) {
			ui.item.find('.'+ app.panel.titleClass).append(app.panel.draggable.spinnerHtml);
			handleSavePanelPosition(ui.item);
		}
	});
};


/* 9. Handle Tooltip Popover Activation
------------------------------------------------ */
var handelTooltipPopoverActivation = function() {
	"use strict";
	
	if ($('['+ app.bootstrap.tooltip.attr +']').length !== 0) {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('['+ app.bootstrap.tooltip.attr +']'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		})
	}
	if ($('['+ app.bootstrap.popover.attr +']').length !== 0) {
		var popoverTriggerList = [].slice.call(document.querySelectorAll('['+ app.bootstrap.popover.attr +']'))
		var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
			return new bootstrap.Popover(popoverTriggerEl)
		})
	}
};


/* 10. Handle Scroll to Top Button
------------------------------------------------ */
var handleScrollToTopButton = function() {
	"use strict";
	
	$(document).scroll( function() {
		var totalScroll = $(document).scrollTop();

		if (totalScroll >= app.scrollToTopBtn.heightShow) {
			if (!$('['+ app.scrollToTopBtn.toggleAttr +']').hasClass(app.scrollToTopBtn.showClass)) {
				$('['+ app.scrollToTopBtn.toggleAttr +']').addClass(app.scrollToTopBtn.showClass);
			}
		} else {
			$('['+ app.scrollToTopBtn.toggleAttr +']').removeClass(app.scrollToTopBtn.showClass);
		}
	});

	$('['+ app.scrollToTopBtn.toggleAttr +']').click(function(e) {
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, app.scrollToTopBtn.scrollSpeed);
	});
};


/* 11. Handle Theme Panel
------------------------------------------------ */
var handleThemePanel = function() {
	"use strict";
	
	// 11.1 Theme Panel - Toggle / Dismiss
	$(document).on('click', '['+ app.themePanel.toggleAttr +']', function() {
		var targetContainer = '.'+ app.themePanel.class;
		var targetExpand = false;
		
		if ($(targetContainer).hasClass(app.themePanel.activeClass)) {
			$(targetContainer).removeClass(app.themePanel.activeClass);
		} else {
			$(targetContainer).addClass(app.themePanel.activeClass);
			targetExpand = true;
		}
		if (Cookies) {
			Cookies.set(app.themePanel.cookieName, targetExpand);
		}
	});
	
	// 11.2 Theme Panel - Page Load Cookies 
	if (Cookies) {
		var themePanelExpand = Cookies.get(app.themePanel.cookieName);
		
		if (themePanelExpand == 'true') {
			$('['+ app.themePanel.toggleAttr +']').trigger('click');
		}
	}
	
	// 11.3 Theme Panel - Theme Selector
	$(document).on('click', '.'+ app.themePanel.class +' ['+ app.themePanel.theme.toggleAttr +']', function() {
		var targetThemeClass = $(this).attr(app.themePanel.theme.classAttr);
		
		for (var x = 0; x < document.body.classList.length; x++) {
			var targetClass = document.body.classList[x];
			if (targetClass.search('theme-') > -1) {
				$('body').removeClass(targetClass);
			}
		}
		
		$('body').addClass(targetThemeClass);
		$('.'+ app.themePanel.class +' ['+ app.themePanel.theme.toggleAttr +']').not(this).closest('.'+ app.themePanel.themeListItemCLass).removeClass(app.themePanel.theme.activeClass);
		$(this).closest('.'+ app.themePanel.themeListItemCLass).addClass(app.themePanel.theme.activeClass);
		
		if (Cookies) {
			Cookies.set(app.themePanel.theme.cookieName, targetThemeClass);
			$(document).trigger('theme-change');
		}
	});

	// 11.4 Theme Panel - Header Theme
	$(document).on('change', '.'+ app.themePanel.class +' ['+ app.themePanel.themeHeader.toggleAttr +']', function() {
		var targetCookie = '';
		
		if ($(this).is(':checked')) {
			$('.'+ app.header.class).addClass(app.themePanel.themeHeader.class);
			targetCookie = app.themePanel.themeHeader.class;
		} else {
			$('.'+ app.header.class).removeClass(app.themePanel.themeHeader.class);
		}
		
		if (Cookies) {
			Cookies.set(app.themePanel.themeHeader.cookieName, targetCookie);
		}
	});
    
	// 11.5 Theme Panel - Header Fixed
	$(document).on('change', '.'+ app.themePanel.class +' ['+ app.themePanel.themeHeaderFixed.toggleAttr +']', function() {
		var headerFixed = '';
		
		if ($(this).is(':checked')) {
			$(app.id).addClass(app.themePanel.themeHeaderFixed.class);
			headerFixed = app.themePanel.themeHeaderFixed.class;
		} else {
			if ($('['+ app.themePanel.themeSidebarFixed.toggleAttr +']').is(':checked') && !app.isMobile) {
				alert(app.themePanel.themeHeaderFixed.errorMessage);
				
				$('['+ app.themePanel.themeSidebarFixed.toggleAttr +']').prop('checked', false);
				$('['+ app.themePanel.themeSidebarFixed.toggleAttr +']').trigger('change');
			}
			$(app.id).removeClass(app.themePanel.themeHeaderFixed.class);
			headerFixed = app.themePanel.themeHeaderFixed.disabledClass;
		}
		if (Cookies) {
			Cookies.set(app.themePanel.themeHeaderFixed.cookieName, headerFixed);
		}
	});

	// 11.5 Theme Panel - Sidebar Grid
	$(document).on('change', '.'+ app.themePanel.class +' ['+ app.themePanel.themeSidebarGrid.toggleAttr +']', function() {
		var sidebarGrid = '';
		if ($(this).is(':checked')) {
			$(app.sidebar.id).addClass(app.themePanel.themeSidebarGrid.class);
			sidebarGrid = app.themePanel.themeSidebarGrid.class;
		} else {
			$(app.sidebar.id).removeClass(app.themePanel.themeSidebarGrid.class);
		}
		
		if (Cookies) {
			Cookies.set(app.themePanel.themeSidebarGrid.cookieName, sidebarGrid);
		}
	});
  
  // 11.6 Theme Panel - Sidebar Fixed
	$(document).on('change', '.'+ app.themePanel.class +' ['+ app.themePanel.themeSidebarFixed.toggleAttr +']', function() {
		var sidebarFixed = '';
		var targetSidebar = '.'+ app.sidebar.class +':not(.'+ app.sidebarEnd.class +') ['+ app.scrollBar.attr +']';
		
		if (!app.isMobile) {
			if ($(this).is(':checked')) {
				if (!$('.'+ app.themePanel.class +' ['+ app.themePanel.themeHeaderFixed.toggleAttr +']').is(':checked')) {
					alert(app.themePanel.themeSidebarFixed.errorMessage);
					$(app.themePanel.themeHeaderFixed.toggleAttr).prop('checked', true);
					$(app.themePanel.themeHeaderFixed.toggleAttr).trigger('change');
					$(app.id).addClass(app.themePanel.themeHeaderFixed.class);
				}
				$(app.id).addClass(app.themePanel.themeSidebarFixed.class);
				generateScrollbar(document.querySelector(targetSidebar));
				sidebarFixed = app.themePanel.themeSidebarFixed.class;
			} else {
				$(app.id).removeClass(app.themePanel.themeSidebarFixed.class);
				
				app.sidebar.scrollBar.dom.destroy();
				app.sidebar.scrollBar.dom = '';
				sidebarFixed = app.themePanel.themeSidebarFixed.disabledClass;
				$(targetSidebar).removeAttr(app.scrollBar.initAttr);
			}
		
			if (Cookies) {
				Cookies.set(app.themePanel.themeSidebarFixed.cookieName, sidebarFixed);
			}
		} else {
			$(this).prop('checked', true);
			alert(app.themePanel.themeSidebarFixed.mobileErrorMessage);
		}
	});

	// 11.7 Theme Panel - Gradient Enabled
	$(document).on('change', '.'+ app.themePanel.class +' ['+ app.themePanel.themeGradientEnabled.toggleAttr +']', function() {
		var gradientEnabled = '';
		if ($(this).is(':checked')) {
			$(app.id).addClass(app.themePanel.themeGradientEnabled.class);
			gradientEnabled = app.themePanel.themeGradientEnabled.class;
		} else {
			$(app.id).removeClass(app.themePanel.themeGradientEnabled.class);
		}
		
		if (Cookies) {
			Cookies.set(app.themePanel.themeGradientEnabled.cookieName, gradientEnabled);
		}
	});

	// 11.8 Theme Panel - Dark Mode
	$(document).on('change', '.'+ app.themePanel.class +' ['+ app.themePanel.themeDarkMode.toggleAttr +']', function() {
		var targetCookie = '';
		
		if ($(this).is(':checked')) {
			$('html').addClass(app.themePanel.themeDarkMode.class);
			targetCookie = app.themePanel.themeDarkMode.class;
		} else {
			$('html').removeClass(app.themePanel.themeDarkMode.class);
		}
		
		if (Cookies) {
			App.initVariable();
			Cookies.set(app.themePanel.themeDarkMode.cookieName, targetCookie);
			$(document).trigger('theme-change');
		}
	});
	
	// 11.9 Theme Panel - Page Load Settings Cookies  
	if (Cookies) {
		if (Cookies.get(app.themePanel.theme.cookieName)) {
			$('.'+ app.themePanel.class +' ['+ app.themePanel.theme.toggleAttr +']' + '['+ app.themePanel.theme.classAttr +'="'+ Cookies.get(app.themePanel.theme.cookieName) +'"]').trigger('click');
		}
		if (Cookies.get(app.themePanel.themeHeader.cookieName)) {
			$('.'+ app.themePanel.class +' ['+ app.themePanel.themeHeader.toggleAttr +']').prop('checked', true).trigger('change');
		}
		if (Cookies.get(app.themePanel.themeSidebarGrid.cookieName)) {
			$('.'+ app.themePanel.class +' ['+ app.themePanel.themeSidebarGrid.toggleAttr +']').prop('checked', true).trigger('change');
		}
		if (Cookies.get(app.themePanel.themeGradientEnabled.cookieName)) {
			$('.'+ app.themePanel.class +' ['+ app.themePanel.themeGradientEnabled.toggleAttr +']').prop('checked', true).trigger('change');
		}
		if (Cookies.get(app.themePanel.themeSidebarFixed.cookieName) && Cookies.get(app.themePanel.themeSidebarFixed.cookieName) == app.themePanel.themeSidebarFixed.disabledClass) {
			$('.'+ app.themePanel.class +' ['+ app.themePanel.themeSidebarFixed.toggleAttr +']').prop('checked', false).trigger('change');
		}
		if (Cookies.get(app.themePanel.themeHeaderFixed.cookieName) && Cookies.get(app.themePanel.themeHeaderFixed.cookieName) == app.themePanel.themeHeaderFixed.disabledClass) {
			$('.'+ app.themePanel.class +' ['+ app.themePanel.themeHeaderFixed.toggleAttr +']').prop('checked', false).trigger('change');
		}
		if (Cookies.get(app.themePanel.themeDarkMode.cookieName)) {
			$('.'+ app.themePanel.class +' ['+ app.themePanel.themeDarkMode.toggleAttr +']').prop('checked', true).trigger('change');
		}
	}
};


/* 12. Handle Save Panel Position Function
------------------------------------------------ */
var handleSavePanelPosition = function(element) {
	"use strict";
	if ($('.' + app.panel.sortable.class).length !== 0) {
		var newValue = [];
		var index = 0;
		$.when($('.' + app.panel.sortable.class).each(function() {
			var panelSortableElement = $(this).find('['+ app.panel.sortable.attr +']');
			if (panelSortableElement.length !== 0) {
				var columnValue = [];
				$(panelSortableElement).each(function() {
					var targetSortId = $(this).attr(app.panel.sortable.attr);
					columnValue.push({id: targetSortId});
				});
				newValue.push(columnValue);
			} else {
				newValue.push([]);
			}
			index++;
		})).done(function() {
			console.log(newValue);
			var targetPage = window.location.href;
			    targetPage = targetPage.split('?');
			    targetPage = targetPage[0];
			localStorage.setItem(targetPage, JSON.stringify(newValue));
			$(element).find('['+ app.panel.sortable.spinnerAttr +']').delay(500).fadeOut(500, function() {
				$(this).remove();
			});
		});
	}
};


/* 13. Handle Draggable Panel Local Storage Function
------------------------------------------------ */
var handleLocalStorage = function() {
	"use strict";
	try {
		if (typeof(Storage) !== 'undefined' && typeof(localStorage) !== 'undefined') {
			var targetPage = window.location.href;
					targetPage = targetPage.split('?');
					targetPage = targetPage[0];
			var panelPositionData = localStorage.getItem(targetPage);

			if (panelPositionData) {
				panelPositionData = JSON.parse(panelPositionData);
				var i = 0;
				$.when($('.'+ app.panel.class +':not(['+ app.panel.sortable.disableAttr +'])').parent('['+ app.panel.sortable.parentAttr +']').each(function() {
					var storageData = panelPositionData[i]; 
					var targetColumn = $(this);
					if (storageData) {
						$.each(storageData, function(index, data) {
							var targetId = $('['+ app.panel.sortable.attr +'="'+ data.id +'"]').not('[data-init="true"]');
							if ($(targetId).length !== 0) {
								var targetHtml = $(targetId).clone();
								$(targetId).remove();
								$(targetColumn).append(targetHtml);
								$('['+ app.panel.sortable.attr +'="'+ data.id +'"]').attr('data-init','true');
							}
						});
					}
					i++;
				})).done(function() {
					window.dispatchEvent(new CustomEvent(app.panel.localStorage.loadedEvent));
				});
			}
		} else {
			alert(app.panel.localStorage.notSupportMessage); 
		}
	} catch (error) {
		console.log(error);
	}
};


/* 14. Handle Reset Local Storage
------------------------------------------------ */
var handleResetLocalStorage = function() {
	"use strict";
	$(document).on('click', '['+ app.panel.localStorage.reset.attr +']', function(e) {
		e.preventDefault();

		var targetModalHtml = ''+
		'<div class="modal fade" data-modal-id="'+ app.panel.localStorage.reset.modal.id +'">'+
		'    <div class="modal-dialog">'+
		'        <div class="modal-content">'+
		'            <div class="modal-header">'+
		'                <h4 class="modal-title"><i class="fa fa-redo me-1"></i> '+ app.panel.localStorage.reset.modal.title +'</h4>'+
		'                <button type="button" class="btn-close" '+ app.bootstrap.modal.dismissAttr +'></button>'+
		'            </div>'+
		'            <div class="modal-body">'+
		'                <div class="alert alert-'+ app.panel.localStorage.reset.modal.alert +' mb-0">'+ app.panel.localStorage.reset.modal.message +'</div>'+
		'            </div>'+
		'            <div class="modal-footer">'+
		'                <a href="javascript:;" class="btn btn-sm btn-default" '+ app.bootstrap.modal.dismissAttr +'><i class="fa fa-times me-1"></i> No</a>'+
		'                <a href="javascript:;" class="btn btn-sm btn-inverse" '+ app.panel.localStorage.reset.modal.confirmResetAttr +'><i class="fa fa-check me-1"></i> Yes</a>'+
		'            </div>'+
		'        </div>'+
		'    </div>'+
		'</div>';

		$('body').append(targetModalHtml);
		$('[data-modal-id="'+ app.panel.localStorage.reset.modal.id +'"]').modal('show');
	});
	$(document).on(app.bootstrap.modal.event.hidden, '[data-modal-id="'+ app.panel.localStorage.reset.modal.id +'"]', function(e) {
		$('[data-modal-id="'+ app.panel.localStorage.reset.modal.id +'"]').remove();
	});
	$(document).on('click', '['+ app.panel.localStorage.reset.modal.confirmResetAttr +']', function(e) {
		e.preventDefault();
		var localStorageName = window.location.href;
		localStorageName = localStorageName.split('?');
		localStorageName = localStorageName[0];
		localStorage.removeItem(localStorageName);

		location.reload();
	});
};


/* 15. Handle Unlimited Nav Tabs
------------------------------------------------ */
var handleUnlimitedTabsRender = function() {
    
	// function handle tab overflow scroll width 
	function handleTabOverflowScrollWidth(obj, animationSpeed) {
		var targetElm = '.'+ app.bootstrap.nav.tabs.itemClass + ' .'+ app.bootstrap.nav.tabs.activeClass;

		if ($(obj).find(' > .'+ app.bootstrap.nav.tabs.itemClass).first()) {
			targetElm = $(obj).find('.'+ app.bootstrap.nav.tabs.itemClass + ' .'+ app.bootstrap.nav.tabs.activeClass).closest('.'+ app.bootstrap.nav.tabs.itemClass);
		}
		var targetCss = ($('body').css('direction') == 'rtl') ? 'margin-right' : 'margin-left';
		var marginLeft = parseInt($(obj).css(targetCss));  
		var viewWidth = $(obj).width();
		var prevWidth = $(obj).find(targetElm).width();
		var speed = (animationSpeed > -1) ? animationSpeed : 150;
		var fullWidth = 0;

		$(obj).find(targetElm).prevAll().each(function() {
			prevWidth += $(this).width();
		});

		$(obj).find('.'+ app.bootstrap.nav.tabs.itemClass).each(function() {
			fullWidth += $(this).width();
		});

		if (prevWidth >= viewWidth) {
			var finalScrollWidth = prevWidth - viewWidth;
			if (fullWidth != prevWidth) {
				finalScrollWidth += 40;
			}
			if ($('body').css('direction') == 'rtl') {
				$(obj).find('.'+ app.bootstrap.nav.tabs.class).animate({ marginRight: '-' + finalScrollWidth + 'px'}, speed);
			} else {
				$(obj).find('.'+ app.bootstrap.nav.tabs.class).animate({ marginLeft: '-' + finalScrollWidth + 'px'}, speed);
			}
		}

		if (prevWidth != fullWidth && fullWidth >= viewWidth) {
			$(obj).addClass(app.unlimitedTabs.overflowRight.class);
		} else {
			$(obj).removeClass(app.unlimitedTabs.overflowRight.class);
		}

		if (prevWidth >= viewWidth && fullWidth >= viewWidth) {
			$(obj).addClass(app.unlimitedTabs.overflowLeft.class);
		} else {
			$(obj).removeClass(app.unlimitedTabs.overflowLeft.class);
		}
	}
    
	// function handle tab button action - next / prev
	function handleTabButtonAction(element, direction) {
		var obj = $(element).closest('.' + app.unlimitedTabs.class);
		var targetCss = ($('body').css('direction') == 'rtl') ? 'margin-right' : 'margin-left';
		var marginLeft = parseInt($(obj).find('.'+ app.bootstrap.nav.tabs.class).css(targetCss));  
		var containerWidth = $(obj).width();
		var totalWidth = 0;
		var finalScrollWidth = 0;

		$(obj).find('li').each(function() {
			if (!$(this).hasClass(app.unlimitedTabs.buttonNext.class) && !$(this).hasClass(app.unlimitedTabs.buttonPrev.class)) {
				totalWidth += $(this).width();
			}
		});

		switch (direction) {
			case 'next':
				var widthLeft = totalWidth + marginLeft - containerWidth;
				if (widthLeft <= containerWidth) {
					finalScrollWidth = widthLeft - marginLeft;
					setTimeout(function() {
						$(obj).removeClass(app.unlimitedTabs.overflowRight.class);
					}, 150);
				} else {
					finalScrollWidth = containerWidth - marginLeft - 80;
				}

				if (finalScrollWidth !== 0) {
					if ($('body').css('direction') != 'rtl') {
						$(obj).find('.'+ app.bootstrap.nav.tabs.class).animate({ marginLeft: '-' + finalScrollWidth + 'px'}, 150, function() {
							$(obj).addClass(app.unlimitedTabs.overflowLeft.class);
						});
					} else {
						$(obj).find('.'+ app.bootstrap.nav.tabs.class).animate({ marginRight: '-' + finalScrollWidth + 'px'}, 150, function() {
							$(obj).addClass(app.unlimitedTabs.overflowLeft.class);
						});
					}
				}
			break;
		case 'prev':
			var widthLeft = -marginLeft;

			if (widthLeft <= containerWidth) {
				$(obj).removeClass(app.unlimitedTabs.overflowLeft.class);
				finalScrollWidth = 0;
			} else {
				finalScrollWidth = widthLeft - containerWidth + 80;
			}
			if ($('body').css('direction') != 'rtl') {
				$(obj).find('.'+ app.bootstrap.nav.tabs.class).animate({ marginLeft: '-' + finalScrollWidth + 'px'}, 150, function() {
					$(obj).addClass(app.unlimitedTabs.overflowRight.class);
				});
			} else {
				$(obj).find('.'+ app.bootstrap.nav.tabs.class).animate({ marginRight: '-' + finalScrollWidth + 'px'}, 150, function() {
					$(obj).addClass(app.unlimitedTabs.overflowRight.class);
				});
			}
			break;
		}
	}

	// handle page load active tab focus
	function handlePageLoadTabFocus() {
		$('.' + app.unlimitedTabs.class).each(function() {
			handleTabOverflowScrollWidth(this, 0);
		});
	}

	// handle tab next button click action
	$('['+ app.unlimitedTabs.buttonNext.toggleAttr + ']').click(function(e) {
		e.preventDefault();
		handleTabButtonAction(this,'next');
	});

	// handle tab prev button click action
	$('['+ app.unlimitedTabs.buttonPrev.toggleAttr + ']').click(function(e) {
		e.preventDefault();
		handleTabButtonAction(this,'prev');
	});

	// handle unlimited tabs responsive setting
	$(window).resize(function() {
		$('.'+ app.unlimitedTabs.class +' .'+ app.bootstrap.nav.tabs.class).removeAttr('style');
		handlePageLoadTabFocus();
	});

	handlePageLoadTabFocus();
};


/* 16. Handle Top Menu - Unlimited Top Menu Render
------------------------------------------------ */
var handleUnlimitedTopMenuRender = function() {
	"use strict";
	// function handle menu button action - next / prev
	function handleMenuButtonAction(element, direction) {
		var obj = $(element).closest('.' + app.topMenu.menu.class);
		var targetCss = ($('body').css('direction') == 'rtl') ? 'margin-right' : 'margin-left';
		var marginLeft = parseInt($(obj).css(targetCss));  
		var containerWidth = $('.'+ app.topMenu.class).width() - 88;
		var totalWidth = 0;
		var finalScrollWidth = 0;

		$(obj).find('.' + app.topMenu.menu.itemClass).each(function() {
			if (!$(this).hasClass(app.topMenu.control.class)) {
				totalWidth += $(this).width();
			}
		});

		switch (direction) {
			case 'next':
				var widthLeft = totalWidth + marginLeft - containerWidth;
				if (widthLeft <= containerWidth) {
					finalScrollWidth = widthLeft - marginLeft + 128;
					setTimeout(function() {
						$(obj).find('.'+ app.topMenu.control.class +'.'+ app.topMenu.control.buttonNext.class).removeClass('show');
					}, 150);
				} else {
					finalScrollWidth = containerWidth - marginLeft - 128;
				}

				if (finalScrollWidth !== 0) {
					if ($('body').css('direction') != 'rtl') { 
						$(obj).animate({ marginLeft: '-' + finalScrollWidth + 'px'}, 150, function() {
							$(obj).find('.'+ app.topMenu.control.class +'.'+ app.topMenu.control.buttonPrev.class).addClass('show');
						});
					} else {
						$(obj).animate({ marginRight: '-' + finalScrollWidth + 'px'}, 150, function() {
							$(obj).find('.'+ app.topMenu.control.class +'.'+ app.topMenu.control.buttonPrev.class).addClass('show');
						});
					}
				}
				break;
			case 'prev':
				var widthLeft = -marginLeft;

				if (widthLeft <= containerWidth) {
					$(obj).find('.'+ app.topMenu.control.class +'.'+ app.topMenu.control.buttonPrev.class).removeClass('show');
					finalScrollWidth = 0;
				} else {
					finalScrollWidth = widthLeft - containerWidth + 88;
				}
				if ($('body').css('direction') != 'rtl') { 
					$(obj).animate({ marginLeft: '-' + finalScrollWidth + 'px'}, 150, function() {
						$(obj).find('.'+ app.topMenu.control.class +'.'+ app.topMenu.control.buttonNext.class).addClass('show');
					});
				} else {
					$(obj).animate({ marginRight: '-' + finalScrollWidth + 'px'}, 150, function() {
						$(obj).find('.'+ app.topMenu.control.class +'.'+ app.topMenu.control.buttonNext.class).addClass('show');
					});
				}
				break;
			}
	}

	// handle page load active menu focus
	function handlePageLoadMenuFocus() {
		var targetMenu = $('.'+ app.topMenu.class +' .'+ app.topMenu.menu.class);
		var targetList = $('.'+ app.topMenu.class +' .'+ app.topMenu.menu.class + ' > .' + app.topMenu.menu.itemClass);
		var targetActiveList = $('.'+ app.topMenu.class +' .'+ app.topMenu.menu.class + ' > .'+ app.topMenu.menu.itemClass +'.active');
		var targetContainer = $('.'+ app.topMenu.class +'');
		var targetCss = ($('body').css('direction') == 'rtl') ? 'margin-right' : 'margin-left';
		var marginLeft = parseInt($(targetMenu).css(targetCss));  
		var viewWidth = $(targetContainer).width() - 128;
		var prevWidth = $('.'+ app.topMenu.class +' .'+ app.topMenu.menu.class + ' > .'+ app.topMenu.menu.itemClass +'.active').width();
		var speed = 0;
		var fullWidth = 0;

		$(targetActiveList).prevAll().each(function() {
			prevWidth += $(this).width();
		});

		$(targetList).each(function() {
			if (!$(this).hasClass(app.topMenu.control.class)) {
				fullWidth += $(this).width();
			}
		});

		if (prevWidth >= viewWidth) {
			var finalScrollWidth = prevWidth - viewWidth + 128;
			if ($('body').css('direction') != 'rtl') { 
				$(targetMenu).animate({ marginLeft: '-' + finalScrollWidth + 'px'}, speed);
			} else {
				$(targetMenu).animate({ marginRight: '-' + finalScrollWidth + 'px'}, speed);
			}
		}

		if (prevWidth != fullWidth && fullWidth >= viewWidth) {
			$(targetMenu).find('.'+ app.topMenu.control.class +'.'+ app.topMenu.control.buttonNext.class).addClass(app.topMenu.control.showClass);
		} else {
			$(targetMenu).find('.'+ app.topMenu.control.class +'.'+ app.topMenu.control.buttonNext.class).removeClass(app.topMenu.control.showClass);
		}

		if (prevWidth >= viewWidth && fullWidth >= viewWidth) {
			$(targetMenu).find('.'+ app.topMenu.control.class +'.'+ app.topMenu.control.buttonPrev.class).addClass(app.topMenu.control.showClass);
		} else {
			$(targetMenu).find('.'+ app.topMenu.control.class +'.'+ app.topMenu.control.buttonPrev.class).removeClass(app.topMenu.control.showClass);
		}
	}

	// handle menu next button click action
	$('['+ app.topMenu.control.buttonNext.toggleAttr +']').click(function(e) {
		e.preventDefault();
		handleMenuButtonAction(this,'next');
	});

	// handle menu prev button click action
	$('['+ app.topMenu.control.buttonPrev.toggleAttr +']').click(function(e) {
		e.preventDefault();
		handleMenuButtonAction(this,'prev');
	});

	// handle unlimited menu responsive setting
	$(window).resize(function() {
		if ($(window).width() > 767) {
			$('.'+ app.topMenu.class +' .'+ app.topMenu.menu.class).removeAttr('style');
			handlePageLoadMenuFocus();
		} else {
			$('.'+ app.topMenu.class +' .'+ app.topMenu.menu.class).removeAttr('style');
		}
	});

	handlePageLoadMenuFocus();
};


/* 17. Handle Top Menu - Sub Menu Toggle
------------------------------------------------ */
var handleTopMenuSubMenu = function() {
	"use strict";
	
	$(document).on('click', '.'+ app.topMenu.class +' .'+ app.topMenu.menu.submenu.class +' .'+ app.topMenu.menu.hasSubClass +' > .'+ app.topMenu.menu.linkClass, function() {
		var target = $(this).closest('.' + app.topMenu.menu.itemClass).find('.' + app.topMenu.menu.submenu.class).first();
		var otherMenu = $(this).closest('.'+ app.topMenu.menu.itemClass).find('.'+ app.topMenu.menu.submenu.class).not(target);
		$(otherMenu).not(target).slideUp(250, function() {
			$(this).closest('.'+ app.topMenu.menu.itemClass).removeClass(app.topMenu.menu.expandClass);
		});
		$(target).slideToggle(250, function() {
			var targetMenu = $(this).closest('.'+ app.topMenu.menu.itemClass);
			if ($(targetMenu).hasClass(app.topMenu.menu.expandClass)) {
				$(targetMenu).removeClass(app.topMenu.menu.expandClass);
			} else {
				$(targetMenu).addClass(app.topMenu.menu.expandClass);
			}
		});
	});
};


/* 18. Handle Top Menu - Mobile Sub Menu Toggle
------------------------------------------------ */
var handleMobileTopMenuSubMenu = function() {
	"use strict";
	$(document).on('click', '.'+ app.topMenu.class +' .'+ app.topMenu.menu.class +' > .'+ app.topMenu.menu.itemClass +'.'+ app.topMenu.menu.hasSubClass +' > .'+ app.topMenu.menu.linkClass +'', function() {
		if ($(window).width() <= 767) {
			var target = $(this).closest('.' + app.topMenu.menu.itemClass).find('.' + app.topMenu.menu.submenu.class).first();
			var otherMenu = $(this).closest('.'+ app.topMenu.menu.class).find('.' + app.topMenu.menu.hasSubClass + ' .'+ app.topMenu.menu.submenu.class).not(target);
			$(otherMenu).not(target).slideUp(250, function() {
				$(this).closest('.' + app.topMenu.menu.itemClass).removeClass('expand');
			});
			$(target).slideToggle(250, function() {
				var targetItem = $(this).closest('.'+ app.topMenu.menu.itemClass);
				if ($(targetItem).hasClass(app.topMenu.menu.expandClass)) {
					$(targetItem).removeClass(app.topMenu.menu.expandClass);
				} else {
					$(targetItem).addClass(app.topMenu.menu.expandClass);
				}
			});
		}
	});
};


/* 19. Handle Top Menu - Mobile Top Menu Toggle
------------------------------------------------ */
var handleTopMenuMobileToggle = function() {
	"use strict";
	$(document).on('click', '['+ app.topMenu.mobile.toggleAttr +']', function() {
		$('.'+ app.topMenu.class).slideToggle(250);
	});
};


/* 20. Handle Page Scroll Class
------------------------------------------------ */
var handlePageScrollClass = function() {
	var checkScroll = function() {
		if ($(window).scrollTop() > 0) {
			$(app.id).addClass(app.header.hasScrollClass);
		} else {
			$(app.id).removeClass(app.header.hasScrollClass);
		}
	}
	
	$(window).on('scroll', function() {
		checkScroll();
	});
	
	checkScroll();
};


/* 21. Handle Toggle Navbar Profile
------------------------------------------------ */
var handleToggleNavProfile = function() {
	var expandTime = ($('.'+ app.sidebar.class).attr(app.sidebar.menu.disableAnimationAttr)) ? 0 : app.sidebar.menu.animationTime;

	$(document).on('click', '['+ app.sidebar.profile.toggleAttr +']', function(e) {
		e.preventDefault();

		var targetMenu = $(this).closest('.'+ app.sidebar.profile.class);
		var targetProfile = $(this).attr(app.sidebar.profile.targetAttr);

		if ($(targetProfile).is(':visible')) {
			$(targetMenu).removeClass(app.sidebar.menu.activeClass);
			$(targetProfile).removeClass(app.sidebar.menu.closingClass);
		} else {
			$(targetMenu).addClass(app.sidebar.menu.activeClass);
			$(targetProfile).addClass(app.sidebar.menu.expandingClass);
		}
		$(targetProfile).slideToggle(expandTime, function() {
			if (!$(targetProfile).is(':visible')) {
				$(targetProfile).addClass(app.sidebar.menu.closedClass);
				$(targetProfile).removeClass(app.sidebar.menu.expandClass);
			} else {
				$(targetProfile).addClass(app.sidebar.menu.expandClass);
				$(targetProfile).removeClass(app.sidebar.menu.closedClass);
			}
			$(targetProfile).removeClass(app.sidebar.menu.expandingClass + ' ' + app.sidebar.menu.closingClass);
		});
	});
};


/* 22. Handle Sidebar Scroll Memory
------------------------------------------------ */
var handleSidebarScrollMemory = function() {
	if (!app.isMobile) {
		try {
			if (typeof(Storage) !== 'undefined' && typeof(localStorage) !== 'undefined') {
				$('.'+ app.sidebar.class +':not(.'+ app.sidebarEnd.class +') ['+ app.scrollBar.attr +']').on('scroll', function() {
					localStorage.setItem(app.sidebar.scrollBar.localStorage, $(this).scrollTop());
				});
	
				var defaultScroll = localStorage.getItem(app.sidebar.scrollBar.localStorage);
				if (defaultScroll) {
					$('.'+ app.sidebar.class +':not(.'+ app.sidebarEnd.class +') ['+ app.scrollBar.attr +']').animate({ scrollTop: defaultScroll + 'px'}, 0);
				}
			}
		} catch (error) {
			console.log(error);
		}
	}
};


/* 23. Handle Sidebar Minify Sub Menu
------------------------------------------------ */
var handleMouseoverFloatSubMenu = function(elm) {
	clearTimeout(app.sidebar.floatSubmenu.timeout);
};
var handleMouseoutFloatSubMenu = function(elm) {
	app.sidebar.floatSubmenu.timeout = setTimeout(function() {
		$(app.sidebar.floatSubmenu.id).remove();
	}, 150);
};
var handleGetHiddenMenuHeight = function(elm) {
	var prevStyle = $(elm).attr('style');
	$(elm).attr('style', 'position: absolute; visibility: hidden; display: block !important');
	var targetHeight  = $(elm).height();
	$(elm).attr('style', '');
	
	return targetHeight;
}
var handleSidebarMinifyFloatMenu = function() {
	$(document).on('click', app.sidebar.floatSubmenu.id +' .'+ app.sidebar.menu.itemClass +'.'+ app.sidebar.menu.hasSubClass +' > .'+ app.sidebar.menu.itemLinkClass +'', function(e) {
		var target = $(this).next('.' + app.sidebar.menu.submenu.class);
		var targetItem = $(target).closest('.' + app.sidebar.menu.itemClass);
		var close = false;
		var expand = false;
		if ($(target).is(':visible')) {
			$(targetItem).addClass('closing');
			close = true;
		} else {
			$(targetItem).addClass('expanding');
			expand = true;
		}
		$(target).slideToggle({
			duration: app.sidebar.menu.animationTime,
			progress: function() {
				var targetMenu = $(app.sidebar.floatSubmenu.id);
				var targetHeight = $(targetMenu).height();
				var targetOffset = $(targetMenu).offset();
				var targetOriTop = $(targetMenu).attr('data-offset-top');
				var targetMenuTop = $(targetMenu).attr('data-menu-offset-top');
				var targetTop 	 = targetOffset.top - $(window).scrollTop();
				var windowHeight = $(window).height();
				if (close) {
					if (targetTop > targetOriTop) {
						targetTop = (targetTop > targetOriTop) ? targetOriTop : targetTop;
						$(app.sidebar.floatSubmenu.id).css({ 'top': targetTop + 'px', 'bottom': 'auto' });
						$(app.sidebar.floatSubmenu.arrow.id).css({ 'top': '20px', 'bottom': 'auto' });
						$(app.sidebar.floatSubmenu.line.id).css({ 'top': '20px', 'bottom': 'auto' });
					}
				}
				if (expand) {
					if ((windowHeight - targetTop) < targetHeight) {
						var arrowBottom = (windowHeight - targetMenuTop) - 22;
						$(app.sidebar.floatSubmenu.id).css({ 'top': 'auto', 'bottom': 0 });
						$(app.sidebar.floatSubmenu.arrow.id).css({ 'top': 'auto', 'bottom': arrowBottom + 'px' });
						$(app.sidebar.floatSubmenu.line.id).css({ 'top': '20px', 'bottom': arrowBottom + 'px' });
					}
				}
			},
			complete: function() {
				if ($(target).is(':visible')) {
					$(targetItem).addClass('expand');
					$(targetItem).removeClass('closed');
				} else {
					$(targetItem).addClass('closed');
					$(targetItem).removeClass('expand');
				}
				$(targetItem).removeClass('closing expanding');
			}
		});
	});
	$(document).on({
		mouseenter: function() {
			if ($(app.id).hasClass(app.sidebar.minify.toggledClass)) {
				clearTimeout(app.sidebar.floatSubmenu.timeout);

				var targetMenu = $(this).closest('.'+ app.sidebar.menu.itemClass).find('.' + app.sidebar.menu.submenu.class).first();
				if (app.sidebar.floatSubmenu.dom == this && $(app.sidebar.floatSubmenu.id).length !== 0) {
					return;
				} else {
					app.sidebar.floatSubmenu.dom = this;
				}
				var targetMenuHtml = $(targetMenu).html();
				if (targetMenuHtml) {
					var sidebarOffset = $(app.sidebar.id).offset();
					var sidebarWidth  = parseInt($(app.sidebar.id).width());
					var sidebarX      = (!$(app.id).hasClass(app.sidebarEnd.class) && $('body').css('direction') != 'rtl') ? (sidebarOffset.left + sidebarWidth) : ($(window).width() - sidebarOffset.left);
					var targetHeight  = handleGetHiddenMenuHeight(targetMenu);
					var targetOffset  = $(this).offset();
					var targetTop     = targetOffset.top - $(window).scrollTop();
					var targetLeft    = (!$(app.id).hasClass(app.sidebarEnd.class) && $('body').css('direction') != 'rtl') ? sidebarX : 'auto';
					var targetRight   = (!$(app.id).hasClass(app.sidebarEnd.class) && $('body').css('direction') != 'rtl') ? 'auto' : sidebarX;
					var windowHeight  = $(window).height();
				
					if ($(app.sidebar.floatSubmenu.id).length === 0) {
						var overflowClass = '';
						if (targetHeight > windowHeight) {
							overflowClass = app.sidebar.floatSubmenu.overflow.class;
						}
						targetMenuHtml = ''+
						'<div class="'+ app.sidebar.floatSubmenu.container.class +'" id="'+ app.sidebar.floatSubmenu.id.replace('#','') +'" data-offset-top="'+ targetTop +'" data-menu-offset-top="'+ targetTop +'" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">'+
						'	<div class="'+ app.sidebar.floatSubmenu.arrow.class +'" id="'+ app.sidebar.floatSubmenu.arrow.id.replace('#', '') +'"></div>'+
						'	<div class="'+ app.sidebar.floatSubmenu.line.class +'" id="'+ app.sidebar.floatSubmenu.line.id.replace('#', '') +'"></div>'+
						'	<div class="'+ app.sidebar.floatSubmenu.class +' '+ overflowClass +'">'+ targetMenuHtml + '</div>'+
						'</div>';
						$(app.id).append(targetMenuHtml);
					} else {
						if (targetHeight > windowHeight) {
							$(app.sidebar.floatSubmenu.id + ' .'+ app.sidebar.floatSubmenu.class).addClass(app.sidebar.floatSubmenu.overflow.class);
						} else {
							$(app.sidebar.floatSubmenu.id + app.sidebar.floatSubmenu.class).removeClass(app.sidebar.floatSubmenu.overflow.class);
						}
						$(app.sidebar.floatSubmenu.id).attr('data-offset-top', targetTop);
						$(app.sidebar.floatSubmenu.id).attr('data-menu-offset-top', targetTop);
						$(app.sidebar.floatSubmenu.id + ' .' + app.sidebar.floatSubmenu.class).html(targetMenuHtml);
					}
				
					var targetHeight = $(app.sidebar.floatSubmenu.id).height();
					if ((windowHeight - targetTop) > targetHeight) {
						$(app.sidebar.floatSubmenu.id).css({
							'top': targetTop,
							'left': targetLeft,
							'bottom': 'auto',
							'right': targetRight
						});
						$(app.sidebar.floatSubmenu.arrow.id).css({ 'top': '20px', 'bottom': 'auto' });
						$(app.sidebar.floatSubmenu.line.id).css({ 'top': '20px', 'bottom': 'auto' });
					} else {
						$(app.sidebar.floatSubmenu.id).css({
							'bottom': 0,
							'top': 'auto',
							'left': targetLeft,
							'right': targetRight
						});
						var arrowBottom = (windowHeight - targetTop) - 21;
						$(app.sidebar.floatSubmenu.arrow.id).css({ 'top': 'auto', 'bottom': arrowBottom + 'px' });
						$(app.sidebar.floatSubmenu.line.id).css({ 'top': '20px', 'bottom': arrowBottom + 'px' });
					}
				} else {
					$(app.sidebar.floatSubmenu.line.id).remove();
					app.sidebar.floatSubmenu.dom = '';
				}
			}
		},
		mouseleave: function() {
			if ($(app.id).hasClass(app.sidebar.minify.toggledClass)) {
				app.sidebar.floatSubmenu.timeout = setTimeout(function() {
					$(app.sidebar.floatSubmenu.line.id).remove();
					app.sidebar.floatSubmenu.dom = '';
				}, 250);
			}
		}
	}, '.' + app.sidebar.class + ' .'+ app.sidebar.menu.class +' > .'+ app.sidebar.menu.itemClass +'.'+ app.sidebar.menu.hasSubClass +' > .'+ app.sidebar.menu.itemLinkClass +'');
};


/* 24. Handle Ajax Mode
------------------------------------------------ */
var handleAjaxMode = function(setting) {
	var emptyHtml = (setting.emptyHtml) ?  setting.emptyHtml : app.ajax.error.html;
	var defaultUrl = (setting.ajaxDefaultUrl) ? setting.ajaxDefaultUrl : '';
	    defaultUrl = (window.location.hash) ? window.location.hash : defaultUrl;
	
	if (defaultUrl === '') {
		$(app.content.id).html(emptyHtml);
	} else {
		renderAjax(defaultUrl, '', true);
	}
    
	function emptyElement() {
		$(app.ajax.emptyElement).empty();
	}
    
	function clearElement() {
		$(app.ajax.clearElement).remove();
		$(app.sidebar.floatSubmenu.id).remove();
		if ($.fn.DataTable) {
			try {
				$('.dataTable').DataTable().destroy();
			} catch(err) {
			
			}
		}
		if ($(app.id).hasClass(app.sidebar.mobile.toggledClass)) {
			$(app.id).removeClass(app.sidebar.mobile.toggledClass);
		}
	}
	
	function checkSidebarActive(url) {
		var targetElm = app.sidebar.id +' ['+ app.ajax.attr +'][href="'+ url +'"]';
		if ($(targetElm).length !== 0) {
			$(app.sidebar.id + ' .' + app.sidebar.menu.itemClass).removeClass(app.sidebar.menu.activeClass);
			$(targetElm).closest('.' + app.sidebar.menu.itemClass).addClass(app.sidebar.menu.activeClass);
			$(targetElm).parents('.' + app.sidebar.menu.itemClass).addClass(app.sidebar.menu.activeClass);
		}
	}
	
	function checkPushState(url) {
		var targetUrl = url.replace('#','');
		var targetUserAgent = window.navigator.userAgent;
		var isIE = targetUserAgent.indexOf('MSIE ');
	
		if (isIE && (isIE > 0 && isIE < 9)) {
			window.location.href = targetUrl;
		} else {
			history.pushState('', '', '#' + targetUrl);
		}
	}
	
	function checkClearOption() {
		if (app.ajax.clearOption) {
			App.clearPageOption(app.ajax.clearOption);
			app.ajax.clearOption = '';
		}
	}
	
	function checkLoading(load) {
		if (!load) {
			if ($(app.ajax.loader.id).length === 0) {
				$('body').addClass(app.ajax.loader.class);
				$(content.id).append();
			}
		} else {
			$(app.ajax.loader.id).remove();
			$('body').removeClass(app.ajax.loader.class);
		}
	}
	
	function renderAjax(url, elm, disablePushState) {
		Pace.restart();
		
		checkLoading(false);
		clearElement();
		emptyElement();
		checkSidebarActive(url);
		checkClearOption();
		if (!disablePushState) {
			checkPushState(url);
		}
    
		var targetContainer= app.content.id;
		var targetUrl 	   = url.replace('#','');
		var targetType 	   = (setting.ajaxType) ? setting.ajaxType : 'GET';
		var targetDataType = (setting.ajaxDataType) ? setting.ajaxDataType : 'html';
		if (elm) {
			targetDataType = ($(elm).attr('data-type')) ? $(elm).attr('data-type') : targetDataType;
			targetDataDataType = ($(elm).attr('data-data-type')) ? $(elm).attr('data-data-type') : targetDataType;
		}
		
		$.ajax({
			url: targetUrl,
			type: targetType,
			dataType: targetDataType,
			success: function(data) {
				$(targetContainer).html(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				$(targetContainer).html(emptyHtml);
			}
		}).done(function() {
			checkLoading(true);
			$('html, body').animate({ scrollTop: 0 }, 0);
			App.initComponent();
		});
	}
	
	$(window).on('hashchange', function() {
		if (window.location.hash) {
			renderAjax(window.location.hash, '', true);
		} else {
			renderAjax(defaultUrl, '', true);
		}
	});
	
	$(document).on('click', '['+ app.ajax.attr +']', function(e) {
		e.preventDefault();
		renderAjax($(this).attr('href'), this);
	});
};
var handleSetPageOption = function(option) {
	if (option.appContentFullHeight) {
		$(app.id).addClass(app.content.fullHeight.class);
	}
	if (option.appSidebarLight) {
		$(app.id).addClass(app.layout.sidebarLight.class);
	}
	if (option.appSidebarEnd) {
		$(app.id).addClass(app.layout.sidebarEnd.class);
	}
	if (option.appSidebarWide) {
		$(app.id).addClass(app.layout.sidebarWide.class);
	}
	if (option.appSidebarMinified) {
		$(app.id).addClass(app.layout.sidebarMinified.class);
	}
	if (option.appSidebarTwo) {
		$(app.header.id + ' ['+ app.sidebarEnd.mobile.toggleAttr +']').removeClass(app.helper.display.none);
		$(app.header.id + ' .'+ app.header.brand.class).removeClass(app.helper.margin.left[0]);
		$(app.id).addClass(app.layout.sidebarTwo.class);
		$(app.id).addClass(app.sidebarEnd.toggledClass);
	}
	if (option.appSidebarTransparent) {
		$(app.sidebar.id).addClass(app.sidebar.transparent.class);
	}
	if (option.appSidebarSearch) {
		$(app.sidebar.id + ' .'+ app.sidebar.search.class).removeClass(app.sidebar.search.hideClass);
	}
	if (option.appTopMenu) {
		$(app.header.id + ' ['+ app.topMenu.mobile.toggleAttr +']').removeClass(app.helper.display.none);
		$(app.id).addClass(app.layout.topMenu.class);
	}
	if (option.appWithoutHeader) {
		$(app.id).addClass(app.layout.withoutHeader.class);
		$(app.header.id).css('display', 'none');
	}
	if (option.appWithoutSidebar) {
		$(app.id).addClass(app.layout.withoutSidebar.class);
		$(app.header.id + ' ['+ app.sidebar.mobile.toggleAttr +']').addClass(app.helper.display.none);
		$(app.sidebar.id + ', .' + app.sidebar.bg.class + ', .'+ app.sidebar.mobile.backdrop.class).css('display', 'none');
	}
	if (option.appHeaderInverse) {
		$(app.header.id).addClass(app.header.inverse.class);
	}
	if (option.pageContentFullWidth) {
		$(app.content.id).addClass(app.content.fullWidth.class);
	}
	if (option.appClass) {
		$(app.id).addClass(option.appClass);
	}
	if (option.appContentClass) {
		$(app.content.id).addClass(option.appContentClass);
	}
	if (option.bodyClass) {
		$('body').addClass(option.bodyClass);
	}
	if (option.appBoxedLayout) {
		$('body').addClass(app.layout.boxedLayout.class);
	}
	if (option.clearOptionOnLeave) {
		app.ajax.clearOption = option;
	}
};
var handleClearPageOption = function(option) {
	if (option.appContentFullHeight) {
		$(app.id).removeClass(app.content.fullHeight.class);
	}
	if (option.appSidebarLight) {
		$(app.id).removeClass(app.layout.sidebarLight.class);
	}
	if (option.appSidebarEnd) {
		$(app.id).removeClass(app.layout.sidebarEnd.class);
	}
	if (option.appSidebarWide) {
		$(app.id).removeClass(app.layout.sidebarWide.class);
	}
	if (option.appSidebarMinified) {
		$(app.id).removeClass(app.layout.sidebarMinified.class);
	}
	if (option.appSidebarTwo) {
		$(app.header.id + ' ['+ app.sidebarEnd.mobile.toggleAttr +']').addClass(app.helper.display.none);
		$(app.header.id + ' .'+ app.header.brand.class).addClass(app.helper.margin.left[0]);
		$(app.id).removeClass(app.layout.sidebarTwo.class);
		$(app.id).removeClass(app.sidebarEnd.toggledClass);
	}
	if (option.appSidebarTransparent) {
		$(app.sidebar.id).removeClass(app.sidebar.transparent.class);
	}
	if (option.appSidebarSearch) {
		$(app.sidebar.id + ' .'+ app.sidebar.search.class).addClass(app.sidebar.search.hideClass);
	}
	if (option.appTopMenu) {
		$(app.header.id + ' ['+ app.topMenu.mobile.toggleAttr +']').addClass(app.helper.display.none);
		$(app.id).removeClass(app.layout.topMenu.class);
	}
	if (option.appHeaderInverse) {
		$(app.header.id).removeClass(app.header.inverse.class);
	}
	if (option.appWithoutSidebar) {
		$(app.id).removeClass(app.layout.withoutSidebar.class);
		$(app.header.id + ' ['+ app.sidebar.mobile.toggleAttr +']').removeClass(app.helper.display.none);
		$(app.sidebar.id + ', .' + app.sidebar.bg.class + ', .'+ app.sidebar.mobile.backdrop.class).removeAttr('style');
	}
	if (option.appWithoutHeader) {
		$(app.id).removeClass(app.layout.withoutHeader.class);
		$(app.header.id).removeAttr('style');
	}
	if (option.appContentFullWidth) {
		$(app.content.id).removeClass(app.content.fullWidth.class);
	}
	if (option.appContentClass) {
		$(app.content.id).removeClass(option.appContentClass);
	}
	if (option.appClass) {
		$(app.id).removeClass(option.appClass);
	}
	if (option.bodyClass) {
		$('body').removeClass(option.bodyClass);
	}
	if (option.appBoxedLayout) {
		$('body').removeClass(app.layout.boxedLayout.class);
	}
};


/* 25. Handle Float Navbar Search
------------------------------------------------ */
var handleToggleNavbarSearch = function() {
	$('['+ app.header.floatingForm.toggleAttr +']').click(function(e) {
		e.preventDefault();
		$('.'+ app.header.class).addClass(app.header.floatingForm.toggledClass);
	});

	$('['+ app.header.floatingForm.dismissAttr +']').click(function(e) {
		e.preventDefault();
		$('.'+ app.header.class).removeClass(app.header.floatingForm.toggledClass);
	});
};


/* 26. Handle Animation
------------------------------------------------ */
var convertNumberWithCommas = function(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
var checkIsFloat = function(x){
	return Number(x) === x && x % 1 !== 0;
};
var checkIsInt = function(x){
	return Number(x) === x && x % 1 === 0;
};
var countDecimals = function(x) {
	var split = x.toString().split('.');
	 
  return (split[1]) ? split[1].length : 0; 
};
var handleAnimation = function() {
	$('['+ app.animation.attr +']').each(function() {
		var targetAnimate = $(this).attr(app.animation.attr);
		var targetValue = $(this).attr(app.animation.valueAttr);
		
		switch (targetAnimate) {
			case 'width':
				$(this).css('width', targetValue);
				break;
			case 'height':
				$(this).css('height', targetValue);
				break;
			case 'number':
				var targetElm = this;
				var decimal = countDecimals(targetValue);
				var divide = 1;
				var x = decimal;
				while (x > 0) {
					divide *= 10;
					x--;
				}
				
				$({animateNumber: 0}).animate({animateNumber: targetValue}, {
					duration: app.animation.speed,
					easing: app.animation.effect,
					step: function() {
						var number = (Math.ceil(this.animateNumber * divide) / divide).toFixed(decimal);
						var number = convertNumberWithCommas(number);
						$(targetElm).text(number);
					},
					done: function() {
						$(targetElm).text(convertNumberWithCommas(targetValue));
					}
				});
				break;
			case 'class':
				$(this).addClass(targetValue);
				break;
			default:
				break;
		}
	});
};


/* 27. Handle Sidebar Search
------------------------------------------------ */
var handleSidebarSearch = function() {
	$(document).on('keyup', '['+ app.sidebar.search.toggleAttr + ']', function() {
		var targetValue = $(this).val();
				targetValue = targetValue.toLowerCase();
		
		if (targetValue) {
			$('.'+ app.sidebar.class +':not(.'+ app.sidebarEnd.class +') .'+ app.sidebar.menu.class +' > .'+ app.sidebar.menu.itemClass +':not(.'+ app.sidebar.profile.class +'):not(.'+ app.sidebar.menu.headerClass +'):not(.'+ app.sidebar.search.class +'), .'+ app.sidebar.class +':not(.'+ app.sidebarEnd.class +') .'+ app.sidebar.menu.submenu.class +' > .'+ app.sidebar.menu.itemClass).addClass(app.sidebar.search.hideClass);
			$('.'+ app.sidebar.class +':not(.'+ app.sidebarEnd.class +') .'+ app.sidebar.search.foundClass).removeClass(app.sidebar.search.foundClass);
			$('.'+ app.sidebar.class +':not(.'+ app.sidebarEnd.class +') .'+ app.sidebar.menu.expandClass).removeClass(app.sidebar.menu.expandClass);
			$('.'+ app.sidebar.class +':not(.'+ app.sidebarEnd.class +') .'+ app.sidebar.menu.class +' > .'+ app.sidebar.menu.itemClass +':not(.'+ app.sidebar.profile.class +'):not(.'+ app.sidebar.menu.headerClass +'):not(.'+ app.sidebar.search.class +') > .'+ app.sidebar.menu.itemLinkClass +', .'+ app.sidebar.class +' .'+ app.sidebar.menu.submenu.class +' > .'+ app.sidebar.menu.itemClass +' > .'+ app.sidebar.menu.itemLinkClass +'').each(function() {
				var targetText = $(this).text();
						targetText = targetText.toLowerCase();
				if (targetText.search(targetValue) > -1) {
					$(this).closest('.' + app.sidebar.menu.itemClass).removeClass(app.sidebar.search.hideClass);
					$(this).closest('.' + app.sidebar.menu.itemClass).addClass(app.sidebar.search.foundClass);
					
					if ($(this).closest('.' + app.sidebar.menu.itemClass + '.'+ app.sidebar.menu.hasSubClass).length != 0) {
						$(this).closest('.' + app.sidebar.menu.itemClass + '.'+ app.sidebar.menu.hasSubClass).find('.'+ app.sidebar.menu.submenu.class +' .'+ app.sidebar.menu.itemClass + '.'+ app.sidebar.search.hideClass).removeClass(app.sidebar.search.hideClass);
					}
					if ($(this).closest('.'+ app.sidebar.menu.submenu.class).length != 0) {
						$(this).closest('.'+ app.sidebar.menu.submenu.class).css('display', 'block');
						$(this).closest('.'+ app.sidebar.menu.hasSubClass).removeClass(app.sidebar.search.hideClass).addClass(app.sidebar.menu.expandClass);
						$(this).closest('.'+ app.sidebar.menu.submenu.class).find('.'+ app.sidebar.menu.itemClass +':not(.'+ app.sidebar.search.foundClass +')').addClass(app.sidebar.search.hideClass);
					}
				}
			})
		} else {
			$('.'+ app.sidebar.class +':not(.'+ app.sidebarEnd.class +') .'+ app.sidebar.menu.class +' > .'+ app.sidebar.menu.itemClass +':not(.'+ app.sidebar.profile.class +'):not(.'+ app.sidebar.menu.headerClass +'):not(.'+ app.sidebar.search.class +').'+ app.sidebar.menu.hasSubClass +' .'+ app.sidebar.menu.submenu.class +'').removeAttr('style');
			$('.'+ app.sidebar.class +':not(.'+ app.sidebarEnd.class +') .'+ app.sidebar.menu.class +' > .'+ app.sidebar.menu.itemClass +':not(.'+ app.sidebar.profile.class +'):not(.'+ app.sidebar.menu.headerClass +'):not(.'+ app.sidebar.search.class +'), .'+ app.sidebar.class +':not(.'+ app.sidebarEnd.class +') .'+ app.sidebar.menu.submenu.class +' > .'+ app.sidebar.menu.itemClass +'').removeClass(app.sidebar.search.hideClass);
			$('.'+ app.sidebar.class +':not(.'+ app.sidebarEnd.class +') .'+ app.sidebar.menu.expandClass).removeClass(app.sidebar.menu.expandClass);
		}
	})
};


/* 28. Handle Toggle Class
------------------------------------------------ */
var handleToggleClass = function() {
	$(document).on('click', '['+ app.toggleClass.toggleAttr + ']', function(e) {
		e.preventDefault();
		
		var target = ($(this).attr(app.toggleClass.targetAttr)) ? $(this).attr(app.toggleClass.targetAttr) : '';
		var targetClass = $(this).attr(app.toggleClass.toggleAttr);
		
		if (target) {
			$(target).toggleClass(targetClass);
		}
	});
};


/* 29. Handle Dismiss Class
------------------------------------------------ */
var handleDismissClass = function() {
	$(document).on('click', '['+ app.dismissClass.toggleAttr +']', function(e) {
		e.preventDefault();
		
		var target = ($(this).attr(app.dismissClass.targetAttr)) ? $(this).attr(app.dismissClass.targetAttr) : '';
		var targetClass = $(this).attr(app.dismissClass.toggleAttr);
		
		if (target) {
			$(target).removeClass(targetClass);
		}
	});
};


/* 30. Handle Hex To Rgba
------------------------------------------------ */
var stringToColor = function(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var color = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
};
var hexToRgba = function(hex, transparent = 1, repeat = false) {
	var c;
	if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
			c= hex.substring(1).split('');
			if(c.length== 3){
					c= [c[0], c[0], c[1], c[1], c[2], c[2]];
			}
			c= '0x'+c.join('');
			return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+ transparent +')';
	}
	if (!repeat) {
		hex = stringToColor(hex);
		return hexToRgba(hex, transparent, true);
	}
  throw new Error('Bad Hex');
};


/* 31. Handle Get Css Variable
------------------------------------------------ */
var getCssVariable = function(variable) {
	return window.getComputedStyle(document.body).getPropertyValue(variable).trim();
};


/* Application Controller
------------------------------------------------ */
var App = function () {
	"use strict";
	
	var setting;
	
	return {
		//main function
		init: function (option) {
			if (option) {
				setting = option;
			}
			this.initLocalStorage();
			this.initTopMenu();
			this.initComponent();
			this.initPageLoad();
			this.initSidebar();
			this.initThemePanel();
			this.initVariable();
			$(window).trigger('load');

			if (setting && setting.ajaxMode) {
				this.initAjax();
			}
		},
		settings: function (option) {
			if (option) {
				setting = option;
			}
		},
		initSidebar: function() {
			handleSidebarMenu();
			handleSidebarToggle();
			handleSidebarEndToggle();
			handleSidebarMinify();
			handleSidebarMinifyFloatMenu();
			handleToggleNavProfile();
			handleToggleNavbarSearch();
			handleSidebarSearch();
			
			if (!setting || (setting && !setting.disableSidebarScrollMemory)) {
				handleSidebarScrollMemory();
			}
		},
		initTopMenu: function() {
			handleUnlimitedTopMenuRender();
			handleTopMenuSubMenu();
			handleMobileTopMenuSubMenu();
			handleTopMenuMobileToggle();
		},
		initPageLoad: function() {
			handlePageLoader();
		},
		initComponent: function() {
			if (!setting || (setting && !setting.disableDraggablePanel)) {
				handlePanelDraggable();
			}
			handleScrollbar();
			handleUnlimitedTabsRender();
			handlePanelAction();
			handleScrollToTopButton();
			handlePageScrollClass();
			handleAnimation();
			handleToggleClass();
			handleDismissClass();
			
			if ($(window).width() > 767) {
				handelTooltipPopoverActivation();
			}
		},
		initLocalStorage: function() {
			if (!setting || (setting && !setting.disableLocalStorage)) {
				handleLocalStorage();
			}
		},
		initThemePanel: function() {
			handleThemePanel();
			handleResetLocalStorage();
		},
		initAjax: function() {
			handleAjaxMode(setting);
			$.ajaxSetup({
				cache: true
			});
		},
		initVariable: function() {
			app.color.theme          = getCssVariable('--app-theme');
			app.font.family          = getCssVariable('--bs-body-font-family');
			app.font.size            = getCssVariable('--bs-body-font-size');
			app.font.weight          = getCssVariable('--bs-body-font-weight');
			app.color.componentColor = getCssVariable('--app-component-color');
			app.color.componentBg    = getCssVariable('--app-component-bg');
			app.color.dark           = getCssVariable('--bs-dark');
			app.color.light          = getCssVariable('--bs-light');
			app.color.blue           = getCssVariable('--bs-blue');
			app.color.indigo         = getCssVariable('--bs-indigo');
			app.color.purple         = getCssVariable('--bs-purple');
			app.color.pink           = getCssVariable('--bs-pink');
			app.color.red            = getCssVariable('--bs-red');
			app.color.orange         = getCssVariable('--bs-orange');
			app.color.yellow         = getCssVariable('--bs-yellow');
			app.color.green          = getCssVariable('--bs-green');
			app.color.success        = getCssVariable('--bs-success');
			app.color.teal           = getCssVariable('--bs-teal');
			app.color.cyan           = getCssVariable('--bs-cyan');
			app.color.white          = getCssVariable('--bs-white');
			app.color.gray           = getCssVariable('--bs-gray');
			app.color.lime           = getCssVariable('--bs-lime');
			app.color.gray100        = getCssVariable('--bs-gray-100');
			app.color.gray200        = getCssVariable('--bs-gray-200');
			app.color.gray300        = getCssVariable('--bs-gray-300');
			app.color.gray400        = getCssVariable('--bs-gray-400');
			app.color.gray500        = getCssVariable('--bs-gray-500');
			app.color.gray600        = getCssVariable('--bs-gray-600');
			app.color.gray700        = getCssVariable('--bs-gray-700');
			app.color.gray800        = getCssVariable('--bs-gray-800');
			app.color.gray900        = getCssVariable('--bs-gray-900');
			app.color.black          = getCssVariable('--bs-black');
			
			app.color.themeRgb          = getCssVariable('--app-theme-rgb');
			app.font.familyRgb          = getCssVariable('--bs-body-font-family-rgb');
			app.font.sizeRgb            = getCssVariable('--bs-body-font-size-rgb');
			app.font.weightRgb          = getCssVariable('--bs-body-font-weight-rgb');
			app.color.componentColorRgb = getCssVariable('--app-component-color-rgb');
			app.color.componentBgRgb    = getCssVariable('--app-component-bg-rgb');
			app.color.darkRgb           = getCssVariable('--bs-dark-rgb');
			app.color.lightRgb          = getCssVariable('--bs-light-rgb');
			app.color.blueRgb           = getCssVariable('--bs-blue-rgb');
			app.color.indigoRgb         = getCssVariable('--bs-indigo-rgb');
			app.color.purpleRgb         = getCssVariable('--bs-purple-rgb');
			app.color.pinkRgb           = getCssVariable('--bs-pink-rgb');
			app.color.redRgb            = getCssVariable('--bs-red-rgb');
			app.color.orangeRgb         = getCssVariable('--bs-orange-rgb');
			app.color.yellowRgb         = getCssVariable('--bs-yellow-rgb');
			app.color.greenRgb          = getCssVariable('--bs-green-rgb');
			app.color.successRgb        = getCssVariable('--bs-success-rgb');
			app.color.tealRgb           = getCssVariable('--bs-teal-rgb');
			app.color.cyanRgb           = getCssVariable('--bs-cyan-rgb');
			app.color.whiteRgb          = getCssVariable('--bs-white-rgb');
			app.color.grayRgb           = getCssVariable('--bs-gray-rgb');
			app.color.limeRgb           = getCssVariable('--bs-lime-rgb');
			app.color.gray100Rgb        = getCssVariable('--bs-gray-100-rgb');
			app.color.gray200Rgb        = getCssVariable('--bs-gray-200-rgb');
			app.color.gray300Rgb        = getCssVariable('--bs-gray-300-rgb');
			app.color.gray400Rgb        = getCssVariable('--bs-gray-400-rgb');
			app.color.gray500Rgb        = getCssVariable('--bs-gray-500-rgb');
			app.color.gray600Rgb        = getCssVariable('--bs-gray-600-rgb');
			app.color.gray700Rgb        = getCssVariable('--bs-gray-700-rgb');
			app.color.gray800Rgb        = getCssVariable('--bs-gray-800-rgb');
			app.color.gray900Rgb        = getCssVariable('--bs-gray-900-rgb');
			app.color.blackRgb          = getCssVariable('--bs-black-rgb');
		},
		setPageTitle: function(pageTitle) {
			document.title = pageTitle;
		},
		setPageOption: function(option) {
			handleSetPageOption(option);
		},
		clearPageOption: function(option) {
			handleClearPageOption(option);
		},
		restartGlobalFunction: function() {
			$('.jvectormap-tip, .daterangepicker').remove();
			this.initLocalStorage();
			this.initComponent();
		},
		scrollTop: function() {
			$('html, body').animate({
				scrollTop: $('body').offset().top
			}, 0);
		}
  };
}();

$(document).ready(function() {
	App.init();
});