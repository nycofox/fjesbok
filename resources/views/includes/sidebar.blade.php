@php
	$appSidebarClass = (!empty($appSidebarTransparent)) ? 'app-sidebar-transparent' : '';
@endphp
<!-- BEGIN #sidebar -->
<div id="sidebar" class="app-sidebar {{ $appSidebarClass }}">
	<!-- BEGIN scrollbar -->
	<div class="app-sidebar-content" data-scrollbar="true" data-height="100%">
		<div class="menu">
			@if (!$appSidebarSearch)
			<div class="menu-profile">
				<a href="javascript:;" class="menu-profile-link" data-toggle="app-sidebar-profile" data-target="#appSidebarProfileMenu">
					<div class="menu-profile-cover with-shadow"></div>
					<div class="menu-profile-image menu-profile-image-icon bg-gray-900 text-gray-600">
						<i class="fa fa-user"></i>
					</div>
					<div class="menu-profile-info">
						<div class="d-flex align-items-center">
							<div class="flex-grow-1">
								Sean Ngu
							</div>
							<div class="menu-caret ms-auto"></div>
						</div>
						<small>Front end developer</small>
					</div>
				</a>
			</div>
			<div id="appSidebarProfileMenu" class="collapse">
				<div class="menu-item pt-5px">
					<a href="javascript:;" class="menu-link">
						<div class="menu-icon"><i class="fa fa-cog"></i></div>
						<div class="menu-text">Settings</div>
					</a>
				</div>
				<div class="menu-item">
					<a href="javascript:;" class="menu-link">
						<div class="menu-icon"><i class="fa fa-pencil-alt"></i></div>
						<div class="menu-text"> Send Feedback</div>
					</a>
				</div>
				<div class="menu-item pb-5px">
					<a href="javascript:;" class="menu-link">
						<div class="menu-icon"><i class="fa fa-question-circle"></i></div>
						<div class="menu-text"> Helps</div>
					</a>
				</div>
				<div class="menu-divider m-0"></div>
			</div>
			@endif
			
			@if ($appSidebarSearch)
			<div class="menu-search mb-n3">
        <input type="text" class="form-control" placeholder="Sidebar menu filter..." data-sidebar-search="true" />
			</div>
			@endif
			
			<div class="menu-header">Navigation</div>
			
			@php
				$currentUrl = (Request::path() != '/') ? '/'. Request::path() : '/';
				
				function renderSubMenu($value, $currentUrl) {
					$subMenu = '';
					$GLOBALS['sub_level'] += 1 ;
					$GLOBALS['active'][$GLOBALS['sub_level']] = '';
					$currentLevel = $GLOBALS['sub_level'];
					foreach ($value as $key => $menu) {
						$GLOBALS['subparent_level'] = '';
						
						$subSubMenu = '';
						$hasSub = (!empty($menu['sub_menu'])) ? 'has-sub' : '';
						$hasCaret = (!empty($menu['sub_menu'])) ? '<div class="menu-caret"></div>' : '';
						$hasHighlight = (!empty($menu['highlight'])) ? '<i class="fa fa-paper-plane text-theme ms-1"></i>' : '';
						$hasTitle = (!empty($menu['title'])) ? '<div class="menu-text">'. $menu['title'] . $hasHighlight .'</div>' : '';
						
						if (!empty($menu['sub_menu'])) {
							$subSubMenu .= '<div class="menu-submenu">';
							$subSubMenu .= renderSubMenu($menu['sub_menu'], $currentUrl);
							$subSubMenu .= '</div>';
						}
						
						$active = (!empty($menu['route-name']) && (Route::currentRouteName() == $menu['route-name'])) ? 'active' : '';
						
						if ($active) {
							$GLOBALS['parent_active'] = true;
							$GLOBALS['active'][$GLOBALS['sub_level'] - 1] = true;
						}
						if (!empty($GLOBALS['active'][$currentLevel])) {
							$active = 'active';
						}
						$subMenu .= '
							<div class="menu-item '. $hasSub .' '. $active .'">
								<a href="'. $menu['url'] .'" class="menu-link">' . $hasTitle . $hasCaret .'</a>
								'. $subSubMenu .'
							</div>
						';
					}
					return $subMenu;
				}
				
				foreach (config('sidebar.menu') as $key => $menu) {
					$GLOBALS['parent_active'] = '';
					
					$hasSub = (!empty($menu['sub_menu'])) ? 'has-sub' : '';
					$hasCaret = (!empty($menu['caret'])) ? '<div class="menu-caret"></div>' : '';
					$hasIcon = (!empty($menu['icon'])) ? '<div class="menu-icon"><i class="'. $menu['icon'] .'"></i></div>' : '';
					$hasImg = (!empty($menu['img'])) ? '<div class="menu-icon-img"><img src="'. $menu['img'] .'" /></div>' : '';
					$hasLabel = (!empty($menu['label'])) ? '<span class="menu-label">'. $menu['label'] .'</span>' : '';
					$hasTitle = (!empty($menu['title'])) ? '<div class="menu-text">'. $menu['title'] . $hasLabel .'</div>' : '';
					$hasBadge = (!empty($menu['badge'])) ? '<div class="menu-badge">'. $menu['badge'] .'</div>' : '';
					
					$subMenu = '';
					
					if (!empty($menu['sub_menu'])) {
						$GLOBALS['sub_level'] = 0;
						$subMenu .= '<div class="menu-submenu">';
						$subMenu .= renderSubMenu($menu['sub_menu'], $currentUrl);
						$subMenu .= '</div>';
					}
					$active = (!empty($menu['route-name']) && (Route::currentRouteName() == $menu['route-name'])) ? 'active' : '';
					$active = (empty($active) && !empty($GLOBALS['parent_active'])) ? 'active' : $active;
					echo '
						<div class="menu-item '. $hasSub .' '. $active .'">
							<a href="'. $menu['url'] .'" class="menu-link">
								'. $hasImg .'
								'. $hasIcon .'
								'. $hasTitle .'
								'. $hasBadge .'
								'. $hasCaret .'
							</a>
							'. $subMenu .'
						</div>
					';
				}
			@endphp
			<!-- BEGIN minify-button -->
			<div class="menu-item d-flex">
				<a href="javascript:;" class="app-sidebar-minify-btn ms-auto" data-toggle="app-sidebar-minify"><i class="fa fa-angle-double-left"></i></a>
			</div>
			<!-- END minify-button -->
		
		</div>
		<!-- END menu -->
	</div>
	<!-- END scrollbar -->
</div>
<div class="app-sidebar-bg"></div>
<div class="app-sidebar-mobile-backdrop"><a href="#" data-dismiss="app-sidebar-mobile" class="stretched-link"></a></div>
<!-- END #sidebar -->

