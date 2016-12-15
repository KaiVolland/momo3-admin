Ext.define('MoMo.admin.view.panel.application.Layer', {
    extend: 'Ext.panel.Panel',

    xtype: 'momo-application-layer',

    requires: [
        'MoMo.admin.view.panel.application.LayerController',
        'MoMo.admin.view.panel.application.LayerModel',

        'MoMo.admin.view.tree.LayerTree'
    ],

    controller: 'momo-application-layer',

    viewModel: {
        type: 'momo-application-layer'
    },

    routeId: 'layer',

    bind: {
        title: '{title}'
    },

    padding: 20,

    layout: 'fit',

    items: [{
        xtype: 'fieldset',
        bind: {
            title: '{title}'
        },
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'momo-layerlist',
            scrollable: 'y',
            flex: 1,
            bind: {
                title: '{availableLayersGridTitle}'
            },
            viewConfig: {
                plugins: {
                    ptype: 'gridviewdragdrop',
                    ddGroup: 'layertree-dd-group',
                    enableDrop: false
                }
            },
            selModel: {
                selType: 'rowmodel',
                mode: 'MULTI'
            },
            showCreateButton: false,
            showCopyButton: false,
            showDeleteButton: false,
            showLayerSettingsColumn: false,
            showLayerStyleColumn: false
        }, {
            xtype: 'displayfield',
            width: 15
        }, {
            xtype: 'momo-layertree',
            scrollable: 'y',
            flex: 1
        }]
    }]

});
