export const filterMetaData = {
    searchText: 'searchText',
    sorting: 'sorting',
    minPrice: 'minPrice',
    configurationFilter: 'configurationFilter'
};

export const propertiesHeaderList = [
    {
        keyName: 'name',
        HeaderName: 'Name',
        sorting: true,
        filter: true
    },
    {
        keyName: 'building.name',
        HeaderName: 'Building',
        sorting: true,
        filter: true
    },
    {
        keyName: 'building_towers.tower_name',
        HeaderName: 'Tower Name',
        sorting: true,
        filter: true
    },
    {
        keyName: 'property_type.name',
        HeaderName: 'Property Type',
        sorting: true,
        filter: true
    },
    {
        keyName: 'building_configuration.config.name',
        HeaderName: 'Configuration Name',
        sorting: true,
        filter: true
    },
    {
        keyName: 'min_price',
        HeaderName: 'Minimum Price',
        sorting: true,
        filter: false,
        defaultValue: 0
    },
    {
        keyName: 'bedroom',
        HeaderName: 'Total Bed Rooms',
        sorting: true,
        filter: false,
        defaultValue: 0
    },
    {
        keyName: 'bathroom',
        HeaderName: 'Total Bath Rooms',
        sorting: true,
        filter: false,
        defaultValue: 0
    },
    {
        keyName: 'half_bathroom',
        HeaderName: 'Total Half Bath Rooms',
        sorting: true,
        filter: false,
        defaultValue: 0
    }
];