declare module 'graphable' {
	export namespace Graphable {
		export interface GraphableConfig {

			/**
			 * API Key associated with this request
			 */
			api_key: string;

			/**
			 * ID of the app
			 */
			app_id: string;

			/**
			 * ID of the project that contains this app
			 */
			project_id: string;

		}
	}

	export class Graphable {
		static Graphable: typeof Graphable

		constructor(config: Graphable.GraphableConfig)
	}

	export default Graphable
}