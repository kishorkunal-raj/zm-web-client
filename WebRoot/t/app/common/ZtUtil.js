/*
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2013 Zimbra, Inc.
 *
 * The contents of this file are subject to the Zimbra Public License
 * Version 1.3 ("License"); you may not use this file except in
 * compliance with the License.  You may obtain a copy of the License at
 * http://www.zimbra.com/license.
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied.
 * ***** END LICENSE BLOCK *****
 */

/**
 * Static utility class.
 *
 * @author Conrad Damon <cdamon@zimbra.com>
 */
Ext.define('ZCS.common.ZtUtil', {
	singleton: true,
//	constructor: function() {
//		var ua = Ext.browser.userAgent;
//		alert(ua);
//		return this;
//	},

	getAppFromObject: function(obj) {

		var path = Ext.getDisplayName(obj),
			parts = path && path.split('.');

		app = (parts.length >= 3 && parts[0] === 'ZCS' && parts[2]);
		return ZCS.constant.TAB_TITLE[app] ? app : '';
	}
});

// shortcut
ZCS.util = ZCS.common.ZtUtil;