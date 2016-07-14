Ext.define('MoMo.admin.view.tab.CreateOrEditApplication', {
    extend: 'Ext.tab.Panel',

    xtype: 'momo-create-or-edit-application',

    requires: [
        'MoMo.admin.view.tab.CreateOrEditApplicationController',
        'MoMo.admin.view.tab.CreateOrEditApplicationModel',
        'MoMo.admin.view.panel.application.General',
        'MoMo.admin.view.panel.application.Layout',
        'MoMo.admin.view.panel.application.Layer',
        'MoMo.admin.view.panel.application.StartView'
    ],

    controller: 'momo-create-or-edit-application',

    viewModel: {
        type: 'momo-create-or-edit-application'
    },

    routeId: 'createOrEdit',

    bbar: [{
        xtype: 'tbfill'
    }, {
        xtype: 'button',
        ui: 'momo',
        bind: {
            text: '{cancelBtnText}'
        },
        handler: 'onCancelClick'
    }, {
        xtype: 'button',
        ui: 'momo',
        bind: {
            text: '{saveBtnText}'
        },
        handler: 'onSaveClick'
    }],

    items: [{
        xtype: 'momo-application-general',
        tabConfig: {
            flex: 1,
            iconCls: 'fa fa-gear fa-2x',
            width: 100,
            height: 100
        }
    }, {
        xtype: 'momo-application-layout',
        tabConfig: {
            flex: 1,
            iconCls: 'fa fa-paint-brush fa-2x',
            height: 100
        }
    }, {
        xtype: 'momo-application-start-view',
        tabConfig: {
            flex: 1,
            iconCls: 'fa fa-arrows-alt fa-2x',
            height: 100
        }
    }, {
        xtype: 'momo-application-layer',
        tabConfig: {
            flex: 1,
            iconCls: 'fa fa-list fa-2x',
            height: 100
        }
    }]

});
