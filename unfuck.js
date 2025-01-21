/* 
 * Unfuck.js: Revert JavaScript code obfuscated with JSFuck
 * Author: Robert L. Ryan(1085908428@qq.com)
 * Time: 2025-01-21T18:50:00Z
 * Licensed under the GNU GPL License
 */
( function( global ) {
	global.JSFuck = global.JSFuck || [];
	JSUnFuck = function( code ) {
		return eval(code.slice(553).slice(0,-3).toString());
	}
	global.JSFuck.decode = global.JSUnFuck = JSUnFuck;
}) ( typeof window === "object" ? window : this );