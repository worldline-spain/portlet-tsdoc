// Import needed polyfills before application is launched
import 'reflect-metadata';
import 'zone.js';

/**
 * This is a doc comment for "Liferay".
 */
// Declare Liferay AMD loader
declare var Liferay: any;

/**
 * Comment for method ´default()´.
 * @param target  Comment for parameter ´target´.
 * @returns       Comment for return value.
 */
// Launch application
export default function (rootId: string) {
	Liferay.Loader.require(
		'overlayprime@1.0.0/js/main',
		(main: any) => {
			main.default(rootId);
		});
}