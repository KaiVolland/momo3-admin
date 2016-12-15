Ext.define('MoMo.admin.view.grid.LayerListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.momo-layerlist',

    requires: [
        // 'MoMo.admin.view.tab.CreateOrEditApplication'
    ],

    /**
     *
     */
    setComponentsVisibility: function(panel) {
        var me = this;
        var view = me.getView();

        panel.down('button[name=create-layer-button]').setVisible(
                view.getShowCreateButton());
        panel.down('button[name=copy-layer-button]').setVisible(
                view.getShowCopyButton());
        panel.down('button[name=delete-layer-button]').setVisible(
                view.getShowDeleteButton());
        panel.down('textfield[name=filter-layer-list-field]').setVisible(
                view.getShowFilterField());

        Ext.each(panel.getColumns(), function(column) {
            switch(column.name) {
                case 'layer-settings-column':
                    column.setVisible(view.getShowLayerSettingsColumn());
                    break;
                case 'layer-style-column':
                    column.setVisible(view.getShowLayerStyleColumn());
                    break;
                case 'layer-metadata-column':
                    column.setVisible(view.getShowLayerMetadataColumn());
                    break;
                case 'layer-preview-column':
                    column.setVisible(view.getShowLayerPreviewColumn());
                    break;
                default:
                    break;
            }
        });

    },

    loadStore: function(){
        this.getView().getStore().load();
    },

    /**
     * examples/kitchensink/#filtered-tree
     */
    onFilterChange: function(filterField) {
        var grid = this.getView(),
            filters = grid.store.getFilters();

        if (filterField.value) {
            this.nameFilter = filters.add({
                id: 'nameFilter',
                property: 'name',
                value: filterField.value,
                anyMatch: true,
                caseSensitive: false
            });
        } else if (this.nameFilter) {
            filters.remove(this.nameFilter);
            this.nameFilter = null;
        }
    },

    onCreateClick: function() {
        Ext.toast("Create layer");
    },

    onCopyClick: function() {
        Ext.toast("Copy layer");
    },

    onDeleteClick: function() {
        Ext.toast("Delete layer");
    },

    handleCellClick: function(gridview, td, cellIndex){
        switch(cellIndex) {
            case 2:
                Ext.toast("Edit general-settings");
                break;
            case 3:
                Ext.toast("Edit style-settings");
                break;
            case 4:
                Ext.toast("Download layerdata");
                break;
            case 5:
                Ext.toast("Show Layer preview");
                break;
            default:
                return;
        }
    }

});
