'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts = [
		{
			icon : 'glyphicon-user',
			color: 'btn-success',
			total: '20,400',
			description: 'TOTAL CUSTOMERS'
		},

		{
			icon : 'glyphicon-calendar',
			color: 'btn-primary',
			total: '8,382',
			description: 'UPCOMING EVENTS'
		},

		{
			icon : 'glyphicon-record',
			color: 'btn-warning',
			total: '85,000',
			description: 'EMAILS SENT'
		},

		{
			icon : 'glyphicon-eye-open',			
			color: 'btn-warning',
			total: '260',
			description: 'FOLLOW UPS REQUIRED'
		},

		{
			icon : 'glyphicon-flag',
			color: 'btn-danger',
			total: '348',
			description: 'REFERALS TO MODERATE'
		}
		];
	}
]);