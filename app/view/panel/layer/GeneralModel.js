Ext.define('MoMo.admin.view.panel.layer.GeneralModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.momo-layer-general',

    data: {
        name: 'MoMo.admin',

        layer: null,

        groups: null,

        style: null,

        upload: {
            fileName: null,
            fileSize: null,
            dataType: null,
            vector: {
                hasShp: false,
                hasShx: false,
                hasDbf: false,
                hasPrj: false
            },
            raster: {
                isGeoTiff: false,
                isTif: false,
                hasGeoKeys: false,
                hasTfw: false,
                hasPrj: false
            }
        }
    },

    formulas: {
        isNewLayer: function(get){
            return !get('layer.id');
        },
        title: function(get){
            return get('layer.name') || 'New Layer';
        },
        isHoverable: function(get){
            var isVector = get('layer.dataType').toLowerCase() !== "raster";
            return !get('isNewLayer') && isVector;
        }
    }

});