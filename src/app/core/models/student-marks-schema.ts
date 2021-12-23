export interface StudentMarksResponse {
    success: string;
    message: string;
    data: Datum[];
}

export interface Datum {
    id: number;
    name: string;
    for_sale: number;
    for_rent: number;
    for_hold: number;
    locality_id: number;
    city_id: number;
    configuration_id: number;
    property_type_id: number;
    expected_price_sale: null;
    expected_price_rent: null;
    image: string;
    image_thumb: null;
    area: null;
    floor: number;
    possesion_date: null;
    bedroom: number;
    bathroom: number;
    description: string;
    quantity: number;
    created_by: number | null;
    buyer_id: null;
    status: number;
    step: number;
    building_id: number;
    building_towers_id: number;
    floor_num: number;
    currency_id: number;
    parking: number;
    parking_count: number;
    parking_for_sale: number;
    furnished: number;
    pets: number;
    floor_plan: string;
    min_price: number;
    max_price: number;
    avg_price: null;
    external_broker_id: null;
    is_blocked: number;
    property_url: string;
    is_featured: number;
    half_bathroom: number;
    kids_friendly: number;
    students_friendly: number;
    lgtb_friendly: number;
    mature_people_friendly: number;
    is_seller_linked: null;
    is_property_sold: number;
    property_price: number;
    reason: null;
    view_counter: number;
    building_configuration_id: number;
    broker_commision: string;
    total_commission: number;
    created_at: Date;
    updated_at: Date;
    lead_properties_count: number;
    max_area: string;
    is_favorite: number;
    building: Building;
    building_configuration: BuildingConfiguration;
    configuration: Config;
    property_type: PropertyType;
    creator: Creator | null;
    building_towers: BuildingTowers;
    carpet_areas: CarpetArea[];
}

export interface Building {
    id: number;
    name: BuildingName;
    starting_price: number;
    banks: any[];
    is_favorite: number;
}

export enum BuildingName {
    OlivaResidence = "Oliva Residence",
    TorreLuum = "Torre Luum",
}

export interface BuildingConfiguration {
    id: number;
    building_id: number;
    name: string;
    configuration_id: number;
    floor_map_image: string;
    carpet_area: null;
    base_price: null;
    created_by: null;
    created_at: Date;
    updated_at: Date;
    config: Config;
}

export interface Config {
    id: number;
    name_en: ConfigurationName;
    name_es: ConfigurationNameEs;
    bedroom: number;
    bathroom: number;
    half_bathroom: number;
    created_by: number;
    status: number;
    created_at: Date;
    updated_at: Date;
    name: ConfigurationName;
    is_selected: number;
}

export enum ConfigurationName {
    The2Bd2Ba = "2BD-2BA",
    The2Bd2Ba12Ba = "2BD-2BA-1/2BA",
    The3Bd3Ba = "3BD-3BA",
    The3Bd3Ba12Ba = "3BD-3BA-1/2BA",
}

export enum ConfigurationNameEs {
    The2Re2Ba = "2RE -2BA",
    The2Re2Ba12Ba = "2RE-2BA-1/2BA",
    The3Re3Ba = "3RE-3BA",
    The3Re3Ba12Ba = "3RE-3BA-1/2BA",
}

export interface BuildingTowers {
    id: number;
    building_id: number;
    tower_name: TowerName;
    num_of_floors: number;
    possession_status_id: number;
    launch_date: Date | null;
    num_of_properties: number;
    deleted_at: null;
    updated_at: Date;
    created_at: Date;
    unique_floors: number[];
}

export enum TowerName {
    Torre1 = "Torre 1",
    TorreA = "Torre A",
    TorreB = "Torre B",
    TorreC = "Torre C",
    TorreD = "Torre D",
}

export interface CarpetArea {
    id: number;
    property_id: number;
    area: string;
    price: number;
    created_at: Date;
    updated_at: Date;
}

export interface Creator {
    id: number;
    name: string;
    image: string;
}

export interface PropertyType {
    id: number;
    name_en: PropertyTypeName;
    name_es: PropertyTypeNameEs;
    created_by: number;
    status: number;
    created_at: Date;
    updated_at: Date;
    name: PropertyTypeName;
}

export enum PropertyTypeName {
    FlatDepartment = "Flat (department)",
}

export enum PropertyTypeNameEs {
    DepartamentoPiso = "Departamento (piso)",
}
