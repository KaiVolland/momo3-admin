Ext.define('MoMo.admin.view.panel.layer.MetadataController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.momo-layer-metadata',

    requires: [
        'MoMo.shared.MetadataUtil'
    ],

    /**
     *
     */
    createMetadataEntry: function(){
        var me = this;
        var xml = MoMo.shared.MetadataUtil.getInsertBlankXml();

        Ext.Ajax.request({
            url: BasiGX.util.Url.getWebProjectBaseUrl() +
                'metadata/csw.action',
            method: "POST",
            params: {
                xml: xml
            },
            defaultHeaders: BasiGX.util.CSRF.getHeader(),
            scope: this,
            success: function(response) {
                var responseObj;
                var uuid;
                if (response && response.responseText) {
                    responseObj = Ext.decode(response.responseText);
                    uuid = MoMo.shared.MetadataUtil.uuidFromXmlString(
                            responseObj.data);
                    var layer = me.getView().lookupViewModel().get('layer');
                    layer.set('metadataIdentifier', uuid);
                    layer.save();
                }
                Ext.toast('Createad MetadataSet with UUID: ' + uuid);
            },
            failure: function(){
                Ext.toast('Error: Couldn\'t create MetadaSet');
            }
        });
    },

    /**
     *
     */
    updateMetadataEntry: function(){
        var me = this;
        var viewModel = me.getView().lookupViewModel();
        var layer = viewModel.get('layer');
        var uuid = layer.get('metadataIdentifier');
        var metadata = viewModel.get('metadata');

        // TODO Handle update for layer without metadata UUID
        if(uuid && metadata){
            var xml = MoMo.shared.MetadataUtil.getUpdateXml(uuid, metadata);
            Ext.Ajax.request({
                url: BasiGX.util.Url.getWebProjectBaseUrl() +
                'metadata/csw.action',
                method: "POST",
                params: {
                    xml: xml
                },
                defaultHeaders: BasiGX.util.CSRF.getHeader(),
                scope: this,
                success: function() {
                    Ext.toast('Updated MetadataSet with UUID: ' + uuid);
                },
                failure: function(){
                    Ext.toast('Error: Couldn\'t update MetadaSet');
                }
            });
        }

    }

});
