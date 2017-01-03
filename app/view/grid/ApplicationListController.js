Ext.define('MoMo.admin.view.grid.ApplicationListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.momo-applicationlist',

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
        this.redirectTo('applications/createOrEdit');
    },

    onCopyClick: function() {
        Ext.toast("Copy application");
    },

    onDeleteClick: function() {
        Ext.toast("Delete application");
    },

    handleCellClick: function(gridview, td, cellIndex, record){
        switch(cellIndex) {
            case 2: // general-settings
                this.redirectTo('applications/createOrEdit/' +
                        record.get('id'));
                break;
            case 3: //tool-settings
                this.redirectTo('applications/createOrEdit/' +
                        record.get('id'));
                break;
            case 4: //layer-settings
                this.redirectTo('applications/createOrEdit/' +
                        record.get('id'));
                break;
            case 5: //share-settings
                this.redirectTo('applications/createOrEdit/' +
                        record.get('id'));
                break;
            case 6: // shwo preview
                window.open('/momo/client?id=' + record.get('id'));
                break;
            default:
                return;
        }
    }

});
